const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     description: list of users
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', function (req, res, next) {
  res.send([1, 2, 3]);
});

module.exports = router;
