const { data } = require('../data');
const { filterCountries } = require('./filter');
const { count } = require('./count');
const { serializeArguments, getArgumentValue } = require('../utils');

const COMMANDS = {
   FILTER: 'filter',
   COUNT: 'count',
};

const AVAILABLE_COMMANDS = [COMMANDS.COUNT, COMMANDS.FILTER];

const main = () => {
   const args = serializeArguments(process.argv.slice(2));
   const commands = args.map((arg) => arg.name);

   if (!commands.some((command) => AVAILABLE_COMMANDS.includes(command)))
      throw new Error('The command you specified is not available');

   if (commands.includes('filter')) {
      const filter = getArgumentValue('filter', args);
      console.log(JSON.stringify(filterCountries(data, filter), null, 2));
   }

   if (commands.includes('count')) {
      console.log(JSON.stringify(count(data), null, 2));
   }
};

module.exports = main;
