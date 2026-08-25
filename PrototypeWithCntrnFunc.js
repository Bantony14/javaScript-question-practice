function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("bantony", 24);
const user2 = new User("antony", 26); // User.call(user1,"bantony", 24)

// this is where adding prototype manually in function user
User.prototype.sayHello = function () {
  console.log("heloo", this.name);
};

const user3 = {};

console.log(user1.sayHello());
console.log(user2.sayHello());
