import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
// 값이 연결되는 것이 아니라 함수가 연결되어야 하므로 괄호 XX
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST /tweets
router.post('/', tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

export default router;
