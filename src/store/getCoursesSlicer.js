import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getCourses = createAsyncThunk('getCourses',
async(token)=>{
  const tok = `Bearer ${token}`
  const requestOptions = {
    method: "GET",
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': tok
      }
  };

  const request = await fetch("https://sanawy-server.vercel.app/api/courses/", requestOptions)
    .then((response) => response.json())
    .then(result => {
        return result
    })

    return request
});

const getCourseSlicer = createSlice({
  name: "getCourses",
  initialState: {
    loading: false,
    courses: null,
    error: null,
  },
  extraReducers : (builder)=>{
    builder.addCase(getCourses.pending,(state)=>{
        state.loading = true
        state.courses = null
        state.error = null
    });
    builder.addCase(getCourses.fulfilled,(state,action)=>{
     
        
      if (action.payload.message === 'fetched successfully') {
        state.loading = false
        state.courses = action.payload.data
        state.error = null
      }else{
        state.loading = false
        state.courses = null
        state.error = action.payload.message
      }

    });
    builder.addCase(getCourses.rejected,(state,action)=>{
        state.loading = false
        state.courses = null
        state.error = action.error.message
    });


  }
});

export default getCourseSlicer.reducer;
