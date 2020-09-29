const form = document.getElementById('theform')
var vConsole = new VConsole();
async function initializeLiff(myLiffId) {
    console.log(myLiffId);
    try{
        return liff.init({liffId: myLiffId});
    }
    catch(err){
        console.log(err);
    }
}
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let tmp = await initializeLiff('1654947700-lGNQ8emK');
    let form_data = new FormData(form);
    let baseURL = `https://line-health-manager-web.herokuapp.com/api/posts/sendtable`;
    var object = {};
    var profile;
    try{
        profile = await liff.getProfile();
        console.log(profile);
        console.log(profile.userId);
    }
    catch(err){
        console.log("err = ", err);
    }
    form_data.forEach(function(value, key){
        // console.log("key = ", key, "value = ", value);
        if (key in object && Array.isArray(object[key])){
            object[key].push(value);
        }
        else if (key in object){
            object[key] = [object[key], value];
        }
        else {
            object[key] = value;
        }
    });
    object["userId"] = profile.userId;
    let json_data = JSON.stringify(object);
    console.log(json_data);
    try{
        let res = await fetch(baseURL, {
        method:'POST',
        body:  json_data,
        headers: {
            'Content-Type': 'application/json'            
        }
        })
        if (res.status == 200){
            console.log(res);
            // redirect to somewhere
            // await liff.sendMessages([
            //     {
            //       type: 'text',
            //       text: 'Thank you !'
            //     }
            // ]);
            liff.closeWindow();
        }
        else{
            console.log("Bad!");
            // redirect to somewhere
        }
    }
    catch(err){
        console.log(err);
    }
});

// ~async function(e){
//     document.getElementById('submit-btn').addEventListener('click', async function (e) {
//         e.preventDefault();
//         console.log("WTF");
//     })
// }()


