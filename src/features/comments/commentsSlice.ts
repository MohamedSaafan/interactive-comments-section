import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { commentsData } from "../../commentsData";
import { Comment } from "../../types";

const comments: Comment[] = commentsData.comments;
const sortComments = (comments: Comment[]) => {
  return comments.sort((comment1, comment2) => comment1.id - comment2.id);
};

const findComment: (id: number, comments: Comment[]) => Comment | undefined = (
  id,
  comments
) => {
  if (comments.length === 0) return;
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].id === id) return comments[i];
    if (comments[i].replies) {
      const comment = findComment(id, comments[i].replies!);
      if (Array.isArray(comment)) {
        findComment(id, comment);
      } else if (!comment) {
        continue;
      }
      return comment;
    }
  }
};
const commentsSlice = createSlice({
  name: "comments",
  initialState: comments,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.push(action.payload);
    },
    repleyToComment: (
      state,
      action: PayloadAction<{ comment: Comment; targetCommentID: number }>
    ) => {
      const targetComment = state.find(
        (comment) => (comment.id = action.payload.targetCommentID)
      );
      targetComment?.replies?.push(action.payload.comment);
    },
    incrementScore: (state, action: PayloadAction<number>) => {
      // handling the case it is in the root comments only
      // const comment = state.find((comment) => comment.id === action.payload);
      // console.log(comment, "from comment");
      // if (comment) {
      //   comment.score++;
      //   state.filter((comment) => comment.id === action.payload);
      //   sortComments(state);
      // }
      const comment = findComment(action.payload, state);
      if (comment) {
        comment.score++;
        state.filter((comment) => comment.id === action.payload);
        sortComments(state);
      }
    },
    decrementScore: (state, action: PayloadAction<number>) => {
      // const comment = state.find((comment) => comment.id === action.payload);
      // console.log(comment, "from comment");
      // if (comment) {
      //   comment.score--;
      //   state.filter((comment) => comment.id === action.payload);
      //   sortComments(state);
      // }
      const comment = findComment(action.payload, state);
      if (comment) {
        comment.score--;
        state.filter((comment) => comment.id === action.payload);
        sortComments(state);
      }
    },
  },
});

export const { addComment, repleyToComment, incrementScore, decrementScore } =
  commentsSlice.actions;
export default commentsSlice.reducer;
