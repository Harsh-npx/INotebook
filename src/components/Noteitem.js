import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 w-100">
      <div className="card my-3">
        <div className="card-body d-flex position-relative">
          <div>
            <span className="badge rounded-pill bg-primary position-absolute end-0 top-0">
              {note.tag}
            </span>
            <div className="d-flex ">
              <h5 className="card-title">{note.title}</h5>
              <i
                className="far fa-trash-alt mx-2"
                onClick={() => {
                  deleteNote(note._id);
                }}
              ></i>
              <i
                className="far fa-edit mx-2"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
