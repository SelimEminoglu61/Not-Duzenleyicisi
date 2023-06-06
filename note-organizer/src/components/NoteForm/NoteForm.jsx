import { useState } from "react";

function NoteForm() {
  const [newInput, setNewInput] = useState("");
  const [newBodyInput, setNewBodyInput] = useState("");

  const handleChange = (e) => {
    setNewInput(e.target.value);
    setNewBodyInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flexDiv">
        <label htmlFor="inputTitle">Not Başlığı: </label>
        <input
          id="inputTitle"
          type="text"
          placeholder="Yeni Not Girin"
          onChange={handleChange}
          value={newInput}
        />
      </div>
      <div className="flexDiv2">
        <label>Not İçeriği: </label>
        <textarea
          rows={10}
          cols={15}
          required
          placeholder="Notunuzu Giriniz"
          maxLength={500}
          style={{ resize: "none" }}
          onChange={handleChange}
          value={newBodyInput}
        />
      </div>
      <button>Yeni Not Ekle</button>
    </form>
  );
}

export default NoteForm;
