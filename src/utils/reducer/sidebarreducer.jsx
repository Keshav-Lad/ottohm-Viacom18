import { createSlice } from "@reduxjs/toolkit";

export const sidebarReducer = createSlice({
    name:"sidebar",
    initialState:{
        isOpen:false,
    },
 
    reducers:{
        hideSidebar:(state,action)=>{
            state.isOpen=false;
            console.log("Helloo from hide")
        },
        showSidebar:(state,action)=>{
            state.isOpen=true;
            console.log("Helloo from show")
        }
    }
})
export const {hideSidebar, showSidebar} = sidebarReducer.actions;
export default sidebarReducer.reducer;