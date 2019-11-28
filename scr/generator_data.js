const Words = require('./classes/words');
const  Status = require('./classes/status');
class GeneratorData {
    getData(column) {
        let type = column.type;
        let generator = null;
        switch (type) {
            case 'words': generator = new Words(column.params); break;
            // case 'ineger': generator = new Number(column.params);
            case 'statuses': generator = new Status({}); break;
            default: return null;
        }
        return generator.getData();
    }
}

module.exports = GeneratorData;