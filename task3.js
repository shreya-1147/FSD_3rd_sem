console.log("1. Synchronous code - Before scheduling callbacks");

process.nextTick(() => {
    console.log("2. process.nextTick() executed");
});

setTimeout(() => {
    console.log("3. setTimeout() executed");
}, 0);

setImmediate(() => {
    console.log("4. setImmediate() executed");
});

console.log("5. Synchronous code - After scheduling callbacks");