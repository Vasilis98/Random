const inspirationData = {
     quotes: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Believe you can and you are halfway there. - Theodore Roosevelt",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "You miss 100% of the shots you dont take. -Wayne Gretzky"
    ],

    prompts: [
        "What are you grateful for today?",
        "What is one challenge you have overcome recently?",
        "What is your biggest dream?",
        "What can you do today to make the difference?",
        "What is one small step you can take toward your goals?"
    ],

    actionPoints: [
        "Take a few moments to meditate and reflect on your day.",
        "Write down three things you are grateful for in a journal.",
        "Set a small goal for the day and work towards it.",
        "Compliment someone you interact with today.",
        "Take a break and breathe deeply for a few minutes."
    ]
    
};

//Function that generates a random inspirational message

function generateInspirationalMessage() {
    const quote = Math.floor(Math.random() * inspirationData.quotes.length);
    const prompt = Math.floor(Math.random() * inspirationData.prompts.length);
    const action = Math.floor(Math.random() * inspirationData.actionPoints.length);


    const selectedQuote = inspirationData.quotes[quote];
    const selectedPromt = inspirationData.prompts[prompt];
    const selectedAction = inspirationData.actionPoints[action];

    const message = `${selectedQuote}\n${selectedPromt}\n${selectedAction}`;

    return message;
}

const inspirationalMessage = generateInspirationalMessage();
console.log("This is your today's motivation: ")
console.log(inspirationalMessage);
