function anotherFunction(){
    return 1+1;
}

function receivesAFunction(callbackFunction) {
    anotherFunction();
   return callbackFunction();
}

function returnsANamedFunction() {
    return function test () {
        1+1;
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        1+1;
    }
}