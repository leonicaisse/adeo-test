const { data } = require("./data");
const { count } = require("./count");
const { serializeArguments, getArgumentValue } = require("./utils");

const main = () => {
  // const args = serializeArguments(process.argv.slice(2));
  // const filter = getArgumentValue("filter", args);
  // console.log(JSON.stringify(filterCountries(data, filter), null, 2));

  console.log(JSON.stringify(count(data), null, 2));
};

const filterCountries = (countryList, filter) => {
  const filterCountryList = countryList.reduce((list, country) => {
    const filterPeopleList = filterPeople(country.people, filter);
    if (filterPeopleList.length) {
      list.push({ ...country, people: filterPeopleList });
    }
    return list;
  }, []);
  return filterCountryList;
};

const filterPeople = (peopleList, filter) => {
  const filteredPeopleList = peopleList.reduce((list, people) => {
    const filteredAnimalList = filterAnimals(people.animals, filter);
    if (filteredAnimalList.length) {
      list.push({ ...people, animals: filteredAnimalList });
    }
    return list;
  }, []);
  return filteredPeopleList;
};

const filterAnimals = (animalList, filter) => {
  const filteredAnimalList = animalList.filter((animal) =>
    animal.name.includes(filter)
  );
  return filteredAnimalList;
};

main();

module.exports = {
  main,
  filterCountries,
  filterPeople,
  filterAnimals,
};
