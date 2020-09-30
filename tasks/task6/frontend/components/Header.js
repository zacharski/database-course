import Link from "next/link";
import React from "react";
import jsCookie from "js-cookie";
const linkStyle = {
  color: "##1F618D",
  font: "Arial",
  textdecoration: "none",
  size: "1.2em",

  marginRight: 15,
};

export default function Header() {
  return (
    <div className="menu-style">
      <Link href="/">
        <a>Home</a>
      </Link>
      &nbsp; &nbsp; &nbsp;
      {jsCookie.get("screenname") ? (
        <Link href="/logout">
          <a>Logout</a>
        </Link>
      ) : (
        <Link href="/login">
          <a>Login</a>
        </Link>
      )}
      &nbsp; &nbsp; &nbsp;
      {jsCookie.get("screenname") ? null : (
        <Link href="/register">
          <a>Register</a>
        </Link>
      )}
      &nbsp; &nbsp; &nbsp;&nbsp;
      {jsCookie.get("screenname")}
      <style jsx>{`
        .menu-style {
          margin: auto auto;
          margin-top: 35px;
          cursor: pointer;
          color: #1f618d;
          height: 45px;
          font-family: "Arial";
          line-height: 1.5;
          font-size: 1.4rem;

          overflow: hidden;
          white-space: nowrap;
        }

        a {
          text-decoration: none;
        }

        a:hover {
          font-weight: bold;
        }

        a:active {
          background-color: hotpink;
        }

        .horizontalgap {
          float: left;
          overflow: hidden;
          height: 1px;
          width: 10px;
        }

        h1 {
          font-size: 2.1rem;
          font-family: "Arial";
          color: #125213;
        }
        h2 {
          font-family: "Arial";
          font-size: 1.6rem;
        }

        h3 {
          font-family: "Arial";
          font-size: 1.4rem;
        }

        .App-logo {
          height: 500px;
        }
      `}</style>{" "}
    </div>
  );
}
