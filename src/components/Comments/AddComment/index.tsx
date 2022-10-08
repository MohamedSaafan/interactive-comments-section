import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addComment } from "../../../features/comments/commentsSlice";
import Styles from "./AddComment.module.scss";
interface Props {}

const AddComment: React.FC<Props> = (props) => {
  const comments = useAppSelector((state) => state.comments);
  const currentUser = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [commentText, setCommentText] = useState("");
  const handleCommentTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentText(e.target.value);
  };
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addComment({
        user: currentUser,
        score: 0,
        id: Math.random(),
        content: commentText,
        replies: [],
        createdAt: "Just now",
      })
    );
  };
  return (
    <form
      onSubmit={handleAddComment}
      className={`container ${Styles.addcomment}`}
    >
      <textarea
        placeholder="Add your comment..."
        autoFocus
        className={Styles.addcomment__textbox}
        value={commentText}
        onChange={handleCommentTextChange}
      ></textarea>
      <div className={Styles.addcomment__footer}>
        <div className={Styles.addcomment__avatar}>avatar</div>
        <button type="submit" className={Styles.addcomment__submitBtn}>
          SEND
        </button>
      </div>
    </form>
  );
};

export default AddComment;
