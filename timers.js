const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

console.info(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('done');
}


// Calls increment time and loops forever
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);