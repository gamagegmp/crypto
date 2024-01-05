const express = require('express');
const {
  getAllCryptos,
  addCrypto,
  deleteCrypto,
  getCryptoByName,
} = require('../controllers/cryptoController');

const router = express.Router();

router.get('/', getAllCryptos);
router.get('/name/', getCryptoByName);
router.post('/', addCrypto);
router.delete('/:id', deleteCrypto);

module.exports = router;
