const express = require('express');
const router = express.Router();

const controller = require("../controller/request.controller")

router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/create', controller.createPost);
router.delete('/delete/:id', controller.deleteItem);
router.get('/edit/:id', controller.edit);
router.patch('/edit/:id', controller.editPatch);
router.get('/detail/:id', controller.detail);
router.patch('/detail/assignFullRequest', controller.assignFullRequest);
router.patch('/detail/assignSubRequest/:requestDetailId', controller.assignSubRequest);
router.patch('/detail/cancel/:requestDetailId', controller.cancel);
router.patch('/detail/changeTime/:requestDetailId', controller.changeTime);
router.get('/updateRequestDone/:requestId', controller.updateRequestDone);
router.patch('/updateRequestDone/:requestId', controller.updateRequestDonePatch);

module.exports = router;