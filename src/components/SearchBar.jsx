import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 text-gray-400" size={18} />

      <Input
        className="pl-10"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;