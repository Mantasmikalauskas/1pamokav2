import express from 'express'
import * as controller from '../controllers/controller.js'

const router = express.Router()

router.get('/programuotojai', controller.prog_get)
router.post('/programuotojai', controller.prog_post)
router.put('/programuotojai/:id', controller.prog_put)
router.delete('/programuotojai/:id', controller.prog_delete)


// GET viska
router.get('/all', async (req, res) => {
  try {
    const devs = await Dev.find({}, 'vardas _id'); 
    res.json(devs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router


