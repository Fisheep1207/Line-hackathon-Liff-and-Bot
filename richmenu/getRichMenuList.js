import client from "../client.js"
client.getRichMenuList()
	.then((richmenus) => {
  	richmenus.forEach((richmenu) => console.log(richmenu));
})