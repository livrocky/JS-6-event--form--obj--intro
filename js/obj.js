`use strict`;

//obj
//                  0     1     2
const masyvas = ["James", 33, "male"];

masyvas[0]; //vardas

//{key: value, key: value}
const userObj = {
  name: "James",
  age: 33,
  gender: "male",
};

console.log("userObj ===", userObj);

//Gauti JAMES
const keyTake = "gender";

console.log(userObj["name"]);
//kintamojo padavimas i key
console.log(userObj[keyTake]);

console.log(userObj.name);

//obj naujaSavybe = savybes reiksme
//userObj.hasCar = false;
userObj.hasCar = true;
console.log("userObj ===", userObj);

//print a driver if has car

if (userObj.hasCar === true) {
  if (userObj.hasCar === true) {
    console.log(`User ${userObj.name} has car and is a driver`);
  }
}

//array of objects

const users = [
  {
    name: "Mike",
    town: "Vilnius",
  },
  {
    name: "Jane",
    town: "Vilnius",
  },
  {
    name: "Boom",
    town: "Vilnius",
  },
  {
    name: "Nike",
    town: "Vilnius",
  },
];

//gauti boom

console.log(users[2].name);

//visi vardai

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}
