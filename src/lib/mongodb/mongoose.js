import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

export const connect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};