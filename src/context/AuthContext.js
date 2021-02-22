import React, { createContext } from "react"

const AuthContext = createContext({
  headers: {
    access_token: null,
    client: null,
    expiry: null,
    token_type: null,
    uid: null
  },
  setHeaders: () => {}
})

export default AuthContext;
