import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import style from "./AnnotationShow.module.css";

export default function AnnotationShow() {
    const annoId = useParams().annoId;
    const annotations = useSelector(state => state.annotations.byId);
    console.log("Annotation id", annoId)

    return (
        <div>
            <h3>This is an annotation</h3>
            <p>{annoId}</p>
        </div>
    )
}