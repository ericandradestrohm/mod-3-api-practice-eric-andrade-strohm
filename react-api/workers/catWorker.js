onmessage = function(event) {
    if (event.data === 'start') {
        let count = 0;
        for (let i = 0; i < 1e6; i++) {
            count += i;
        }
        postMessage(`Worker finished counting: ${count}`);
    }
};
