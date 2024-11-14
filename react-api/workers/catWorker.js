onmessage = function(event) {
    if (event.data === 'start') {
        let counter;
        for (counter = 0; counter < 1000000; counter++) {
            console.log("Meow")
        }
        postMessage(`Worker finished meowing at the console ${counter} times!`);
    }
};
