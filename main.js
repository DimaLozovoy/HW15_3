// // Завдання 1
// // Отримати масив імен всіх користувачів (поле name).

// const users1 = [
//   { userName: "Moore Hensley", isActive: true },
//   { userName: "Sharlene Bush", isActive: false },
//   { userName: "Ross Vazquez", isActive: true },
//   { userName: "Elma Head", isActive: false },
//   { userName: "Carey Barr", isActive: false },
//   { userName: "Blackburn Dotson", isActive: true },
//   { userName: "Sheree Anthony", isActive: false },
// ];

// const getUserNames = users1.map((user) => user.userName);
// console.log(getUserNames);

// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // Завдання 2
// // Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

// const users2 = [
//   { userName: "Mango", eyeColor: "blue" },
//   { userName: "Gektor", eyeColor: "green" },
//   { userName: "Mangust", eyeColor: "brown" },
//   { userName: "Arni", eyeColor: "blue" },
//   { userName: "Poly", eyeColor: "brown" },
//   { userName: "Dima", eyeColor: "green" },
// ];

// const filteredEyeColors = users2.filter((value) => value.eyeColor === "blue");
// console.log(filteredEyeColors);

// // console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// // Завдання 3
// // Отримати масив імен користувачів за статтю (поле gender).

// const users3 = [
//   { userName: "Nikita", gender: "male" },
//   { userName: "Emma", gender: "female" },
//   { userName: "Dima", gender: "male" },
//   { userName: "jane", gender: "female" },
//   { userName: "Dima", gender: "male" },
//   { userName: "Dima", gender: "male" },
//   { userName: "Dina", gender: "female" },
//   { userName: "Emily", gender: "female" },
//   { userName: "Dima", gender: "male" },
// ];

// const filteredGenders = users3.filter((value) => value.gender === "female");
// console.log(filteredGenders);

// // console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// // Завдання 4
// // Отримати масив тільки неактивних користувачів (поле isActive).

// const users5 = [
//   { userName: "Mango", isActive: true },
//   { userName: "Gektor", isActive: false },
//   { userName: "Mangust", isActive: false },
//   { userName: "Arni", isActive: true },
//   { userName: "Poly", isActive: false },
//   { userName: "Dima", isActive: true },
// ];

// const filteredStates = users5.filter((value) => !value.isActive);
// console.log(filteredStates);

// Завдання 5

// const users6 = [
//   { userName: "Sheree Anthony", email: "shereeanthony@kog.com" },
//   { userName: "Elma Head", email: "elmahead@omatom.com" },
//   { userName: "Antony Green", email: "Geenman@omatom.com" },
//   { userName: "Walt Disney", email: "disneytop1@omatom.com" },
//   { userName: "Jeam Carry", email: "coolboy777@omatom.com" },
//   { userName: "Mahmed", email: "BOOM11@omatom.com" },
//   { userName: "Abdula", email: "shawerma_man97@omatom.com" },
//   { userName: "Nurik", email: "kazahstan228@omatom.com" },
//   { userName: "da`Arbi Watson", email: "PokerOneLove<3@omatom.com" },
// ];

// const filteredByEmail = (users, email) =>
//   users.find((value) => value.email === email);
// console.log(filteredByEmail(users6, "PokerOneLove<3@omatom.com").userName);
// console.log(filteredByEmail(users6, "shawerma_man97@omatom.com").userName);
// console.log(filteredByEmail(users6, "Geenman@omatom.com").userName);
