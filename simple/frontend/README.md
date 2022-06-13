### Deploy preview simple example

To run this example:


```bash

# install s3cmd, for example using brew
brew install s3cmd

# setup CDN or hosting for that bucket, export url that will be used to host static
export CDN_URL=https://frontend-static.website.yandexcloud.net/

# configure s3 access
pnpm i # (or npm i)

# build frontend
pnpm run build

# deploy frontend

pnpm run deploy
```