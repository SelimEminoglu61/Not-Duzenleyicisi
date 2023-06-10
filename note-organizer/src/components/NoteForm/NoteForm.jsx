import { Form, FlexDiv, NullType } from "./styleNoteForm";
import PropTypes from "prop-types";

function NoteForm({
  getInfos,
  newTitle,
  setNewTitle,
  newBody,
  setNewBody,
  isNull,
}) {
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
      {isNull && (
        <div>
          <NullType>Lütfen Boş Yer Bırakmayınız!!</NullType>
        </div>
      )}
    </Form>
  );
}

NoteForm.propTypes = {
  getInfos: PropTypes.func.isRequired,
  newTitle: PropTypes.string,
  newBody: PropTypes.string,
  setNewTitle: PropTypes.func.isRequired,
  setNewBody: PropTypes.func.isRequired,
  isNull: PropTypes.bool.isRequired,
};

export default NoteForm;
