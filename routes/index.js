const router = require('express').Router();
const DEFAULT_URL = '/api/';

router.use(DEFAULT_URL+'members', require('./members'));
router.use(DEFAULT_URL+'tasks', require('./tasks'));


module.exports = router;