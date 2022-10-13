function receivesAFunction (cat) {
    return cat()
}
receivesAFunction(function () { return 4 + 5; });
receivesAFunction(function () { return 'Hello, ' + 'world!'; });

function returnsANamedFunction () {
    return function named () {} }

function returnsAnAnonymousFunction () {
    return function () {} }
