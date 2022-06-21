const Router = require('@koa/router');;
const upload = require('../common/uploadConfig');
const path = require("path");
const router = new Router();

let singleFileConfig = upload.single('file');
let multipleFilesConfig = upload.fields([
  {
    name: 'file',
    maxCount: 5,
  }
]);
const isMultiple = true;
let fileConfig = isMultiple ? multipleFilesConfig : singleFileConfig;


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.post('/upload', fileConfig, async (ctx, next) => {
  console.log(ctx.files);
  ctx.body =  {
    success: true,
    msg: '成功',
  }
})

module.exports = router
