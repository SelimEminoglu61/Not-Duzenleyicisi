import React, { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";

function App() {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [noteArr, setNoteArr] = useState([]);

  function getInfos(newTitle, newBody) {
    const newNote = {
      id: Date.now(),
      title: newTitle.trim(),
      body: newBody.trim(),
    };

    setNewTitle("");
    setNewBody("");
    console.log(newNote);
  }

  return (
    <>
      <div className="bigTitle">
        <h1>Not Düzenleyicisi</h1>
      </div>
      <NoteForm
        getInfos={getInfos}
        newTitle={newTitle}
        newBody={newBody}
        setNewTitle={setNewTitle}
        setNewBody={setNewBody}
      />
      <NoteList />
    </>
  );
}

export default App;
