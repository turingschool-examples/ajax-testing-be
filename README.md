# Integration Testing and AJAX refresher - Back-end

A simple app so you can practice integration testing in Javascript. This is the back-end. The front-end can be found [here](https://github.com/turingschool-examples/ajax-testing-fe)

## Initial Setup

6. Install the dependencies from `package.json`:

  ```shell
  npm install
  ```

2. Create your databases

  ```
  psql

  # CREATE DATABASE ajax_testing_development;
  # CREATE DATABASE ajax_testing_test;
  ```

4. Migrate your dev and test databases, and seed dev
   ```
   knex migrate:latest
   knex migrate:latest --env test
   knex seed:run
   ```

## Run the Server

To see your code in action, you need to fire up a development server. Use the command:

```shell
npm start
```

## Run Tests in the Terminal

To run all of your tests:

```js
npm test
```
