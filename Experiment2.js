const fs=require('fs');

fs.writeFileSync('student.txt','B.tech NOde.js lab');

const data=fs.readFileSync('student.txt','utf8');

console.log(data);

fs.writeFileSync('student.txt','Name: Rahul\nSubject: Full Stack development')

console.log('file created successfully');

fs.appendFileSync('Student.txt','\nexperiment 2 completed.');

console.log("file updated ")

console.log(data);