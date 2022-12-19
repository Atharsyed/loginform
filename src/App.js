import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
          <div className="container">
            <div className="forms">
              <div className="form login">
                <span className="title">Login</span>
                <form action="#">
                  <div className="input-field">
                    <input type="email" placeholder="Enter your email" required />
                    <i className="uil uil-envelope icon" />
                  </div>
                  <div className="input-field">
                    <input type="password" className="password" placeholder="Enter your password" required />
                    <i className="uil uil-lock icon" />
                    <i className="uil uil-eye-slash showHidePw" />
                  </div>
                  <div className="input-field button">
                    <input type="submit" defaultValue="Login" />
                  </div>
                </form>
                <div className="login-signup">
                  <span className="text">Not a member?
                    <a href="#" className="text signup-link">Signup Now</a>
                  </span>
                </div>
              </div>
              
            </div></div></div>
      </header>
    </div>
  );
}

export default App;
