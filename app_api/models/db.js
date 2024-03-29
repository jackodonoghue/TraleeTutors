const mongoose = require('mongoose');
const config = require('../../config.json');

const dbURI = "mongodb+srv://jackodonoghue:Brqey3s5!@traleetutors-852mk.azure.mongodb.net/TraleeTutors?retryWrites=true&w=majority";


mongoose.connect(String(dbURI),{
useNewUrlParser: true,
useUnifiedTopology: true,
socketTimeoutMS: 0,
keepAlive: true,
}
)
.then(() => console.log('Connected To Mongo!!'))
.catch(err => console.log(err + "\n"));


mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  });
  mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
  
  const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
      console.log(`Mongoose disconnected through ${msg}`);
      callback();
    });
  };
  
  // For nodemon restarts                                 
  process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
      process.kill(process.pid, 'SIGUSR2');
    });
  });
  // For app termination
  process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
      process.exit(0);
    });
  });
  // For Heroku app termination
  process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
      process.exit(0);
    });
  });
  

require('./grinds');
require('./users'); 