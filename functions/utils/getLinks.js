const { table } = require("./airtable");
const formattedResponse = require("./formatetedResponse");

module.exports = async event => {
  try {
    const links = await table.select().firstPage();
    const formattedLinks = links.map(link => ({ id: link.id, ...link.fields }));
    return formattedResponse(200, formattedLinks);
  } catch (error) {
    console.error(error);
    formattedResponse(500, { msg: "something is missing " });
  }
};
