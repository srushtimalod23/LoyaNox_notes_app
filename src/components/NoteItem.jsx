import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";

function NoteItem({ note, deleteNote, editNote }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-gray-600">{note.description}</p>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => editNote(note)}
        >
          <Pencil size={14} />
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={() => deleteNote(note.id)}
        >
          <Trash2 size={14} />
        </Button>
      </div>
    </div>
  );
}

export default NoteItem;