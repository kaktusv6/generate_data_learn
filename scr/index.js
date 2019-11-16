const { Client } = require('pg');
const fs = require('fs');

const GeneratorData = require('./generator_data');

let client = new Client({
    user: 'postgres', // заполнить свое
    password: '123', // заполнить свое
    host: 'localhost',
    port: '5432',
    database: 'my_store' // заполнить свое
});
client.connect();

let options = [
    {
        "table_name": "test", // создать таюлицу test в 'database' который выше
        "rows": 100000,
        "columns": [
            {
                "name": "words", // создать колонку words  c типом text
                "type": "words",
                "params": {
                    "number": 56
                }
            }
        ]
    }
];

let generator = new GeneratorData();
// Перебираем таблицы
for (let table of options) {
    // ВЫполняем добавлениие данных rows-раз
    for (let i = 0; i < table.rows; ++i) {
        let query = 'insert into ' + table.table_name + ' (';
        // Добавление колонок
        for (let index in table.columns) {
            query += table.columns[index].name;
            if (index < table.columns.length - 1) {
                query +=  ',';
            }
        }
        query += ') values (';
        // Добавление значений
        for (let index in table.columns) {
            query += generator.getData(table.columns[index]);
            if (index < table.columns.length - 1) {
                query +=  ',';
            }
        }
        query += ')';
        client.query(query);
    }
}
