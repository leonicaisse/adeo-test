const { filterCountries, filterAnimals, filterPeople } = require("./app");

const filter = "ry";

describe("main", () => {
  it("should return a list of animal names containing the filter", () => {
    const animalList = [
      { name: "John Dory" },
      { name: "Gayal" },
      { name: "Hawk" },
      { name: "Umbrella Squid" },
      { name: "Hyrax" },
      { name: "Henkel's Leaf-tailed Gecko" },
    ];

    const expected = [{ name: "John Dory" }];

    expect(filterAnimals(animalList, filter)).toStrictEqual(expected);
  });

  it("should return a list of people containing the filter", () => {
    const peopleList = [
      {
        name: "Georgia Hooper",
        animals: [
          { name: "Grasshopper" },
          { name: "Polar Bear" },
          { name: "Rabbit" },
          { name: "Loggerhead Turtle" },
          { name: "Rhinoceros" },
          { name: "African Wild Dog" },
          { name: "Jackal" },
          { name: "Zebu" },
        ],
      },
      {
        name: "Lillie Abbott",
        animals: [
          { name: "John Dory" },
          { name: "Gayal" },
          { name: "Hawk" },
          { name: "Umbrella Squid" },
          { name: "Hyrax" },
          { name: "Henkel's Leaf-tailed Gecko" },
        ],
      },
    ];

    const expected = [
      {
        name: "Lillie Abbott",
        animals: [
          {
            name: "John Dory",
          },
        ],
      },
    ];

    expect(filterPeople(peopleList, filter)).toStrictEqual(expected);
  });

  it("should return a list of countries containing the filter", () => {
    const { data } = require("./data");
    const filter = "ry";
    const filteredList = [
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi",
        people: [
          {
            name: "Anthony Bruno",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ];
    expect(filterCountries(data, filter)).toStrictEqual(filteredList);
  });
});
