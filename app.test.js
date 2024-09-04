const { main } = require("./app");

describe("main", () => {
  it("should export main", () => {
    expect(main).toBeDefined();
  });
});
