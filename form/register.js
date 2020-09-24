const form = document.getElementById('theform')
var vConsole = new VConsole();
form.addEventListener('submit', async (e) => {
    console.log("Hello");
    e.preventDefault();
    let form_data = new FormData(form);
    let baseURL = `https://49c73fd73149.ngrok.io/receiveMessege`;
    form_data.append("userId", "Fuckabro");
    var object = {};
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
        if (res.status == 200){
            console.log(res);
            // redirect to somewhere
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


