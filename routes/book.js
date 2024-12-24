const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/v1/book:
 *   get:
 *     summary: Lấy danh sách example
 *     description: API trả về danh sách các example.
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get("/", (req, res) => {
    res.json(["example1", "example2", "example3"]);
});

module.exports = router;