// src/api/api.js
import axios from "axios";

// ✅ Base URL from .env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Global error handler
const handleError = (error, defaultMessage) => {
  console.error("API Error:", error.response?.data || error.message);
  throw error.response?.data || { error: defaultMessage };
};


/* -------------------- AUTH API ------------------- */

// Login user
export const loginUser = async (credentials) => {
  try {
    const res = await api.post("/auth/login", credentials);
    // Usually backend returns a token
    return res.data;
  } catch (err) {
    handleError(err, "Login failed");
  }
};

// Logout user
export const logoutUser = async (token) => {
  try {
    const res = await api.post(
      "/auth/logout",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (err) {
    handleError(err, "Logout failed");
  }
};


/* -------------------- CONTACT API -------------------- */

// Get all contacts
export const getAllContacts = async () => {
  try {
    const res = await api.get("/contacts");
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch contacts");
  }
};

// Get contact by ID
export const getContactById = async (id) => {
  try {
    const res = await api.get(`/contacts/${id}`);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch contact");
  }
};

// Delete a contact
export const deleteContact = async (id) => {
  try {
    const res = await api.delete(`/contacts/${id}`);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to delete contact");
  }
};

// Create a contact
export const createContact = async (contactData) => {
  try {
    const res = await api.post("/contacts", contactData);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to create contact");
  }
};

// Update the status of a contact
export const updateContactStatus = async (id, status) => {
  try {
    const res = await api.patch(`/contacts/${id}/status`, { status });
    return res.data;
  } catch (err) {
    handleError(err, "Failed to update contact status");
  }
};


/* -------------------- NEWSLETTER API -------------------- */
export const subscribeNewsletter = async (email) => {
  try {
    const res = await api.post("/newsletters/subscribe", { email });
    return res.data;
  } catch (err) {
    handleError(err, "Newsletter subscription failed");
  }
};

export const unsubscribeNewsletter = async (email) => {
  try {
    const res = await api.delete(`/newsletters/unsubscribe/${email}`);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to unsubscribe");
  }
};

export const getNewsletterStats = async () => {
  try {
    const res = await api.get("/newsletters/stats");
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch newsletter stats");
  }
};

export const getAllSubscriptions = async () => {
  try {
    const res = await api.get("/newsletters");
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch subscriptions");
  }
};

/* -------------------- QUOTE API -------------------- */
export const getAllQuotes = async () => {
  try {
    const res = await api.get("/quotes");
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch quotes");
  }
};

export const getQuoteById = async (id) => {
  try {
    const res = await api.get(`/quotes/${id}`);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch quote");
  }
};

export const getQuotesByStatus = async (status) => {
  try {
    const res = await api.get(`/quotes/status/${status}`);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch quotes by status");
  }
};

export const createQuote = async (quoteData) => {
  try {
    const res = await api.post("/quotes", quoteData);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to create quote");
  }
};

export const updateQuote = async (id, updateData) => {
  try {
    const res = await api.put(`/quotes/${id}`, updateData);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to update quote");
  }
};

export const deleteQuote = async (id) => {
  try {
    const res = await api.delete(`/quotes/${id}`);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to delete quote");
  }
};

/* -------------------- USER API -------------------- */
export const getAllUsers = async (token) => {
  try {
    const res = await api.get("/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch users");
  }
};

export const getUserById = async (id, token) => {
  try {
    const res = await api.get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch user");
  }
};

export const createUser = async (userData) => {
  try {
    const res = await api.post("/users", userData);
    return res.data;
  } catch (err) {
    handleError(err, "Failed to create user");
  }
};

export const updateUser = async (id, updateData, token) => {
  try {
    const res = await api.put(`/users/${id}`, updateData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    handleError(err, "Failed to update user");
  }
};

export const deleteUser = async (id, token) => {
  try {
    const res = await api.delete(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    handleError(err, "Failed to delete user");
  }
};

// Get authenticated user's profile
export const getMyProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No auth token found");

    const res = await api.get("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch profile");
  }
};

// Update authenticated user's profile
export const updateMyProfile = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No auth token found");

    const res = await api.put("/users/me", userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    handleError(err, "Failed to update profile");
  }
};

// Analytics: Quotes status counts
export const getQuotesAnalytics = async () => {
  try {
    const res = await api.get("/analytics/quotes");
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch quotes analytics");
  }
};

// Analytics: Contacts status counts
export const getContactsAnalytics = async () => {
  try {
    const res = await api.get("/analytics/contacts");
    return res.data;
  } catch (err) {
    handleError(err, "Failed to fetch contacts analytics");
  }
};

export const getAllNotifications = async () => {
  try {
    const res = await api.get('/notifications');
    return res.data;
  } catch (err) {
    handleError(err, 'Failed to fetch notifications');
  }
};

export const markNotificationAsSeen = async (type, id) => {
  try {
    const res = await api.put(`/notifications/${type}/${id}`);
    return res.data;
  } catch (err) {
    handleError(err, 'Failed to mark notification as seen');
  }
};

export const markAllNotificationsAsSeen = async () => {
  try {
    const res = await api.put('/notifications/mark-all-seen');
    return res.data;
  } catch (err) {
    handleError(err, 'Failed to mark all notifications as seen');
  }
};

export default api;
