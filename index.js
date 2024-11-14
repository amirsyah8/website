let userName;

document.getElementById("bName").onclick = function(){
    userName = document.getElementById("myName").value;
    document.getElementById("myH1").textContent = `Hello ${userName}`;
}