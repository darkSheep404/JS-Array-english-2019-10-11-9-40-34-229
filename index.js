// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
function isArray(tmp) {
    return Array.isArray(tmp);
}

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a.forEach((element, index) => {a[index] = element * 2})
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(' '))
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'))
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(','))

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((x, y) => {return x - y});
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function getmost(arr){
	let obj = arr.reduce((p,n)=>(
     p[n]++ || (p[n]=1),
    (p.max = p.max>=p[n]?p.max:p[n]),
    (p.key = p.max>p[n]?p.key:n),p),{})
        console.log(obj.key)
    }
getmost(a)    