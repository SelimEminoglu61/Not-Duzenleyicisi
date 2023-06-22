import PropTypes from "prop-types";
import {
  BackgroundDiv,
  ListH4,
  ListP,
  ButtonDiv,
  ListButton,
  ListDiv,
} from "./styleNoteList";

function NoteList({ noteList, deleteNote, setIsChanged, updateDisplayNote }) {
  return (
    <ListDiv>
      {noteList.length == 0 && <ListH4>Henüz Not Yok</ListH4>}
      {noteList &&
        noteList.map((note) => {
          return (
            <BackgroundDiv key={note.id}>
              <ListH4>{note.title}</ListH4>
              <ListP>{note.body}</ListP>
              <ButtonDiv>
                <ListButton
                  onClick={() => {
                    setIsChanged(true);
                    updateDisplayNote(note.id, note.title, note.body);
                  }}
                >
                  Güncelle
                </ListButton>
                <ListButton
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                >
                  Sil
                </ListButton>
              </ButtonDiv>
            </BackgroundDiv>
          );
        })}
    </ListDiv>
  );
}

NoteList.propTypes = {
  noteList: PropTypes.array,
  deleteNote: PropTypes.func,
  setIsChanged: PropTypes.func,
  updateDisplayNote: PropTypes.func,
};

export default NoteList;
