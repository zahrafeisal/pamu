import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import {
  Search,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";
import { getAllQuotes, createQuote, updateQuote, deleteQuote } from "@/api";
import { cn } from "@/lib/utils";
import { markNotificationAsSeen } from "../api"; // your function

// ✅ Types
export type Quote = {
  id: number;
  companyName: string;
  email: string;
  phone: string;
  countryFrom: string;
  countryTo: string;
  freightType: string;
  containerType: string;
  specialRequirement: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  state: string; // unseen or seen
};

type QuoteForm = Omit<Quote, "id" | "createdAt" | "updatedAt">;

const Quotes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Form + selected
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [formData, setFormData] = useState<QuoteForm>({
    companyName: "",
    email: "",
    phone: "",
    countryFrom: "",
    countryTo: "",
    freightType: "",
    containerType: "",
    specialRequirement: "",
    status: "Pending",
  });

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const data = await getAllQuotes();
      if (data) setQuotes(data);
    } catch (err) {
      console.error("Failed to fetch quotes", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handlers
  const handleAdd = async () => {
    try {
      await createQuote(formData);
      toast({
        title: "Success",
        description: "Quote added successfully!",
        variant: "success",
      });
      setIsAddOpen(false);
      fetchQuotes();
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to add quote.",
        variant: "destructive",
      });
    }
  };

  const handleUpdate = async () => {
    if (!selectedQuote) return;
    try {
      await updateQuote(selectedQuote.id, formData);
      toast({
        title: "Success",
        description: "Quote updated successfully!",
        variant: "success",
      });
      setIsEditOpen(false);
      fetchQuotes();
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to update quote.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this quote?")) return;
    try {
      await deleteQuote(id);
      toast({
        title: "Deleted",
        description: "Quote deleted successfully!",
        variant: "success",
      });
      fetchQuotes();
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to delete quote.",
        variant: "destructive",
      });
    }
  };

  const openView = (quote: Quote) => {
    setSelectedQuote(quote);
    setIsViewOpen(true);
  };

  const openEdit = (quote: Quote) => {
    setSelectedQuote(quote);
    setFormData({ ...quote });
    setIsEditOpen(true);
  };

  // ✅ Filters
  const filteredQuotes = quotes.filter((quote) => {
    const term = searchTerm.toLowerCase();
    return (
      quote.companyName.toLowerCase().includes(term) ||
      quote.email.toLowerCase().includes(term) ||
      quote.phone.toLowerCase().includes(term)
    );
  });

  // ✅ Export as CSV
  const handleExport = () => {
    if (!quotes.length) return;
    const headers = [
      "ID",
      "Company Name",
      "Email",
      "Phone",
      "Country From",
      "Country To",
      "Freight Type",
      "Container Type",
      "Special Requirement",
      "Status",
      "Created At",
    ];
    const rows = quotes.map((q) => [
      q.id,
      q.companyName,
      q.email,
      q.phone,
      q.countryFrom,
      q.countryTo,
      q.freightType,
      q.containerType,
      q.specialRequirement,
      q.status,
      new Date(q.createdAt).toLocaleString(),
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "quotes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-gray-100 text-gray-800";
      case "Confirmed":
        return "bg-blue-100 text-blue-800";
      case "In Transit":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-purple-100 text-purple-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quote Requests</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track all customer quote requests
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button onClick={handleExport} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button
            className="bg-gradient-primary hover:shadow-glow transition-smooth"
            onClick={() => {
              setFormData({
                companyName: "",
                email: "",
                phone: "",
                countryFrom: "",
                countryTo: "",
                freightType: "",
                containerType: "",
                specialRequirement: "",
                status: "Pending",
              });
              setIsAddOpen(true);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Quote
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Quotes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search quotes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quotes Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Quote Requests</CardTitle>
          <CardDescription>
            {loading
              ? "Loading..."
              : `${filteredQuotes.length} of ${quotes.length} quotes displayed`}
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table className="min-w-[1000px] divide-y divide-gray-200">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-left px-4 py-2 w-6"></TableHead>
                <TableHead className="text-left px-4 py-2">Company</TableHead>
                <TableHead className="text-left px-4 py-2">Email</TableHead>
                <TableHead className="text-left px-4 py-2">Phone</TableHead>
                <TableHead className="text-left px-4 py-2">From</TableHead>
                <TableHead className="text-left px-4 py-2">To</TableHead>
                <TableHead className="text-left px-4 py-2">Freight</TableHead>
                <TableHead className="text-left px-4 py-2">Status</TableHead>
                <TableHead className="text-right px-4 py-2">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100">
              {filteredQuotes.map((quote) => {
                const isUnseen = quote.state === "unseen";

                const handleRowClick = async () => {
                  openView(quote);

                  if (isUnseen) {
                    try {
                      await markNotificationAsSeen("quote", quote.id);
                      setQuotes((prev) =>
                        prev.map((q) =>
                          q.id === quote.id ? { ...q, state: "seen" } : q
                        )
                      );
                    } catch (err) {
                      console.error("Failed to mark quote as seen", err);
                    }
                  }
                };

                return (
                  <TableRow
                    key={quote.id}
                    onClick={handleRowClick}
                    className={cn(
                      "hover:bg-gray-50 transition-colors cursor-pointer",
                      isUnseen ? "bg-blue-50 font-medium" : ""
                    )}
                  >
                    <TableCell className="px-4 py-2">
                      {isUnseen && (
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      )}
                    </TableCell>
                    <TableCell className="px-4 py-2 truncate max-w-[150px]">{quote.companyName}</TableCell>
                    <TableCell className="px-4 py-2 truncate max-w-[200px]">{quote.email}</TableCell>
                    <TableCell className="px-4 py-2">{quote.phone}</TableCell>
                    <TableCell className="px-4 py-2">{quote.countryFrom}</TableCell>
                    <TableCell className="px-4 py-2">{quote.countryTo}</TableCell>
                    <TableCell className="px-4 py-2">{quote.freightType}</TableCell>
                    <TableCell className="px-4 py-2">
                      <Badge
                        className={cn(
                          "px-3 py-1 rounded-full text-sm font-semibold",
                          getStatusColor(quote.status)
                        )}
                      >
                        {quote.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-2 text-right flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-green-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEdit(quote);
                        }}
                      >
                        <Edit className="h-4 w-4 text-green-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-red-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(quote.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add/Edit/View Modals */}
      {/* Add Modal */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="space-y-4">
          <DialogHeader>
            <DialogTitle>Add Quote</DialogTitle>
          </DialogHeader>
          <div className="grid gap-2">
            <QuoteFormInputs formData={formData} setFormData={setFormData} />
          </div>
          <DialogFooter>
            <Button onClick={handleAdd}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="space-y-4">
          <DialogHeader>
            <DialogTitle>Edit Quote</DialogTitle>
          </DialogHeader>
          <div className="grid gap-2">
            <QuoteFormInputs formData={formData} setFormData={setFormData} />
          </div>
          <DialogFooter>
            <Button onClick={handleUpdate}>Update</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Modal */}
      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent className="space-y-2">
          <DialogHeader>
            <DialogTitle>Quote Details</DialogTitle>
          </DialogHeader>
          {selectedQuote && (
            <div className="space-y-2">
              <p><strong>Company:</strong> {selectedQuote.companyName}</p>
              <p><strong>Email:</strong> {selectedQuote.email}</p>
              <p><strong>Phone:</strong> {selectedQuote.phone}</p>
              <p><strong>From:</strong> {selectedQuote.countryFrom}</p>
              <p><strong>To:</strong> {selectedQuote.countryTo}</p>
              <p><strong>Freight Type:</strong> {selectedQuote.freightType}</p>
              <p><strong>Container Type:</strong> {selectedQuote.containerType}</p>
              <p><strong>Special Requirement:</strong> {selectedQuote.specialRequirement}</p>
              <p><strong>Status:</strong> {selectedQuote.status}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Reusable form inputs
const QuoteFormInputs = ({ formData, setFormData }: any) => (
  <>
    {[
      { label: "Company Name", key: "companyName", type: "text" },
      { label: "Email", key: "email", type: "text" },
      { label: "Phone", key: "phone", type: "text" },
      { label: "Country From", key: "countryFrom", type: "text" },
      { label: "Country To", key: "countryTo", type: "text" },
      { label: "Special Requirement", key: "specialRequirement", type: "text" },
    ].map((field) => (
      <div className="space-y-2" key={field.key}>
        <Label>{field.label}</Label>
        <Input
          value={formData[field.key]}
          onChange={(e) =>
            setFormData({ ...formData, [field.key]: e.target.value })
          }
        />
      </div>
    ))}

    {/* Select inputs */}
    <div className="space-y-2">
      <Label>Freight Type</Label>
      <select
        className="input"
        value={formData.freightType}
        onChange={(e) => setFormData({ ...formData, freightType: e.target.value })}
      >
        <option value="">Select Freight Type</option>
        <option value="Sea Freight">Sea Freight</option>
        <option value="Air Freight">Air Freight</option>
        <option value="Land Freight">Land Freight</option>
        <option value="Rail Freight">Rail Freight</option>
      </select>
    </div>
    <div className="space-y-2">
      <Label>Container Type</Label>
      <select
        className="input"
        value={formData.containerType}
        onChange={(e) => setFormData({ ...formData, containerType: e.target.value })}
      >
        <option value="">Select Container Type</option>
        <option value="20ft">20ft</option>
        <option value="40ft">40ft</option>
        <option value="40ft HC">40ft HC</option>
      </select>
    </div>
    <div className="space-y-2">
      <Label>Status</Label>
      <select
        className="input"
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="In Transit">In Transit</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>
    </div>
  </>
);

export default Quotes;
