import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { getUser } from "../../store/user";
import { useParams } from "react-router";
import style from "./AnnotationShow.module.css";

export default function AnnotationShow() {
  const dispatch = useDispatch();
  const location = useLocation();
  const yCoordinate = location.yCoordinate;
  console.log("y coord:", yCoordinate)
  const annoId = useParams().annoId;
  const annotation = useSelector((state) => state.annotations.byId[annoId]);
  const author = useSelector((state) => state.users.byId[annotation?.authorId]);
  const [showContributor, setShowContributor] = useState(false);

  useEffect(() => {
    dispatch(getUser(annotation?.authorId));
  }, [dispatch, annotation]);

  const contributorContainer = (
    <h5
      hidden={!showContributor}
      className={style.contributor}
      onClick={() => setShowContributor((prev) => !prev)}
    >
      Created by {author?.username} on {annotation?.createdAt}
    </h5>
  );

  return (
    <div className={style.annotation} style={{top: yCoordinate - 465}}>
      <h5>
        Folk Genius Annotation{" "}
        <span 
          onClick={() => setShowContributor((prev) => !prev)}
          className={style.contributor__span}
        >
          1 contributor
        </span>
      </h5>
      {contributorContainer}
      <p>{annotation?.content}</p>
    </div>
  );
}
