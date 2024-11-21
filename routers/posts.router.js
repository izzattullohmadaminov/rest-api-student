const { Router } = require("express");
const router = Router();
const {
  allPosts,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/posts.controller");

/**
 * @swagger
 * /posts/all:
 *   get:
 *     summary: Barcha postlarni olish
 *     description: Baza ma'lumotlaridan barcha postlarni olish.
 *     responses:
 *       200:
 *         description: Barcha postlarning ro'yxati.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 */
router.get("/all", allPosts);

/**
 * @swagger
 * /posts/create:
 *   post:
 *     summary: Yangi post yaratish
 *     description: Foydalanuvchiga yangi post yaratishga imkon beradi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post muvaffaqiyatli yaratildi.
 *       400:
 *         description: Noto'g'ri kiritilgan ma'lumotlar.
 */
router.post("/create", createPost);

/**
 * @swagger
 * /posts/delete/{id}:
 *   delete:
 *     summary: Postni o'chirish
 *     description: Postni uning ID-si bo'yicha o'chirish.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O'chiriladigan postning ID-si.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post muvaffaqiyatli o'chirildi.
 *       404:
 *         description: Post topilmadi.
 */
router.delete("/delete/:id", deletePost);

/**
 * @swagger
 * /posts/update/{id}:
 *   put:
 *     summary: Mavjud postni yangilash
 *     description: Postni uning ID-si bo'yicha yangilash.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Yangilanishi kerak bo'lgan postning ID-si.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post muvaffaqiyatli yangilandi.
 *       400:
 *         description: Noto'g'ri kiritilgan ma'lumotlar.
 *       404:
 *         description: Post topilmadi.
 */
router.put("/update/:id", updatePost);

module.exports = router;
