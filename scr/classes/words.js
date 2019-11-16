const Base = require('./base');
const faker = require('faker');

class Words extends Base {
    constructor(params) {
        super(params);
    }

    getData() {
        console.log(faker.random.number(10) + 1);
        return "'" + faker.lorem.words(this.params.number) + "'";
    }
}

module.exports = Words;