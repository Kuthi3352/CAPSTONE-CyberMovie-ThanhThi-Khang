import z from "zod";

export const RegisterSchema = z.object({
  taiKhoan: z
    .string()
    .nonempty("Vui lòng nhập tài khoản")
    .min(3, "Nhập ít nhất 3 ký tự"),
  matKhau: z
    .string()
    .nonempty("Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu ít nhất 8 ký tự"),
  email: z
    .string()
    .nonempty("Vui lòng nhập email")
    .email("Vui lòng nhập đúng định dạng email"),
  hoTen: z.string().nonempty("vui lòng nhập họ và tên"),
  soDt: z
    .string()
    .nonempty("Vui lòng nhập số điện thoại")
    .min(10, "Số điện thoại ít nhất 10 ký tự"),
  maNhom: z.string().nonempty("Vui lòng nhập mã nhóm"),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
