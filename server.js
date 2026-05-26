require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

//Database connection 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connection: SUCCESS. We are in the cloud"))
  .catch((err) => console.log("MongoDB Connection: FAILED.", err));

//The model
const ticketSchema = new mongoose.Schema({
  title: {type: String, required: true},
  severity: {type: String, required: true, enum: ['Low', 'Medium', 'High', 'Critical']},
  status: {type: String, default: 'Open', enum: ['Open', 'In Progress', 'Resolved', 'Closed']},
  createdAt: {type: Date, default: Date.now}
});

const Ticket = mongoose.model('Ticket', ticketSchema);

//ENDPOINTS

//Health check
app.get('/api/health', (req,res) =>{
  res.status(200).json({
    status: "success",
    message: "Triage api is alive and routing perfectly"
  });
});

//READ (GET)
app.get('/api/tickets', async (req,res) =>{
  try{
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message});
  }
});

//CREATE (POST)
app.post('/api/tickets', async (req,res) =>{
  try{
    const newTicket = await Ticket.create({
      title: req.body.title,
      severity: req.body.severity
    });
    res.status(201).json(newTicket);
  }catch (error){
    res.status(400).json({message: "Validation failed", error: error.message});
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Triage backend running on port ${PORT}`);
});