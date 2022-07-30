interface Props {}

const CommentsDirectory: React.FC<Props> = (props) => {
  return (
    <div>
      <form>
        <h2>Add Comment</h2>
        <textarea placeholder="Add your comment..."></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};
export default CommentsDirectory;
