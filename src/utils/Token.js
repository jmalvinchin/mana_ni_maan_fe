import Cookies from 'js-cookie'

export const getToken = () => {
  return {
    "access-token": Cookies.get("access-token"),
    "client": Cookies.get("client"),
    "uid": Cookies.get("uid"),
    "expiry": Cookies.get("expiry"),
    "token-type": Cookies.get("token-type"),
  }
}

export const setToken = (headers) => {
  Cookies.set("access-token", headers["access-token"]);
  Cookies.set("client", headers["client"]);
  Cookies.set("uid", headers["uid"]);
  Cookies.set("expiry", headers["expiry"]);
  Cookies.set("token-type", headers["token-type"]);
}

export const clearCookies = () => {
  Object.keys(Cookies.get()).forEach(c => { Cookies.remove(c)});
};

export const isAuthenticated = () => {
  return (Cookies.get("access-token") != null && Cookies.get("client") != null)
}
