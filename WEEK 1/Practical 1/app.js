
//Reading a file
const fs = require('node:fs');

fs.readFile('./notes/to-do-list.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);

});

//Writing a file
const fs = require('node:fs');

const content = 'Hello! My name is Daniel';

fs.writeFile('./notes/notes.txt', content, err => {
    if (err) {
        console.error(err);
    } else {

    }
});