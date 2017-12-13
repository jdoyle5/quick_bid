import express, { Router } from 'express';
// Import index action from items controller
import { index, auctionItem } from './controllers/items';

// Initialize the router
const router = Router();

// Handle /items.json route with index action from items controller
router.route('/items.json')
  .get(index);

router.route('/auctionItem.json')
  .get(auctionItem);

export default router;
