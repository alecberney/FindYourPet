## Description

This project aim to be the backend part of FindYourPet.ch.

It will provide an API to create, read, update or delete animals.

## Requierments

To run this project, you will need an environment file (<i>.env</i>). Ask Herzig Melvyn for it.

Once you obtain it, place it in database folder from backend:

```
backend
│
└─── database
    │   .env
    │   docker-compose.yml
    │
    └───data
        ├───pgadmin
        └───postgres
                01-init.sh
```

## Installation

```bash
$ npm install
```

* Run docker compose frome folder <i>database</i> to start postgres database.
```bash
$ docker-compose up
```
> If you use the provided .env file, be sure to not have a local instance of postgres sql running. The container maps the same ports. 

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
