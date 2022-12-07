import yargs from "yargs";
import { addUser, removeUser, updateUser, readUser } from "./users.js";
import { hideBin } from "yargs/helpers";




//create user
yargs(hideBin(process.argv))
  .command({
    command: "create",
    describe: "create user",
    builder: {
      name: {
        describe: "user name",
        demandOptions: true,
        type: "string",
      },
      email: {
        describe: "user email",
        demandOptions: true,
        type: "string",
      },
      id: {
        describe: "user id",
        demandOptions: false,
        type: "string",
      },
    },

    handler: (argv) => {
      addUser(argv.name, argv.email);
    },
  })
  .parse();


yargs(hideBin(process.argv))
  .command({
    command: "delete",
    describe: "delete a user",
    builder: {
      id: {
        describe: "user id",
        demandOptions: true,
        type: "string",
      },
    },
    handler: (argv) => {
      removeUser(argv.id);
    },
  })
  .parse();


  yargs(hideBin(process.argv))
  .command({
    command: "read",
    describe: "read a user",
    builder: {
      id: {
        describe: "user id",
        demandOptions: true,
        type: "string",
      },
    },
    handler: (argv) => {
      readUser(argv.id);
    },
  })
  .parse();

  //update  user by id
yargs(hideBin(process.argv))
  .command({
    command: "update",
    describe: "update a user",
    builder: {
      id: {
        describe: "user id",
        demandOptions: true,
        type: "string",
      },
      name: {
        describe: "user name",
        demandOptions: false,
        type: "string",
      },
      email: {
        describe: "user email",
        demandOptions: false,
        type: "string",
      },
    },
    handler: (argv) => {
      updateUser(argv.id, argv.name, argv.email);
    },
  })
  .parse();

 