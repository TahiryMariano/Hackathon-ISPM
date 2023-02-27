function Login() {
  return (
    <div className="login_formulaire">
      <form action="">
        <fieldset>
          <legend>Login</legend>
          <table cellSpacing="20px">
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
            <tr>
              <td>
                <button>Sign In</button>
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
