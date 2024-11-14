// Meows provided by ChatGPT
const meows = [
    "Meow", "Mew", "Miaow", "Mee-oww", "Meeeeeooow", "Meeeeeeeeee-yowww",
    "Mree?", "Mip!", "MEOOOOW!", "MIAAAAW!", "Mrrp!", "Brrp!", "Prrrow!",
    "Grrr-meow!", "Mrrrowww!", "Purrr-meow!", "Mee-ow-purr!", "Meeeh...",
    "Meoww…zzzz", "Mew?", "Merrow?", "Mrrow?", "Nyap!", "Meee-ow!"
];

onmessage = function(event) {
    if (event.data === 'start') {
        let counter;
        for (counter = 0; counter < 1000000; counter++) {
            let randomMeow = meows[Math.floor(Math.random() * meows.length)]
            console.log(randomMeow)
        }
        postMessage(`Finished meowing at the console ${counter} times!`);
    }
};
