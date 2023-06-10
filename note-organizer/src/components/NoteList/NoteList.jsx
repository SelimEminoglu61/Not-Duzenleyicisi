import PropTypes from "prop-types";

function NoteList({ noteList }) {
  return (
    <div>
      {noteList.map((note) => {
        return <div key={note.id}>{note.title}</div>;
      })}
    </div>
  );
}

NoteList.propTypes = {
  noteList: PropTypes.array,
};

export default NoteList;
