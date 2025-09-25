import { useEffect, useState } from "react";
import { 
  createContact,
  getAllContacts, 
  deleteContact, 
  getContactById, 
  updateContactStatus,
  markNotificationAsSeen
} from "../api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Search, Download, UserPlus, Eye, Trash2 
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

// DB contact type
interface Contact {
  id: number;
  fullName: string;
  email: string;
  service: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  state: string;
}

const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Modal state
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // New contact form state
  const [newContact, setNewContact] = useState({
    fullName: "",
    email: "",
    service: "",
    message: "",
    status: "new",
    state: "unseen"
  });

  // Fetch contacts
  const fetchContacts = async () => {
    const data = await getAllContacts();
    if (data) setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Stats
  const totalContacts = contacts.length;
  const unseenContacts = contacts.filter(c => c.state === "unseen").length;
  const repliedContacts = contacts.filter(c => c.status === "replied").length;
  const pendingContacts = contacts.filter(c => c.status === "pending").length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800";
      case "replied": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Filter contacts based on search term and status
  const filteredContacts = contacts.filter(contact =>
    (contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
     contact.service.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter ? contact.status === statusFilter : true)
  );

  // Handlers
  const handleDelete = async (id: number) => {
    await deleteContact(id);
    fetchContacts();
  };

  const handleRowClick = async (contact: Contact) => {
    // If contact is unseen, mark it as seen
    if (contact.state === "unseen") {
      await markNotificationAsSeen("contact", contact.id);
      // Update local state immediately
      setContacts(prev =>
        prev.map(c => c.id === contact.id ? { ...c, state: "seen" } : c)
      );
    }

    // Fetch full contact info and open modal
    const fullContact = await getContactById(contact.id);
    setSelectedContact(fullContact);
    setViewModalOpen(true);
  };

  const handleStatusUpdate = async (status: string) => {
    if (!selectedContact) return;
    await updateContactStatus(selectedContact.id, status);
    fetchContacts();
    setSelectedContact({ ...selectedContact, status });
  };

  const handleAddContact = async () => {
    await createContact(newContact);
    setAddModalOpen(false);
    fetchContacts();
    setNewContact({ fullName: "", email: "", service: "", message: "", status: "new", state: "unseen" });
  };

  const handleExport = () => {
    const headers = ["Full Name", "Email", "Service", "Message", "Status", "State", "Created"];
    const rows = filteredContacts.map(c => [
      c.fullName,
      c.email,
      c.service,
      c.message,
      c.status,
      c.state,
      new Date(c.createdAt).toLocaleString()
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(r => r.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-muted-foreground mt-1">Manage your business contacts and relationships</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setAddModalOpen(true)} className="bg-gradient-primary">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Contact
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-4"><p className="text-xl font-bold">{totalContacts}</p><p>Total</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xl font-bold">{unseenContacts}</p><p>Unseen</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xl font-bold">{pendingContacts}</p><p>Pending</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-xl font-bold">{repliedContacts}</p><p>Replied</p></CardContent></Card>
      </div>

      {/* Search & Filter */}
      <Card>
        <CardHeader><CardTitle>Search & Filter</CardTitle></CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-36">
              <Select
                value={statusFilter || "all"}
                onValueChange={(value) => setStatusFilter(value === "all" ? "" : value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="replied">Replied</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Contacts</CardTitle>
          <CardDescription>{filteredContacts.length} of {contacts.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead> {/* dot */}
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.map((contact) => {
                const isUnseen = contact.state === "unseen";
                return (
                  <TableRow
                    key={contact.id}
                    className={cn("hover:bg-gray-50 transition-colors cursor-pointer", isUnseen ? "bg-blue-50 font-medium" : "")}
                    onClick={() => handleRowClick(contact)}
                  >
                    <TableCell className="w-4">{isUnseen && <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>}</TableCell>
                    <TableCell>{contact.fullName}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.service}</TableCell>
                    <TableCell>{contact.message}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                    </TableCell>
                    <TableCell>{new Date(contact.createdAt).toLocaleString()}</TableCell>
                    <TableCell className="text-right flex space-x-2 justify-end" onClick={e => e.stopPropagation()}>
                      <Trash2 className="w-5 h-5 cursor-pointer text-red-600" onClick={() => handleDelete(contact.id)} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Contact Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setAddModalOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Add Contact</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <Input
              placeholder="Full Name"
              value={newContact.fullName}
              onChange={e => setNewContact({ ...newContact, fullName: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={newContact.email}
              onChange={e => setNewContact({ ...newContact, email: e.target.value })}
            />
            <div>
              <Label>Service</Label>
              <Select
                value={newContact.service || ""}
                onValueChange={(value) => setNewContact({ ...newContact, service: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Customs Clearances">Customs Clearances</SelectItem>
                  <SelectItem value="Sea Freight Import/Export">Sea Freight Import/Export</SelectItem>
                  <SelectItem value="Transshipment Cargo">Transshipment Cargo</SelectItem>
                  <SelectItem value="Land & Rail Freight">Land & Rail Freight</SelectItem>
                  <SelectItem value="Air Freight">Air Freight</SelectItem>
                  <SelectItem value="Project Cargo Handling">Project Cargo Handling</SelectItem>
                  <SelectItem value="Motor Vehicle Handling">Motor Vehicle Handling</SelectItem>
                  <SelectItem value="Import & Export Consultancy">Import & Export Consultancy</SelectItem>
                  <SelectItem value="Conventional Cargo Handling">Conventional Cargo Handling</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              placeholder="Message"
              value={newContact.message}
              onChange={e => setNewContact({ ...newContact, message: e.target.value })}
            />
          </div>
          <DialogFooter>
            <Button onClick={handleAddContact}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Contact Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Contact Details</DialogTitle></DialogHeader>
          {selectedContact && (
            <div className="space-y-3">
              <p><strong>Name:</strong> {selectedContact.fullName}</p>
              <p><strong>Email:</strong> {selectedContact.email}</p>
              <p><strong>Service:</strong> {selectedContact.service}</p>
              <p><strong>Message:</strong> {selectedContact.message}</p>
              <p><strong>Created:</strong> {new Date(selectedContact.createdAt).toLocaleString()}</p>
              <div>
                <Label>Status</Label>
                <Select
                  value={selectedContact.status}
                  onValueChange={handleStatusUpdate}
                >
                  <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="replied">Replied</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contacts;
