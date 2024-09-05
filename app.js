const { data } = require('./data')
const { filterCountries } = require('./commands/filter')
const { count } = require('./commands/count')
const { serializeArguments, getArgumentValue } = require('./utils')

const main = () => {
    const args = serializeArguments(process.argv.slice(2))
    const commands = args.map((arg) => arg.name)

    if (commands.includes('filter')) {
        const filter = getArgumentValue('filter', args)
        console.log(JSON.stringify(filterCountries(data, filter), null, 2))
    }

    if (commands.includes('count')) {
        console.log(JSON.stringify(count(data), null, 2))
    }
}

main()

module.exports = {
    main,
}
