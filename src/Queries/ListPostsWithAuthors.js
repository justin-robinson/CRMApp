import gql from 'graphql-tag';

export default gql`
    {
        listPost(first: 5) {
            items {
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
    }
`