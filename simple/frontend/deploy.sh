set -e

BRANCH=`git branch --show-current`

s3cmd put -r dist/ s3://frontend-static/${BRANCH}/
s3cmd put -r dist/index.html s3://frontend-manifests/${BRANCH}/

echo "Site is deployed to ${CDN_URL}${BRANCH}/"