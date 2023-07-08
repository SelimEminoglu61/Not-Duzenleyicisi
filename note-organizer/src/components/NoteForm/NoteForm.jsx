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
  updateBody,
  updateTitle,
  setUpdateBody,
  setUpdateTitle,
  isNull,
  isChanged,
  updateNoteObj,
  updateInfos,
  setIsChanged,
}) {
  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleChangeBody = (e) => {
    setNewBody(e.target.value);
  };

  const handleChangeUpdateTitle = (e) => {
    setUpdateTitle(e.target.value);
  };

  const handleChangeUpdateBody = (e) => {
    setUpdateBody(e.target.value);
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
              onChange={handleChangeUpdateTitle}
              value={updateTitle}
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
              onChange={handleChangeUpdateBody}
              value={updateBody}
            />
          </FlexDiv>
          <button
            onClick={() => {
              updateInfos(updateNoteObj.id, updateTitle, updateBody);
              setIsChanged(false);
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
  updateTitle: PropTypes.string,
  updateBody: PropTypes.string,
  setNewTitle: PropTypes.func.isRequired,
  setNewBody: PropTypes.func.isRequired,
  setUpdateTitle: PropTypes.func.isRequired,
  setUpdateBody: PropTypes.func.isRequired,
  isNull: PropTypes.bool.isRequired,
  isChanged: PropTypes.bool.isRequired,
  updateNoteObj: PropTypes.object,
  updateInfos: PropTypes.func.isRequired,
  setIsChanged: PropTypes.func,
};

export default NoteForm;
