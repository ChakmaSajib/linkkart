const getLinks = require("./utils/getLinks");
const createLink = require("./utils/createLink");
const updateLink = require("./utils/updateLink");
const deleteLink = require("./utils/deleteLink");
const formattedResponse = require("./utils/formatetedResponse");

exports.handler = async event => {
  if (event.httpMethod === "GET") {
    return await getLinks(event);
  } else if (event.httpMethod === "POST") {
    return await createLink(event);
  } else if (event.httpMethod === "PUT") {
    return await updateLink(event);
  } else if (event.httpMethod === "DELETE") {
    return await deleteLink(event);
  }
  return formattedResponse(405, "");
};
