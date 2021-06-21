const collectAnswers = require("../lib/collectAnswers")
const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with Nodejs? "
];

const answerEvents = collectAnswers(questions, answers => {
    console.info("Thank you for your time. ");
    console.info(answers);
    process.exit();
});

answerEvents.on("answer", answer => 
    console.info(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
    console.info("Thank you for your time. ");
    console.info(answers);
});

answerEvents.on("complete", () => process.exit());