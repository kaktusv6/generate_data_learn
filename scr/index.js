const {Client} = require('pg');
const {fs} = require('fs');

let client = new Client({
    user: 'postgres',
    password: 'Mamont500',
    host: 'localhost',
    port: '5432',
    database: 'test'
});

let options = [
    {
        "table_name": "test",
        "rows": 100000,
        "columns":[
            {
                "name": "words",
                "type": "words",
                "params": {
                    "number": 56
                }
            }
        ]
    }
];

for (let table of option){
    for(let i = 0; i < table.rows; ++i){
        let query = 'insert into ' + table.table_name + ' ('
    }
}
