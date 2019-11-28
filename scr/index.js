const { Client } = require('pg');
// const fs = require('fs');

const GeneratorData = require('./generator_data');

// Указываем данные для подключение к бд
let client = new Client({
    user: 'postgres', // заполнить своего пользователя который указан в Data source в Datagrip
    password: 'Mamont500', // заполнить пароль пользователя из Data source
    host: 'localhost',
    port: '5432', // порт остается прежгий если не меняли при установке Postgresql
    database: 'my_store' // указать наименование database куда хотите загружать данные
});

// Производим подключение к БД
client.connect();

let options = [
    {
        "table_name": "test", // создать таюлицу test в 'database' который выше
        "rows": 100000, // Число добавляемых строк в таблицу
        "columns": [ // Массив колонок
            {
                "name": "name", // указать наименование колонки
                "type": "words", // указываете тип генерируемых данных
                "params": { // Параметры для генератора
                    "number": 2
                }
            }
        ]
    }
];

let generator = new GeneratorData();

// Перебираем таблицы
for (let table of options) {
    // Выполняем добавлениие данных rows-раз
    for (let i = 0; i < table.rows; ++i) {
        let query = 'insert into ' + table.table_name + ' (';

        // Добавление колонок в запрос insert into
        for (let index in table.columns) {
            query += table.columns[index].name;
            if (index < table.columns.length - 1) {
                query +=  ',';
            }
        }

        // Генерирование и добавление значений в запрос insert into
        query += ') values (';
        for (let index in table.columns) {
            query += generator.getData(table.columns[index]);
            if (index < table.columns.length - 1) {
                query +=  ',';
            }
        }
        query += ')';

        // Выполняем сформированный запрос запрос
        client.query(query);
    }
}
