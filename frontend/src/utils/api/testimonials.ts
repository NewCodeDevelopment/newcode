import { gql } from "graphql-request";

export const TESTIMONIALS_QUERY = gql`
  query TestimonialsQuery {
    allTestimonial {
      body
      name
      company
    }
  }
`;
