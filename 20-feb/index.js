const fileSystemModule = require('./fileSystemModule.js');

(async () => {
    await fileSystemModule.listFiles('./');
    await fileSystemModule.createDirectory('createDir');
    await fileSystemModule.readFileContent('./read.txt');
    await fileSystemModule.writeToFile('./writeNewFile.txt', 'Hello, world!');
})();
