import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Send, 
  Users, 
  Calendar, 
  FileText,
  Eye,
  Settings,
  Upload,
  Image as ImageIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getNewsletterStats, getAllSubscriptions } from "@/api"; // ✅ import your APIs

const Newsletter = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({ total: 0, scheduled: 0 });
  const [subscribers, setSubscribers] = useState([]);
  const { toast } = useToast();

  const audiences = [
    { id: "all", name: "All Contacts" },
    { id: "active", name: "Active Customers" },
    { id: "prospects", name: "Prospects" },
    { id: "vip", name: "VIP Clients" },
  ];

  useEffect(() => {
    // Fetch newsletter stats
    const fetchStats = async () => {
      try {
        const data = await getNewsletterStats();
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    };

    // Fetch all subscribers
    const fetchSubscribers = async () => {
      try {
        const data = await getAllSubscriptions();
        setSubscribers(data);
      } catch (err) {
        console.error("Failed to fetch subscribers", err);
      }
    };

    fetchStats();
    fetchSubscribers();
  }, []);

  const handleSend = async () => {
    if (!subject || !content || !selectedAudience) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate sending newsletter
    setTimeout(() => {
      toast({
        title: "Newsletter Sent Successfully!",
        description: `Your email has been sent to selected audience.`,
      });
      setIsLoading(false);
      setSubject("");
      setContent("");
      setSelectedAudience("");
    }, 2000);
  };

  const getSelectedAudience = () => audiences.find(a => a.id === selectedAudience);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Newsletter Broadcast</h1>
          <p className="text-muted-foreground mt-1">
            Create and send newsletters to your contact list
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Templates
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{subscribers.length}</p>
                <p className="text-sm text-muted-foreground">Subscribers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-success" />
              <div>
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Total Newsletters Sent</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Send className="h-5 w-5 text-accent" />
              <div>
                <p className="text-2xl font-bold">{Math.floor(Math.random() * 100)}%</p>
                <p className="text-sm text-muted-foreground">Avg Open Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">{stats.scheduled}</p>
                <p className="text-sm text-muted-foreground">Scheduled</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Newsletter Form */}
        <Card className="lg:col-span-2 shadow-custom-md">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Compose Newsletter
            </CardTitle>
            <CardDescription>
              Create and send newsletters to your selected audience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject">Subject Line</Label>
              <Input
                id="subject"
                placeholder="Enter your newsletter subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Audience */}
            <div className="space-y-2">
              <Label>Target Audience</Label>
              <Select value={selectedAudience} onValueChange={setSelectedAudience}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your audience" />
                </SelectTrigger>
                <SelectContent>
                  {audiences.map((audience) => (
                    <SelectItem key={audience.id} value={audience.id}>
                      {audience.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedAudience && (
                <p className="text-sm text-muted-foreground">
                  This newsletter will be sent to {getSelectedAudience()?.name}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label htmlFor="content">Newsletter Content</Label>
              <Textarea
                id="content"
                placeholder="Write your newsletter content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button onClick={handleSend} disabled={isLoading}>
                {isLoading ? "Sending..." : <><Send className="w-4 h-4 mr-2"/> Send Newsletter</>}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Subscribers List */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle className="text-lg">Subscribers</CardTitle>
            <CardDescription>All subscribed users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 max-h-[500px] overflow-y-auto">
            {subscribers.length === 0 ? (
              <p className="text-muted-foreground text-sm">No subscribers yet.</p>
            ) : (
              subscribers.map((sub) => (
                <div key={sub.id} className="p-2 border-b last:border-b-0 flex justify-between items-center">
                  <p className="font-medium">{sub.name}</p>
                  <p className="text-sm text-muted-foreground">{sub.email}</p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Newsletter;
