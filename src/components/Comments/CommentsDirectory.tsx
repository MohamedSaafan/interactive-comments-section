import { useAppSelector } from "../../app/hooks";
import AddComment from "./AddComment";
import Comment from "./Comment";

interface Props {}

const CommentsDirectory: React.FC<Props> = (props) => {
  const { comments } = useAppSelector((state) => state);
  return (
    <div>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
      <AddComment />
    </div>
  );
};
export default CommentsDirectory;
