const router = require('express').Router();
const DEFAULT_URL = '/api/';

router.use(DEFAULT_URL+'members', require('./members'));

module.exports = router;