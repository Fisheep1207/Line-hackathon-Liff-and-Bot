var vConsole = new VConsole();
console.log("in js");
async function initializeLiff(myLiffId) {
        console.log(myLiffId);
        try{
            return liff.init({liffId: myLiffId});
        }
        catch(err){
            console.log(err);
        }
}
const form = document.getElementById('theform')
form.addEventListener('submit', async (e) => {
    console.log("Hello");
    e.preventDefault();
    let form_data = new FormData(form);
    // console.log("form_data = ", form_data);
    let tmp = await initializeLiff('1654947700-lGNQ8emK');
    let baseURL = `https://26503cf3fa8d.ngrok.io/receiveMessege`;
    var profile;
    try{
        profile = await liff.getProfile();
        console.log(profile);     
    }
    catch(err){
        console.log("err = ", err);
    }
    form_data.append("userId", profile.userId);
    var object = {};
    form_data.forEach(function(value, key){
        object[key] = value;
    });
    console.log(object);
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
