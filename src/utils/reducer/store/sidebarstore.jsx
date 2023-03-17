import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../sidebarreducer";
export default configureStore({
    reducer: {
        sidebar:sidebarReducer,
    }
})