const Login = () => {
    return (
        <div>
            <form>
                <label>
                    Email :
                    <input type="text" name="email" />
                </label>
                <input type="submit" value="Envoyer" />
                <label>
                    Password :
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}

export default Login;