// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

dotenv.config();
const app = express();

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// DB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
const profileRoutes = require("./routes/profileRoutes");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/profiles", profileRoutes);


const pledgeRoutes = require('./routes/pledgeRoutes');
app.use('/api/pledge', pledgeRoutes);

const partnershipRoutes = require('./routes/partnershipRoutes');
app.use('/api/partnership', partnershipRoutes);

const firstTimerRoutes = require('./routes/firstTimerRoutes');
app.use('/api/first-timer', firstTimerRoutes);

const secondTimerRoutes = require('./routes/secondTimerRoutes');
app.use('/api/second-timer', secondTimerRoutes);

const newBelieverRoutes = require('./routes/newBelieverRoutes');
app.use('/api/new-believer', newBelieverRoutes);

const churchMemberRoutes = require('./routes/churchMemberRoutes');
app.use('/api/church-member', churchMemberRoutes);

const babyNamingRoutes = require('./routes/babyNamingRoutes');
app.use('/api/baby-naming', babyNamingRoutes);

const dedicationRoutes = require('./routes/dedicationRoutes');
app.use('/api/dedications', dedicationRoutes);

const programAttendanceRoutes = require("./routes/programAttendanceRoutes");
app.use("/api/program-attendance", programAttendanceRoutes);


const coupleRoutes = require('./routes/coupleRoutes');
app.use('/api/couples', coupleRoutes);

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contacts", contactRoutes);

const testimoniesRoutes = require('./routes/testimoniesRoutes');
app.use('/api/testimonies', testimoniesRoutes);

const requestRoutes = require("./routes/requestRoutes");
app.use("/api/requests", requestRoutes);

const subscriptionRoutes = require("./routes/subscriptionRoutes");
app.use("/api/subscribe", subscriptionRoutes);

const welfareRoutes = require("./routes/welfareRoutes");
app.use("/api/welfare", welfareRoutes);


const enquiryRoutes = require("./routes/enquiryRoutes");
app.use("/api/enquiries", enquiryRoutes);


const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


// Health check

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('API is running');
});

