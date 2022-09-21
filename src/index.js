import {S3Client} from '@aws-sdk/client-s3'
import { fromIni } from '@aws-sdk/credential-providers'
import multerS3 from  'multer-s3'

export function lakeFS(profile,bucket,endpoint,acl){
    
    let config = {
        credentials: fromIni(profile),
        endpoint: endpoint,
        bucketEndpoint: false,
        forcePathStyle: true,
        region: "us-east-1"
    }   
    
    let s3 = new S3Client(config)
    
    const multerOptions = {
        storage: multerS3({
            s3: s3,
            bucket: bucket,
            acl: acl,
            key: function (req, file, cb) {
              cb(null, "main/" + file.fieldname)
            }
          }),
          fileFilter: (req, file, cb) => {
    
            cb(null, true)
          },
    }

    return multerOptions
    }