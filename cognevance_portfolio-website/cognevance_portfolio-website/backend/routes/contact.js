const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/contact -> save a new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const newMessage = await Message.create({ name, email, subject, message });
    return res.status(201).json({
      success: true,
      message: 'Message received. Thank you for reaching out!',
      data: newMessage
    });
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// GET /api/contact -> list all messages (simple admin view, add real auth before production use)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.json({ count: messages.length, data: messages });
  } catch (err) {
    return res.status(500).json({ error: 'Could not fetch messages.' });
  }
});

module.exports = router;
