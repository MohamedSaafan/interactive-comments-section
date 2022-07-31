import CommentCard from "../CommentCard";
import Styles from "./comment.module.css";
import { Comment } from "../../../types";
interface Props {
  comment: Comment;
}
const CommentComponent: React.FC<Props> = (props) => {
  console.log(props, "from props");
  return (
    <div className={Styles.commentContainer}>
      <CommentCard comment={props.comment} />
    </div>
  );
};
export default CommentComponent;
