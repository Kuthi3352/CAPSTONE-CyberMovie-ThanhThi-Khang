import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginSchema, LoginSchemaType } from "schemas";
import { RootState, useAppDispatch } from "store";
import { loginThunk } from "store/QuanLyNguoiDung";
import { handleError } from "utils";
import "react-toastify/dist/ReactToastify.css";

const LoginTemplate = () => {
  const { currentPage } = useSelector(
    (state: RootState) => state.QuanLyNguoiDung
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });
  const { isFetchingLogin } = useSelector(
    (state: RootState) => state.QuanLyNguoiDung
  );
  const onSubmit: SubmitHandler<LoginSchemaType> = (values) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        toast.success("Đăng nhập thành công");
        if (currentPage) {
          navigate(currentPage);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        handleError(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="taiKhoan"
        name="taiKhoan"
        placeholder="Nhập tài khoản"
        label="Tài Khoản"
        register={register}
        error={errors?.taiKhoan?.message}
      ></Input>
      <Input
        id="matKhau"
        name="matKhau"
        placeholder="Password"
        label="Mật Khẩu"
        type="password"
        register={register}
        error={errors?.matKhau?.message}
      ></Input>
      <Button
        className="!w-full !text-white !mt-20 !h-[48px] "
        type="primary"
        htmlType="submit"
        danger
        loading={isFetchingLogin}
      >
        Đăng nhập
      </Button>
    </form>
  );
};

export default LoginTemplate;
