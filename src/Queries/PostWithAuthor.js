import gql from 'graphql-tag';

export default gql`
  query ($postId: String!) {
    getPost(postId: $postId) {
      postId
      title
      content
      authorId
      author {
        authorId
        firstName
        lastName
        username
      }
    }
  }
`;