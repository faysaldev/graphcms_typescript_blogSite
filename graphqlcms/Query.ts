import { gql } from "@apollo/client";

export const  BLOGS_QUERY=gql`
    query MyQuery {
  posts {
    id
    excerpt
    title
    date
    slug
  }
}
`;

export const SINGLE_BLOGS_QUERY=gql`
query MyQuery($slug:String!) {
  post(where: {slug: $slug }){
    title
    stage
    updatedAt
    createdAt
    slug
    date
    excerpt
    content{
      html
    }
    coverImage {
      id
    }
    author{
      stage
      name
      title
      biography
      publishedBy{
        picture
      }
    }
  }
}

`;