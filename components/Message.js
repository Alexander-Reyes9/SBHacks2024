import React from "react";

export default function Message(props) {
    return <p><b>{props.user}: </b>{props.content}</p>
}