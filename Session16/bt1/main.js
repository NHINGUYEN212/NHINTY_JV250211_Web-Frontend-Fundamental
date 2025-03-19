function processConfirm() {
    answer = confirm("Do you want to play a game?");
    let result;

    if (answer) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}
let message = processConfirm();
alert(message);

