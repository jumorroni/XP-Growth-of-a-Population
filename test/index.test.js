const { growthPopulation, Population } = require('../src/index.js');

test("Should return the number of population 1500 when is sent by parameter", () => {
    const population = new Population(1500);
    expect(population.p0).toEqual(1500)
});

test("Should return the percentage of population 5 when is sent by parameter", () => {
    const population = new Population(1500, 5);
    expect(population.percentage).toEqual(5)
});

test("Should return the number aug 100 when is sent by parameter", () => {
    const population = new Population(1500, 5, 100);
    expect(population.aug).toEqual(100)
});

test("Should return the number p 5000 when is sent by parameter", () => {
    const population = new Population(1500, 5, 100, 5000);
    expect(population.p).toEqual(5000)
});