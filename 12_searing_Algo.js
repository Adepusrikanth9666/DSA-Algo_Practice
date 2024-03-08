// Introduction to the searching alogorithms
// Linear Search Algorithm

const users = [
  { userName: "Srikanth", email: "sri@gmail.com" },
  { userName: "Sai", email: "sai@gmail.com" },
  { userName: "Naveen", email: "Naveen@gmail.com" },
  { userName: "rsk", email: "rsk@gmail.com" },
  { userName: "monday", email: "monday @gmail.com" },
];

function isUserExist(arr, val) {
  for (let user of arr) {
    if (user["userName"] === val) {
      return true;
    }
  }
  return false;
}

let result = isUserExist(users, "rsk");
console.log(result);
