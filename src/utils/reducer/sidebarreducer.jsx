import { createSlice } from "@reduxjs/toolkit";

export const sidebarReducer = createSlice({
    name:"sidebar",
    initialState:{
        isOpen:false,
    },
 
    reducers:{
        hideSidebar:(state)=>{
            state.isOpen=false;
        },
        showSidebar:(state)=>{
            state.isOpen=true;
        }
    }
})
export const {hideSidebar, showSidebar} = sidebarReducer.actions;
export default sidebarReducer.reducer;