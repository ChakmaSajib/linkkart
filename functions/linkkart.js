const getLinks = require("./utils/getLinks");
const createLink = require("./utils/createLink");
const updateLink = require("./utils/updateLink");
const formattedResponse = require("./utils/formatetedResponse");

exports.handler = async event => {
  if (event.httpMethod === "GET") {
    return await getLinks(event);
  } else if (event.httpMethod === "POST") {
    return await createLink(event);
  } else if (event.httpMethod === "PUT") {
    return await updateLink(event);
  }
  return formattedResponse(200, "Hello World");
};
