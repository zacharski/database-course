import Layout from "../components/MyLayout.js";
import Router from "next/router";
import jsCookie from "js-cookie";

class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
    jsCookie.remove("screenname");

    //this.handleSearch();
  }

  componentDidMount() {
    Router.replace("/");
  }

  render() {
    const that = this;

    return <div>Hi</div>;
  }
}

export default Logout;
