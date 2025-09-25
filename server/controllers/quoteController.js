const Quote = require('../models/quotes');

// Create a new quote
const createQuote = async (req, res) => {
  try {
    console.log(Quote);  
    const { companyName, email, phone, countryFrom, countryTo, freightType, containerType, specialRequirement, status } = req.body;
    const newQuote = await Quote.create({
      companyName,
      email,
      phone,
      countryFrom,
      countryTo,
      freightType,
      containerType,
      specialRequirement,
      status: status || 'Pending', 
    });
    return res.status(201).json({ message: 'Quote created successfully', quote: newQuote });
  } catch (error) {
    console.error('Error creating quote:', error);
    return res.status(500).json({ message: 'Error creating quote', error: error.message });
  }
};

// Delete a quote by ID
const deleteQuote = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedQuote = await Quote.destroy({ where: { id } });
    if (deletedQuote === 0) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    return res.status(200).json({ message: 'Quote deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error deleting quote', error: error.message });
  }
};

// Fetch all quotes
const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.findAll({
      order: [
        ['state', 'ASC'],       // unseen first
        ['createdAt', 'DESC'],  // newest first
      ],
    });
    return res.status(200).json(quotes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching quotes', error: error.message });
  }
};

// Fetch a quote by ID
const getQuoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await Quote.findByPk(id);
    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    return res.status(200).json(quote);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching quote', error: error.message });
  }
};

// Fetch quotes by status
const getQuotesByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const quotes = await Quote.findAll({ where: { status } });
    if (quotes.length === 0) {
      return res.status(404).json({ message: `No quotes found with status ${status}` });
    }
    return res.status(200).json(quotes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching quotes by status', error: error.message });
  }
};

// Update a quote's information
const updateQuote = async (req, res) => {
  const { id } = req.params;
  const { companyName, email, phone, countryFrom, countryTo, freightType, containerType, specialRequirement, status } = req.body;
  try {
    const quote = await Quote.findByPk(id);
    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }

    // Update fields if provided
    await quote.update({
      companyName: companyName || quote.companyName,
      email: email || quote.email,
      phone: phone || quote.phone,
      countryFrom: countryFrom || quote.countryFrom,
      countryTo: countryTo || quote.countryTo,
      freightType: freightType || quote.freightType,
      containerType: containerType || quote.containerType,
      specialRequirement: specialRequirement || quote.specialRequirement,
      status: status || quote.status,
    });

    return res.status(200).json({ message: 'Quote updated successfully', quote });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating quote', error: error.message });
  }
};

module.exports = {
  createQuote,
  deleteQuote,
  getAllQuotes,
  getQuoteById,
  getQuotesByStatus,
  updateQuote,
};
