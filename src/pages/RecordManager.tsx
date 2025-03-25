
import { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  ArrowUpDown, 
  Settings,
  FileText,
  CheckSquare,
  Download,
  Trash,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import RecordItem from "@/components/ui/RecordItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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

const RecordManager = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedContentType, setSelectedContentType] = useState("articles");
  const [selectedRecords, setSelectedRecords] = useState<string[]>([]);
  
  // Mock data
  const records = [
    { 
      id: "ART-001", 
      title: "Getting Started with Strapi", 
      status: "published" as const, 
      author: "John Doe", 
      createdAt: "2 hours ago" 
    },
    { 
      id: "ART-002", 
      title: "Advanced Content Modeling", 
      status: "published" as const, 
      author: "Jane Smith", 
      createdAt: "1 day ago" 
    },
    { 
      id: "ART-003", 
      title: "Headless CMS Architecture", 
      status: "draft" as const, 
      author: "Alex Johnson", 
      createdAt: "3 days ago" 
    },
    { 
      id: "ART-004", 
      title: "Custom API Endpoints", 
      status: "draft" as const, 
      author: "Sarah Williams", 
      createdAt: "1 week ago" 
    },
    { 
      id: "ART-005", 
      title: "Media Management Best Practices", 
      status: "published" as const, 
      author: "Michael Brown", 
      createdAt: "2 days ago" 
    },
    { 
      id: "ART-006", 
      title: "Authentication Strategies", 
      status: "archived" as const, 
      author: "Emily Davis", 
      createdAt: "2 months ago" 
    },
    { 
      id: "ART-007", 
      title: "Workflow Automation", 
      status: "published" as const, 
      author: "Robert Wilson", 
      createdAt: "5 hours ago" 
    },
    { 
      id: "ART-008", 
      title: "Content Localization", 
      status: "draft" as const, 
      author: "Linda Taylor", 
      createdAt: "3 weeks ago" 
    },
  ];
  
  // Filter records based on search query
  const filteredRecords = records.filter(record => 
    record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Sort records
  const sortedRecords = [...filteredRecords].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "status") {
      return a.status.localeCompare(b.status);
    } else if (sortBy === "author") {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });

  const toggleRecordSelection = (id: string) => {
    if (selectedRecords.includes(id)) {
      setSelectedRecords(selectedRecords.filter(recordId => recordId !== id));
    } else {
      setSelectedRecords([...selectedRecords, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedRecords.length === sortedRecords.length) {
      setSelectedRecords([]);
    } else {
      setSelectedRecords(sortedRecords.map(record => record.id));
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Record Manager</h1>
                <p className="text-muted-foreground">Manage your content entries and data records.</p>
              </div>
              <Button className="gap-2 shadow-sm">
                <Plus className="h-4 w-4" />
                Create Record
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search records..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Select value={selectedContentType} onValueChange={setSelectedContentType}>
                  <SelectTrigger className="gap-2 w-[160px]">
                    <FileText className="h-4 w-4" />
                    <SelectValue placeholder="Content Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="articles">Articles</SelectItem>
                    <SelectItem value="products">Products</SelectItem>
                    <SelectItem value="categories">Categories</SelectItem>
                    <SelectItem value="users">Users</SelectItem>
                  </SelectContent>
                </Select>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>All records</DropdownMenuItem>
                    <DropdownMenuItem>Published</DropdownMenuItem>
                    <DropdownMenuItem>Draft</DropdownMenuItem>
                    <DropdownMenuItem>Archived</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="gap-2 w-[160px]">
                    <ArrowUpDown className="h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="title">Title</SelectItem>
                    <SelectItem value="status">Status</SelectItem>
                    <SelectItem value="author">Author</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {selectedRecords.length > 0 && (
              <div className="flex items-center justify-between p-3 bg-secondary rounded-md animate-slide-down">
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{selectedRecords.length} records selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <Download className="h-3.5 w-3.5 mr-1" /> Export
                  </Button>
                  <Button variant="destructive" size="sm" className="h-8">
                    <Trash className="h-3.5 w-3.5 mr-1" /> Delete
                  </Button>
                </div>
              </div>
            )}

            <div className="bg-card rounded-md border overflow-hidden">
              <div className="flex items-center justify-between p-3 border-b bg-muted/30">
                <div className="flex items-center gap-3">
                  <Checkbox 
                    checked={selectedRecords.length === sortedRecords.length && sortedRecords.length > 0} 
                    onCheckedChange={toggleSelectAll}
                  />
                  <span className="text-sm font-medium">All Records</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Showing {sortedRecords.length} of {records.length} records
                </div>
              </div>
              
              <div className="divide-y">
                {sortedRecords.map((record, index) => (
                  <RecordItem
                    key={record.id}
                    id={record.id}
                    title={record.title}
                    status={record.status}
                    author={record.author}
                    createdAt={record.createdAt}
                    selected={selectedRecords.includes(record.id)}
                    onSelect={() => toggleRecordSelection(record.id)}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  />
                ))}
                
                {filteredRecords.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No records found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or create a new record.</p>
                    <Button className="mt-4 gap-2">
                      <Plus className="h-4 w-4" />
                      Create Record
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between p-3 border-t bg-muted/30">
                <div className="text-sm text-muted-foreground">
                  Showing {sortedRecords.length} of {records.length} records
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm">Page 1 of 1</span>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordManager;
