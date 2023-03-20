import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(process.env.GQL_API_URL!, {
  headers: {
    Authorization: `Bearer ${process.env.GQL_API_TOKEN}`,
  },
});
