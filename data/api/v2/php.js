import getCode from "./base";

const init = `$fridge = new \\FridgeApi\\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");
`;

const genCode = (path, data = null, method = "get") => {
  const args = [`"${path}"`];
  if (data) args.push(objectToPhp(data));

  return `${init}
$fridge->${method}(${args.join(", ")});`;
};

const objectToPhp = (object, indent = 1) => {
  const i = "  ".repeat(indent);
  if (typeof object === "string") return `"${object}"`;
  if (typeof object === "number") return `${object}`;
  if (Array.isArray(object)) {
    const isAssoc = typeof object[0] === "object";
    const pad = isAssoc ? `\n${i}` : "";
    const delimiter = isAssoc ? `,\n${i}` : ", ";
    return `array(${pad}${object
      .map((v) => objectToPhp(v, indent + 1))
      .join(delimiter)})`;
  }

  return `array(
${i}${Object.keys(object)
    .map((key) => `"${key}" => ${objectToPhp(object[key], indent + 1)}`)
    .join(`,\n${i}`)}\n${"  ".repeat(indent - 1)})`;
};

const php = getCode(genCode, init);

export default (name) => php.find((item) => item.name === name);
