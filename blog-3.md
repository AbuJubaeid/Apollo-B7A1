//=> Answer-3:
In TypeScript generics are a way to use types as parameters. This means we can create reusable functions that work with different data types while still keeping full type safety. We write one structure that can work with any type, and TypeScript decides the exact type when we use it.

Let's go through an example and understand generics:
type GenericArray<T> = Array<T>;

const numbers: GenericArray<number> = [1, 2, 3];
const strings: GenericArray<string> = ["a", "b", "c"];

Here T is a placeholder type. When we use GenericArray<number>, TypeScript replaces T with number, and when we use GenericArray<string>, it becomes string.

generic Function:
const createArrrayWithGeneric = <T>(value: T) => {
return [value];
};
T is a type parameter. It will accept dynamic type value when the function will be called.

const arrString = createArrrayWithGeneric("Apple");
const arrNum = createArrrayWithGeneric(222);
const arrObj = createArrrayWithGeneric({ id: 123, name: "Next Level" });

When the function is called, TypeScript automatically detects the type of the value passed into the function and replaces T with that specific type. For example, when "Apple" is passed, TypeScript understands that T is string, so the return type becomes string[]. When 222 is passed, T becomes number, making the return type number[].

Without using generics we had to write code like this:

const createStringArray = (value: string) => [value];
const createNumberArray = (value: number) => [value];
const createObjectArray = (value: object) => [value];

But using generics same function works for string, number, object. There is no need to write separate functions for the code.

So we can say that generics allow us to create one reusable function or component that can work with different types of data like string, number, object, or even complex structures.

Instead of writing separate functions for each type, we use a type parameter like <T>, <X>, <Y>. TypeScript then decides the actual type when we use the function. This makes the code flexible and reusable. Generics let us write one flexible solution for many data types, while still keeping the code fully type-safe and error-free.
