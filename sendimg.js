// 1. สร้างฟังก์ชันดึงรูปภาพ
function getGreetingImage() {
    // ตัวอย่าง URL ของรูปภาพ
    return 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/374864371_3787412154831833_2188812894353837800_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFs0hpgR28KFgYChT2OdK2a0OKnJPymEz7Q4qck_KYTPv_2W_Zy4LW7_Ks3M2kH0_4aAUl2ms0iCKt58SN9u2hT&_nc_ohc=QQu2Dobo81YAX9KMkg_&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfAihNVyzfvfRHdBMXHFsJJTr65wkeVQC5FmNDa6Cyjsug&oe=658A5E80';
}

// 2. สร้างฟังก์ชันที่รับรูปภาพเป็นพารามิเตอร์
function displayGreetingImage(imageUrl) {
    // ทำสิ่งที่คุณต้องการกับ URL ของรูปภาพที่ได้รับ
    // console.log('Received greeting image URL:', imageUrl);
    // // ตัวอย่าง: ใช้ imageUrl โดยตรง
    // // เพื่อให้โค้ดทำงานได้ทั้งในบราวเซอร์และ Node.js
    // console.log('Displaying image with URL:', imageUrl);
}

// 3. เรียกใช้ฟังก์ชัน getGreetingImage
const imageUrl = getGreetingImage();

// 4. เรียกใช้ฟังก์ชัน displayGreetingImage และส่ง URL ของรูปภาพไป
displayGreetingImage(imageUrl);

// 5. ส่วน exports
module.exports = {
    getGreetingImage,
    displayGreetingImage,
};



