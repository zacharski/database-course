import Layout from "../components/MyLayout.js";
import Router from "next/router";
import jsCookie from "js-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
    //this.handleSearch();
  }

  render() {
    const that = this;
    return (
      <Layout
        style={{ margin: "auto auto", width: "600px", textAlign: "center" }}
      >
        <h2>Register for an Account</h2>
        <label htmlFor="username" className="text-style">
          Username:{" "}
        </label>
        <input
          type="text"
          id="username"
          className="input-style"
          value={this.state.username}
        />
        <br /> <br />
        <label htmlFor="password" className="text-style">
          Password:{" "}
        </label>
        <input
          type="password"
          id="password"
          className="input-style"
          value={this.state.password}
        />
        <br /> <br />
        <label htmlFor="screenname" className="text-style">
          Real name:{" "}
        </label>
        <input
          type="text"
          id="screenname"
          className="input-style"
          value={this.state.screenname}
        />
        <br />
        <br />
        <div className="button-style">Submit</div>
        <br /> <br />
        <style jsx>{`
          h1,
          h2,
          h3,
          h4,
          a,
          p {
            color: #1f618d;
            font-family: "Arial";
          }

          .button-style {
            margin: auto auto;
            cursor: pointer;
            background-color: #1f618d;
            color: #ffffff;
            width: 150px;
            height: 45px;
            font-family: "Arial";
            line-height: 1.9;
            font-size: 1.4rem;
          }

          .text-style {
            font-size: 1.4rem;
            line-height: 1.6rem;
            font-family: "Arial";
            width: 50px;
            align: right;
          }

          .input-style {
            font-size: 1.4rem;
            line-height: 1.6rem;
          }

          .description {
            font-family: "Arial";
            font-size: "10px";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          input {
            margin: auto auto;
            width: 200px;
          }

          .description {
            font-family: "Arial";
            font-size: "10px";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Login;
