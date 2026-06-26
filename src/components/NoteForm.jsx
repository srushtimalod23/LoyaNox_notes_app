import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../components/ui/button";
import { Pencil } from "lucide-react";

function NoteForm({
  title,
  setTitle,
  description,
  setDescription,
  handleSubmit,
  isEditing,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-4 space-y-3"
    >
      <Input
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Textarea
        placeholder="Enter description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button className="w-full flex gap-2">
        <Pencil size={16} />
        {isEditing ? "Update Note" : "Add Note"}
      </Button>
    </form>
  );
}

export default NoteForm;