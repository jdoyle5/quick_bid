import express, { Router } from 'express';
// Import index action from items controller
// import { index, } from './controllers/items';
import { create } from './controllers/users';

// Initialize the router
const router = Router();

// Handle /items.json route with index action from items controller
router.route('/items.json')
  .get(index);

router.route('/users')
  .post(create);


export default router;
