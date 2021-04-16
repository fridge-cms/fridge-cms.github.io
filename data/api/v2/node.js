import getCode from "./base";

const init = `import Fridge from "fridge";
const fridge = Fridge.client({token: "xxxxxxxxxxxx"});
`;
const genCode = (path, data = null, method = "get", assign = null) => {
  const args = [`'${path}'`];
  if (data) args.push(JSON.stringify(data, null, 2).replace(/"/g, "'"));

  return `${init}
${assign ? `const ${assign} = ` : ""}fridge.${method}(${args.join(", ")});`;
};

const nodeJs = getCode(genCode, init);

export default (name) => nodeJs.find((item) => item.name === name);
