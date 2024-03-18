import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
    data : null,
    iserror : false
}

export const fetchdata = createAsyncThunk('fetch', async () =>
{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = response.json();
    console.log(data);  
    return data
})

 const testSlice = createSlice( {
    name : "test",
    initialState,
    reducers : {

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchdata.pending,(state)=>{
            state.isLoading = true;
            state.data = false;
        })
        builder.addCase(fetchdata.fulfilled,(state,action)=>{
           state.isLoading = false;
           state.data = action.payload;
           console.log(state.data,"acevv");
        })
        builder.addCase(fetchdata.rejected,(state,action)=>{
            state.isLoading = false;
            state.iserror = true;
         })

    }
}
)

export  default testSlice.reducer;

