import React, {useState} from "react";

function CreateArea(props) {

  return (
    <div>
      <form>
        <input onChange = {props.handleChange} name="title" placeholder="Title" value={props.value.title} />
        <textarea onChange = {props.handleChange} name="content" placeholder="Take a note..." rows="3" value={props.value.content} />
        <button onClick= {props.addToNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;