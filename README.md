# 💭 API общая информация
- api url - http://localhost:8000/
- api docs - http://localhost:8000/api-docs/  (auto gen. swagger sitemap)

# 🥸 API файлы настроек
- /config/db.js
- /config/mail.js
- /config/access.js

# 🤖 API методы - пример
- /news/id - method: GET, info: singl post
- /news/ - method: GET,  info: all posts
- /news/ - method: POST,  info: insert post
- /news/id - method: DELETE,  info: delete post
- /news/id - method: PUT,  info: update post

# 💬 Полезные инструменты
- MAMPRO https://www.mamp.info/en/mamp-pro/windows/
- Postman - https://www.postman.com/downloads/

# 🔌  Исправления ошибок

Ошибка corss в вашем приложении p.s данная ошибка может возникать в вашем приложении когда обращатесь к данному апи

- Step 1
```
npm install cors
```
- Step 2 
add in server.js after ```require('./app/routes')(app,db);```
```
app.use(cors());
```
- Step 3

добавить в заголовок запроса
```
- post запрос
export const accessToken = 'YOUR TOKEN'
export const headers = {
    "Content-Type": 'application/x-www-form-urlencoded',
    "Authorization": `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}

- get запрос
export const accessToken = 'YOUR TOKEN'
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', `Bearer ${accessToken}`);
```
- Обновление 23.03.2022

```
Исправил формирования swagger docs 
Заменил pug на hbs
Поправил пост запросы
Добавлен логер пино
Добавлен пакет для отправки писем

p.s. Запушил папку node modules т.к есть вероятность недоступности ресурса
```



