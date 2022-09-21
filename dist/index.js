"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lakeFS = lakeFS;

var _clientS = require("@aws-sdk/client-s3");

var _credentialProviders = require("@aws-sdk/credential-providers");

var _multerS = _interopRequireDefault(require("multer-s3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function lakeFS(profile, bucket, endpoint, acl) {
  var config = {
    credentials: (0, _credentialProviders.fromIni)(profile),
    endpoint: endpoint,
    bucketEndpoint: false,
    forcePathStyle: true,
    region: "us-east-1"
  };
  var s3 = new _clientS.S3Client(config);
  var multerOptions = {
    storage: (0, _multerS["default"])({
      s3: s3,
      bucket: bucket,
      acl: acl,
      key: function key(req, file, cb) {
        cb(null, "main/" + file.fieldname);
      }
    }),
    fileFilter: function fileFilter(req, file, cb) {
      cb(null, true);
    }
  };
  return multerOptions;
}