import {createSlice} from '@reduxjs/toolkit'

export const notificationreducer = createSlice({

    name: "notification",
    initialState:{
        message:[],
        notificationCounter:0,
    },
    reducers:{
        newMessage:(state,action)=>{
            state.message.push(action.payload)
        },
        refreshMessage:(state)=>{
            state.message = [];
        },
        increaseNotificationCounter:(state)=>{
            state.notificationCounter = state.notificationCounter += 1;
        },
        resetCounter:(state)=>{
            state.notificationCounter = 0;
        }
    }
}) 
export const {newMessage, refreshMessage, increaseNotificationCounter, resetCounter} = notificationreducer.actions;
export default notificationreducer.reducer;
  

