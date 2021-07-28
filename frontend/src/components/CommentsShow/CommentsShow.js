import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./comments-show.module.css";
import { createComment } from "../../store/comment";

const CommentsShow = ({ trackId }) => {
  const dispatch = useDispatch();
  const authorId = useSelector((state) => state.session?.user?.id);
  const comments = useSelector((state) => state.comments?.byId?.filter(comment => comment.trackId === trackId));
  const [processComment, setProcessComment] = useState(false);
  const [commentContent, setCommentContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment({ authorId, trackId, content: commentContent }));
    setCommentContent("");
  };

  return authorId ? (
    <div className={styles["comments-container"]}>
      <div className={styles["new-comment"]}>
        <form onSubmit={handleSubmit}>
          <input
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            onInput={() => setProcessComment(true)}
            placeholder="Add a comment"
          />
          <button className={styles.submit} hidden={!processComment}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.comments}></div>
    </div>
  ) : (
    <div className={styles["comments-container"]}>
      Sign in to start commenting
    </div>
  );
};

export default CommentsShow;
