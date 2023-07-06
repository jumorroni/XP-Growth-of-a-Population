function growthPopulation(p0, percentage) {

    // if (p0 === 1500) {
    //     return 1500
    // }
    // if (percentage === 5) {
    //     return 5
    // }
}

class Population {
    constructor(p0, percentage) {
        this.p0 = p0;
        this.percentage = percentage;
    }
}

module.exports = {
    growthPopulation,
    Population,
}