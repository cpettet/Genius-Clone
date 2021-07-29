import styles from "./Comment.module.css";

const Comment = ({comment}) => {
  let commentDate = new Date(comment?.createdAt);
  console.log("Date for comment:", commentDate)

  return (
    <div className={styles.comment}>
      <div className={styles.comment__header}>
        <div className={styles["comment__header__profile-card"]}>
          Profile name and avatar
          {comment.authorId}
        </div>
        <div className={styles.comment__header__date}>
          Posted x years, months, days, etc. ago
          {comment.createdAt}
        </div>
      </div>
      <div className={styles.comment__body}>
        This is where my content would go, if I had content.
        {comment.content}
      </div>
      <div className={styles.comment__buttons}>
        Upvote and downvote buttons OR Edit and Delete buttons
      </div>
    </div>
  );
};

export default Comment;
