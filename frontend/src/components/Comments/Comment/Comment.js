import { useEffect, useState } from "react";
import CommentButtons from "../CommentButtons";
import styles from "./Comment.module.css";
import getElapsedTime from "../../../utils/getElapsedTime";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../store/user";
import { updateComment } from "../../../store/comment";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = useState(comment.content);
  const [editSession, setEditSession] = useState(false);
  const commentDateTime = new Date(comment?.createdAt);
  const currentDateTime = new Date();
  const commentAuthor = useSelector(
    (state) => state.users.byId[comment.authorId]?.username
  );

  const onEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateComment({ content: commentContent, commentId: comment.id }));
    setCommentContent("");
    setEditSession(false);
  };

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
      <div className={styles.comment__body}>
        {editSession ? (
          <>
            <textarea
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              className={styles["comment__body__input"]}
            />
            <button onClick={onEditSubmit}>Submit Changes</button>
          </>
        ) : (
          comment.content
        )}
      </div>
      <div className={styles.comment__buttons}>
        <CommentButtons
          authorId={comment.authorId}
          commentId={comment.id}
          setEditSession={setEditSession}
        />
      </div>
    </div>
  );
};

export default Comment;
