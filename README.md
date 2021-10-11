# Technical Challenge

Crypto Symbols manager API to store and gather pair symbol information

| Tech      | versions |
| --------- | -------- |
| Nodejs    | 14.18.0  |
| Express   | 4.17.1   |
| Axios     | 0.22.0   |
| Jest      | 27.2.5   |
| node-cron | 3.0.0    |
| pg        | 8.7.1    |

### Start project

you can start the project by running the command

```
docker-compose up -d
```

in case that you don't have docker compose, you need to build the image with the following command:

```
docker build .
```

Run the created image:

```
docker run {image-created}
```

with the variables needed to run the project
you can see an example of the variables in the fiile `.env.example`

| TODO             |
| ---------------- |
| Healthcheck      |
| Logger           |
| Cache            |
| Security handler |
