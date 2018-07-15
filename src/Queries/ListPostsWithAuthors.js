import gql from 'graphql-tag';

export default gql`
    {
        listPost(first: 5) {
            items {
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
    }
`