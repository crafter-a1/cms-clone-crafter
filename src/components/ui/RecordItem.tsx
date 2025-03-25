
import { Edit, Trash, Eye, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RecordItemProps {
  id: string | number;
  title: string;
  status: "published" | "draft" | "archived";
  author: string;
  createdAt: string;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
  className?: string;
}

const RecordItem = ({
  id,
  title,
  status,
  author,
  createdAt,
  selected,
  onSelect,
  className,
}: RecordItemProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-700 border-green-200";
      case "draft":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "archived":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 rounded-md border transition-all",
        "hover:bg-secondary/50 animate-fade-in",
        selected && "bg-primary/5 border-primary/20",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Checkbox 
          checked={selected} 
          onCheckedChange={onSelect} 
          className={cn(
            "transition-all",
            selected && "border-primary"
          )}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{title}</span>
            <Badge variant="outline" className={cn("text-xs py-0 h-5", getStatusColor())}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>ID: {id}</span>
            <span className="mx-1">•</span>
            <span>By: {author}</span>
            <span className="mx-1">•</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Eye className="h-3.5 w-3.5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Edit className="h-3.5 w-3.5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <MoreHorizontal className="h-3.5 w-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>
              <Eye className="h-4 w-4 mr-2" /> View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="h-4 w-4 mr-2" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <Trash className="h-4 w-4 mr-2" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default RecordItem;
