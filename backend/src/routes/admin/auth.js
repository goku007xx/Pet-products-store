const express = require('express');
const { requiresignin } = require('../../common-middleware');
const router = express.Router();
const { signup,signin,signout } = require("../../controller/admin/auth");
const { validateSignUpRequest , validateSignInRequest, isRequestValidated } = require('../../validators/auth');

router.post('/admin/signin', validateSignInRequest , isRequestValidated , signin);

router.post('/admin/signup', validateSignUpRequest, isRequestValidated , signup);

router.post('/admin/signout' , signout );

module.exports = router;