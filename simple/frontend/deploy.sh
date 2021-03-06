set -e

: ${BRANCH:=`git rev-parse --abbrev-ref HEAD`}

s3cmd put -r --force dist/ s3://frontend-static/${BRANCH}/

echo "Site is deployed to ${CDN_URL}${BRANCH}/"