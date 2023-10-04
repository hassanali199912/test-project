import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    // fetch("https://sanawy-server.vercel.app/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: userCredentials.username,
    //     password: userCredentials.password,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     localStorage.setItem("user", result);
    //     return result;
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //     return error;
    //   });

    const request = await fetch("https://sanawy-server.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userCredentials.username,
        password: userCredentials.password,
      }),
    }).then((response) => response.json())
      .then((result) => {
        localStorage.setItem("user", result);
        return result;
      });

    const response = request;
    localStorage.setItem('user',JSON. stringify(response)  );
      return response;



    
    // let config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "https://sanawy-server.vercel.app/api/auth/login",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: JSON.stringify({
    //     username: userCredentials.username,
    //     password: userCredentials.password,
    //   })
    // };

    // const request = await axios.request(config)
    // const response = request.data;
    // localStorage.setItem('user', response);
    //   console.log(response);
    //   return response;

    //   const axios = require('axios');
    //   let config = {
    //     method: 'post',
    //     url: 'https://sanawy-server.vercel.app/api/auth/login',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     data : JSON.stringify({
    //         email : userCredentials.email,
    //         password : userCredentials.password})
    //   };

    //   axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
const userSlicer = createSlice({
  name: "userdata",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.message === "logged successfully") {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        }else{
            state.loading = false;
            state.user = null;
            state.error = action.payload.message;
        }
     
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload.message;
    });
  },
});
export default userSlicer.reducer;
