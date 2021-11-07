import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "./loginSlice";

import styles from "./Login.module.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync({ username, password }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label className={styles.loginFormLabel}>
          Username
          <input
            className={styles.loginFormInput}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className={styles.loginFormLabel}>
          Password
          <input
            className={styles.loginFormInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input className={styles.loginSubmitBtn} type="submit" value="Login" />
      </form>
    </div>
  );
};
