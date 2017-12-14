import mongoose from 'mongoose';
import Item from './models/item';
import { increaseBid } from './controllers/auctions';

increaseBid("111079933685151082118", 200);


console.log('reached');
