const Base = require('./base');
const faker = require('faker');

class Words extends Base {
    constructor(params) {
        super(params);
    }

    getData() {
        return "'" + faker.lorem.words(this.params.number) + "'";
    }
}

module.exports = Words;