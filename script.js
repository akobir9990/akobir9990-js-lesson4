// kichkina harfda yozilgan ismlarni birinchi harfini katta qilib berish

// let name = prompt("ismingizni kiriting", "");

// let upperLetter = name.slice(0, 1);
// let lowerLetter = name.slice(1);

// let fullName = `${upperLetter.toUpperCase()}${lowerLetter}`;

// alert(fullName);
// console.log(upperLetter);
// console.log(lowerLetter);

// let day = 12;

// switch (day) {
//   case 1:
//     console.log("dush");
//     break;
//   case 2:
//     console.log("seshanba");
//     break;
//   case 3:
//     console.log("chorshanba");
//     break;
//   case 4:
//     console.log("payshanba");
//     break;
//   case 5:
//     console.log("juma");
//     break;
//   case 6:
//     console.log("shanba");
//     break;
//   case 7:
//     console.log("yakshanba");
//     break;
//   default:
//     console.log("are you f**king kidding me b****");
// }

// class Car {
//   constructor(name, model, weight, speed) {
//     this.name = name;
//     this.model = model;
//     this.weight = weight;
//     this.speed = speed;
//   }

//   getInfo() {
//     console.log(this.name + this.model);
//   }
// }

// class Gentra extends Car {
//   constructor(name, model, weight, speed, abs) {
//     super(name, model, weight, speed);
//     this.abs = abs;
//   }

//   show() {
//     this.getInfo();
//   }
// }
// let Damas = new Gentra("hey  ", "hey  ", "hey  ", "hey  ", "hey  ");

// let Tahoe = new Car("Tahoe ", "Primer", "3 tonna", 260);

// class Phone {
//   constructor(
//     brand,
//     name,
//     OS,
//     displayFrom,
//     cameraNumber,
//     cameraPix,
//     OSversion,
//     price
//   ) {
//     this.brand = brand;
//     this.name = name;
//     this.OS = OS;
//     this.displayFrom = displayFrom;
//     this.cameraNumber = cameraNumber;
//     this.cameraPix = cameraPix;
//     this.OSversion = OSversion;
//     this.price = price;
//   }

//   getInfo() {
//     console.log(
//       `brand: ${this.brand}, nomi: ${this.name}, OS: ${this.OS}, narxi esa atiga: ${this.price} `
//     );
//   }
// }

// let iphone15 = new Phone(
//   "Iphone",
//   "Iphone 15",
//   "iOS",
//   "super Amoled",
//   3,
//   120,
//   "ventura 14.0.0",
//   2000
// );

let a = 19,
  b = 12,
  c = 9;

switch (a) {
  case a <= 0:
    console.log("manfiy");
    break;
  case a >= 0:
    console.log("musbat");
    break;
  default:
    console.log("switch default  a = 0");
}

// switch caseda condition berib bo'lmas ekan

if (a > 0) {
  console.log("musbat");
} else {
  console.log("manfiy");
}

switch (a) {
  case a % 2 != 0:
    console.log(`${a} toq son`);
    break;
  default:
    console.log(`${a} juft son`);
    break;
}

// o'sha switch caseda condition berib bo'lmas ekan

if (a % 2 != 0) {
  console.log(`${a} toq son`);
} else {
  console.log(`${a} juft son `);
}

switch ((a, b)) {
  case a > 0 && b > 0:
    console.log("a ham b ham musbat");
    break;
  case a < 0 && b < 0:
    console.log("a ham b ham musbat");
    break;
  default:
    console.log(
      "case da condition berib bolmas ekan  switchga argument qilib selecor yozilasi casega esa value yozilishi kk conditionni qabul qilmas ekan"
    );
}

if (a > 0 && b > 0) {
  console.log("a ham b ham musbat son");
} else {
  console.log("a va b dan qaysidir biri manfiy");
}

if (a > b && b > c) {
  console.log("a b dan katta va b c dan katta");
} else {
  console.log("shart qanoatlantirilmadi");
}

if ((b > c && b < a) || (b < c && b > a)) {
  console.log("b a va c ning orasida yotadi");
} else {
  console.log("shart qanoatlantirilmadi");
}
