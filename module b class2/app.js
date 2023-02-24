// var a = 100
// console.log(a)

// if(true){
//     const b = 200
// }
// console.log(b)

// function abc() {
//     var c = 300
// }
// abc()
// console.log(c)

// var a = "abc"
// var b = `My name is ${a}`

// var num = 10
// var root = `The square of ${num} is ${num*num}`

// console.log(b)
// console.log(root)

// var marks = 60
// if(marks < 60) {
//     console.log("lag gae")
// }
// else {
//     console.log("bachat")
// }

// let x = +prompt()

// x<60?console.log("lag gae"):console.log("bachat")

// var marks = 80;

// if(marks>70){
//     console.log("mithai");
// }else if (marks>50) {
//     console.log("Amma se bachat");
// }else {
//     console.log("dono se dhulai");
// }
// marks>70?console.log("mithai"):marks>50?console.log("Amma se bachat"):console.log("dono se dhulai");

// var a = [1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1]
// for(var i=0; i<a.length;i++){
//     if(a[i]==1){
//         console.log(a[i])
//     }
// }

let num = 10 * 5;
let bool = true;
let total = bool || "ABC"; //input true
console.log(total)

// let bool = false;
// let total = bool || "ABC"; //input ABC 
// console.log(total)

// let bool = false;
// let total = bool && "ABC"; // input false
// console.log(total)


// let bool = true;
// let total = bool && "ABC"; // input ABC
// console.log(total)

// const obj = {
//     id:1,
//     name:"abc",
//     category:"A"
// };
// let arr1 = Object.keys(obj)
// let arr2 = Object.values(obj)
// let arr3 = Object.entries(obj)
// Object.freeze(obj)
// obj.category="C"
// obj = {}
// console.log(arr1) 
// console.log(arr2) 
// console.log(obj) 

// let arr = [
//     {
//     id:1,
//     name:"ABC",
//     category: "A",
//     city: "Karachi"
// },
//     {
//     id:2,
//     name:"DEF",
//     category: "B",
//     city: "Lahore"
// },
//     {
//     id:3,
//     name:"GHI",
//     category: "C",
//     city: "Islamabad"
// },
//     {
//     id:4,
//     name:"JKL",
//     category: "D",
//     city: "Gujranwala"
// },
//     {
//     id:5,
//     name:"MNO",
//     category: "E",
//     city: "Quetta"
// },
//     {
//     id:6,
//     name:"PQR",
//     category: "F",
//     city: "Karachi"
// },
//     {
//     id:7,
//     name:"STU",
//     category: "G",
//     city: "Lahore"
// },
//     {
//     id:8,
//     name:"VWX",
//     category: "H",
//     city: "Islamabad"
// },
//     {
//     id:9,
//     name:"XYX",
//     category: "I",
//     city: "Gujranwala"
// }
// ]
// let labels = Object.keys(arr[0])

// let head = document.getElementById('head')
// let body = document.getElementById('body')

// let data = document.createElement('TR')
// data.appendChild(head)


// for(let i = 0; i< labels.length; i++){
//     head.innerHTML += `<th>${labels[i]}</th>`
// }
// for(let i = 0; i< arr.length; i++){
//     let x = arr[i]
//     body.innerHTML += `<tr>
//     <td>${x.id}</td>
//     <td>${x.name}</td>
//     <td>${x.category}</td>
//     <td>${x.city}</td>
//     </tr>`
// }