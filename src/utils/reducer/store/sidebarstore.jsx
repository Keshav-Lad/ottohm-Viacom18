import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../sidebarreducer";
import notificationreducer from "../notificationreducer";

export default configureStore({
    reducer: {
        sidebar:sidebarReducer,
        notification:notificationreducer
    }
})