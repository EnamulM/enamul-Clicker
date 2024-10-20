let count = 0;

function increment() {
    count += 1;
    document.getElementById("count-el").innerHTML = count;
}

function save() {
    let saveEl = document.getElementById("save-el");
    let countStr = count + " - ";
    saveEl.textContent += countStr; 
    count = 0;
    document.getElementById("count-el").innerHTML = count; 
}