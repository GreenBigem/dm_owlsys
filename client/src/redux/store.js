import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import taskSlice from "./features/task/taskSlice";
import contractorSlice from "./features/contractor/contractorSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        task: taskSlice,
        contractor: contractorSlice

    }
})