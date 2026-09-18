const EventEmitter = require("events");

const application = new EventEmitter();

application.on("input", (text) => {
    console.log(`Entered text: ${text}`);
});

application.on("buttonClick", () => {
    console.log("Button was clicked.");
});

application.on("formSubmit", () => {
    console.log("Form submitted successfully.");
});

application.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

application.emit("input", "Hello Node.js");
application.emit("buttonClick");
application.emit("formSubmit");
application.emit("notification", "Welcome to the application!");