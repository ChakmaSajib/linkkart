const { table } = require("./airtable");
const formattedResponse = require("./formatetedResponse");

module.exports = async event => {
  try {
    const fields = JSON.parse(event.body);
    const createdLinks = await table.create([{ fields }]);
    return formattedResponse(200, createdLinks);
  } catch (error) {
    console.error(error);
    formattedResponse(500, { msg: "something is went wrong!" });
  }
};
