// #    /////////////////object/////////////////
// No1
// object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id,name
// no2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id
// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }
// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// function Search(obj,str){}
// Search(obj,'WebBrain')
// chiqish
//     name:"WebBrain"
// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }
// searchValue(obj,'i') => atirgul,qizil
// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }
// chiqish
// 146

// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
// let user = {
//     id: 1,
//     name: 'Odil',
//     age: 78,
//     children: [
//         {
//             id: 1,
//             name: 'Umar',
//             age: 54,
//             children: [
//                 { id: 1, name: 'Asmo', age: 34 },
//                 { id: 2, name: 'Osim', age: 30 },
//                 { id: 3, name: 'Xattob', age: 25 },
//             ]
//         },
//         { id: 2, name: 'Umar', age: 54 },
//         { id: 3, name: 'Umar', age: 54 },
//     ]
// }

// No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ]
// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
// let obj={
// id:1,name:'Usmon',job:'developer'
// }

// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
// add(obj,key,value){}
// add(obj,'address','toshkent')
// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1
// }
// chiqish
// qabul qilindi
// No11
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true
// }
// chiqish
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true,
//     kiridit:true
// }
// No12
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     age:34,
//     year:1990
// }
// chiqish
// 'xato malumot kiritdingiz'
// No13
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
// arr=['Andijon','Namangan','Qarshi','toshkent']

// No14
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'}
//     {id:2,name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'},
// ]
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz

// No15
// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
// obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }
// chiqish
// true
// No16
// let person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
// }

// // add IELTS
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }

// 2 - shart
// // agar ielts 5.5 yoki katta bolsa consoleda qabul qilindi,aks holda qayta topshirish kk
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// // qabul qilindi
// 3 - shart
// // agar ielts 5.5 yoki katta bolsa objectga student:true qoshilsin qiymati bn birga
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }

// // qoshimcha
// 4 - shart
// // agar student true bolsa unga maxsus key berilsin(math.random+id orqali berilsin)
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// 5 - shart
// // talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar qarol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name xato chiqsin
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// function Kirish(parol,name){}

// Kirish(101,'Umar') //=> hush kelibsiz
// Kirish(10,'Umar')  // => parol yoki name xato
// Kirish(101,'Ali')   // => parol yoki name xato
