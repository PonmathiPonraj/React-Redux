import { configureStore ,createSlice} from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter:true,
};

const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }
    }
})

const intialAuthState={
    isAuthenthicated:false,
}
const authSlice=createSlice({
    name:'authentication',
    initialState:intialAuthState,
    reducers:{
        isLogin(state){
            state.isAuthenthicated=true;
        },
        isLogout(state){
            state.isAuthenthicated=false;
        }
    }
})
  
const store = configureStore({
    reducer: {
        counter:counterSlice.reducer ,
        auth:authSlice.reducer
    }
});
  
export const authAction=authSlice.actions;
export const counterAction=counterSlice.actions;
export default store;