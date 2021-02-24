import React, { createContext, useContext, useState } from "react"
import axios from "axios";
import { LOGIN } from "./Api"

const AuthContext = createContext();

function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return(
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function requestHeaders(headers) {
  return {
    "access-token": headers.access_token,
    "client": headers.client,
    "uid": headers.uid,
    "expiry": headers.expiry,
    "token-type": headers.token_type
  }
}

function useAuth() {
  return useContext(AuthContext);
}

function useAuthProvider() {
  const [headers, setHeaders] = useState({});

  const signin = (email, password, cb) => {
    axios.post("http://localhost:3000/auth/sign_in", {
      email: email,
      password: password
    }).then(res => {
      setHeaders({
        access_token: res.headers["access-token"],
        client: res.headers["client"],
        expiry: res.headers["expiry"],
        token_type: res.headers["token-type"],
        uid: res.headers["uid"],
      });
      cb();
    })
  };

  const signout = cb => {
    // return fakeAuth.signout(() => {
    //   setUser(null);
    //   cb();
    // });
  };

  return {
    headers,
    signin,
    signout
  };
}

export { useAuth, requestHeaders };
export default AuthProvider;
