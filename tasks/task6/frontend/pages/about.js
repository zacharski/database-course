import Layout from '../components/MyLayout.js'

export default function About() {
  return (
    <Layout>
      <h2>Featured Video</h2>

<iframe width="560" height="315" src="https://www.youtube.com/embed/LzskqGzoLDA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        <style jsx>{`
          h1, h2, h3, h4,
          a,
          p {
            font-family: "Arial";
            color: #006600
          }


          .button-style {
            margin: auto auto;
            cursor: pointer;
            background-color: #228B22;
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
  )
}
