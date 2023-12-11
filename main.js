// 1) Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// function findNumberOfDivisors(n) {
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(findNumberOfDivisors(6)); // 4
// console.log(findNumberOfDivisors(9)); // 3

// 2) 1-100 arası tək ədədləri console'a yazan proqram tərtib edin.
for (i = 1; i < 100; i++) {
  if (i % 2 == 0) continue;
  {
    console.log(i);
  }
}                                                                                   

// 3) sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;

// const numbers = [3, 7, 2, 19, 13];

// 4) Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.

// let kvadrat = numbers.map(element => {
//    return element ** 2
// });
// console.log(kvadrat);

//5) Array elementlərinin cəmini tapın
// let sum = 0
// numbers.forEach(element => {
//     sum += element
// });

// console.log(sum);

// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     description: "Powerful laptop with a large screen and fast processor.",
//     price: 1299.99,
//   },
//   {
//     id: 3,
//     title: "Coffee Maker",
//     description: "An automatic coffee maker with a built-in grinder.",
//     price: 99.99,
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     description: "Wireless over-ear headphones with noise-cancellation.",
//     price: 199.99,
//   },
//   {
//     id: 5,
//     title: "Smart TV",
//     description: "55-inch 4K Smart TV with streaming apps built-in.",
//     price: 699.99,
//   },
//   {
//     id: 6,
//     title: "Fitness Tracker",
//     description:
//       "Track your steps, heart rate, and more with this fitness tracker.",
//     price: 49.99,
//   },
//   {
//     id: 7,
//     title: "Digital Camera",
//     description: "High-resolution digital camera with various lenses.",
//     price: 799.99,
//   },
//   {
//     id: 8,
//     title: "Wireless Keyboard and Mouse",
//     description: "Ergonomic keyboard and mouse combo for your workstation.",
//     price: 39.99,
//   },
//   {
//     id: 9,
//     title: "Microwave Oven",
//     description: "Compact microwave oven for quick and easy cooking.",
//     price: 69.99,
//   },
//   {
//     id: 10,
//     title: "Bluetooth Speaker",
//     description: "Portable Bluetooth speaker with rich, clear sound.",
//     price: 49.99,
//   },
//   {
//     id: 11,
//     title: "Coffee Table",
//     description: "Modern coffee table with storage and a glass top.",
//     price: 149.99,
//   },
// ];

// 6) products arrayını price'a görə artan və azalan sıra ilə düzün

// let asc = products.sort((a, b) => a.price - b.price);
// console.log(asc);
// let des = products.sort((a, b) => b.price - a.price);
// console.log(des);

// 7) products arrayını title'a görə a'dan z'yə və z'dən a'ya düzün
// let asc = products.sort((a,b)=> b.title.toLocaleLowerCase().localeCompare(a.title))
// console.log(asc);

// let des = products.sort((a,b)=> a.title.toLocaleLowerCase().localeCompare(b.title))
// console.log(des);

// 8) price'ı 500'dən çox olan productları tapın (array şəklində)
// let pric = products.filter(item=> item.price > 500);
// console.log(pric);

// 9) id'si 9 olan elementi arraydan silin

// 10) price cəmini, və ortalamasını tapın
// let sum = 0
// products.forEach((item)=> sum+=item.price)
// console.log(sum/products.length);

// BONUS

// 11) verilmiş iki stringin eyni hərflərdən təşkil olunub olunmadığını müəyyən edən funksiya yazın

// function isStringsArrangedSameLetters(a, b) {}

// isStringsArrangedSameLetters("fired", "fried"); //yes
// isStringsArrangedSameLetters("listen", "silent"); // yes
// isStringsArrangedSameLetters("hello", "hi"); // no
