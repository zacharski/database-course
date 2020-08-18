import Layout from "../components/MyLayout.js";

export default function Index() {
  return (
    <Layout>
      <br />
      <img
        src="/static/logo.svg"
        style={{
          margin: "auto",
          maxWidth: "200px",
          maxHeight: "200px",
          margin: "auto",
        }}
      />
      <h1>Los Alamos Notes - Where Discoveries Are Made</h1>

      <h3>Please login or register</h3>
      <p>Live exponentially!</p>

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
          background-color: #228b22;
          color: #ffffff;
          width: 100px;
          font-family: "Arial";
        }

        .text-style {
          margin: auto auto;
          width: 200px;
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
