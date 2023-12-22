
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda"

export const hello = (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  return Promise.resolve({
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!'
    })
  })
}