const serializeArguments = (args = []) => {
   if (!args.length)
      throw new Error(
         'Please provide arguments, such as --count or --filter=<pattern>'
      );
   return args.map((arg) => {
      arg = arg.slice(2);
      const [name, value] = arg.split('=');
      return { name, ...(value && { value }) };
   });
};

const getArgumentValue = (arg, args = []) => {
   const value = args?.find((a) => a.name === arg)?.value;
   if (!value) throw new Error('There is no value for the provided argument');
   return value;
};

module.exports = {
   serializeArguments,
   getArgumentValue,
};
