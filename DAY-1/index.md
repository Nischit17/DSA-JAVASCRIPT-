# PROBLEM

Create an `array` with `5` students names, after that `create a function` which takes `2` parameters (allStudents & studentName) `Iterate` over `all students` and find that specific user `"studentName"`

-> SOLUTION

```JavaScript
const studentsDatabase = ["jordan", "erick", "john", "michel"];

const findStudents = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

findStudents(studentsDatabase, "erick");

```

-> EXPLANATION

#### 1. Array Creation:

```JavaScript
const studentsDatabase = ["jordan", "erick", "john", "michel"];
```

- This creates an array called studentsDatabase which stores the names of 4 students: "jordan", "erick", "john", and "michel".

- Arrays in JavaScript are used to store multiple values in a single variable and are indexed starting from 0.

#### 2. Function Declaration:

```JavaScript
const findStudents = (allStudents, studentName) => {
```

- A function named findStudents is declared, which takes two parameters:

- allStudents: An array of all student names (e.g., studentsDatabase).

- studentName: The specific student name that you want to find in the array.

#### 3. Iteration through the Array:

```JavaScript
for (let i = 0; i < allStudents.length; i++) {
```

- A for loop is used to iterate over the allStudents array.

- i is the index used to access elements of the array, starting from 0 and going up to allStudents.length - 1 (the last index in the array).

- allStudents.length gives the total number of students in the array, and the loop continues until all students are checked.

#### 4. Condition to Find the Student:

```JavaScript
if (allStudents[i] === studentName) {
```

- Inside the loop, an if statement is used to check if the current student (allStudents[i]) matches the studentName passed into the function.

- If the student's name matches, the function proceeds to the next step.

#### 5. Output if Student is Found:

```JavaScript
console.log(`Found ${studentName}`);
```

- If a match is found, the function prints a message to the console saying "Found studentName".

- For example, if the student's name is "erick", it will print: Found erick.

#### 6. Calling the Function:

```JavaScript
findStudents(studentsDatabase, "erick");
```

- The function findStudents is called, passing the studentsDatabase array and the string "erick" as arguments.

- The function will loop through the studentsDatabase and find the name "erick", printing Found erick when it matches.

-> DATA STRUCTURE USED:

- The specific data structure used in the above problem is an `array`.

- `Array`: In JavaScript, an array is a collection of elements stored in a contiguous block of memory, where each element is indexed starting from 0. Arrays allow for efficient access and iteration over a collection of items. In this case, the array `studentsDatabase` holds the names of students.

-> ALGORITHM USED:

- The algorithm used to solve the problem can be described as a `linear search algorithm`.

- Steps of the Linear Search in Pseudo-code:

```JavaScript
 For each student in allStudents:
    If student equals studentName:
        Print "Found studentName"
```

-> SUMMARY

- In summary, the problem uses an `array` as the data structure and employs a `linear search algorithm` to find the specific student by iterating over each element in the array.
