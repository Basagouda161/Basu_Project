import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import uploadRoutes from './routes/upload.js';
dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use("/api/auth",authRouter);
app.use('/api/upload', uploadRoutes);

app.use((err,req,res,next)=>{
  const statuscode=err.statuscode||500;
  const message=err.message||"Internal server Error";
  return res.status(statuscode).json({
    success:false,
    statuscode,
    message
  })
}); 
app.listen(3000, () => {
  console.log("✅ Server is running on port 3000");
});
