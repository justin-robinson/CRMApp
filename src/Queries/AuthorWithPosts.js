import gql from 'graphql-tag';

export default gql`
  query ($authorId: String!) {
    getAuthor(authorId: $authorId) {
      firstName
      lastName
      emailAddress
      username
      authorId
      posts {
        items {
          title
          content
        }
      }
    }
  }
`;