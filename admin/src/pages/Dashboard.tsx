import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Mail, TrendingUp, BarChart3 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { getAllQuotes, getAllContacts, getAllSubscriptions, getQuotesAnalytics, getContactsAnalytics } from "@/api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Metric = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ComponentType<any>;
  description: string;
};

type Quote = {
  id: string;
  companyName: string;
  email: string;
  phone: string;
  countryFrom: string;
  countryTo: string;
  freightType: string;
  status: string;
  createdAt: string;
};

type NewsletterSubscriber = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

const Dashboard = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [recentQuotes, setRecentQuotes] = useState<Quote[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);

  // Modal states
  const [isQuotesModalOpen, setIsQuotesModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);

  // Analytics data
  const [quotesAnalytics, setQuotesAnalytics] = useState<{ [key: string]: number }>({});
  const [contactsAnalytics, setContactsAnalytics] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactsData = await getAllContacts();
        const quotesData: Quote[] = await getAllQuotes();
        const subscribersData: NewsletterSubscriber[] = await getAllSubscriptions();

        const totalContacts = contactsData?.length || 0;
        const totalNewsletterSent = subscribersData?.length || 0;
        const totalQuotes = quotesData?.length || 0;
        const approvedQuotes = quotesData.filter(q => q.status.toLowerCase() === "approved").length;
        const conversionRate = totalQuotes > 0 ? ((approvedQuotes / totalQuotes) * 100).toFixed(2) + "%" : "0%";

        setMetrics([
          {
            title: "Total Contacts",
            value: totalContacts.toLocaleString(),
            change: "+0%",
            trend: "up",
            icon: Users,
            description: "Total contacts reached",
          },
          {
            title: "Quote Requests",
            value: totalQuotes.toLocaleString(),
            change: "+0%",
            trend: "up",
            icon: MessageSquare,
            description: "New requests this month",
          },
          {
            title: "Newsletter Subscriptions",
            value: totalNewsletterSent.toLocaleString(),
            change: "+0%",
            trend: "up",
            icon: Mail,
            description: "Users subscribed",
          },
          {
            title: "Conversion Rate",
            value: conversionRate,
            change: "+0%",
            trend: "up",
            icon: TrendingUp,
            description: "Quote to customer",
          },
        ]);

        const sortedQuotes = quotesData.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setRecentQuotes(sortedQuotes.slice(0, 2));
        setSubscribers(subscribersData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch analytics when modal opens
  const openQuotesAnalyticsModal = async () => {
    setIsQuotesModalOpen(true);
    try {
      const data = await getQuotesAnalytics(); // { Pending: 3, Confirmed: 2, Shipped: 1 }
      setQuotesAnalytics(data);
    } catch (err) {
      console.error("Failed to fetch quotes analytics:", err);
    }
  };

  const openContactsAnalyticsModal = async () => {
    setIsContactsModalOpen(true);
    try {
      const data = await getContactsAnalytics(); // { new: 2, pending: 1, replied: 1 }
      setContactsAnalytics(data);
    } catch (err) {
      console.error("Failed to fetch contacts analytics:", err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-500 text-white shadow-md";
      case "pending":
        return "bg-yellow-400 text-black shadow-md";
      case "reviewing":
        return "bg-blue-400 text-white shadow-md";
      default:
        return "bg-gray-300 text-black shadow-md";
    }
  };

  // Convert analytics object to Pie chart data
  const getPieChartData = (analytics: { [key: string]: number }) => {
    return {
      labels: Object.keys(analytics),
      datasets: [
        {
          data: Object.values(analytics),
          backgroundColor: [
            "#10B981",
            "#F59E0B",
            "#3B82F6",
            "#8B5CF6",
            "#EF4444",
            "#9CA3AF",
          ],
        },
      ],
    };
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" onClick={openQuotesAnalyticsModal}>
            <BarChart3 className="w-4 h-4 mr-2" />
            Quotes Analytics
          </Button>
          <Button className="bg-gradient-primary hover:shadow-glow transition-smooth" onClick={openContactsAnalyticsModal}>
            <Users className="w-4 h-4 mr-2" />
            Contacts Analytics
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card
            key={metric.title}
            className="bg-gradient-card shadow-custom-md hover:shadow-custom-lg transition-smooth"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="flex items-center space-x-2 mt-1">
                <Badge
                  variant={metric.trend === "up" ? "default" : "secondary"}
                  className={metric.trend === "up" ? "bg-success text-success-foreground" : ""}
                >
                  {metric.change}
                </Badge>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Quote Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-custom-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Recent Quote Requests</CardTitle>
                <CardDescription>Latest inquiries from potential clients</CardDescription>
              </div>
              <Button 
                variant="outline" size="sm"
                onClick={() => (window.location.href = "/quotes")}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentQuotes.map((quote) => (
                <div
                  key={quote.id}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-muted/30 rounded-lg"
                >
                  <div className="flex flex-col space-y-1">
                    <p className="font-medium text-foreground">{quote.companyName}</p>
                    <p className="text-sm text-muted-foreground">
                      {quote.email} | {quote.phone}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {quote.countryFrom} → {quote.countryTo} | {quote.freightType}
                    </p>
                  </div>
                  <Badge className={getStatusColor(quote.status)}>{quote.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              className="w-full justify-start bg-gradient-primary hover:shadow-glow transition-smooth"
              onClick={() => (window.location.href = "/quotes")}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Quote Request
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => (window.location.href = "/contacts")}
            >
              <Users className="w-4 h-4 mr-2" />
              All Contacts
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => (window.location.href = "/newsletter")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Newsletter and Broadcasts
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => (window.location.href = "/users")}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              All Users
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quotes Analytics Modal */}
      <Dialog open={isQuotesModalOpen} onOpenChange={setIsQuotesModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Quotes Analytics</DialogTitle>
          </DialogHeader>
          <Pie data={getPieChartData(quotesAnalytics)} />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsQuotesModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Contacts Analytics Modal */}
      <Dialog open={isContactsModalOpen} onOpenChange={setIsContactsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Contacts Analytics</DialogTitle>
          </DialogHeader>
          <Pie data={getPieChartData(contactsAnalytics)} />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsContactsModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
