const Words = require('./classes/words');

class GeneratorData {
    getData(column) {
        let type = column.type;
        let generator = null;
        switch (type) {
            case 'words': generator = new Words(column.params); break;
            // case 'ineger': generator = new Number(column.params);
            default: return null;
        }
        return generator.getData();
    }
}

module.exports = GeneratorData;