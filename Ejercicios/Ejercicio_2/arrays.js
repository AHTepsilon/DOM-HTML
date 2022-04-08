const list = [10, 200, 30, 70, 180, 499];

const newList = list.filter(numb => numb > 60);

console.log(newList);

const isUnder500 = list.every(numb => numb < 500);

console.log(isUnder500);

console.log(list.join("-"));

console.log(list.some(numb => numb % 2 !== 0));

const listTimes20 = list.map(numb => numb * 20);

console.log(listTimes20);