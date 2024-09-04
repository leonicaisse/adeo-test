const { getArgumentValue, serializeArguments } = require("./utils");

describe("utils", () => {
  it("should serialize arguments list", () => {
    const args = ["--filter=ry", "--test=toto", "--toast=titi"];
    const serializedArgs = [
      { name: "filter", value: "ry" },
      { name: "test", value: "toto" },
      { name: "toast", value: "titi" },
    ];
    expect(serializeArguments(args)).toStrictEqual(serializedArgs);
  });

  it("should return the value of an argument", () => {
    const args = [
      { name: "filter", value: "ry" },
      { name: "test", value: "toto" },
      { name: "toast", value: "titi" },
    ];
    const value = "ry";
    expect(getArgumentValue("filter", args)).toBe(value);
  });
});
