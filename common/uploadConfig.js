const multer = require('@koa/multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'static/images/')
  },
  filename: function(req, file, cb) {
    const fileFormat = file.originalname.split('.');
    cb(null, fileFormat[0] + '.' +  fileFormat[fileFormat.length - 1]);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 / 2,
  }
})

module.exports = upload;