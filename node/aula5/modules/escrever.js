const fs = require('fs').promises;

module.exports = (file,dados) =>{
    fs.writeFile(file,dados)
}