import { gql } from "graphql-request";

export const SERVICES_QUERY = gql`
    query ServicesQuery {
        allServiceGroup {
            title
            services {
                _id
                title
                description
            }
        }
    }
`;
