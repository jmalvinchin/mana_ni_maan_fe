import Cookies from 'js-cookie'

export const rootDomain = window.location.host.match(/localhost/) ? "localhost" : window.location.host

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
  Cookies.set("access-token", headers["access-token"], { domain: rootDomain });
  Cookies.set("client", headers["client"], { domain: rootDomain });
  Cookies.set("uid", headers["uid"], { domain: rootDomain });
  Cookies.set("expiry", headers["expiry"], { domain: rootDomain });
  Cookies.set("token-type", headers["token-type"], { domain: rootDomain });
}

export const clearCookies = () => {
  Object.keys(Cookies.get()).forEach(c => { Cookies.remove(c)});
};

export const isAuthenticated = () => {
  return (Cookies.get("access-token") != null && Cookies.get("client") != null)
}
