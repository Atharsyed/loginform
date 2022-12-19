var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          {/* === Coding by CodingLab | www.codinglabweb.com === */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* ===== Iconscout CSS ===== */}
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
          {/* ===== CSS ===== */}
          <link rel="stylesheet" href="style.css" />
          {/*<title>Login & Registration Form</title>*/}
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
              {/**/}
            </div></div></div>
      );
    }
  });