import styles from "./Comment.module.css";
import getElapsedTime from "../../../utils/getElapsedTime";

const Comment = ({ comment }) => {
  const commentDate = new Date(comment?.createdAt);
  const currentDate = new Date();

  return (
    <div className={styles.comment}>
      <div className={styles.comment__header}>
        <div className={styles["comment__header__profile-card"]}>
          Profile name and avatar
          {comment.authorId}
        </div>
        <div className={styles.comment__header__date}>
          {getElapsedTime(commentDate, currentDate)}
        </div>
      </div>
      <div className={styles.comment__body}>{comment.content}</div>
      <div className={styles.comment__buttons}>
        Upvote and downvote buttons OR Edit and Delete buttons
      </div>
    </div>
  );
};

export default Comment;
