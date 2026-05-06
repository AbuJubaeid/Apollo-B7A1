//! ==>solution-1
const filterEvenNumbers = (values: number[]) => {
  const evenNumbers: number[] = [];
  values.map((value) => {
    if (value % 2 == 0) {
      evenNumbers.push(value);
    }
  });
  return evenNumbers;
};
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//! ==>solution-2
const reverseString = (value: string) => {
  let reverseString = "";
  for (let i: number = value.length - 1; i >= 0; i--) {
    reverseString = reverseString + value[i];
  }
  return reverseString;
};

reverseString("typescript");

//! ==> solution-3
type StringOrNumber = string | number;
const checkType = (value: StringOrNumber) => {
  if (typeof value == "string") {
    return "string";
  } else {
    return "number";
  }
};
checkType("Hello");

//! ==> solution-4
const getProperty = <T, K extends keyof T>(value1: T, value2: K): T[K] => {
  return value1[value2];
};
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

//! ==> solution-5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (value: Book) => {
  return {
    ...value,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
toggleReadStatus(myBook);

//! ==> solution-6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

//! ==> solution-7
type Intersection = (arr1: number[], arr2: number[]) => number[];

const getIntersection: Intersection = (arr1, arr2) => {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
