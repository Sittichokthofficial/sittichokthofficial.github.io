alert(`ประกาศ
เว็บนี้ทำเพื่อส่ง Borntodev เท่านั้น และย้งสามารถไปพัฒนาต่อได้โดยมี Open Sourch ใน Github`);

let Mathscroe = prompt("กรอกคะแนนวิชาคณิตศาสตร์")
let EnglishScore = prompt("กรอกคะแนนวิชาอังกฤษ")
let ComputerScore = prompt("กรอกคะแนนวิชาคอมพิวเตอร์")
document.getElementById('Socre-1').innerHTML = Mathscroe;
document.getElementById('Socre-2').innerHTML = EnglishScore;
document.getElementById('Socre-3').innerHTML = ComputerScore;
if (Mathscroe >= 80) {
   document.getElementById('Grade-1').innerHTML = "4";
} else if (Mathscroe >= 75) {
     document.getElementById('Grade-1').innerHTML = "3.5";
  } else if (Mathscroe >= 70) {
  document.getElementById('Grade-1').innerHTML = "3";
  } else if (Mathscroe >= 65){
  document.getElementById('Grade-1').innerHTML = "2.5";
  } else if (Mathscroe >= 60){
  document.getElementById('Grade-1').innerHTML = "2";
  } else if (Mathscroe >= 55){
  document.getElementById('Grade-1').innerHTML = "1.5";
  } else if (Mathscroe >= 50){
  document.getElementById('Grade-1').innerHTML = "1";
  } else {
  document.getElementById('Grade-1').innerHTML = "0";
  }
if (EnglishScore >= 80){
  document.getElementById('Grade-2').innerHTML = "4";
}else if (EnglishScore >= 75){
  document.getElementById('Grade-2').innerHTML = "3.5";
}else if (EnglishScore >= 70){
  document.getElementById('Grade-2').innerHTML = "3";
}else if (EnglishScore >= 65){
  document.getElementById('Grade-2').innerHTML = "2.5";
}else if (EnglishScore >= 60){
  document.getElementById('Grade-2').innerHTML = "2";
}else if (EnglishScore >= 55){
  document.getElementById('Grade-2').innerHTML = "1.5";
}else if (EnglishScore >= 50){
  document.getElementById('Grade-2').innerHTML = "1";
}else {
  document.getElementById('Grade-2').innerHTML = "0";
}

if (ComputerScore >= 80) {
  document.getElementById('Grade-3').innerHTML = "4";
} else if (ComputerScore >= 75) {
  document.getElementById('Grade-3').innerHTML = "3.5";
  } else if (ComputerScore >= 70) {
  document.getElementById('Grade-3').innerHTML = "3";
  } else if (ComputerScore >= 65){
  document.getElementById('Grade-3').innerHTML = "2.5";
} else if (ComputerScore >= 60) {
  document.getElementById('Grade-3').innerHTML = "2";
  } else if (ComputerScore >= 55){
  document.getElementById('Grade-3').innerHTML = "1.5";
} else if (ComputerScore >= 50){
  document.getElementById('Grade-3').innerHTML = "1";
} else {
  document.getElementById('Grade-3').innerHTML = "0";
  }

let sum = Math.floor((parseInt(Mathscroe) + parseInt(EnglishScore) + parseInt(ComputerScore))/3);
document.getElementById('Sumgrade').innerHTML = sum;

if (sum >= 80){
  document.getElementById('O-Garde').innerHTML = "4";
  } else if (sum >= 75){
  document.getElementById('O-Garde').innerHTML = "3.5";
  } else if (sum >= 70){
  document.getElementById('O-Garde').innerHTML = "3";
  } else if (sum >= 65) {
  document.getElementById('O-Garde').innerHTML = "2.5";
  } else if (sum >= 60) {
  document.getElementById('O-Garde').innerHTML = "2";
  } else if (sum >= 55) {
  document.getElementById('O-Garde').innerHTML = "1.5";
  } else if (sum >= 50) {
  document.getElementById('O-Garde').innerHTML = "1";
  } else {
  document.getElementById('O-Garde').innerHTML = "0";
  }
