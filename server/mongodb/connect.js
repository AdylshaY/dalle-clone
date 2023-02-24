import mongoose from 'mongoose';

const conenctDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose
    .connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch((e) => console.log(e));
};

export default conenctDB;
