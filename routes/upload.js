const Router = require('@koa/router');;
const router = new Router();
const multer = require('@koa/multer');
const fileUpload = require('../shirk/shirk');

const singleFileConfig = multer().single('file');
const multipleFilesConfig = multer().fields([
  {
    name: 'file',
    maxCount: 5,
  }
]);
const isMultiple = false;
const fileConfig = isMultiple ? multipleFilesConfig : singleFileConfig;

router.post('/upload', fileConfig, async (ctx, next) => {
  console.log(ctx.file);
  fileUpload(ctx.file);
  ctx.body =  {
    success: true,
    msg: '成功',
  }
})

module.exports = router;
