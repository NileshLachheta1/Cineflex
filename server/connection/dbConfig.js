import mongoose from 'mongoose';

var connection = mongoose.connect('mongodb://127.0.0.1:27017/cineplexdb')
.then(()=>console.log('Connection Established Successfully !!'))
.catch(()=>console.log('Error while dealing with mongodb'));

export default connection;

