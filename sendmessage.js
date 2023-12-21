const {responserCase} = require('./responseCase')
const line = require("@line/bot-sdk");
const config = require("./config.json");
const client = new line.Client(config);
const replyText = (token, texts) => {
    texts = Array.isArray(texts) ? texts : [texts];
    return client.replyMessage(
      token,
      texts.map((text) => ({ type: "text", text }))
    );
  };
// function รับค่าที่ส่งมาให้ส่งกลับไปว่ารับอะไรมา
function handleText(message, replyToken) {
    return replyText(replyToken, responserCase(message));
  }
  
  function handleImage(message, replyToken) {
    return replyText(replyToken, "คุณส่งรูปภาพ");
  }
  
  function handleVideo(message, replyToken) {
    return replyText(replyToken, "คุณส่งวิดีโอ");
  }
  function handlfile(message, replyToken) {
    return replyText(replyToken, "คุณส่งไฟล์");
  }
  
  function handleAudio(message, replyToken) {
    return replyText(replyToken, "คุณส่งไฟล์เสียง");
  }
  
  function handleLocation(message, replyToken) {
    return replyText(replyToken, "คุณส่งโลเคชั่น");
  }
  
  function handleSticker(message, replyToken) {
    return replyText(replyToken, "คุณส่งสติกเกอร์");
  }
  

  module.exports = {
    handleText,
    handleImage,
    handleVideo,
    handlfile,
    handleAudio,
    handleLocation,
    handleSticker,
    
};