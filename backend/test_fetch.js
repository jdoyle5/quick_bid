import mongoose from 'mongoose';
import Item from './models/item';



const secondOffset= new Date(Date.now()).getSeconds() * 1000;

const currentTime = new Date(Date.now() - secondOffset);
console.log(currentTime);


Item.find({}).then((err, items) => {
  console.log("inside");
  if (!err) {
    console.log(items);
  }
});


//
// var query = Item.find({});
//
// query.exec((err, items) => {
//   console.log(items);
// });
//
// // Item.find({}, (err, items) => {
// //   console.log(items);
// // });
//
// Item.findOne({bid_time: currentTime}, (err, item) => {
//   console.log(item);
// });


const t = new Date().getTime();
// 1513189778718




console.log('reached');
