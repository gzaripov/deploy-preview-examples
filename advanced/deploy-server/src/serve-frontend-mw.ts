import * as http from "http";
import S3 from "aws-sdk/clients/s3";
type Middleware = (req: http.IncomingMessage, res: http.ServerResponse) => void;

const DEFAULT_STATIC_BRANCH = "main";

const getBranchFromHost = (host: string) => {
  const result = host.match(/([^.]+)\.deploy-server/);

  return result && result[1];
};

export const createServeFrontendMiddleware =
  ({ s3Client }: { s3Client: S3 }): Middleware =>
  async (request, response) => {
    const host = request.headers.host;

    const branch = (host && getBranchFromHost(host)) || DEFAULT_STATIC_BRANCH;

   console.log(`Getting html for branch ${branch}`)

    try {
      const html = await s3Client
        .getObject({
          Bucket: "dp-manifests",
          Key: `${branch}/index.html`,
        })
        .promise();

      const responseString = html.Body?.toString();

      console.log(`Serving html for branch ${branch}`)

      return response.writeHead(200, "OK").end(responseString);
    } catch (error) {
      console.error(error);
      console.error(`Failed to serve html for branch ${branch}`)

      return response.writeHead(500, "Internal server error").end();
    }
  };
