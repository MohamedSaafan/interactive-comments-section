import { useAppSelector } from "../../app/hooks";
import Comment from "./Comment";

interface Props {}

const CommentsDirectory: React.FC<Props> = (props) => {
  const { comments } = useAppSelector((state) => state);
  return (
    <div>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
      <form>
        <h2>Add Comment</h2>
        <textarea placeholder="Add your comment..."></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};
export default CommentsDirectory;
