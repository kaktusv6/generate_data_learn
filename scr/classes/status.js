const Base = require('./base');
const faker = require('faker');

class Status extends Base {
    constructor(params){
        super(params);
        this.statuses = [
            'Оформлено',
            'Оплачено',
            'Доставлено',
            'Выдан'
        ];
    }
    getData(){
       // return faken.random.arrayElement(this.statuses);
       return "'"+this.statuses[Math.floor(Math.random()*this.statuses.length)]+"'";
    }

}
module.exports = Status;