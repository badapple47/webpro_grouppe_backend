# webpro_grouppe_backend

เป็นส่วนหนึ่งของวิชา egco 427 - web programming

feature list
- สมัครสมาชิก เพื่อเข้าใจเว็บไซต์
- หน้ารวม News/event ข่าวที่หน้าสนใจของ มหาวิทยาลัย
- Event แสดงคนใน Directory ที่สมัคร eventว่ามีใครบ้าง และสามารถสมัครได้ (หลังจากสมัครจะได้ QR code ที่เกิดจาก Eventid + UserId เพื่อเป็นตัวยืนยันการสมัคร) 
- กระดานสารานุกรมของคณะวิศวะกรรมศาสตร์ สามารถกดเข้าไปดูข้อมูลส่วนตัวได้ และสามารถแก้ไขข้อมูลส่วนตัวของตัวเองได้


เขียนด้วย node.js + mongo db

how to run

* don't forget cors toggle

- npm install
- npm start
- สร้าง collection ของ MongoDB ชื่อ events news และ users


ตัว json ของ db อยู่ในไฟล์ชื่อ newsdb.json / eventdb.json


