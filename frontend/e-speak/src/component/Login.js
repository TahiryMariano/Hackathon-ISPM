import React, { useState, useRef } from "react";

const Login = () => {
  return (
    <div className="login_formulaire">
      <form action="">
        <table>
          <tr>
            <td>
              <label htmlFor="email">Email:</label>
            </td>
            <td>
              <input type="email" name="email" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password:</label>
            </td>
            <td>
              <input type="password" name="password" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Login;
