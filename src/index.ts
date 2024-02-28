export {};

// Index signature for type 'X' is missing in type 'Y' in TS

// EXAMPLE 1 - Use the spread syntax (...) to solve the error

interface Employee {
  name: string;
  country: string;
}

const employee: Employee = {
  name: 'Bobby Hadz',
  country: 'Germany',
};

const accessEmployee = (employee: { [key: string]: string }) => {
  return employee['country'];
};

// ✅ Works now
accessEmployee({ ...employee }); // 👉️ "Germany"

// ---------------------------------------------------

// // EXAMPLE 2 - Alternatively, use a type alias

// // 👇️ Now using type alias
// type Employee = {
//   name: string;
//   country: string;
// };

// const employee: Employee = {
//   name: 'Bobby Hadz',
//   country: 'Germany',
// };

// const accessEmployee = (employee: { [key: string]: string }) => {
//   return employee['country'];
// };

// // ✅ Works now
// accessEmployee(employee); // 👉️ "Germany"
