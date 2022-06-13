set -e

: ${BRANCH:=`git rev-parse --abbrev-ref HEAD`}

s3cmd put -r dist s3://frontend-static/${BRANCH}/
s3cmd put -r dist/index.html -f s3://frontend-manifests/${BRANCH}/

echo "Site is deployed to ${CDN_URL}${BRANCH}/"