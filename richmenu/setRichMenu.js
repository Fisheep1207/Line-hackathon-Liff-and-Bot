import client from "../client.js"
import richmenu from "./richmenu_templete/templete1.js"

console.log(richmenu)
client.createRichMenu(richmenu).then((richMenuId) => console.log(richMenuId))