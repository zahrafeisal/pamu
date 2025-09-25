import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3005/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// -------------------- CONTACT API --------------------
export const createContact = async (contactData) => {
  try {
    const response = await api.post('/contacts', contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Something went wrong creating contact' };
  }
};

// -------------------- NEWSLETTER API --------------------
export const subscribeNewsletter = async (email) => {
  try {
    const response = await api.post('/newsletters/subscribe', { email });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Newsletter subscription failed' };
  }
};

// -------------------- QUOTE API --------------------
export const submitQuote = async (formData) => {
  const payload = {
    companyName: formData.company,
    email: formData.email,
    phone: formData.phone,
    countryFrom: formData.from,
    countryTo: formData.to,
    freightType:
      formData.freightType === "ocean"
        ? "Sea Freight"
        : formData.freightType === "air"
        ? "Air Freight"
        : formData.freightType === "land"
        ? "Land Freight"
        : "Rail Freight",
    containerType:
      formData.containerType === "40ft-hc" ? "40ft HC" : formData.containerType,
    specialRequirement: formData.specialRequirements,
    status: "Pending", 
  };

  try {
    const response = await api.post("/quotes", payload);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Failed to create quote" };
  }
};
