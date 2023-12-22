const { getGreetingImage, displayGreetingImage } = require("./sendimg");

function responserCase(message) {
  console.log(message);

  // Convert the input text to lowercase for case-insensitive matching
  const lowerCaseText = message.text.toLowerCase();
  const trimmedText = lowerCaseText.replace(/\s+/g, "");

  // Specify the substrings to check for
  const Vulgar =["สัส","เหี้ย","หน้าหี","ส้นตีน","ควย","ควาย","เด็กเปตร","หน้าหนังหมา","เอ๋อ","ห่วย","กระจอก"]
  const image = ["รูปภาพ","ขอดูรูปหน่อย"]
  const greetingsSubstrings = ["สวัสดี", "ดีครับ", "ดีค่ะ", "ดีจ้า"];
  const web = ["มีหน้าเว็ปไหม","ขอหน้าเว็บหน่อย","เว็บไซต์","หน้าเว็บ","รายลเอียดหน้าเว็บ"]
  const goodbye = ["ลา", "บาย", "ลาก่อย", "ลาก่อน"];
  const question = [
    "อยู่ที่ใหน",
    "หน่วยงานคุณอยู่ที่ใหน",
    "ตำแหน่งที่ตั้ง",
    "ขอโลเคชั่น",
    "โลเคชั่น",
    "สถานที่",
    "ที่อยู่อบต",
    "ที่อยู่อ.บ.ต",
  ];
  const compliments = ["สวย", "เท่", "เก่ง", "น่ารัก"];
  const weatherKeywords = ["สภาพอากาศ", "อากาศ", "สภาพทางอากาศ"];
  const askNameKeywords = ["ชื่อ", "คุณชื่อ", "เรียกว่าอะไร"];
  const gratitudeKeywords = ["ขอบคุณ", "บ้าย", "ขอบใจ"];
  const imageUrl = getGreetingImage();
  displayGreetingImage(imageUrl);

  // Check for partial matches
  if (
    image.some((substring) =>
      new RegExp(substring).test(trimmedText)
    )
  ) {
    return {
      type: "image",
      originalContentUrl: imageUrl,
      previewImageUrl: imageUrl,
    };
  }

  if (greetingsSubstrings.some((substring) => new RegExp(substring).test(trimmedText))) {
    return {
      type: "text",
      text: "สวัสดีครับ 😊",
    };
  }
  if (Vulgar.some((substring) => new RegExp(substring).test(trimmedText))) {
    return {
      type: "text",
      text: "กรุณาใส่คำสุภาพนะครับ 😊",
    };
  }
  if (web.some((substring) => new RegExp(substring).test(trimmedText))) {
    return {
      type: "text",
      text:` นี้ครับ : http://obt-bangsaotong.go.th/index `
    };
  }
  if (goodbye.some((substring) => new RegExp(substring).test(trimmedText))) {
    return {
      type: "text",
      text: "ลาก่อน",
    };
  }

  if (question.some((substring) => new RegExp(substring).test(trimmedText))) {
    return {
      type: "text",
      text: "https://maps.app.goo.gl/BLLfHx9ApQPX2ftr7",
    };
  }

  if (compliments.some((substring) => new RegExp(substring).test(trimmedText))) {
    return {
      type: "text",
      text: "ขอบคุณมากครับ 😊",
    };
  }

  if (weatherKeywords.some((substring) => new RegExp(substring).test(trimmedText))) {
    return {
      type: "text",
      text: "ตอนนี้ยังไม่มีข้อมูลสภาพอากาศครับ",
    };
  }

  if (askNameKeywords.some((substring) => new RegExp(substring).test(trimmedText))) {
    return {
      type: "text",
      text: "ชื่อของฉันคือ บอท อ.บ.ต บางเสาธง ครับ",
    };
  }

  if (gratitudeKeywords.some((substring) => new RegExp(substring).test(trimmedText))) {
    return {
      type: "text",
      text: "ยินดีครับ/ค่ะ! 😊",
    };
  }

  // Default response for anything else
  return {
    type: "text",
    text: `${message.text}`,
  };
}



function responseimg() {
  // Check for partial matches
  // Default response for anything else
  return {
    type: "text",
    text: "รูปที่ส่งมาสวยดีครับ",
  };
}




module.exports = {
  responserCase,responseimg
};
