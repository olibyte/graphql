import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }
    
    type Contact {
        firstName: String
        lastName: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {  
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`);

export default schema;