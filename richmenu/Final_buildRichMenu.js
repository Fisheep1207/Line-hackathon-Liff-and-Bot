import client from "../client.js"
import richmenu from "./richmenu_templete/templete2.js"
import fs from "fs"
const imgName = process.argv[2];
final();

async function final(){
    let ID = await setRichMenu();
    console.log(ID);
    let res1 = await upload_richmenu(ID);
    console.log(res1);
    let res2 = await setDefault(ID);
    console.log(res2);
}

async function setRichMenu(){
    let ID = client.createRichMenu(richmenu);
    return ID;
}

async function upload_richmenu(ID){
    let res = await client.setRichMenuImage(ID, fs.createReadStream(imgName))
    console.log(res);
}

async function setDefault(ID) {
    try{
        let res = await client.setDefaultRichMenu(ID);
        console.log(res);
    }
    catch(err){
        console.log(err.response);
    }
}