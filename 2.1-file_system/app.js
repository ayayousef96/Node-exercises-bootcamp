const fs = require("fs");

//** sync 

  fs.writeFileSync("note.txt", "My name is Aya");
  fs.copyFileSync("note.txt", "copy.txt" );
  fs.copyFileSync("note.txt", "copy2.txt" );
  fs.rename("copy.txt", "copyRenamed.txt",callbackFunc); // rename file
 

// //Copy file function

function callbackFunc(err) {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
}

function getCurrentFilenames() {
    /// readdirSync -- returns array with files names
    console.log("Filenames:");
    fs.readdirSync(__dirname).forEach((file) => {
      console.log(file);
    });
  }
  getCurrentFilenames();

  //new method
  // read files - 
  console.log("Read note file :");
console.log(fs.readFileSync("note.txt", { encoding: "utf8", flag: "r" }));  



