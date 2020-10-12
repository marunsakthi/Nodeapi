const express = require('express');
const router = express.Router();

const ContentController = require('../controllers/ContentController');

router.post('/listcontent',ContentController.list);
router.post('/createcontent',ContentController.createcontent);
router.get('/getcontent/:titleid', ContentController.get);
router.put('/updatecontent/:titleid',ContentController.put);
router.delete('/deletecontent/:titleid',ContentController.delete);

module.exports = router;
