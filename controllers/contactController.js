const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.status(201).json({ message: "Message submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit message" });
  }

};

 
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve contacts" });
  }
};
