const Subscription = require("../models/Subscription");

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required." });

  try {
    const existing = await Subscription.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already subscribed." });
    }

    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    res.status(201).json({ message: "Subscribed successfully." });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ message: "Server error." });
  }
};
