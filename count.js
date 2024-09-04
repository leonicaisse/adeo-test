const count = (data) => {
  return data.map((country) => {
    const formattedPeople = formatPeople(country.people);
    return appendChildrenCount(
      { ...country, people: formattedPeople },
      "people"
    );
  });
};

const formatPeople = (peopleList) => {
  return peopleList.map((people) => {
    return appendChildrenCount(people, "animals");
  });
};

const appendChildrenCount = (data, childrenKey) => {
  const { name, ...rest } = data;
  const count = data[childrenKey].length;
  return { name: `${name} [${count}]`, ...rest };
};

module.exports = {
  count,
  appendChildrenCount,
};
