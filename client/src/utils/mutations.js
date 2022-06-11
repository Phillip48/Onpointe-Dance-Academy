import { gql } from '@apollo/client';


// ====================== User Mutations ========================= //
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $aboutMe: String
  ) {
    addUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      aboutMe: $aboutMe
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $password: String
    $aboutMe: String
    $lessons: Lesson
  ) {
    updateUser(
      _id: $ID
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      aboutMe: $aboutMe
      lessons: $Lesson
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      _id
    }
  }
`;
// =============================================== //

// Order mutation for stripe
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;
// =============================================== //