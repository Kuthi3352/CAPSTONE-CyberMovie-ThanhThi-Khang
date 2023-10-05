
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AccountSchema, AccountSchemaType } from "schemas";
import { useAppDispatch } from "store";
import { UpdateUserThunk } from "store/CapNhatUser/thunk";

export const AccountInfo = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AccountSchemaType>({
    resolver: zodResolver(AccountSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AccountSchemaType> = (value) => {
    dispatch(UpdateUserThunk(value));
  };

  useEffect(() => {
    reset({
      ...user,
      soDt: user?.soDT,
    });
  }, [user, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ms-28 w-[50%]">
      <Input
        className="[&>label]:text-black short-input [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-300 [&>input]:text-black"
        label="Tài khoản"
        name="taiKhoan"
        error={errors?.taiKhoan?.message}
        register={register}
      />
      <Input
        className="[&>label]:text-black short-input [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-300 [&>input]:text-black"
        label="Mật Khẩu"
        name="matKhau"
        error={errors?.matKhau?.message}
        register={register}
      />
      <Input
        className="[&>label]:text-black short-input [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-300 [&>input]:text-black"
        label="Họ và tên"
        name="hoTen"
        error={errors?.hoTen?.message}
        register={register}
      />
      <Input
        className="[&>label]:text-black short-input [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-300 [&>input]:text-black"
        label="Email"
        name="email"
        error={errors?.email?.message}
        register={register}
      />
      <Input
        className="[&>label]:text-black short-input [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-300 [&>input]:text-black"
        label="Số điện thoại"
        name="soDt"
        error={errors?.soDt?.message}
        register={register}
      />
      <Input
        className="[&>label]:text-black short-input [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-300 [&>input]:text-black"
        label="Mã nhóm"
        name="maNhom"
        error={errors?.maNhom?.message}
        register={register}
      />
      <Input
        className="[&>label]:text-black short-input [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-300 [&>input]:text-black"
        label="Mã loại người dùng"
        name="maLoaiNguoiDung"
        error={errors?.maLoaiNguoiDung?.message}
        register={register}
      />
      <div className="w-[40%] text-center mt-20">
        <Button htmlType="submit" type="primary" className="!h-[46px]">
          Hoàn thành chỉnh sửa
        </Button>
      </div>
    </form>
  );
};

