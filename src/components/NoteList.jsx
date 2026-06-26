import NoteItem from "./NoteItem";
import { NotebookPen } from "lucide-react";

function NoteList({ notes, deleteNote, editNote }) {
  return (
    <section className="mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Your Notes
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage all your notes in one place.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow">
          <NotebookPen size={18} />
          <span className="font-semibold">
            {notes.length} {notes.length === 1 ? "Note" : "Notes"}
          </span>
        </div>
      </div>

      {/* Notes List */}
      {notes.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-md p-12 text-center">
          <NotebookPen
            size={50}
            className="mx-auto text-gray-400 mb-4"
          />

          <h3 className="text-xl font-semibold text-gray-700">
            No Notes Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Create your first note to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default NoteList;