const { growthPopulation, Population } = require('../src/index.js');

test("Should return the number of population 1500 when is sent by parameter", () => {
    const population = new Population(1500);
    expect(population.p0).toEqual(1500)
});

test("Should return the percentage of population 5 when is sent by parameter", () => {
    const population = new Population(1500, 5);
    expect(population.percentage).toEqual(5)
});