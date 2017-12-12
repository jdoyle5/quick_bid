import express, { Router } from 'express';
// Import index action from items controller
import { index } from './controllers/items';

// Initialize the router
const router = Router();

// Handle /items.json route with index action from items controller
router.route('/items.json')
  .get(index);

export default router;
