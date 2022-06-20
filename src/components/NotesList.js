import React from "react";
import TopNav from "./TopNav";
import Notes from "./Notes";

function NotesList({notes, newNote, deleteNote, updateText}) {
  return (
    <div className="note-container">
      <div className="header">
        <TopNav addNote={() => newNote("#fff2ab")} />
        <h2>New Note</h2>
      </div>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Notes key={item.id}
              note={item}
              deleteNote={deleteNote}
              updateText={updateText}
            />
          ))
        ) : (
          <h3>Your Note List is Empty</h3>
        )}
      </div>
    </div>
  );
}

export default NotesList;
