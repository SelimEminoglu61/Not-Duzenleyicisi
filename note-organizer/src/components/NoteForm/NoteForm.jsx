import { Form, FlexDiv } from "./styleNoteForm";

function NoteForm({ getInfos, newTitle, setNewTitle, newBody, setNewBody }) {
  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleChangeBody = (e) => {
    setNewBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FlexDiv>
        <label htmlFor="inputTitle">Not Başlığı</label>
        <input
          id="inputTitle"
          type="text"
          placeholder="Yeni Not Girin"
          onChange={handleChangeTitle}
          value={newTitle}
        />
      </FlexDiv>
      <FlexDiv>
        <label>Not İçeriği</label>
        <textarea
          rows={10}
          cols={15}
          placeholder="Notunuzu Giriniz"
          maxLength={500}
          style={{ resize: "none" }}
          onChange={handleChangeBody}
          value={newBody}
        />
      </FlexDiv>
      <button
        onClick={() => {
          getInfos(newTitle, newBody);
        }}
      >
        Yeni Not Ekle
      </button>
    </Form>
  );
}

export default NoteForm;
