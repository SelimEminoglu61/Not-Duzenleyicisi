import {
  Form,
  FlexDiv,
  NullType,
  İnputTitle,
  İnputBody,
} from "./styleNoteForm";
import PropTypes from "prop-types";

function NoteForm({
  getInfos,
  newTitle,
  setNewTitle,
  newBody,
  setNewBody,
  isNull,
  isChanged,
  updateNoteObj,
  updateInfos,
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
    <>
      {isChanged === false && (
        <Form onSubmit={handleSubmit}>
          <FlexDiv>
            <label htmlFor="inputTitle">Not Başlığı</label>
            <İnputTitle
              id="inputTitle"
              type="text"
              placeholder="Yeni Not Girin"
              onChange={handleChangeTitle}
              value={newTitle}
            />
          </FlexDiv>
          <FlexDiv>
            <label>Not İçeriği</label>
            <İnputBody
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
          {isNull == true && (
            <div>
              <NullType>Lütfen Boş Yer Bırakmayınız!!</NullType>
            </div>
          )}
        </Form>
      )}
      {isChanged === true && (
        <Form onSubmit={handleSubmit}>
          <FlexDiv>
            <label htmlFor="inputTitle">Not Başlığı</label>
            <İnputTitle
              id="inputTitle"
              type="text"
              placeholder="Yeni Not Girin"
              onChange={handleChangeTitle}
              value={updateNoteObj.title}
            />
          </FlexDiv>
          <FlexDiv>
            <label>Not İçeriği</label>
            <İnputBody
              rows={10}
              cols={15}
              placeholder="Notunuzu Giriniz"
              maxLength={500}
              style={{ resize: "none" }}
              onChange={handleChangeBody}
              value={updateNoteObj.body}
            />
          </FlexDiv>
          <button
            onClick={() => {
              updateInfos(
                updateNoteObj.id,
                updateNoteObj.title,
                updateNoteObj.body
              );
            }}
          >
            Notu Güncelle
          </button>
          {isNull == true && (
            <div>
              <NullType>Lütfen Boş Yer Bırakmayınız!!</NullType>
            </div>
          )}
        </Form>
      )}
    </>
  );
}

NoteForm.propTypes = {
  getInfos: PropTypes.func.isRequired,
  newTitle: PropTypes.string,
  newBody: PropTypes.string,
  setNewTitle: PropTypes.func.isRequired,
  setNewBody: PropTypes.func.isRequired,
  isNull: PropTypes.bool.isRequired,
  isChanged: PropTypes.bool.isRequired,
  updateNoteObj: PropTypes.object,
  updateInfos: PropTypes.func.isRequired,
};

export default NoteForm;
