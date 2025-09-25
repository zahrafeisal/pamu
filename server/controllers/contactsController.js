const Contact = require('../models/contacts');

// 1. Create a new contact
const createContact = async (req, res) => {
  try {
    const { fullName, email, service, message } = req.body;
    const newContact = await Contact.create({
      fullName,
      email,
      service,
      message,
      status: 'new', // Default status is 'new'
    });
    return res.status(201).json({ message: 'Contact created successfully', contact: newContact });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating contact', error: error.message });
  }
};

// Fetch all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({
      order: [
        ['state', 'ASC'],       // unseen first
        ['createdAt', 'DESC'],  // newest first
      ],
    });
    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
};

// 3. Fetch a contact by ID
const getContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    return res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching contact', error: error.message });
  }
};

// 4. Delete a contact by ID
const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedContact = await Contact.destroy({ where: { id } });
    if (deletedContact === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    return res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error deleting contact', error: error.message });
  }
};

// 5. Update contact status by ID
const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // New status value

  // Validate status
  if (!['new', 'pending', 'replied'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status value. Allowed values are: new, pending, replied.' });
  }

  try {
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Update the status
    await contact.update({ status });

    return res.status(200).json({ message: 'Status updated successfully', contact });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating status', error: error.message });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
  updateStatus, 
};
