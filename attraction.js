// Expecting inputs format : L C N Q1, Q2, Q3
const inputs = readline().split(' ');
const L = parseInt(inputs[0]);
const C = parseInt(inputs[1]);
const N = parseInt(inputs[2]);
var queue = [];
for (let i = 0; i < N; i++) {
    queue.push(parseInt(readline()));
}

// Consider the default value as 0
var moneyMoneyMoney = 0;
// Current group index (to avoid getting the same group twice in one attraction turn)
var j = 0;
for (var i = 0; i < C; ++i) {
    // Number of people going to ride the attraction this turn
    var nbPeople = 0;
    // Current index in tab of group
    var initialJ = j;
    // Flag to check if the group is already in this turn
    var flag = false;
    for (; nbPeople + queue[j] <= L && (flag || (!flag && initialJ == j)); ++j) {
        // If the flag is true, then we already have all the groups inside the attraction so just break the iteration
        if (initialJ == j && flag) break;
        // We've reached the initial group
        if (initialJ == j && !flag) flag = true;
        // If the number of people in the group is <= to the capacity of the attraction
        if (nbPeople + queue[j] <= L) nbPeople += queue[j]
        if (j == queue.length - 1) j = -1
    }
    // get the money made on this particuliar run
    moneyMoneyMoney += nbPeople;
}
print(moneyMoneyMoney);