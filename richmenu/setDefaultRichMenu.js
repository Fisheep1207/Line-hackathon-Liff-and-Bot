import client from "../client.js"
async function setDefault() {
    try{
        let res = await client.setDefaultRichMenu(process.argv[2]);
        console.log(res);
    }
    catch(err){
        console.log(err.response);
    }
}
setDefault();