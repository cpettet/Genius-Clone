import { useEffect, useState } from "react";
import CommentButtons from "../CommentButtons";
import styles from "./Comment.module.css";
import getElapsedTime from "../../../utils/getElapsedTime";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../store/user";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [editSession, setEditSession] = useState(false);
  const commentDateTime = new Date(comment?.createdAt);
  const currentDateTime = new Date();
  const commentAuthor = useSelector(
    (state) => state.users.byId[comment.authorId]?.username
  );

  console.log("Current edit session:", editSession)

  useEffect(() => dispatch(getUser(comment.authorId)), [dispatch, comment]);

  return (
    <div className={styles.comment}>
      <div className={styles.comment__header}>
        <div className={styles["comment__header__profile-card"]}>
          {commentAuthor}
        </div>
        <div className={styles.comment__header__date}>
          {getElapsedTime(commentDateTime, currentDateTime)}
        </div>
      </div>
      <div className={styles.comment__body}>{comment.content}</div>
      <div className={styles.comment__buttons}>
        <CommentButtons authorId={comment.authorId} setEditSession={setEditSession} />
      </div>
    </div>
  );
};

export default Comment;
