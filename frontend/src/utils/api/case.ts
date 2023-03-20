import { gql } from "graphql-request";

export const CASE_QUERY = gql`
    query CaseQuery($handle: String!) {
        allCase(where: { slug: { current: { eq: $handle } } }, limit: 1) {
            _id
            title
            short
            main
            problem
            solution
            slug {
                current
            }
            service {
                title
            }
            sector {
                title
            }
            client
            type
            year
            productUrl
            bannerImage {
                asset {
                    url
                    altText
                }
            }
            images {
                asset {
                    url
                    altText
                }
            }
        }
    }
`;
