import CommentCard from "../CommentCard";
import Styles from "./comment.module.scss";
import { Comment } from "../../../types";
interface Props {
  comment: Comment;
}
const CommentComponent: React.FC<Props> = (props) => {
  console.log(props, "from props");
  return (
    <div className={Styles.commentContainer}>
      <CommentCard comment={props.comment} />
      <div className={Styles.comment__replies}>
        {props.comment.replies?.length ? (
          <span className={Styles.comment__lineformatter}></span>
        ) : (
          ""
        )}
        {props.comment.replies?.map((comment) => {
          return (
            <div className={Styles.comment__nestingwrapper} key={comment.id}>
              <span className={Styles.comment__line}> </span>
              <CommentCard comment={comment} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CommentComponent;
