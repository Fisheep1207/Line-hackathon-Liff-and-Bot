import client from "../client.js"

async function deleteRM() {
    try{
        let res = await client.deleteRichMenu(process.argv[2]);
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}
deleteRM();