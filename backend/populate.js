import mongoose from 'mongoose';
import Item from './models/item';
const items = [
  {
    title: "Certified Refurbished Apple iPhone 5S 32GB GSM Smartphone (Unlocked), Gold",
    img_url: "https://i5.walmartimages.com/asr/95ce9fa8-60df-413b-9efb-2ee846eadc0f_1.7ae3977a36eaf934a559a7c9af781964.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    msrp: 159.99
  },
  {
    title: "JBL E45BT On-Ear Wireless Headphones (Blue)",
    img_url: "https://i5.walmartimages.com/asr/2f088dfb-f766-4cd9-bce7-c26bf8cabddf_1.042a623bf25b2649ad496fd114b47e36.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    msrp: 99.95
  },
  {
    title: "Sterilite Wide 3 Drawer Cart, White",
    img_url: "https://i5.walmartimages.com/asr/9f16f62a-b479-426a-913c-eeb40f7558ba_1.ffcbddabfc303d4e2886483326ebd157.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    msrp: 51.79
  },
  {
    title: "Canon Powershot SX530 HS Camera with 32GB Deluxe Accessory Kit",
    img_url: "https://i5.walmartimages.com/asr/45f9ffc5-a596-4101-8fe4-bfc12e95c118_1.e3d63a57441d7d97a355f74b64023ca1.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    msrp: 399.99
  },
  {
    title: "Canon EOS 5D Mark IV Body",
    img_url: "https://i5.walmartimages.com/asr/b564e2f5-b06d-45dc-a107-ce2fe714adb2_1.025d49b7f0fa74b4d382a71ae7678bcf.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    msrp: 3499
  },
];
// Connect to MongoDB
mongoose.connect('mongodb://localhost/items', {
  useMongoClient: true
});
// Go through each movie
items.map(data => {
  // Initialize a model with movie data
  const item = new Item(data);
  // and save it into the database
  item.save();
});
console.log("reached");
