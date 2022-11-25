import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://root:root@cluster0.0lxtfwt.mongodb.net/Cluster0'
);

const db = mongoose.connection;

export default db;
