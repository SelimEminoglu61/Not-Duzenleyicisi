import React, { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";

function App() {
  return (
    <>
      <div className="bigTitle">
        <h1>Note Organizer</h1>
      </div>
      <NoteForm />
      <NoteList />
    </>
  );
}

export default App;
