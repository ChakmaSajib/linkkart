const { table } = require("./airtable");
const formattedResponse = require("./formatetedResponse");

module.exports = async even => {
  try {
    const { id, ...fields } = JSON.parse(event.body);
    const updateLink = await table.update([{ id, fields }]);
    return formattedResponse(200, updateLink);
  } catch (error) {
    console.error(error),
      formattedResponse(501, { msg: "something is wrong here!" });
  }
};
