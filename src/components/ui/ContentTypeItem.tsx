
import { Edit, Trash, FileText, Eye } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ContentTypeItemProps {
  name: string;
  fields: number;
  records: number;
  lastUpdated: string;
  className?: string;
}

const ContentTypeItem = ({
  name,
  fields,
  records,
  lastUpdated,
  className,
}: ContentTypeItemProps) => {
  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
            <FileText className="h-4 w-4" />
          </div>
          {name}
        </CardTitle>
        <Badge variant="outline" className="bg-secondary">
          {fields} Fields
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Records</span>
          <span className="font-medium">{records}</span>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <span className="text-muted-foreground">Last updated</span>
          <span className="font-medium">{lastUpdated}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 border-t bg-secondary/50 p-2">
        <Button variant="ghost" size="sm" className="flex-1">
          <Eye className="h-4 w-4 mr-1" /> View
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <Edit className="h-4 w-4 mr-1" /> Edit
        </Button>
        <Button variant="ghost" size="sm" className="flex-1 text-destructive hover:text-destructive">
          <Trash className="h-4 w-4 mr-1" /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContentTypeItem;
