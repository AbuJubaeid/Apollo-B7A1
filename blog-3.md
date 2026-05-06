//=> Answer-3:
In TypeScript generics are a way to use types as parameters. This means we can create reusable functions that work with different data types while still keeping full type safety. We write one structure that can work with any type, and TypeScript decides the exact type when we use it.

type GenericArray<T> = Array<T>;

const numbers: GenericArray<number> = [1, 2, 3];
const strings: GenericArray<string> = ["a", "b", "c"];

Here T is a placeholder type. When we use GenericArray<number>, TypeScript replaces T with number, and when we use GenericArray<string>, it becomes string.

const createArrrayWithGeneric = <T>(value: T) => {
return [value];
};

T is a type parameter. Here I don’t know the type now.

const arrString = createArrrayWithGeneric("Apple");
const arrNum = createArrrayWithGeneric(222);
const arrObj = createArrrayWithGeneric({ id: 123, name: "Next Level" });

Same function works for string, number, object. There is no need to write separate functions for the code.

From the above we can say that generics allow us to create one reusable function or component that can work with different types of data like string, number, object, or even complex structures.

Instead of writing separate functions for each type, we use a type parameter like <T>, <X>, <Y>. TypeScript then decides the actual type when we use the function. This makes the code flexible and reusable. Generics let us write one flexible solution for many data types, while still keeping the code fully type-safe and error-free.
