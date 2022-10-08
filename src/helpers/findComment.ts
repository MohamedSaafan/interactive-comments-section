import { Comment } from "../types";
export const findComment: (
  id: number,
  comments: Comment[]
) => Comment | undefined = (id, comments) => {
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
