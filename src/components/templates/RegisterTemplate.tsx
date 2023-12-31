import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "schemas";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { QuanLyNguoiDungServices } from "services";
import { PATH } from "constant";


const RegisterTemplate = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (values) => {
    QuanLyNguoiDungServices.register(values)
    toast.success("Đăng ký thành công");
    setTimeout(() => navigate(PATH.login), 1500)
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
        id="hoTen"
        name="hoTen"
        placeholder="Nhập họ và tên"
        label="Họ và tên"
        register={register}
        error={errors?.hoTen?.message}
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
      <Input
        id="email"
        name="email"
        placeholder="Email"
        label="Email"
        register={register}
        error={errors?.email?.message}
      ></Input>
      <Input
        id="soDt"
        name="soDt"
        placeholder="Số điện thoại"
        label="Số điện thoại"
        register={register}
        error={errors?.soDt?.message}
      ></Input>
      <Input
        id="maNhom"
        name="maNhom"
        placeholder="Mã nhóm"
        label="Mã nhóm"
        register={register}
        error={errors?.maNhom?.message}
      ></Input>
      <Button className="mt-20 w-full !bg-red-500 rounded p-3 !text-white !h-[48px]" htmlType="submit">
        Đăng ký
      </Button>
    </form>
  );
};

export default RegisterTemplate;
