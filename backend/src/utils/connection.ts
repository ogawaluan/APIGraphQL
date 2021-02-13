import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://test123:test123@cluster0.pxxhz.mongodb.net/dowhileApi?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});