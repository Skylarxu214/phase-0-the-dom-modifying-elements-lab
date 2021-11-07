// Write your code here!
const main = document.getElementById("main");
main.remove();


const H1 = document.createElement("h1");
document.body.append(H1);


H1.setAttribute("id","victory");

const newHeader = "Skylar is the champion ."
H1.innerHTML = newHeader;

