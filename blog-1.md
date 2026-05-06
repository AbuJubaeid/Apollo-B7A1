//=> Answer-1:
In TypeScript, we use types which helps us avoid mistakes in our code. From the primitive data type group we use any and unknown. They look similar, but they are very different.

any: If we declare a variable but do not declare it's type with it then it is considered an any type.
let x;
It is considered as [let x: any]

unknown: If we declare a variable with type unknown then at the first period we do not know what will be the data type for the specific variable. When the code run then in the runtime the program get the datatype and then run the code
let x : unknown

Why any is called a “type safety hole” ?
If we use any type for a variable, TypeScript stops checking that variable completely. It means we can store any type of value and also use any method on it without errors during development.

let x: any;

x = "Hello";
x.toUpperCase();
It will work fine.

x = 10;
x.toUpperCase();
It will not work. It will give runTime error.

Because of this behavior any is called a "type safety hole". It breaks TypeScript’s main purpose which is to catch errors before running the code.

why is unknown the safer choice for handling unpredictable data?
TypeScript does not allow us to use that value directly. First, we need to check the type before using it. This helps prevent runtime errors. So this is safer choice for handling unpredictable data.

const discountCalculator = (input: unknown) => {
if (typeof input === "number") {
const discountedPrice = input _ 0.1;
console.log(discountedPrice);
} else if (typeof input === "string") {
const [discountedPrice] = input.split(" ");
console.log(Number(discountedPrice) _ 0.1);
} else {
console.log("wrong Input");
}
};

concept of type narrowing:
Type narrowing means reducing a broad type into a specific type using a condition. A type guard is the condition or check we use to narrow the type.

let's go through a code and explain type narrowing.

type Alphaneumeric = number | string;
Here, both num1 and num2 can be number or string. So TypeScript is not sure what operation is safe.
const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
if (typeof num1 === "number" && typeof num2 === "number"){
Here we are checking the type using typeof. This is a type guard. After this check, TypeScript becomes sure both variables are number. So now this becomes safe.

return num1 + num2;
} else {
num1.toString() + num2.toString();
}
};

In this code we are working with a value that can be either a number or a string. So TypeScript cannot directly allow operations like + because the type is not clear. To solve this, we use typeof checks. This is called a type guard. It helps TypeScript understand the exact type at runtime.

After the check typeScript reduces the wider type (number | string) into a specific type (number or string). This process is called type narrowing.
