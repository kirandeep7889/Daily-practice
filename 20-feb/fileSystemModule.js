const fs = require('fs').promises;

async function listFiles(directoryPath) {
    try {
        const files = await fs.readdir(directoryPath);
        console.log("Files in directory:");
        for( let file of files){
            console.log(file);
        } 
    } catch (error) {
        console.error("Error listing files:", error);
    }
}

async function createDirectory(directoryName) {
    try {
        await fs.mkdir(directoryName);
        console.log(`Directory '${directoryName}' created successfully.`);
    } catch (error) {
        console.error("Error creating directory:", error);
    }
}

async function readFileContent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log("File content:");
        console.log(content);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

async function writeToFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content);
        console.log(`Content has been written to '${filePath}' successfully.`);
    } catch (error) {
        console.error("Error writing to file:", error);
    }
}

module.exports = {
    listFiles,
    createDirectory,
    readFileContent,
    writeToFile
};
