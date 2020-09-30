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
      <h1>News</h1>

      <h3>LAHS Student Wins NY Times Summer Reading Contest</h3>
      <img
        src="/static/Elizabeth-Frost.jpg.webp"
        style={{
          margin: "auto",
          maxWidth: "400px",
          maxHeight: "400px",
          margin: "auto",
        }}
      />
      <p>
        Los Alamos High School student Elizabeth Frost has earned a first-place
        finish for her essay submission to the New York Times Summer Reading
        Contest. Since 2010, The Learning Network has encouraged teenagers to
        write an essay about something that sparked their interest in The New
        York Times. Each week June 12-Aug. 21, judges choose a favorite and
        publish the winner’s essay. Frost’s opinion essay was chosen as the
        favorite out of 1,233 submissions during the seventh week of the
        contest. The topic of her essay, which can be read here, was in reaction
        to an article titled “Who Gets to Be a ‘Naked Athena’?” written by
        Mitchell S. Jackson. In her essay, Frost draws similarities between the
        Black Lives Matter movement in Los Alamos to that in Portland and the
        diversion of attention from local racial issues.
      </p>

      <h3>how plutonium powers Mars exploration</h3>
      <img
        src="/static/mars.jpg"
        style={{
          margin: "auto",
          maxWidth: "400px",
          maxHeight: "400px",
          margin: "auto",
        }}
      />
      <p>
        To have dependable power to explore the the frigid surface of Mars,
        NASA’s Perseverance rover is equipped with a type of power system called
        a radioisotope thermoelectric generator (RTG)—which is what the latest
        episode of Mars Technica will tell listeners all about.
      </p>
      <p>
        “An RTG is essentially a nuclear battery that uses heat from the natural
        radioactive decay of plutomium-238 to generate electricity,” said Jackie
        Lopez-Barlow, the radioisotopes power system program manager at Los
        Alamos National Laboratory. “You can’t always rely on solar power,
        particularly when you’re far from the Sun or when dust storms might be a
        problem. RTGs provide long-lasting power that works no matter how far
        out in space you are.”
      </p>

      <h3>
        Simulating quantum ‘time travel’ disproves butterfly effect in quantum
        realm
      </h3>

      <img
        src="/static/quantum.jpg"
        style={{
          margin: "auto",
          maxWidth: "400px",
          maxHeight: "400px",
          margin: "auto",
        }}
      />

      <p>
        Using a quantum computer to simulate time travel, researchers have
        demonstrated that, in the quantum realm, there is no “butterfly effect.”
        In the research, information—qubits, or quantum bits—“time travel” into
        the simulated past. One of them is then strongly damaged, like stepping
        on a butterfly, metaphorically speaking. Surprisingly, when all qubits
        return to the “present,” they appear largely unaltered, as if reality is
        self-healing.{" "}
      </p>

      <style jsx>{`
        h1,
        h2,
        h3,
        h4,
        a {
          color: #1f618d;
          font-family: "Arial";
        }

        h3,
        p {
          color: #1f618d;
          font-family: "Arial";
          text-align: left;
          margin: 20px;
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
