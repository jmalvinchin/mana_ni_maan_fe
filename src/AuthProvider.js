import React, { createContext, useContext, useState } from "react"
import axios from "axios";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return(
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
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


    // return fakeAuth.signin(() => {
    //   setUser("user");
    //   cb();
    // });
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

export { useAuth };
export default AuthProvider;
