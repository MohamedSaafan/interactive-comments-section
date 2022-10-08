import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import commentsReducer from "../features/comments/commentsSlice";
import counterReducer from "../features/counter/counterSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    comments: commentsReducer,
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
