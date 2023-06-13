import React from "react";

function Note(props) {

  function handleClick(){
    props.deleteNotes(props.id)
  }

  return (
    <div className="note">
      <h1>{props.value.title}</h1>
      <p>{props.value.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
