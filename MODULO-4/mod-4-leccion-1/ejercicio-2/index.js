const fs = require("fs");

const obj = {
  user: "Patricia Vaquero",
  email: "vaquerosaenzpatricia@gmail.com",
  age: 29,
};

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("The file has been saved!");
  }
};

fs.writeFile("./output.txt", JSON.stringify(obj), handleWriteFile);

console.log(JSON.stringify(obj));