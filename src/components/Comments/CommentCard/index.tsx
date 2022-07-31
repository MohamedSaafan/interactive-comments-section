import Styles from "./commentCard.module.css";
import { faker } from "@faker-js/faker";
import { Comment } from "../../../types";
import { commentsData } from "../../../commentsData";
import { useAppDispatch } from "../../../app/hooks";
import avatar from "../../../images/avatars/image-amyrobson.png";
import {
  decrementScore,
  incrementScore,
} from "../../../features/comments/commentsSlice";
interface Props {
  comment: Comment;
}
const Reply = (
  <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
      fill="#5357B6"
    />
  </svg>
);

const CommentCard: React.FC<Props> = (props) => {
  const { comment } = props;
  const dispatch = useAppDispatch();
  const handleIncrementScore = () => {
    dispatch(incrementScore(comment.id));
  };
  const handleDecrementScore = () => {
    dispatch(decrementScore(comment.id));
  };
  return (
    <div className={Styles.comment}>
      <div className={Styles.comment__header}>
        <div className={Styles.comment__avatar}>
          <img
            src={avatar}
            title={props.comment.user.username}
            alt={comment.user.username}
          />
        </div>
        <div className={Styles.comment__author}>{comment.user.username}d</div>
        <time className={Styles.comment__time}>{comment.createdAt}</time>
      </div>
      <div className={Styles.comment__body}>
        <p className={Styles.comment__description}>{comment.content}</p>
      </div>
      <div className={Styles.comment__footer}>
        <div className={Styles.comment__votes}>
          <button
            onClick={handleIncrementScore}
            className={`${Styles.comment__votes_button} ${Styles.comment__votes_buttonPlus}`}
          >
            +
          </button>
          <button
            className={`${Styles.comment__votes_button} ${Styles.comment__votes_buttonNumber}`}
          >
            {comment.score}
          </button>
          <button
            onClick={handleDecrementScore}
            className={`${Styles.comment__votes_button} ${Styles.comment__votes_buttonMinus}`}
          >
            -
          </button>
        </div>

        <button className={Styles.comment__reply}>
          <span className={Styles.comment__reply_icon}>{Reply}</span> Reply{" "}
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
