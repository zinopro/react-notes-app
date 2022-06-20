import React, { useState } from "react";

import deleteIcon from "../assets/delete.svg";
import saveIcon from "../assets/iconmonstr-save-14.svg"

function Notes({note, updateText, deleteNote}) {
  const [textValue, setTextValue] = useState({text: "", id: ""});
  const updateNote = (text, id) => {
    setTextValue(()=> ({text, id}));
  };

  const saveNote = () => {
    updateText(textValue);
  }

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <textarea className="note_textarea"
        defaultValue={note.text}
        onChange={(evt) => updateNote(evt.target.value, note.id)}
      />
      <div className="note_menu_items">
        <p>Created:{" "}
        {new Date(note.lastModified).toLocaleDateString('en-US')}</p>
        <img src={saveIcon} alt="save note" onClick={() => saveNote(note.id)} />
        <img src={deleteIcon} alt="delete note" onClick={() => deleteNote(note.id)} />
      </div>
    </div>
  );
}

export default Notes;