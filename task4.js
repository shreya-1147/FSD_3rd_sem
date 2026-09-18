const EventEmitter = require("events");

const studentTracker = new EventEmitter();

studentTracker.on("login", (studentName) => {
    console.log(`${studentName} logged in successfully.`);
});

studentTracker.on("courseRegistration", (courseName) => {
    console.log(`Course registered: ${courseName}`);
});

studentTracker.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

studentTracker.on("logout", (studentName) => {
    console.log(`${studentName} logged out successfully.`);
});

console.log("----- Student Activity Tracker -----");

studentTracker.emit("login", "Rahul");
studentTracker.emit("courseRegistration", "Full Stack Development");
studentTracker.emit("notification", "Your course registration is confirmed.");
studentTracker.emit("logout", "Rahul");

console.log("----- Activity Completed -----");