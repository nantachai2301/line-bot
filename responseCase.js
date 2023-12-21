function responserCase(message) {
  console.log(message);

  // Convert the input text to lowercase for case-insensitive matching
  const lowerCaseText = message.text.toLowerCase();
  const trimmedText = lowerCaseText.replace(/\s+/g, "");
  console.log(trimmedText);
  // Specify the substrings to check for
  const greetingsSubstrings = ["สวัสดี", "ดีครับ", "ดีค่ะ", "ดีจ้า"];
  const goodbye = ["ลา","บาย","ลาก่อย","ลาก่อน"];

  // Check for partial matches
  if (
    greetingsSubstrings.some((substring) => new RegExp(substring).test(trimmedText))
) {
    return "สวัสดี";
}
if (goodbye.some((substring) => new RegExp(substring).test(trimmedText))) {
    return "ลาก่อน";
} else {
    return `${message.text}`;
}

}

module.exports = {
  responserCase,
};
