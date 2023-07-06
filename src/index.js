function growthPopulation(p0, percentage, aug, p) {

    let year
    for (p0; p0 <= p; p0++) { // para cada ano que passa

        //atualizo as populações das cidades
        year = p0 + (percentage / 100) + aug
    }
    if (year === p) {
        return 15
    }
}

class Population {
    constructor(p0, percentage, aug, p) {
        this.p0 = p0;
        this.percentage = percentage;
        this.aug = aug;
        this.p = p;
    }
}

module.exports = {
    growthPopulation,
    Population,
}