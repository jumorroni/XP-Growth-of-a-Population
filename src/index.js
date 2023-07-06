function growthPopulation(p0, percentage) {

    // if (p0 === 1500) {
    //     return 1500
    // }
    // if (percentage === 5) {
    //     return 5
    // }
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