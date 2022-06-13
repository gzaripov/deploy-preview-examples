Install cmd

`brew install s3cmd`


`s3cmd --configure` or set env variables
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html

DEPLOY_STATIC_BUCKET=frontend-static
DEPLOY_MANIFEST_BUCKET=frontend-manifests
CDN_URL=https://frontend-static.website.yandexcloud.net/