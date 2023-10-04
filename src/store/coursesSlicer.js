import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addCourse = createAsyncThunk("addCourse", async (courseData) => {
      const tok = `Bearer ${courseData.token}`
  const requestOptions = {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': tok
      },
    body:JSON.stringify({
        course_name: courseData.courseName,
        course_grade: courseData.grade,
      })
  };

  const request = await  fetch("https://sanawy-server.vercel.app/api/courses/create", requestOptions)
    .then((response) => response.json())
    .then(result => {
        return result
    })

   
return request;

});

const courseSlicer = createSlice({
  name: "createCourses",
  initialState: {
    loading: false,
    course: null,
    error: null,
  },
  extraReducers : (builder)=>{
    builder.addCase(addCourse.pending,(state)=>{
        state.loading = true
        state.course = null
        state.error = null
    });
    builder.addCase(addCourse.fulfilled,(state,action)=>{
        
      if (action.payload.message === 'course created successfully') {
        state.loading = false
        state.course = action.payload
        state.error = null
      }else{
        state.loading = false
        state.course = null
        state.error = action.payload.message
      }

    });
    builder.addCase(addCourse.rejected,(state,action)=>{
        state.loading = false
        state.course = null
        state.error = action.error.message
    });


  }
});

export default courseSlicer.reducer;
