import { useSelector, useDispatch } from "react-redux";
import styles from "./CommentButtons.module.css";
import { deleteComment } from "../../../store/comment";

function CommentButtons({ authorId, commentId, setEditSession }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session?.user?.id);

  const onLike = (e) => {
    e.preventDefault();
    console.log("Waiting on likes/dislikes functionality.");
  };

  const onDislike = (e) => {
    e.preventDefault();
    console.log("Waiting on likes/dislikes functionality.");
  };

  const onDelete = e => {
    e.preventDefault();
    dispatch(deleteComment(parseInt(commentId)))
  }

  return (
    <>
      {authorId === userId ? (
        <>
          <button onClick={() => setEditSession(previous => !previous)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      ) : userId && (
        <>
          <button onClick={onLike}>Like</button>
          <button onClick={onDislike}>Dislike</button>
        </>
      )}
    </>
  );
}

export default CommentButtons;
