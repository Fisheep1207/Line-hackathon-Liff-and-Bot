import client from "../client.js"
import fs from "fs"
// Upload rich menu image
async function upload_richmenu(){
    let res = await client.setRichMenuImage(process.argv[2], fs.createReadStream(process.argv[3]))
    console.log(res);
}
console.log(process.argv)
upload_richmenu();