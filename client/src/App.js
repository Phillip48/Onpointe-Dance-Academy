import React from 'react';
import logo from './logo.svg';
import './App.css';

// Needed for react router and stripe payments
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

// Importing components and pages needed in this file
import Nav from '../src/components/nav/index';
import Home from '../src/pages/HomePage';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <main>
        <StoreProvider>
          {/* The Navbar is added here to be added to every page that renders */}
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </StoreProvider>
        {/* Renders the footer to the bottom of each page */}
        <Footer />
      </main>
    </Router>
  </ApolloProvider>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
