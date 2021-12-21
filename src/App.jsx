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
import About from "pages/About"
import IndexUsers from "pages/private/users";
import EditAdmin from "pages/private/users/editAdmin";
import Profile from "pages/private/users/profile"
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
import UpdateL from "pages/private/projects/updateL";
import UpdateStatusA from "pages/private/projects/updateStatusA";
import UpdatePhaseA from "pages/private/projects/updatePhaseA";
import IndexL from "pages/private/registrations/indexL";
import EditStatus from "pages/private/registrations/editStatus"
import IndexProjectsAdmin from "pages/private/projects/indexA";
import IndexProjectsStudent from "pages/private/projects/indexS";
import Main from "pages/private/Main";
import PublicLayout from "layouts/PublicLayout";
import AddObservation from 'pages/private/progresses/addObservation'
import IndexProgressL from "pages/private/progresses/indexProgressL";
import IndexOneProgressE from "pages/private/progresses/indexProgressE";
import AddObjective from "pages/private/projects/addObjective"
import EditProgressE from "pages/private/progresses/editProgressE";

const httpLink = createHttpLink({
  // uri: "http://localhost:4000/graphql",
  uri: "https://back-gestion-proyectos.herokuapp.com/graphql",
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
  // console.log("Datos Usuario:", userData)
  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<PublicLayout />}>
                <Route path="" element={<Landing />} />
                <Route path="/about" element={<About />} />
              </Route>
              <Route path="/" element={<PrivateLayout />}>
                <Route path="/main/" element={<Main />}></Route>
                <Route path="/profile" element={<Profile />} />
                <Route path="/progresses/">
                  <Route path="add/:_id" element={<AddProgress />} />
                  <Route path="leader/" element={<IndexProgressLeader />} />
                  <Route path="student/" element={<IndexProgressStudent />} />
                  <Route path="addObservation/:_id" element={<AddObservation />} />
                  <Route path="indexProgressL/:_id" element={<IndexProgressL />} />
                  <Route path="indexOneProgressE/:_id" element={<IndexOneProgressE />} />
                  <Route path="editOneProgressE/:_id" element={<EditProgressE />} />
                </Route>
                <Route path="/projects/">
                  <Route path="leader/" element={<IndexProjectsLeader />} />
                  {/* <Route path="leader/:_id" element={<IndexProjectsLeader />} /> */}
                  <Route path="admin/" element={<IndexProjectsAdmin />} />
                  <Route path="student/" element={<IndexProjectsStudent />} />
                  <Route path="add/" element={<AddProject />} />
                  <Route path="updateL/:_id" element={<UpdateL />} />
                  <Route path="addObjective/:_id" element={<AddObjective />} />
                  <Route path="updateStatusA/:_id" element={<UpdateStatusA />} />
                  <Route path="updatePhaseA/:_id" element={<UpdatePhaseA />} />
                </Route>
                <Route path="/registrations/">
                  <Route path="registrationsL/" element={<IndexL />} />
                  <Route path="editStatus/:_id" element={<EditStatus />} />
                </Route>
                <Route path="/users/" element={<IndexUsers />} />
                <Route path="/users/editAdmin/:_id" element={<EditAdmin />} />
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
