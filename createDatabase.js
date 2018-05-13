// ----- index.js ------//
// run mongodb: mongod --dbpath /data
// npm install mongodb --save
// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://badapple47-egco427-project-6130586:27017/"

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err
//   var dbo = db.db("grouppe")
//   dbo.createCollection("events", function(err, res) {
//     if (err) throw err
//     console.log("Collection created!")
//     db.close()
//   })
// })

// ----- index.js ------//
// run mongodb: mongod --dbpath /data
// npm install mongodb --save

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://badapple47-egco427-project-6130586:27017/"

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("grouppe")
    //Insert Many Items
    var d = new Date
  var obj = [
    
    { 
"event" : "Incrisis Salaya", 
"dayStart" : "1", 
"monthStart" : "สิงหาคม", 
"yearStart" : "2561", 
"dayEnd" : "1", 
"monthEnd" : "6", 
"yearEnd" : "2561", 
"image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t31.0-8/27797487_1405062859622555_5125450815084866467_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHDc0CDUmg9XTg8TGGkkpG5_bhaWTLSTQvZ3M1mDqA7WbYXz9qmHLNaMOubhDGN_MvBeEnjutiI2XMhXFB0hOThFHrhZLILiz7QYxvW6AhTZg&oh=d24dd50511b2baeb9eb08ac6a687dc9d&oe=5B534AAD", 
"description" : "คอนเสิร์ตของคณะวิศกรรมศาสตร์ มหาวิทยาลัยมหิดล Incrisis Concert by EGMU ถือว่าเป็นงานเป็นไฮไลท์ของทุกปี ซึ่งจะไม่ได้มีแค่เด็กของมหิดลที่มาดูงานนี้จะมีคนนอกเข้ามาเยอะมากๆ ก็ไม่รู้ทำไมเหมือนกัน แต่เยอะจริงๆสำหรับปีนี้มาในคอนเซ็ปร้อนแรง ในงานก็เลยแมร่งย้อมแดงอย่างเดียว แดงไป 6 ชั่วโมง ไอ้เราก็อุส่าห์เดินไปบอกแล้วว่าพี่ ตอนพักเบรคเปิดไฟสลับให้หน่อย ย้อมสีเดียวมันถ่ายรูปยากครับ ก็เปิดอยู่แว๊บนึงแล้วแมร่งก็แดงอีก ก็ซุยกันไป แดงก็แดง กูจะไม่ยอมทำรูปขาวดำเด็ดขาดปีนี้โดยส่วนตัวเราเฉยๆกับบรรยากาศภายในงานมากๆ ไฟมันไม่สวย บู๊ธจัดไม่มีอะไรเลย มันดูมีแค่คอนเสิร์ต แต่กูยังดีที่ของกินมีค่อนข้างเยอะ อันนี้โอเคอยู่คอนนี้ก็น่าจะเป็นคอนสุดท้ายแล้ว ไวเหมือนกัน รูปตอนปี 1 ยังลงไม่ครบเลยเลย 55555 แล้วคอนนี้รู้สึกได้เจอคนเยอะมากๆ เรียกได้ว่าเจอหมดแต่ถ่ายไม่ค่อยครบ วิ่งไปนู่นนี่นั่นวุ่นทั้งงาน ก็ถ้าไม่ได้ถ่ายใคร เราขอโทษตากล้องมีเยอะถ่ายกับคนอื่นไปก็ได้", 
"userId" : [ 
], 
"view" : 126, 
"location" : "Mahidol University", 
"shortDescription" : "คอนเสิร์ตที่ยิ่งใหญ่ที่สุดในศาลายา" 
} ,
{ 
"event" : "วิธีพระราชทานปริญญาา", 
"dayStart" : "20", 
"monthStart" : "ธันวาคม", 
"yearStart" : "2561", 
"dayEnd" : "25", 
"monthEnd" : "9", 
"yearEnd" : "2561", 
"image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/31239532_1775179915883288_6572446036248231936_o.png?_nc_cat=0&_nc_eui2=v1%3AAeG6QzSJKXmr-amjj8t6Buy4bxtgmBJiKqbGDVJ5G4-dmHxKTqe1T2m9DmGU8OSN1XAHrzkQzxfP8VwB8wNWiBhsWphmyc0EkCb9Y2iTUF6Jeg&oh=f805a064020f5aa24e94a3d8df7be1c2&oe=5B8B4AB6", 
"description" : "กำหนดการฝึกซ้อมและพิธีพระราชทานปริญญาบัตร มหาวิทยาลัยมหิดล ประจำปีการศึกษา 2560 ซ้อมย่อย อาทิตย์ 16 กย. 61 ซ้อมใหญ่ อังคาร 18 กย. 61 สถานที่และเวลา : โปรดติดตามประกาศจากมหาวิทยาลัย เพิ่มเติม", 
"userId" : [ 
"5af4c62d325c861442ff3624", 
"5af4f534fd29dc1a38640e3b", 
"5af4fcaefd02ee1aae1e4229", 
"5af4fd63fd02ee1aae1e422a", 
"5af50dd433eb561d869eb67c", 
"5af50fcb33eb561d869eb67d" 
], 
"view" : 33, 
"location" : "Mahidol University" 
} ,
// { 
// "event" : "วันมหิดล", 
// "dayStart" : "24", 
// "monthStart" : "มีนาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "24", 
// "monthEnd" : "9", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t39.2147-6/c0.209.476.249/p476x249/21276093_1552381364829812_5385930431323439104_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFrfUMZ3UI_C5_Wb2irw6pCU6TbZFPp0RwiKwGiQul-NQ94Gt95g14wZpkX-trorVCGnU_iy83TrSCK1pGBKyYg-5Z3Fl4ZsHNml89mEW_INQ&oh=1027f88fabc0e9fda3e3fa4cdd344751&oe=5B97DDC9", 
// "description" : "มหาวิทยาลัยมหิดลขอเชิญชาวมหิดล ทั้งศิษย์เก่า ศิษย์ปัจจุบัน อาจารย์ บุคลากรและคนไทยทุกคน ร่วมทำความดีเพื่อผู้อื่น เนื่องใน วันมหิดล Mahidol Day of Service ดังพระราชปณิธานที่ว่า ขอให้ถือผลประโยชน์ส่วนตัวเป็นที่สอง ประโยชน์ของเพื่อนมนุษย์เป็นกิจที่หนึ่ง", 
// "userId" : [ 
// "5af4fd63fd02ee1aae1e422a", 
// "5af50dd433eb561d869eb67c", 
// "5af5129433eb561d869eb67e" 
// ], 
// "view" : 15, 
// "location" : "Mahidol University" 
// } ,
// {  
// "event" : "ทำนุบำรุงพระพุทธศาสนา", 
// "dayStart" : "31", 
// "monthStart" : "สิงหาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "31", 
// "monthEnd" : "10", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/20993039_1527465307321418_9006119411114552269_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGptiN48etEvJqfbtG9Ar67nTQeVwVOU_CO8jdIgHpdURNl8olTsOEWPqUp9oGPX1my3lpJrG1VdJTFehuh4bygH4atCoGi0C8_nsHdTSlBiw&oh=0230f851129d8d6085b79c645a4a7247&oe=5B952CE1", 
// "description" : "มหาวิทยาลัยมหิดลขอเชิญร่วมทำนุบำรุงพระพุทธศาสนาและถวายผ้าพระกฐินพระราชทาน ณ วัดพระงาม (พระอารามหลวงชั้นตรี) ต.พระปฐมเจดีย์ อ.เมือง จ.นครปฐม **วันอังคารที่ 31 ตุลาคม 2560", 
// "userId" : [ 
// ], 
// "view" : 22, 
// "location" : "Mahidol University" 
// } ,
// { 
// "event" : "ทำธงที่ระลึก", 
// "dayStart" : "30", 
// "monthStart" : "เมษายน", 
// "yearStart" : "2561", 
// "dayEnd" : "30", 
// "monthEnd" : "6", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t31.0-8/19575026_1472846502783299_2528380368298570342_o.png?_nc_cat=0&_nc_eui2=v1%3AAeEhf5BC3ml9MULbnOfOSpDXaDh1j3mL01GA7kIxZgfnfDXrXT1hsevBGI-QA4qDNzaGIlkrgeCqSQrjNCsuUQela3WUjvO158orf9dJWRqRVg&oh=29f2729f00792d87a1c2e6c8773f6404&oe=5B55A89B", 
// "description" : "กลับมาอีกครั้ง กับการทำธงที่ระลึก #วันมหิดล ประจำปี 2560 วันศุกร์ที่ 30 มิถุนายน นี้ ณ โรงพยาบาลศิริราช เวลา 19.00 น. - 6.00 น.", 
// "userId" : [ 
// ], 
// "view" : 12, 
// "location" : "Mahidol University" 
// } ,
// { 
// "event" : "บริจาคโลหิต", 
// "dayStart" : "5", 
// "monthStart" : "มกราคม", 
// "yearStart" : "2561", 
// "dayEnd" : "5", 
// "monthEnd" : "9", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/21034325_1526720717395877_1554113049749229784_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEvugs4HsEkDOhvwGdHw-7-DisRcroOnFqXvNtgHhEvg8JRBj8zkaCMfEAtu-tJd0bNTV8OYFsL4T_Pf1aLOI1FwBRTWgALtRHguZ9mNuEJLg&oh=fd2e9229e47b5703d48120b6c62a2e57&oe=5B873F4D", 
// "description" : "ขอเชิญร่วมบริจาคโลหิต ตั้งแต่เวลา 8.30 - 11.30 น. วันที่ 5 กันยายน 2560 ณ ห้องประชุม 322 ชั้น 3 ศูนย์การเรียนรู้มหิดล มหาวิทยาลัยมหิดล ศาลายา Blood donation, September 5th, 2017. 8.30am - 11.30am , Room 322, 3rd floor, Mahidol Learning Center (MLC)", 
// "userId" : [ 
// "5af1762983d2c303f4ed27ff", 
// "5af4c62d325c861442ff3624", 
// "5af4f534fd29dc1a38640e3b" 
// ], 
// "view" : 7, 
// "location" : "Mahidol University" 
// } ,
// { 

// "event" : "TRAM TOUR", 
// "dayStart" : "14", 
// "monthStart" : "สิงหาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "14", 
// "monthEnd" : "6", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
// "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩👩👧👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
// "userId" : [ 

// ], 
// "view" : 0
// }
//             ,{ 

// "event" : "TRAM TOUR1", 
// "dayStart" : "14", 
// "monthStart" : "สิงหาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "14", 
// "monthEnd" : "6", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
// "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩👩👧👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
// "userId" : [ 

// ], 
// "view" : 0, 
// "shortDescription" : "รับลมกับรถแทรมศาลายาพาทัวร์", 
// "location":"Mahidol Salaya" 
// } ,
// { 

// "event" : "TRAM TOUR2", 
// "dayStart" : "14", 
// "monthStart" : "สิงหาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "14", 
// "monthEnd" : "6", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
// "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩👩👧👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
// "userId" : [ 

// ], 
// "view" : 0 
// } ,
// { 

// "event" : "TRAM TOUR3", 
// "dayStart" : "14", 
// "monthStart" : "สิงหาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "14", 
// "monthEnd" : "6", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
// "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩👩👧👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
// "userId" : [ 

// ], 
// "view" : 0
// } ,
// { 

// "event" : "TRAM TOUR4", 
// "dayStart" : "14", 
// "monthStart" : "สิงหาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "14", 
// "monthEnd" : "6", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
// "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩👩👧👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
// "userId" : [ 

// ], 
// "view" : 0
// } ,
// { 

// "event" : "TRAM TOUR5", 
// "dayStart" : "14", 
// "monthStart" : "สิงหาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "14", 
// "monthEnd" : "6", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
// "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩👩👧👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
// "userId" : [ 

// ], 
// "view" : 0
// } ,
// { 

// "event" : "TRAM TOUR6", 
// "dayStart" : "14", 
// "monthStart" : "สิงหาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "14", 
// "monthEnd" : "6", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
// "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩👩👧👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
// "userId" : [ 

// ], 
// "view" : 0
// } ,
// { 

// "event" : "TRAM TOUR7", 
// "dayStart" : "14", 
// "monthStart" : "สิงหาคม", 
// "yearStart" : "2561", 
// "dayEnd" : "14", 
// "monthEnd" : "6", 
// "yearEnd" : "2561", 
// "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
// "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩👩👧👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
// "userId" : [ 

// ], 
// "view" : 0
// }
            ]
  dbo.collection("events").insertMany(obj, function(err, res) {
    if (err) throw err
    console.log("Inserted "+res.insertedCount+" items")
    db.close()
  })
})