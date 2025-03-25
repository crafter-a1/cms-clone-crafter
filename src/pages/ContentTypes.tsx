
import { useState } from "react";
import { 
  Plus, 
  Search, 
  FileText, 
  Database,
  Settings,
  ArrowUpDown,
  Filter
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import ContentTypeItem from "@/components/ui/ContentTypeItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContentTypes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  
  // Mock data
  const contentTypes = [
    { name: "Articles", fields: 12, records: 156, lastUpdated: "2 hours ago" },
    { name: "Products", fields: 24, records: 532, lastUpdated: "1 day ago" },
    { name: "Categories", fields: 6, records: 28, lastUpdated: "3 days ago" },
    { name: "Users", fields: 18, records: 423, lastUpdated: "1 week ago" },
    { name: "Orders", fields: 15, records: 1245, lastUpdated: "2 days ago" },
    { name: "Comments", fields: 8, records: 2387, lastUpdated: "5 hours ago" },
    { name: "Tags", fields: 4, records: 76, lastUpdated: "2 weeks ago" },
    { name: "Settings", fields: 10, records: 1, lastUpdated: "1 month ago" },
  ];
  
  // Filter content types based on search query
  const filteredContentTypes = contentTypes.filter(ct => 
    ct.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Sort content types
  const sortedContentTypes = [...filteredContentTypes].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "fields") {
      return b.fields - a.fields;
    } else if (sortBy === "records") {
      return b.records - a.records;
    }
    return 0;
  });

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Content Types</h1>
                <p className="text-muted-foreground">Manage your content structure and data models.</p>
              </div>
              <Button className="gap-2 shadow-sm">
                <Plus className="h-4 w-4" />
                Create Content Type
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search content types..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Recently updated</DropdownMenuItem>
                    <DropdownMenuItem>Most fields</DropdownMenuItem>
                    <DropdownMenuItem>Most records</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="gap-2 w-[160px]">
                    <ArrowUpDown className="h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="fields">Fields count</SelectItem>
                    <SelectItem value="records">Records count</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedContentTypes.map((contentType, index) => (
                <ContentTypeItem
                  key={contentType.name}
                  name={contentType.name}
                  fields={contentType.fields}
                  records={contentType.records}
                  lastUpdated={contentType.lastUpdated}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                />
              ))}
              
              <Button 
                variant="outline" 
                className="h-auto aspect-square flex flex-col items-center justify-center gap-2 border-dashed animate-fade-in"
                style={{ animationDelay: `${sortedContentTypes.length * 50}ms` }}
              >
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  <Plus className="h-6 w-6 text-primary" />
                </div>
                <span className="text-base font-medium">New Type</span>
                <span className="text-xs text-muted-foreground">Add content structure</span>
              </Button>
            </div>
            
            {filteredContentTypes.length === 0 && (
              <div className="text-center py-12">
                <Database className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No content types found</h3>
                <p className="text-muted-foreground">Try adjusting your search or create a new content type.</p>
                <Button className="mt-4 gap-2">
                  <Plus className="h-4 w-4" />
                  Create Content Type
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTypes;
