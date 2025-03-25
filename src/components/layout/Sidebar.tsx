
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  LibraryBig,
  FileText,
  Upload,
  Settings,
  Menu,
  ChevronLeft,
  Database
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const NavItem = ({ icon: Icon, label, path }: { icon: any; label: string; path: string }) => {
    const isActive = location.pathname === path;

    return (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to={path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                "transition-all duration-200 hover:bg-sidebar-accent group",
                isActive ? "bg-sidebar-accent text-primary" : "text-sidebar-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5 flex-shrink-0", isActive ? "text-primary" : "text-sidebar-foreground")} />
              <span className={cn("transition-all duration-200", expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden")}>
                {label}
              </span>
            </Link>
          </TooltipTrigger>
          {!expanded && (
            <TooltipContent side="right">
              {label}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <aside
      className={cn(
        "bg-sidebar h-screen flex flex-col border-r border-sidebar-border transition-all duration-300 ease-in-out z-50",
        expanded ? "w-56" : "w-16"
      )}
    >
      <div className="p-4 flex justify-between items-center h-16 border-b border-sidebar-border">
        <div className={cn("flex items-center gap-2", !expanded && "justify-center w-full")}>
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
            S
          </div>
          <h1 className={cn("font-bold text-sidebar-foreground transition-all", expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden")}>
            Strapi CMS
          </h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {expanded ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex flex-col gap-1 p-2 mt-2">
        <NavItem icon={LayoutDashboard} label="Dashboard" path="/" />
        <NavItem icon={Database} label="Content Types" path="/content-types" />
        <NavItem icon={FileText} label="Records" path="/records" />
        <NavItem icon={LibraryBig} label="Media Library" path="/media" />
        <NavItem icon={Upload} label="Import/Export" path="/import-export" />
      </div>

      <div className="mt-auto p-2">
        <NavItem icon={Settings} label="Settings" path="/settings" />
      </div>
    </aside>
  );
};

export default Sidebar;
