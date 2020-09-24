const form = document.getElementById('theform')
form.addEventListener('submit', async (e) => {
    console.log("Hello");
    // e.preventDefault();
    let form_data = new FormData(form);
    let baseURL = `http://127.0.0.1:30000/p`;
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
    // try{
    //     let res = await fetch(baseURL, {
    //     method:'POST',
    //     body:  json_data,
    //     headers: {
    //         'Content-Type': 'application/json'
            
    //     }
    //     })
    //     console.log(res);
    // }
    // catch(err){
    //     console.log(err);
    // }
});

// ~async function(e){
//     document.getElementById('submit-btn').addEventListener('click', async function (e) {
//         e.preventDefault();
//         console.log("WTF");
//     })
// }()


