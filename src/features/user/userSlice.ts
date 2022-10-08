import { createSlice } from "@reduxjs/toolkit";

export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

const initialState: User = {
  image: {
    png: "./images/avatars/image-juliusomo.png",
    webp: "./images/avatars/image-juliusomo.webp",
  },
  username: "juliusomo",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
