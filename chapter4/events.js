const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
})

// Computer will say hello world
// emitter.emit("customEvent", "Howdy World", "Computer");
// emitter.emit("customEvent", "That's one cool computer", "Alex");

// emitter gives us a way to emitraise custom events that we can wire events or handlers to.
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Salutations", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});