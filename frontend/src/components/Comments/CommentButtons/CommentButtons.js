import { useSelector } from "react-redux";
import styles from "./CommentButtons.module.css";

function CommentButtons({ authorId, setEditSession }) {
  const userId = useSelector((state) => state.session.user.id);

  const onLike = (e) => {
    e.preventDefault();
    console.log("Waiting on likes/dislikes functionality.");
  };

  const onDislike = (e) => {
    e.preventDefault();
    console.log("Waiting on likes/dislikes functionality.");
  };

  return (
    <>
      {authorId === userId ? (
        <>
          <button onClick={() => setEditSession(previous => !previous)}>Edit</button>
          <button>Delete</button>
        </>
      ) : (
        <>
          <button onClick={onLike}>Like</button>
          <button onClick={onDislike}>Dislike</button>
        </>
      )}
    </>
  );
}

export default CommentButtons;
