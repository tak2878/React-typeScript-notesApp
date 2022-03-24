import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "../components/Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = () => {
    return notes.map((note) => {
      return <Notes key={note.id} handleDelete={handleDelete} note={note} />;
    });
  };
  return (
    <>
      <h2 className="mt-5 ">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
