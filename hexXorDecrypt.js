function hexXorDecrypt(hexString, key) {
    let result = "";
  
    for (let i = 0; i < hexString.length; i += 2) {
      // Lấy từng byte hex (2 ký tự)
      const hexByte = hexString.substr(i, 2);
  
      // Parse hex sang số
      const byteValue = parseInt(hexByte, 16);
  
      // Lấy ký tự key theo vòng lặp
      const keyChar = key.charCodeAt(i / 2 % key.length);
  
      // XOR
      const decryptedByte = byteValue ^ keyChar;
  
      // Convert sang ký tự
      result += String.fromCharCode(decryptedByte);
    }
  
    return result;
}

const hexString = "050d271510484a5b3d0c091c5f4247190b36040e4b555a280a141d0202065b496254555d57467e524d6d045756544d6352075d0c1a2f00011c5d014155";
const key = "mySecretKey2024";

console.log(hexXorDecrypt(hexString, key));
