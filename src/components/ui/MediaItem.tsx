
import { useState } from "react";
import { 
  Image, 
  FileText, 
  FileCode, 
  File, 
  Download, 
  Trash, 
  MoreHorizontal 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

type FileType = "image" | "document" | "code" | "other";

interface MediaItemProps {
  name: string;
  size: string;
  type: FileType;
  url: string;
  thumbnail?: string;
  className?: string;
}

const MediaItem = ({
  name,
  size,
  type,
  url,
  thumbnail,
  className,
}: MediaItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (type) {
      case "image":
        return <Image className="h-5 w-5" />;
      case "document":
        return <FileText className="h-5 w-5" />;
      case "code":
        return <FileCode className="h-5 w-5" />;
      default:
        return <File className="h-5 w-5" />;
    }
  };

  return (
    <Card 
      className={cn("overflow-hidden transition-all duration-200 group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={1} className="bg-secondary">
        {type === "image" && thumbnail ? (
          <div className="relative w-full h-full">
            <img
              src={thumbnail}
              alt={name}
              className="object-cover w-full h-full transition-all"
            />
            <div 
              className={cn(
                "absolute inset-0 bg-black/60 opacity-0 transition-opacity flex items-center justify-center gap-2",
                isHovered && "opacity-100"
              )}
            >
              <Button size="sm" variant="secondary" className="rounded-full h-8 w-8 p-0">
                <Download className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="destructive" className="rounded-full h-8 w-8 p-0">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-muted">
            <div className="h-12 w-12 rounded-md bg-background flex items-center justify-center text-primary">
              {getIcon()}
            </div>
          </div>
        )}
      </AspectRatio>
      <CardContent className="p-3">
        <div className="flex justify-between items-start">
          <div className="truncate pr-2">
            <p className="text-sm font-medium truncate">{name}</p>
            <p className="text-xs text-muted-foreground">{size}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>
                <Download className="h-4 w-4 mr-2" /> Download
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <Trash className="h-4 w-4 mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaItem;
