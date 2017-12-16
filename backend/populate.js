import mongoose from 'mongoose';
import Item from './models/item';

const minute = 60000;
const hour = 3600000;

// const secondOffset = () => (
//   new Date(Date.now()).getSeconds() * 1000
// );
//
// const bidTime = () => {
//   let t = new Date(Date.now() - secondOffset());
//   return new Date(Math.round(t / 10000) * 10000)
// };

import {bidTime} from './util/datetime';



// Connect to MongoDB

// Go through each item
export const seedData = function() {
  mongoose.connect('mongodb://localhost/items', {
    useMongoClient: true
  });

  var currentMinute = -1;
  const nextMinute = () => {
    currentMinute = currentMinute + 1;
    return currentMinute * minute;
  };

  const auctionTime = () => {
    return new Date(bidTime().getTime() + nextMinute());
  };

  const items = [
    {
      title: "Refurbished Apple iPhone 5S",
      description: "Certified Refurbished Apple iPhone 5S 32GB GSM Smartphone (Unlocked), Gold",
      img_url: "https://i5.walmartimages.com/asr/95ce9fa8-60df-413b-9efb-2ee846eadc0f_1.7ae3977a36eaf934a559a7c9af781964.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 159.99,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "JBL On-Ear Wireless Headphones",
      description: "JBL E45BT On-Ear Wireless Headphones (Blue)",
      img_url: "https://i5.walmartimages.com/asr/2f088dfb-f766-4cd9-bce7-c26bf8cabddf_1.042a623bf25b2649ad496fd114b47e36.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 99.95,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Sterilite 3 Drawer Cart",
      description: "Sterilite Wide 3 Drawer Cart, White",
      img_url: "https://i5.walmartimages.com/asr/9f16f62a-b479-426a-913c-eeb40f7558ba_1.ffcbddabfc303d4e2886483326ebd157.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 51.79,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Canon Powershot SX530 Camera",
      description: "Canon Powershot SX530 HS Camera with 32GB Deluxe Accessory Kit",
      img_url: "https://i5.walmartimages.com/asr/45f9ffc5-a596-4101-8fe4-bfc12e95c118_1.e3d63a57441d7d97a355f74b64023ca1.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 399.99,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Canon EOS 5D Mark IV",
      description: "Canon EOS 5D Mark IV Body Only",
      img_url: "https://i5.walmartimages.com/asr/b564e2f5-b06d-45dc-a107-ce2fe714adb2_1.025d49b7f0fa74b4d382a71ae7678bcf.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 3499,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "14kt Gold Ball Stud Earrings",
      description: "Simply Gold 14kt Yellow Gold 5mm Ball Stud Earrings",
      img_url: "https://i5.walmartimages.com/asr/412ab7f0-9a48-46bc-bd45-ecf3bb54f97f_1.bdf719df4d18254a1817e40d6404b5c8.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 34,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "VIZIO 50\" Smart LED HDTV",
      description: "VIZIO 50\" Class FHD (1080P) Smart Full Array LED HDTV (D50f-E1)",
      img_url: "https://i5.walmartimages.com/asr/6fd8af50-6e43-4d89-b0b3-fa8f4c836f8a_9.8e7e39f5bc52791c8fda228319b627ac.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 418,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Acadian Console Sofa Table",
      description: "Simpli Home Acadian Console Sofa Table",
      img_url: "https://i5.walmartimages.com/asr/219f382b-9161-4c81-b72d-be9238755ba2_1.ea333badb8983e7714fbdd64949ef34a.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 150,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "PlayStation 4 Pro",
      description: "PlayStation 4 Pro 1TB Gaming Console, Black, 3001510",
      img_url: "https://i5.walmartimages.com/asr/1ef9e645-5962-4920-994a-728bd13642a1_1.1a7bf87355c40c1e49f3397d35a86878.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 350,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Bose Wave SoundTouch Music System",
      description: "Bose Wave SoundTouch Music System IV",
      img_url: "https://i5.walmartimages.com/asr/dd5128e7-abb2-4d1e-9e57-2a3051f18095_1.4ac80f9f3ace3db0bf2658f09763c833.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 599,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Bose QuietComfort 35",
      description: "Bose QuietComfort 35 wireless headphones II with Google Assistant",
      img_url: "https://i5.walmartimages.com/asr/f9f5c242-e727-4928-826e-fd716a343284_1.397cbacb01e117753e830bb1cd5eed8f.png?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 349,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Women's Faux Wool Double-Breasted Peacoat",
      description: "Maxwell Studio Women's Faux Wool Double-Breasted Peacoat with Stand Collar",
      img_url: "https://i5.walmartimages.com/asr/7120ca1a-3344-4f9c-ba0f-2bce4f27ab43_1.dcf5ea59af11b90cdae0b7d1a37eb16b.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 40,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Nike Men's Air Huarache",
      description: "Nike Men's Air Huarache Running Shoe",
      img_url: "https://i5.walmartimages.com/asr/91512cae-6dc3-47d3-bbf3-d51b49b4e75e_1.95a07a71ee730f533dc6d5089a89009d.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 110,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Nike Mens Air Foamposite One \"Wu-Tang\" Optic",
      description: "Nike Mens Air Foamposite One \"Wu-Tang\" Optic yellow/Black 314996-701",
      img_url: "https://i5.walmartimages.com/asr/099ce667-125d-4f53-856e-0e26773c9ff7_1.da743c7f2b54acc3d8458d203a81f60f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 200,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Ozark Trail Women's Winter Boot",
      description: "Ozark Trail Women's Tall Winter Boot",
      img_url: "https://i5.walmartimages.com/asr/a82c7622-98a9-45a6-af32-1837874d3a1b_1.c7ce8cd8e5a1f4e2afc83338adfaa069.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 43,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Men's Glacier Insulated Fleece Jacket",
      description: "Ash City - North End Men's Glacier Insulated Three-Layer Fleece Bonded Soft Shell Jacket with Detachable Hood - BLACK 703 - M 88159",
      img_url: "https://i5.walmartimages.com/asr/fe7bd235-f734-4584-a1e0-50af6ea77abc_1.b4017851206e9384c5b23f6347991819.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 146,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Nike Mens Air Jordan 12 Retro",
      description: "Nike Mens Air Jordan 12 Retro \"NEOPRENE\" Black/Gym Red-White 130690-004",
      img_url: "https://i5.walmartimages.com/asr/b97455a5-c7fa-426c-830a-6dae6a44f823_1.e392165f0abed092aa73327eee2f50c8.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 528,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "12\" MacBook",
      description: "MacBook 12\" 512GB Laptop",
      img_url: 1800,
      msrp: "https://i5.walmartimages.com/asr/e6c6e2df-6714-4d18-963f-0d461b621f22_1.09330ec16420462160f341961ef922b9.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Samsung 55\" 4K (2160P) Smart LED TV",
      description: "Samsung 55\" Class 4K (2160P) Smart LED TV (UN55MU6290)",
      img_url: "https://i5.walmartimages.com/asr/a7ab763b-0b6b-42ab-9ca3-2598ac97d07f_8.f32f9b5a271d0921e874b2c94e83a245.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 698,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
    {
      title: "Sony Alpha A6000 Camera with Lens",
      description: "Sony Alpha A6000 Wi-Fi Digital Camera & 16-50mm Lens with 16GB Card + Case + Battery + Tripod + Filter Kit",
      img_url: "https://i5.walmartimages.com/asr/25ccd6f0-4235-4780-b1c4-dcb58dbe3c52_1.aabe5e638513aac66589cd2897b40f93.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      msrp: 730,
      bid_time: auctionTime(),
      highest_bid: 0,
      highest_bidder_key: ""
    },
  ];


  Item.remove([]);
  console.log("repopulate");
  items.map(data => {
    // Initialize a model with item data
    const item = new Item(data);
    // and save it into the database
    item.save((err) => {
      // console.log(err);
    });
    // console.log(item);
  });
};

console.log("reached");
