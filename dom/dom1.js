// Get hold of elements to manipulate
var search = document.getElementById('search');
var btn = document.getElementById('btn');

// Add event to button
btn.addEventListener('click', () => {
    var val = search.value;
    if (val.length > 0) {
        // console.log(val);
        document.getElementById('content').innerText = val;
    } else {
        alert("No input");
    }
});
// Working with only search field
search.addEventListener('keyup', function(e) {
    console.log(e.key);
    if (e.key == "Enter") {
        console.log("You pressed enter");
    }

})