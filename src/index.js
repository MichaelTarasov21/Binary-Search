const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById("data").innerHTML = `Your dataset is ${data}`;

function search() {
    const searchterm = document.getElementById("input").nodeValue
    if (isNaN(searchterm)){
        alert("I only know how to search for numbers")
        return;
    }
}
document.getElementById("submit").addEventListener("click", search);
