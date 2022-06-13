set -e

: ${BRANCH:=`git rev-parse --abbrev-ref HEAD`}

s3cmd put -r dist/assets/ s3://dp-static/${BRANCH}/assets/
s3cmd put -r --force dist/index.html s3://dp-manifests/${BRANCH}/

echo "Site is deployed to ${CDN_URL}${BRANCH}/"