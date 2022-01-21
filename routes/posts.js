const express = require('express');

const router = express.Router();

const baseUrl = 'https://au-fil-du-mieux-etre.com/wp-json';
const requestify = require('requestify');

/**
 * @openapi
 * /posts:
 *   get:
 *     description: list of posts
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', (req, res) => {
  requestify.get(`${baseUrl}/wp/v2/posts`).then((response) => {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
    response.getBody();

    // Get the response raw body
    res.send(response.body);
  });
});

module.exports = router;
