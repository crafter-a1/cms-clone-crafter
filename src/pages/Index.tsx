
import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Database, 
  FileText, 
  Image as ImageIcon, 
  BarChart, 
  TrendingUp, 
  Clock, 
  AlertCircle 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import StatsCard from "@/components/ui/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RecentActivity = () => {
  return (
    <div className="space-y-3">
      {[
        { 
          icon: <Database className="h-4 w-4" />, 
          text: "Content Type 'Products' was created", 
          time: "2 hours ago",
          type: "info"
        },
        { 
          icon: <FileText className="h-4 w-4" />, 
          text: "New record added to 'Articles'", 
          time: "4 hours ago",
          type: "success"
        },
        { 
          icon: <Users className="h-4 w-4" />, 
          text: "New user John Doe registered", 
          time: "6 hours ago",
          type: "info"
        },
        { 
          icon: <AlertCircle className="h-4 w-4" />, 
          text: "API rate limit exceeded", 
          time: "12 hours ago",
          type: "warning"
        },
      ].map((activity, index) => (
        <div key={index} className="flex items-start gap-3 p-3 rounded-md bg-secondary/50 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
          <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            activity.type === "info" ? "bg-blue-100 text-blue-600" :
            activity.type === "success" ? "bg-green-100 text-green-600" :
            activity.type === "warning" ? "bg-yellow-100 text-yellow-600" :
            "bg-red-100 text-red-600"
          }`}>
            {activity.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{activity.text}</p>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <Clock className="h-3 w-3 mr-1" />
              {activity.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { icon: <Database className="h-4 w-4" />, label: "Create Content Type" },
        { icon: <FileText className="h-4 w-4" />, label: "Add Record" },
        { icon: <ImageIcon className="h-4 w-4" />, label: "Upload Media" },
        { icon: <Users className="h-4 w-4" />, label: "Manage Users" },
      ].map((action, index) => (
        <Button 
          key={index} 
          variant="outline" 
          className="flex items-center gap-2 h-12 justify-start px-4 animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
            {action.icon}
          </div>
          <span>{action.label}</span>
        </Button>
      ))}
    </div>
  );
};

const Index = () => {
  const [tab, setTab] = useState("overview");

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back to your CMS dashboard.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  className="gap-2 shadow-sm" 
                  onClick={() => setTab("activity")}
                >
                  <Clock className="h-4 w-4" />
                  Recent Activity
                </Button>
                <Button className="gap-2 shadow-sm">
                  <TrendingUp className="h-4 w-4" />
                  View Reports
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatsCard
                title="Content Types"
                value="12"
                icon={<Database className="h-4 w-4" />}
                trend={{ value: 8, isPositive: true }}
              />
              <StatsCard
                title="Total Records"
                value="1,284"
                icon={<FileText className="h-4 w-4" />}
                trend={{ value: 12, isPositive: true }}
              />
              <StatsCard
                title="Media Files"
                value="359"
                icon={<ImageIcon className="h-4 w-4" />}
                trend={{ value: 5, isPositive: true }}
              />
              <StatsCard
                title="Active Users"
                value="28"
                icon={<Users className="h-4 w-4" />}
                trend={{ value: 2, isPositive: false }}
              />
            </div>

            <Tabs defaultValue={tab} value={tab} onValueChange={setTab} className="space-y-4">
              <TabsList className="grid grid-cols-2 w-[400px]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">API Usage</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="h-12 w-12 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground mt-2">API usage chart will appear here</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <QuickActions />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RecentActivity />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
