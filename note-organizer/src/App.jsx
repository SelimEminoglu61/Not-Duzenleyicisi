import React, { useEffect, useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";

function App() {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [noteArr, setNoteArr] = useState([]);
  const [isNull, setIsNull] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  async function addLocalStorage(newValue) {
    localStorage.setItem("notes", JSON.stringify(newValue));
  }

  function getInfos(newTitle, newBody) {
    if (newTitle == "" || newBody == "") {
      setIsNull(true);
    } else {
      const newNote = {
        id: crypto.randomUUID(),
        title: newTitle.trim(),
        body: newBody.trim(),
      };
      setIsNull(false);
      setNewTitle("");
      setNewBody("");
      const newArr = [...noteArr, newNote];
      setNoteArr(newArr);
      addLocalStorage(newArr);
    }
  }

  function deleteNote(id) {
    const newArr = noteArr.filter((note) => id != note.id);
    setNoteArr(newArr);
    addLocalStorage(newArr);
  }

  useEffect(() => {
    if (!localStorage.getItem("notes")) {
      localStorage.setItem("notes", JSON.stringify([]));
    }
  }, []);

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
        isNull={isNull}
        isChanged={isChanged}
      />
      <NoteList
        noteList={JSON.parse(localStorage.getItem("notes"))}
        deleteNote={deleteNote}
        setIsChanged={setIsChanged}
      />
    </>
  );
}

export default App;
