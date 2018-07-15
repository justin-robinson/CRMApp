import gql from 'graphql-tag';

export default gql`
  query ($postId: String!) {
    getPost(postId: $postId) {
      postId
      title
      content
      author {
        firstName
        lastName
        username
      }
    }
  }
`;