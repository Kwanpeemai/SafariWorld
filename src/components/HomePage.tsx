// import { redirect } from "react-router-dom";
import { fakeAuthProvider } from "../Auth";
import { useState } from "react";

const HomePage = () => {
    const [fakeLogin, setFakeLogin] = useState(fakeAuthProvider.isAuthenticated)
  return (
    <div className="container">

      {!fakeLogin ? (
        <button
          type="button"
          onClick={() => {
            setFakeLogin(!fakeLogin)
            fakeAuthProvider.signin('hello')
          }}
        >
          Login
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setFakeLogin(!fakeLogin)
            fakeAuthProvider.signout()
          }}
        >
          Logout
        </button>
      )}

      <h1>Hello This is HomePage</h1>
      <h2>Safari World</h2>
      <ul>
        <li>Peemai</li>
        <li>Tek</li>
        <li>P</li>
        <li>Tor</li>
        <li>Ohm</li>
        <li>Neo</li>
      </ul>
    </div>
  );
};

export default HomePage;
