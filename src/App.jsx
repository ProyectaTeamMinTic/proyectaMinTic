import React, { useState, useEffect } from "react";
import PrivateLayout from "layouts/PrivateLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "context/userContext";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Index from "pages/Index";
import IndexUsers from "pages/users";
import Profile from "pages/users/profile";
import "styles/globals.css";
import "styles/tabla.css";
import AuthLayout from "layouts/AuthLayout";
import PublicLayout from 'layouts/PublicLayout'
import Register from "pages/auth/register";
import Login from "pages/auth/login";
import { AuthContext } from "context/authContext";
import jwt_decode from "jwt-decode";
import AddProgress from "pages/progresses/add";
import IndexProgress from "pages/progresses/index";
import IndexProjectsLeader from "pages/projects/indexL";
import AddProject from "pages/projects/add";
import UpdateProject from "pages/projects/update";
import IndexRegistrations from "pages/registrations/index";
import IndexProjectsAdmin from "pages/projects/indexA";
import IndexProjectsStudent from "pages/projects/indexS";

// import PrivateRoute from 'components/PrivateRoute';

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem("token"));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState("");
  const setToken = (token) => {
    console.log("set token", token);
    setAuthToken(token);
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  };
  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      });
    }
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PrivateLayout />}>
                <Route path="/progresses/add" element={<AddProgress />} />
                <Route path="/progresses" element={<IndexProgress />} />
                <Route path="/projects">
                  <Route path="leader" element={<IndexProjectsLeader />} />
                  <Route path="admin" element={<IndexProjectsAdmin />} />
                  <Route path="student" element={<IndexProjectsStudent />} />
                  <Route path="add" element={<AddProject />} />
                  <Route path="update" element={<UpdateProject />} />
                </Route>
                <Route
                  path="/registrations"
                  element={<IndexRegistrations />}
                />
                <Route path="/users" element={<IndexUsers />}>
                  <Route path="profile/:_id" element={<Profile />} />
                </Route>
              </Route>
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="/" element={<PublicLayout />}>
                <Route path="" element={<Index />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
