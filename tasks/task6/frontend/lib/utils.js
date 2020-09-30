require("isomorphic-fetch");
import BPromise from "bluebird";

function getJson(url) {
  return fetch(url).then(function (resp) {
    console.log(url, resp);
    return resp.json();
    x = 43;
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  createAccount: function (user_info) {
    return { todo: "TO DO" };
  },
  getLogin: function (user_info) {
    return { todo: "TO DO" };
  },
};
