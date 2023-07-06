const { growthPopulation, Population } = require('../src/index.js');

describe("Creating population", () => {
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

});

describe("Calculating the number of necessary years", () => {

    test("Should return the n number of entire years needed to get a population greater or equal to 5000", () => {
        const population = new Population(1500, 5, 100, 5000);
        expect(growthPopulation(population)).toEqual(15)
    });
});