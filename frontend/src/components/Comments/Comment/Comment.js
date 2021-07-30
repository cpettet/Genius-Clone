import styles from "./Comment.module.css";
import getElapsedTime from "../../../utils/getElapsedTime";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../../store/user";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const commentDate = new Date(comment?.createdAt);
  const currentDate = new Date();
  const commentAuthor = useSelector(
    (state) => state.users.byId[comment.authorId]?.username
  );

  useEffect(() => dispatch(getUser(comment.authorId)), [dispatch, comment]);

  return (
    <div className={styles.comment}>
      <div className={styles.comment__header}>
        <div className={styles["comment__header__profile-card"]}>
          {commentAuthor}
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
