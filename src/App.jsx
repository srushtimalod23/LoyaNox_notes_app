import { useState } from "react"
import NoteForm from "./components/NoteForm"
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";



function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [search, setSearch] = useState("");


  const filteredNotes = notes.filter((note) =>
  note.title.toLowerCase().includes(search.toLowerCase())
);

  const deleteNote = (id) => {
  const updatedNotes = notes.filter((note) => note.id !== id);
  setNotes(updatedNotes);
};

const editNote = (note) => {
  setIsEditing(true);
  setEditingNote(note);

  setTitle(note.title);
  setDescription(note.description);
};
  
  function handleSubmit(e) {
  e.preventDefault();

  if (isEditing) {
    const updatedNotes = notes.map((note) =>
      note.id === editingNote.id
        ? { ...note, title, description }
        : note
    );

    setNotes(updatedNotes);
    setIsEditing(false);
    setEditingNote(null);
  } else {
    const newNote = {
      id: Date.now(),
      title,
      description,
    };

    setNotes([...notes, newNote]);
  }

  setTitle("");
  setDescription("");
}
  


 return (
  <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-6">📝 Notes App</h1>

    <div className="w-full max-w-md space-y-4">
      <SearchBar search={search} setSearch={setSearch} />

      <NoteForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
      />

      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  </div>
);
  
}

export default App
