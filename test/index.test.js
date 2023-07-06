const { growthPopulation } = require('../src/index.js');

test("Should return the number of population 1500 when is sent by parameter", () => {
    expect(growthPopulation(1500)).toBe(1500)
})