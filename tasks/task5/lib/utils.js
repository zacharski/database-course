require("isomorphic-fetch");

function getParkInfo(name) {
  console.log("Fetching");
  return fetch(`http://35.190.190.219/api/park?name=${name}`).then(function(
    resp
  ) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getInfo: function(park) {
    return getParkInfo(park).catch(handleError);
  },
};
