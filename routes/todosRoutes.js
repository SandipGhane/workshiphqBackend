const express = require("express");
const router = express.Router();
const { addTodos, updateStatus, getAllTodos } = require("../controllers/index");

router.get('/getAlltodos', async (req, res) => {
    const { email } = req.query;
    try {
        const result = await getAllTodos(email);
        console.log('result', result);
        return res.status(200).send(result);
    } catch (e) {
        return res.status(500).send(0, e.message, e);
    }
})
router.post('/addtodo', async (req, res) => {
    try {
        const result = await addTodos(req.body);
        console.log('result', result);
        return res.status(200).send(result);
    } catch (e) {
        return res.status(500).send(0, e.message, e);
    }
});

router.post('/updatestatus', async (req, res) => {
    try {
        const result = await updateStatus(req.body);
        console.log('result', result);
        return res.status(200).send(result);
    } catch (e) {
        return res.status(500).send(0, e.message, e);
    }
})


module.exports = router;