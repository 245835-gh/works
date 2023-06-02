const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Використання body-parser для розбору даних з POST-запиту
app.use(bodyParser.urlencoded({ extended: true }));

// Обробник POST-запиту з даними форми
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Результат</title>
        <style>
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="modal">
          <div class="modal-content">
            <h2>Дані:</h2>
            <p>Ім'я: ${name}</p>
            <p>Вік: ${age}</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});
