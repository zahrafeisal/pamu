import { Bell, Search, User, Edit2, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { getMyProfile, updateMyProfile } from "@/api";
import { getAllNotifications, markAllNotificationsAsSeen } from "@/api";

export function AdminHeader() {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState({ fullName: "", email: "", phone: "", role: "" });
  const [editing, setEditing] = useState(false);

  const [notifications, setNotifications] = useState<{ contacts: any[]; quotes: any[] }>({ contacts: [], quotes: [] });
  const [unseenCount, setUnseenCount] = useState(0);

  // Fetch profile
  const fetchProfile = async () => {
    try {
      const data = await getMyProfile();
      if (data) {
        setUserData({
          fullName: data.fullName || "",
          email: data.email || "",
          phone: data.phone || "",
          role: data.role || "",
        });
      }
    } catch (err) {
      console.error("Failed to fetch profile", err);
    }
  };

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      const data = await getAllNotifications();
      if (data) {
        setNotifications(data);
        const unseen =
          (data.contacts?.filter(c => c.state === "unseen")?.length || 0) +
          (data.quotes?.filter(q => q.state === "unseen")?.length || 0);
        setUnseenCount(unseen);
      }
    } catch (err) {
      console.error("Failed to fetch notifications", err);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchNotifications();
  }, []);

  const handleLogout = () => navigate("/");

  const handleSave = async () => {
    try {
      await updateMyProfile(userData);
      setEditing(false);
      alert("Profile updated successfully");
    } catch (err) {
      console.error("Failed to update profile", err);
    }
  };

  const navigateToNotification = (type: "contact" | "quote", id: number) => {
    navigate(`/${type}s`, { state: { highlightId: id } });
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllNotificationsAsSeen();
      fetchNotifications();
    } catch (err) {
      console.error("Failed to mark all notifications as seen", err);
    }
  };

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm">
      <div className="flex h-16 items-center px-6 gap-4">
        <SidebarTrigger className="h-8 w-8" />

        <div className="flex-1 flex items-center space-x-4">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-background/60 border-border/60 focus:bg-background transition-smooth"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                {unseenCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-white text-[10px] flex items-center justify-center rounded-full">
                    {unseenCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto p-2 space-y-2">
              <div className="flex justify-between items-center px-2 py-1 border-b">
                <span className="font-semibold">Notifications</span>
                <Button size="xs" variant="ghost" onClick={handleMarkAllAsRead}>
                  Mark all as read
                </Button>
              </div>

              {notifications.contacts.length > 0 && (
                <>
                  <div className="px-2 py-1 text-xs font-bold text-muted-foreground">Contacts</div>
                  {notifications.contacts.map(n => (
                    <div
                      key={`contact-${n.id}`}
                      className="flex justify-between items-center px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigateToNotification("contact", n.id)}
                    >
                      <div>
                        <span className="font-semibold">{n.fullName}</span> - {n.service}
                      </div>
                      {n.state === "unseen" && <span className="ml-2 text-xs text-destructive font-bold">New</span>}
                    </div>
                  ))}
                </>
              )}

              {notifications.quotes.length > 0 && (
                <>
                  <div className="px-2 py-1 text-xs font-bold text-muted-foreground">Quotes</div>
                  {notifications.quotes.map(q => (
                    <div
                      key={`quote-${q.id}`}
                      className="flex justify-between items-center px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigateToNotification("quote", q.id)}
                    >
                      <div>
                        <span className="font-semibold">{q.companyName}</span> - {q.freightType}
                      </div>
                      {q.state === "unseen" && <span className="ml-2 text-xs text-destructive font-bold">New</span>}
                    </div>
                  ))}
                </>
              )}

              {notifications.contacts.length === 0 && notifications.quotes.length === 0 && (
                <div className="px-2 py-2 text-sm text-muted-foreground">No notifications</div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                <div className="h-8 w-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsProfileOpen(true)}>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Profile Modal */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent aria-describedby="profile-dialog-desc" className="max-w-md space-y-4">
          <DialogHeader>
            <DialogTitle>My Profile</DialogTitle>
          </DialogHeader>

          <p id="profile-dialog-desc" className="sr-only">
            Edit your profile details here.
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Full Name</label>
              <Input
                value={userData.fullName}
                onChange={e => setUserData({ ...userData, fullName: e.target.value })}
                disabled={!editing}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <Input
                value={userData.email}
                onChange={e => setUserData({ ...userData, email: e.target.value })}
                disabled={!editing}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Phone</label>
              <Input
                value={userData.phone}
                onChange={e => setUserData({ ...userData, phone: e.target.value })}
                disabled={!editing}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Role</label>
              <Input value={userData.role} disabled />
            </div>
          </div>

          <DialogFooter className="flex justify-between">
            {editing ? (
              <>
                <Button variant="outline" onClick={() => setEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  <Check className="w-4 h-4 mr-2" /> Save
                </Button>
              </>
            ) : (
              <Button onClick={() => setEditing(true)}>
                <Edit2 className="w-4 h-4 mr-2" /> Edit
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
}
