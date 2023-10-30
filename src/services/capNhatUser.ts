import { apiInstance } from "constant";
import { AccountSchemaType } from "schemas";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_UPDATE_USER_API,
});
export const capNhatUser = {
  getUpdateUser: (data: AccountSchemaType) =>
    api.put("/CapNhatThongTinNguoiDung", data),
};
