var getColor = ()=>{
    
    // Creating Random Number
    const randomnum = Math.floor(Math.random()*16777215);

    // Creating HashCode
    const hashcode = "#" + randomnum.toString(16);

    // Body Color Change
    document.body.style.backgroundColor = hashcode;

    // Code h2
    document.getElementById('color-code').innerText = hashcode;

    // Copy to clipboard
    navigator.clipboard.writeText(hashcode);
}

// Button Call
document.getElementById('btn').addEventListener('click', getColor);

// Init Call
getColor();