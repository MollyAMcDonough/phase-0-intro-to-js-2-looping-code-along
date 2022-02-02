// Code your solutions in this file
function writeCards(nameArray,event) {
    const messages = [];
    for (let i=0; i<nameArray.length; i++) {
        messages[i] =  `Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`;
        debugger;
    }
    console.log(messages);
    return messages;
}

function countDown(integar) {
    let i = integar
    while (i>=0) {
        console.log(i)
        i--;
    }
}