import client from "../client.js"

async function deleteRM(ID) {
    try{
        let res = await client.deleteRichMenu(ID);
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

async function getListAndDelete(){
    let richmenus = await client.getRichMenuList();
    richmenus.forEach(async (richmenu) => {
        console.log(richmenu)
        await deleteRM(richmenu.richMenuId);
    })
    
}
getListAndDelete();