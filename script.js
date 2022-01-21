//Grabbing all the elements
const input = document.getElementById('input');
const output = document.getElementById('output');

//Once the user changes the input value...
input.addEventListener("keydown", (e)=>{
    let spaces = (input.value.split(" ").length - 1);
    let length = (input.value.length);
    
    let characters = (length - spaces);

    let words = input.value.split(" ").filter((x) => x !== "").length;

    output.innerText = words + " words | " + characters + " characters";
});

//Once the user presses the reset button
const reset_btn = document.getElementById('reset_btn').addEventListener("click", (e)=>{
    words = 0;
    characters = 0;
    input.value = "";
    
    output.innerText =  words + " words | " + characters + " characters";

});