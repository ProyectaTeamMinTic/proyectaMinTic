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
import Landing from "pages/Landing";
import IndexUsers from "pages/private/users";
import Profile from "pages/private/users/profile";
import "styles/globals.css";
import "styles/tabla.css";
import AuthLayout from "layouts/AuthLayout";
import Register from "pages/auth/register";
import Login from "pages/auth/login";
import { AuthContext } from "context/authContext";
import jwt_decode from "jwt-decode";
import AddProgress from "pages/private/progresses/add";
import IndexProgressLeader from "pages/private/progresses/indexL";
import IndexProgressStudent from "pages/private/progresses/indexS";
import IndexProjectsLeader from "pages/private/projects/indexL";
import AddProject from "pages/private/projects/add";
import UpdateProject from "pages/private/projects/update";
import IndexRegistrations from "pages/private/registrations/index";
import IndexProjectsAdmin from "pages/private/projects/indexA";
import IndexProjectsStudent from "pages/private/projects/indexS";
import Main from "pages/private/Main";
import PublicLayout from "layouts/PublicLayout";

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
              <Route path="" element={<PublicLayout />}>
                <Route path="" element={<Landing />} />
              </Route>
              <Route path="/" element={<PrivateLayout />}>
                <Route path="/main" element={<Main />}></Route>
                <Route path="/progresses">
                  <Route path="add" element={<AddProgress />} />
                  <Route path="leader" element={<IndexProgressLeader />} />
                  <Route path="student" element={<IndexProgressStudent />} />
                </Route>
                <Route path="/projects">
                  <Route path="leader" element={<IndexProjectsLeader />} />
                  <Route path="admin" element={<IndexProjectsAdmin />} />
                  <Route path="student" element={<IndexProjectsStudent />} />
                  <Route path="add" element={<AddProject />} />
                  <Route path="update" element={<UpdateProject />} />
                </Route>
                <Route path="/registrations" element={<IndexRegistrations />} />
                <Route path="/users" element={<IndexUsers />}>
                  <Route path="profile/:_id" element={<Profile />} />
                </Route>
              </Route>
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
