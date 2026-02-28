const fs = require("fs");
const stringLookup = require("./string_lookup_0x4827.json");

// ====== 1️⃣ OFFSET ======
const OFFSET = 471;

// ====== 2️⃣ LOAD FILE ======
const inputFile = "media_player.js";
const outputFile = "output.js";

let code = fs.readFileSync(inputFile, "utf8");

// ====== 3️⃣ REPLACE ======
code = code.replace(
  /_0x(?:9f5b01|5cf194|16bd1f|56c3f8|f8e1e7|297996|500987|1a8b52|3c84fe|1dc389|223af0|32009b|181609|579f23|3ceab5|45b768|54fb0b|3702b5|1d95d3|353b9c|444daf|355433|399121|c9854b|5428b4|2aa124|521a9c|26d42c|1e0ce6|5de5ac|152ac7|2d092f|51e582|25c979|106f4b|3958b7|16f187|26485a|31914a|4d8c7f|13f8df|d6699f|22e9e1|33fc1a|1e9cb5|236580|10f64b|b2f6e6|5b5776|1446a7|5eb0f1|5022e3|3ccba0|4fd7a1|517dc2|4a74c0|3d0017|3a8e97|2f0cfb|312bb4|26204c|46a206|26d83d|179c8c|3e2afc|295706|44c843|29f289|5cef68|f0931c|1580f7|4daa36|d6a8fe|3f94ac|4481b6|533408|6d4400|4c4e53|180df4|2c6cd7|5e063f|1ba480|143a3a|2efa8f|d187fa|3714be|178134|111be6|497a03|740366|333f03|14f11b|5c9a40|3f9c60|51c1a4|34659e|41528b|27c25e|5eb71b|576008|5371f9|5ce0a3|1afd8e|54c867|335fbc|2d18cc|4a78cc|2b395e|4209fb|3d8741|12f0eb|1a5e1a|5d2796|5455ab|20aa05|570d2c|f8add0|132dd6|5f1002|1eb8fb|16275e|55f654|187d64|cc3560|212a52|1c30f4|53b4ea|54440e|21e1d7|3f1bef|3c6c93|32a36c|474605|3867be|d7626e|21d413|5881e7|372327|a38c9f|3c021b|6912f4|16565a|4f7a15|5d4513|1292c8|4581d3|515e3d|240a9d|28251e|3065d6|596ba9|10759e|cedf19|234195|1da412|34e052|5f4bad|11b9ce|d62f15|128421|4f4cf8|545102|2f53e0|293154|487c2f|3dd1ce|2e122a|56ef2a|567774|4c8bd2|2c101a|cb6e62|583d22|4d29e1|50cbe5|40170c|491040|533f87|771312|15af1c|27f6b5|4e10cf|145793|29ec1a|173756|57aa3a|214c15|3c7302|2bf36f|3cda12|14ac1f|206eec|23af74|4584e4|37fed3|5c287f|485388|ffc3f1|1a3dcc|30b86a|6fc1c4|5273fb|249d59|44df17|3339b6|5f5bcd|76620c|f22e92|404d5a|5eef6b|e21ab7|9e7f3f|1b9927|47946c|51aff0|1d3cd5|57529d|3331ec|3ec41e|22f453|5ca409|5cf562|103d84|1ed1f0|f8a6dd|4c0739|247ec2|f08730|c64657|d41a6a|96163c|1e4bc8|18866a|112b1a|b1fd5c|4f2a1f|1104e3|21194d|3abda0|41ed16|139757)\((0x[0-9a-fA-F]+)\)/g,
  (match, hex) => {
    const index = parseInt(hex, 16) - OFFSET;
    const value = stringLookup[index];

    if (typeof value !== "string") {
      return match;
    }

    return JSON.stringify(value);
  },
);
// ====== 5️⃣ WRITE FILE ======
fs.writeFileSync(outputFile, code);

console.log("✅ Deobfuscate done → output.js");
