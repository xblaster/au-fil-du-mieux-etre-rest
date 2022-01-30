const express = require('express');

const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     description: list of users
 *     responses:
 *       200:
 *         description: Returns list of post.
 *         content:
 *            application/json:
 *                schema:
 *                    type: array
 */
router.get('/', (req, res) => {
  res.send([1, 2, 3]);
});

module.exports = router;
