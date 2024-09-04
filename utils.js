const serializeArguments = (args) => {
  return args.map((arg) => {
    arg = arg.slice(2);
    const [name, value] = arg.split("=");
    return { name, value };
  });
};

const getArgumentValue = (arg, args) => {
  return args?.find((a) => a.name === arg)?.value;
};

module.exports = {
  serializeArguments,
  getArgumentValue,
};
