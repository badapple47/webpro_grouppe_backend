// //----- index.js ------//
// //run mongodb: mongod --dbpath /data
// //npm install mongodb --save
// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/"

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err
//   var dbo = db.db("grouppe")
//   dbo.createCollection("news", function(err, res) {
//     if (err) throw err
//     console.log("Collection created!")
//     db.close()
//   })
// })

// //----- index.js ------//
// //run mongodb: mongod --dbpath /data
// //npm install mongodb --save

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("grouppe")
    //Insert Many Items
    var d = new Date
   var obj = [ 
            {
	"news" : "คลินิกรัก(ษา)ภาษา Language Clinic",
	"day" : d.getDate(),
	"month" : d.getMonth()+1,
  "year" : d.getFullYear(),
	"image" : "https://scontent.fbkk3-1.fna.fbcdn.net/v/t1.0-9/31698787_1783743811693565_4203972860441526272_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGbNILme8cdXuzDaMs51eMLjhitBPy8k8qhx8Ww1iMJWugNcWARdJ62g6Swr9hJkltuEj8X_qL2ZA8STcBXPWaFARMJMOBJkStVQdTgQx8n0Q&oh=8aca3ffe2ecf1c8f7b6ee769ec757e26&oe=5B8FEA5E",
	"description" : "ขอเชิญบุคลากรและนักศึกษาเข้าร่วมโครงการ “คลินิกรัก(ษา)ภาษา Language Clinic” โดยไม่เสียค่าใช้จ่าย เพื่อขอรับคำปรึกษาและแนวทางการพัฒนาทักษะการเขียนและการออกเสียงภาษาอังกฤษจากอาจารย์ผู้เชี่ยวชาญ ระหว่างวันที่ 19 มีนาคม – 6 กันยายน 2561 เวลา 14.00 – 16.00 น. ณ ศูนย์การเรียนรู้ภาษา (LLC) ชั้น 3 อาคารศูนย์การเรียนรู้มหิดล มหาวิทยาลัยมหิดล ติดต่อสอบถามได้ที่คุณธันย์นิชา จิรฐาธนะพงศ์ (เมย์) โทร.02-849-4611 หรืออีเมล tannicha.jit@mahidol.edu"
},
// {
// 	"event" : "กำหนดการฝึกซ้อมและพิธีพระราชทานปริญญาบัตร มหาวิทยาลัยมหิดล ประจำปีการศึกษา 2560",
// 	"day" : "20",
// 	"month" : "9",
//   "year" : "2561",
//   "dayEnd" : "25",
// 	"monthEnd" : "9",
// 	"yearEnd" : "2561",
// 	"image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/31239532_1775179915883288_6572446036248231936_o.png?_nc_cat=0&_nc_eui2=v1%3AAeG6QzSJKXmr-amjj8t6Buy4bxtgmBJiKqbGDVJ5G4-dmHxKTqe1T2m9DmGU8OSN1XAHrzkQzxfP8VwB8wNWiBhsWphmyc0EkCb9Y2iTUF6Jeg&oh=f805a064020f5aa24e94a3d8df7be1c2&oe=5B8B4AB6",
// 	"description" : "กำหนดการฝึกซ้อมและพิธีพระราชทานปริญญาบัตร มหาวิทยาลัยมหิดล ประจำปีการศึกษา 2560 ซ้อมย่อย อาทิตย์ 16 กย. 61 ซ้อมใหญ่ อังคาร 18 กย. 61 สถานที่และเวลา : โปรดติดตามประกาศจากมหาวิทยาลัย เพิ่มเติม",
// 	"userId" : []
// },
// {
// 	"event" : "วันมหิดล",
// 	"day" : "24",
// 	"month" : "9",
//   "year" : "2561",
//   "dayEnd" : "24",
// 	"monthEnd" : "9",
// 	"yearEnd" : "2561",
// 	"image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t39.2147-6/c0.209.476.249/p476x249/21276093_1552381364829812_5385930431323439104_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFrfUMZ3UI_C5_Wb2irw6pCU6TbZFPp0RwiKwGiQul-NQ94Gt95g14wZpkX-trorVCGnU_iy83TrSCK1pGBKyYg-5Z3Fl4ZsHNml89mEW_INQ&oh=1027f88fabc0e9fda3e3fa4cdd344751&oe=5B97DDC9",
// 	"description" : "มหาวิทยาลัยมหิดลขอเชิญชาวมหิดล ทั้งศิษย์เก่า ศิษย์ปัจจุบัน อาจารย์ บุคลากรและคนไทยทุกคน ร่วมทำความดีเพื่อผู้อื่น เนื่องใน วันมหิดล Mahidol Day of Service ดังพระราชปณิธานที่ว่า ขอให้ถือผลประโยชน์ส่วนตัวเป็นที่สอง ประโยชน์ของเพื่อนมนุษย์เป็นกิจที่หนึ่ง",
// 	"userId" : []
// },
// {
// 	"event" : "ทำนุบำรุงพระพุทธศาสนาและถวายผ้าพระกฐินพระราชทาน",
// 	"day" : "31",
// 	"month" : "10",
//   "year" : "2561",
//   "dayEnd" : "31",
// 	"monthEnd" : "10",
// 	"yearEnd" : "2561",
// 	"image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/20993039_1527465307321418_9006119411114552269_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGptiN48etEvJqfbtG9Ar67nTQeVwVOU_CO8jdIgHpdURNl8olTsOEWPqUp9oGPX1my3lpJrG1VdJTFehuh4bygH4atCoGi0C8_nsHdTSlBiw&oh=0230f851129d8d6085b79c645a4a7247&oe=5B952CE1",
// 	"description" : "มหาวิทยาลัยมหิดลขอเชิญร่วมทำนุบำรุงพระพุทธศาสนาและถวายผ้าพระกฐินพระราชทาน ณ วัดพระงาม (พระอารามหลวงชั้นตรี) ต.พระปฐมเจดีย์ อ.เมือง จ.นครปฐม **วันอังคารที่ 31 ตุลาคม 2560",
// 	"userId" : []
// },
// {
// 	"event" : "ทำธงที่ระลึก",
// 	"day" : "30",
// 	"month" : "6",
//   "year" : "2561",
//   "dayEnd" : "30",
// 	"monthEnd" : "6",
// 	"yearEnd" : "2561",
// 	"image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t31.0-8/19575026_1472846502783299_2528380368298570342_o.png?_nc_cat=0&_nc_eui2=v1%3AAeEhf5BC3ml9MULbnOfOSpDXaDh1j3mL01GA7kIxZgfnfDXrXT1hsevBGI-QA4qDNzaGIlkrgeCqSQrjNCsuUQela3WUjvO158orf9dJWRqRVg&oh=29f2729f00792d87a1c2e6c8773f6404&oe=5B55A89B",
// 	"description" : "กลับมาอีกครั้ง กับการทำธงที่ระลึก #วันมหิดล ประจำปี 2560 วันศุกร์ที่ 30 มิถุนายน นี้ ณ โรงพยาบาลศิริราช เวลา 19.00 น. - 6.00 น.",
// 	"userId" : []
// },
// {
// 	"event" : "บริจาคโลหิต",
// 	"day" : "5",
// 	"month" : "9",
//   "year" : "2561",
//   "dayEnd" : "5",
// 	"monthEnd" : "9",
// 	"yearEnd" : "2561",
// 	"image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/21034325_1526720717395877_1554113049749229784_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEvugs4HsEkDOhvwGdHw-7-DisRcroOnFqXvNtgHhEvg8JRBj8zkaCMfEAtu-tJd0bNTV8OYFsL4T_Pf1aLOI1FwBRTWgALtRHguZ9mNuEJLg&oh=fd2e9229e47b5703d48120b6c62a2e57&oe=5B873F4D",
// 	"description" : "ขอเชิญร่วมบริจาคโลหิต ตั้งแต่เวลา 8.30 - 11.30 น. วันที่ 5 กันยายน 2560 ณ ห้องประชุม 322 ชั้น 3 ศูนย์การเรียนรู้มหิดล มหาวิทยาลัยมหิดล ศาลายา Blood donation, September 5th, 2017. 8.30am - 11.30am , Room 322, 3rd floor, Mahidol Learning Center (MLC)",
// 	"userId" : []
// }
            ]
  dbo.collection("news").insertMany(obj, function(err, res) {
    if (err) throw err
    console.log("Inserted "+res.insertedCount+" items")
    db.close()
  })
})