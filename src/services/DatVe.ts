import { apiInstance } from "constant";
import { DatVeType } from "types/DatVeType";


const api = apiInstance({
    baseURL: import.meta.env.VITE_DAT_VE_API,
});

export const DatVeServices = {
    datVe: (payload:DatVeType) => api.post<ApiResponse<string>>("/DatVe",payload)
}
