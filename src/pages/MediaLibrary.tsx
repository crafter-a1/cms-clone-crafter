
import { useState } from "react";
import { 
  Upload, 
  Search, 
  Filter, 
  Grid, 
  List, 
  ArrowUpDown, 
  Settings,
  Image as ImageIcon
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import MediaItem from "@/components/ui/MediaItem";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MediaLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Mock data
  const mediaItems = [
    { 
      name: "product-1.jpg", 
      size: "1.2 MB", 
      type: "image" as const, 
      url: "#",
      thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop"
    },
    { 
      name: "banner.jpg", 
      size: "2.4 MB", 
      type: "image" as const, 
      url: "#",
      thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      name: "user-profile.jpg", 
      size: "0.8 MB", 
      type: "image" as const, 
      url: "#",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      name: "data.json", 
      size: "12 KB", 
      type: "code" as const, 
      url: "#"
    },
    { 
      name: "report.pdf", 
      size: "3.4 MB", 
      type: "document" as const, 
      url: "#"
    },
    { 
      name: "logo.svg", 
      size: "24 KB", 
      type: "image" as const, 
      url: "#"
    },
    { 
      name: "product-2.jpg", 
      size: "1.8 MB", 
      type: "image" as const, 
      url: "#",
      thumbnail: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop"
    },
    { 
      name: "background.jpg", 
      size: "4.2 MB", 
      type: "image" as const, 
      url: "#",
      thumbnail: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2039&auto=format&fit=crop"
    },
    { 
      name: "terms.docx", 
      size: "156 KB", 
      type: "document" as const, 
      url: "#"
    },
    { 
      name: "script.js", 
      size: "32 KB", 
      type: "code" as const, 
      url: "#"
    },
    { 
      name: "analytics.csv", 
      size: "76 KB", 
      type: "document" as const, 
      url: "#"
    },
    { 
      name: "favicon.ico", 
      size: "8 KB", 
      type: "other" as const, 
      url: "#"
    },
  ];
  
  // Filter media items based on search query
  const filteredMediaItems = mediaItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Sort media items
  const sortedMediaItems = [...filteredMediaItems].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "size") {
      const aSize = parseFloat(a.size.split(" ")[0]);
      const bSize = parseFloat(b.size.split(" ")[0]);
      return bSize - aSize;
    } else if (sortBy === "type") {
      return a.type.localeCompare(b.type);
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
                <h1 className="text-2xl font-bold tracking-tight">Media Library</h1>
                <p className="text-muted-foreground">Manage your images, documents and other files.</p>
              </div>
              <Button className="gap-2 shadow-sm">
                <Upload className="h-4 w-4" />
                Upload Files
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search files..."
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
                    <DropdownMenuItem>All files</DropdownMenuItem>
                    <DropdownMenuItem>Images</DropdownMenuItem>
                    <DropdownMenuItem>Documents</DropdownMenuItem>
                    <DropdownMenuItem>Other</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="gap-2 w-[160px]">
                    <ArrowUpDown className="h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="size">Size</SelectItem>
                    <SelectItem value="type">Type</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-md overflow-hidden">
                  <Button 
                    variant={viewMode === "grid" ? "default" : "ghost"} 
                    size="icon" 
                    className="rounded-none h-9 w-9"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant={viewMode === "list" ? "default" : "ghost"} 
                    size="icon" 
                    className="rounded-none h-9 w-9"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All files</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className={`grid ${viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" : "grid-cols-1"} gap-4`}>
                  {sortedMediaItems.map((item, index) => (
                    <MediaItem
                      key={item.name}
                      name={item.name}
                      size={item.size}
                      type={item.type}
                      url={item.url}
                      thumbnail={item.thumbnail}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="images">
                <div className={`grid ${viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" : "grid-cols-1"} gap-4`}>
                  {sortedMediaItems
                    .filter(item => item.type === "image")
                    .map((item, index) => (
                      <MediaItem
                        key={item.name}
                        name={item.name}
                        size={item.size}
                        type={item.type}
                        url={item.url}
                        thumbnail={item.thumbnail}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="documents">
                <div className={`grid ${viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" : "grid-cols-1"} gap-4`}>
                  {sortedMediaItems
                    .filter(item => item.type === "document")
                    .map((item, index) => (
                      <MediaItem
                        key={item.name}
                        name={item.name}
                        size={item.size}
                        type={item.type}
                        url={item.url}
                        thumbnail={item.thumbnail}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="other">
                <div className={`grid ${viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" : "grid-cols-1"} gap-4`}>
                  {sortedMediaItems
                    .filter(item => item.type !== "image" && item.type !== "document")
                    .map((item, index) => (
                      <MediaItem
                        key={item.name}
                        name={item.name}
                        size={item.size}
                        type={item.type}
                        url={item.url}
                        thumbnail={item.thumbnail}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {filteredMediaItems.length === 0 && (
              <div className="text-center py-12">
                <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No files found</h3>
                <p className="text-muted-foreground">Try adjusting your search or upload new files.</p>
                <Button className="mt-4 gap-2">
                  <Upload className="h-4 w-4" />
                  Upload Files
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;
