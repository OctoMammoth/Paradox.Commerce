
# Paradox.Commerce

## Предустановка

### Backend

./backend/.env

`DATABASE_URL` = `postgresql://admin:h01m8dm3@localhost:5432/database?schema=public`

`TOKEN_SECRET` = `randomcharacters`

`USER_SECRET` = `randomcharacters`

`ADMIN_SECRET` = `randomcharacters`

`NODE_ENV` = `debug`

#### Package installing with `yarn`

### Frontend

./front/src/yamap.config.js

`export const MAP_KEY = 'YA-MAPKIT-KEY'`

#### Package installing with `yarn`

### Docker

`cd ./backend/docker`

`docker-compose up -D`

## Запуск проектов

#### Backend
`node ./backend/index.js` или `cd ./backend && yarn start`
#### Frontend
Android: `yarn build android`

IOS: `yarn build ios`
#### Внимание
`IOS` компилируется только на MacOS

на устройство установиться `Debug` версия

