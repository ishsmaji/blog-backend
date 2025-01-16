const express=require("express");
const router=express.Router();


const {createComment} = require("../controllers/commentController");
const {createPost} = require("../controllers/postController");
const {getAllPost} = require("../controllers/postController");
const {createLike,unLike} = require("../controllers/likeController");


router.post("/createComment",createComment);
router.post("/createPost",createPost);
router.get("/getAllPost",getAllPost);
router.post("/createLike",createLike);
router.post("/unLike",unLike);

module.exports=router;


/**
 * @swagger
 * /createComment:
 *   post:
 *     summary:
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - post
 *               - user
 *               - body
 *             properties:
 *               post:
 *                 type: string
 *                 description: The ID of the post to which the comment belongs
 *               user:
 *                 type: string
 *                 description: The ID of the user creating the comment
 *               body:
 *                 type: string
 *                 description: The text content of the comment
 *     responses:
 *       200:
 *         description: The updated post with the new comment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post:
 *                   type: object
 *                   description: The updated post with the populated comments
 *                   properties:
 *                     _id:
 *                       type: string
 *                     comments:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           post:
 *                             type: string
 *                           user:
 *                             type: string
 *                           body:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /createPost:
 *   post:
 *     summary: 
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the post
 *               body:
 *                 type: string
 *                 description: The content of the post
 *     responses:
 *       200:
 *         description: The created post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post:
 *                   type: object
 *                   description: The created post details
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     body:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /getAllPost:
 *   get:
 *     summary: 
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: List of all posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 posts:
 *                   type: array
 *                   description: Array of all posts with populated comments
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       body:
 *                         type: string
 *                       comments:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             _id:
 *                               type: string
 *                             post:
 *                               type: string
 *                             user:
 *                               type: string
 *                             body:
 *                               type: string
 *                             createdAt:
 *                               type: string
 *                               format: date-time
 *                             updatedAt:
 *                               type: string
 *                               format: date-time
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /createLike:
 *   post:
 *     summary: 
 *     tags: [Likes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - post
 *               - user
 *             properties:
 *               post:
 *                 type: string
 *                 description: The ID of the post to like
 *               user:
 *                 type: string
 *                 description: The ID of the user liking the post
 *     responses:
 *       200:
 *         description: The updated post with the new like
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post:
 *                   type: object
 *                   description: The updated post with populated likes
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     body:
 *                       type: string
 *                     likes:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           post:
 *                             type: string
 *                           user:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /unLike:
 *   post:
 *     summary: 
 *     tags: [Likes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - post
 *               - like
 *             properties:
 *               post:
 *                 type: string
 *                 description: The ID of the post to remove the like from
 *               like:
 *                 type: string
 *                 description: The ID of the like to remove
 *     responses:
 *       200:
 *         description: The updated post after removing the like
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post:
 *                   type: object
 *                   description: The updated post without the removed like
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     body:
 *                       type: string
 *                     likes:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           post:
 *                             type: string
 *                           user:
 *                             type: string
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       404:
 *         description: Like or post not found
 *       500:
 *         description: Some server error
 */
