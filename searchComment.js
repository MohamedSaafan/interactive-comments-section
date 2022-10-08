const search = (id, comments) => {
  if (comments.length === 0) return;
  // search in the current root
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].id === id) return comments[i];
    if (comments[i].replies) {
      const comment = search(id, comments[i].replies);
      if (Array.isArray(comment)) {
        search(id, comment);
      } else if (!comment) {
        continue;
      }
      return comment;
    }
  }
};
