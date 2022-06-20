import React, { useState, useEffect } from "react";

import NotesList from "./components/NotesList";
import "./App.css";


const notesUrl = "http://localhost:4002/notes";

function App() {
  const [notes, setNotes] = useState(null);
  const [newNotecolor, setNewNoteColor] = useState(null);
  const [noteId, setNoteId] = useState(null);
  const [deletedNote, setDeletedNode]= useState(null);
  const [updateNote, setUpdateNote] = useState(null);
  

  useEffect(() => {
    const fetchNotes = async (url) => {
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: { 'Access-Control-Allow-Origin': '*',
          Accept: 'application/json;odata.metadata=full',
          'Content-Type': 'application/json' }
        });
        const data = await res.json();
        setNotes(data);
      } catch (err) {
      }
    };
    fetchNotes(notesUrl);
  },[deletedNote, newNotecolor]);


  useEffect(() => {
  const deleteNoteReq = async (id) => {
    try {
      const res = await fetch(`${notesUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'Access-Control-Allow-Origin': '*',
        Accept: 'application/json;odata.metadata=full',
        'Content-Type': 'application/json' }
      });
      const deleted = await res.json();
      setDeletedNode(deleted);
    } catch (err) {
    }
  };
  deleteNoteReq(noteId)
}, [noteId]);


useEffect(() => {
  const newNoteReq = async (url) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Access-Control-Allow-Origin': '*',
        Accept: 'application/json;odata.metadata=full',
        'Content-Type': 'application/json' },
        body: JSON.stringify({
          "text": "",
          "lastModified": Date.now(),
          "color": "#fff2ab"
        })
      });
      const data = await res.json();
      console.log("Post Response log ", data);
    } catch (err) {
        console.log("error log ", err);
    }
  };
  newNoteReq(notesUrl)
}, [newNotecolor]);


useEffect(() => {
  const updateNoteReq = async (note) => {
    try {
      let id = note.id;
      let text = note.text;
      const res = await fetch(`${notesUrl}/${id}`, {
        method: 'PATCH',
        headers: { 'Access-Control-Allow-Origin': '*',
        Accept: 'application/json;odata.metadata=full',
                'Content-Type': 'application/json' },
        body: JSON.stringify({
        "text": text,
      })
    });
    const updated = await res.json();
    if(updated){
      console.log(updated)
    }
    } catch (err) {

    }
  };
  updateNoteReq(updateNote)
}, [updateNote]);


  const newNote = (color) => {
    setNewNoteColor({color})
  };

  const deleteNote = (id) => {
    setNoteId(id);
  };

  const updateText = (note) => {
    setUpdateNote(note);
  };

  return (
    <div className="App">
      <NotesList 
        notes={notes}
        newNote={newNote}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
