### Advanced example

1. Create two s3 buckets: dp-manifests & dp-static

2. Install packages `pnpm i`

3. Build and deploy frontend main
```bash
cd frontend

# install s3cmd, for example using brew
brew install s3cmd

# setup CDN or hosting for that bucket, export url that will be used to host static
export CDN_URL=https://dp-static.website.yandexcloud.net/

pnpm run build
pnpm run deploy
```

Make some change and deploy new version:

```bash
cd frontend

# pass branch using BRANCH env variable just for example, by default we use git branch
BRANCH=feature-1111 pnpm run build
BRANCH=feature-1111 pnpm run deploy
```

4. Build and start server
```bash
cd ../deploy-server

pnpm run build

# declare some s3 env variables
export S3_ENDPOINT="***"
export S3_REGION="***"
export S3_ACCESS_KEY="key"
export S3_SECRET_KEY="key"

pnpm start
```

5. Test

```bash

# will return "main" branch
curl --request GET \
  --url http://localhost:3006/ \
  --header 'host: deploy-server.ru'

# will return "feature-1111" branch
curl --request GET \
  --url http://localhost:3006/ \
  --header 'host: feature-1111.deploy-server.ru'
```
