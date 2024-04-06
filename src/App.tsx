import { gql } from "@apollo/client";
import "./App.css";
import Query from "./components/Query";

const GET_USERS = gql`
    query getUsers {
        users {
            id
            email
            name
            shareBooks
            shareMovies
        }
    }
`;

const GET_BOOKS = gql`
    query getBooks($userId: ID!) {
        books(userId: $userId) {
            id
            author
            title
            mode
            completed
        }
    }
`;

const GET_MOVIES = gql`
    query getMovies($userId: ID!) {
        movies(userId: $userId) {
            title
            year
            notes
            completed
            imdbId
        }
    }
`;

const VARIABLES = {
    userId: "57a8ba0bd901937c0275bce5",
};

function App() {
    return (
        <>
            <Query label="Users" query={GET_USERS} />
            <Query label="Books" query={GET_BOOKS} variables={VARIABLES} />
            <Query label="Movies" query={GET_MOVIES} variables={VARIABLES} />
        </>
    );
}

export default App;
