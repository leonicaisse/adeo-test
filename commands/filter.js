const filterCountries = (countryList, filter) => {
    const filterCountryList = countryList.reduce((list, country) => {
        const filterPeopleList = filterPeople(country.people, filter)
        if (filterPeopleList.length) {
            list.push({ ...country, people: filterPeopleList })
        }
        return list
    }, [])
    return filterCountryList
}

const filterPeople = (peopleList, filter) => {
    const filteredPeopleList = peopleList.reduce((list, people) => {
        const filteredAnimalList = filterAnimals(people.animals, filter)
        if (filteredAnimalList.length) {
            list.push({ ...people, animals: filteredAnimalList })
        }
        return list
    }, [])
    return filteredPeopleList
}

const filterAnimals = (animalList, filter) => {
    const filteredAnimalList = animalList.filter((animal) =>
        animal.name.includes(filter)
    )
    return filteredAnimalList
}

module.exports = {
    filterCountries,
    filterPeople,
    filterAnimals,
}
