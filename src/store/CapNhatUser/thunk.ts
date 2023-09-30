import { createAsyncThunk } from "@reduxjs/toolkit";
import { AccountSchemaType } from "schemas";
import { capNhatUser } from "services";
import { checkLoginThunk } from "store/QuanLyNguoiDung/thunk";

export const UpdateUserThunk  = createAsyncThunk(
    'capNhatUser/UpdateUser',
    async (payload: AccountSchemaType, { rejectWithValue, dispatch }) => {
        try {
            const data = await capNhatUser.getUpdateUser(payload)
            dispatch(checkLoginThunk())
            
            // console.log('data', data);
            
            return data.data.content
           
               
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }

)