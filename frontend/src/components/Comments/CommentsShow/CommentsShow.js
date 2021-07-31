import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Comment from "../Comment";
import styles from "./comments-show.module.css";
import { createComment } from "../../../store/comment";

const CommentsShow = ({ trackId }) => {
  const dispatch = useDispatch();
  const authorId = useSelector((state) => state.session?.user?.id);
  const comments = useSelector((state) =>
    Object.values(state.comments?.byId)?.filter(
      (comment) => comment.trackId === parseInt(trackId)
    )
  );
  const [processComment, setProcessComment] = useState(false);
  const [commentContent, setCommentContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment({ authorId, trackId, content: commentContent }));
    setCommentContent("");
  };

  const renderedComments = comments.map((comment) => (
    <Comment comment={comment} key={comment.id} />
  ));

  return authorId ? (
    <div className={styles["comments-container"]}>
      <form className={styles["create-comment"]} onSubmit={handleSubmit}>
        <textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          onInput={() => setProcessComment(true)}
          placeholder="Add a comment"
          className={styles["create-comment__input"]}
        />
        <button className={styles.submit} hidden={!processComment}>
          Submit
        </button>
      </form>
      <div className={styles.comments}>{renderedComments}</div>
    </div>
  ) : (
    <div className={styles["comments-container"]}>
      Sign in to start commenting
      <div className={styles.comments}>{renderedComments}</div>{" "}
    </div>
  );
};

export default CommentsShow;
