// tsc 02-basics/01-arrays
// node 02-basics/01-arrays

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["Apple", "Banana", "Orange"];
// console.log(numbers);
// console.log(fruits);

let values: number[] = []
values.push(1234)
let names: Array<string> = []
names.push('Kiran')
// console.log(values);
// console.log(names);

type User = {
    name: string
    isActive: boolean
}
const allUsers: User[] = []
allUsers.push({name: 'Niraj', isActive: true})
// console.log(allUsers);

const MLModels: number[][] = []
MLModels.push([123, 234, 345, 456], [567, 678, 789])
// console.log(MLModels);


export{}