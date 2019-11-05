import { buildSchema } from 'graphQL';

const schema = buildSchema(`
type Query {
    hello: String
}
`);