import { gql } from "graphql-request";

export const CASES_QUERY = gql`
  query CasesQuery($limit: Int) {
    allCase(limit: $limit, sort: { year: DESC }) {
      _id
      title
      short
      slug {
        current
      }
      bannerImage {
        asset {
          url
          altText
        }
      }
    }
  }
`;
