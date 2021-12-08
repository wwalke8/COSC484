import React, { useContext, useState, createContext } from 'react';

export function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let signin = (newUser, callback) => {
    return localAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return localAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const localAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    localAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback) {
    localAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  }
};

const AuthContext = createContext(!null);

export function useAuth() {
  return useContext(AuthContext);
}