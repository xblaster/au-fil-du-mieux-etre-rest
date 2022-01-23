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

function mapResult(body) {
  const resultBody = body.map((json) => ({
    id: json.id,
    title: json.title.rendered,
  }));

  return resultBody;
}

router.get('/', (req, res) => {
  requestify.get(`${baseUrl}/wp/v2/posts`).then((response) => {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
    const body = response.getBody();

    const resultBody = mapResult(body);
    console.log(resultBody);

    // Get the response raw body
    /* res.send(response.body.map(
      (elt) => elt.id,
    ));   */
    res.send(resultBody);
  });
});

module.exports = router;
