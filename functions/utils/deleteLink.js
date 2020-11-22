const { table } = require("./airtable");
const formattedResponse = require("./formatetedResponse");

module.exports = async event => {
  try {
    const { id } = JSON.parse(event.body);
    const deleteLink = await table.destroy(id);

    return formattedResponse(200, deleteLink);
  } catch (error) {
    console.log(error);
    formattedResponse(500, { msg: "something is wrong !" });
  }
};
