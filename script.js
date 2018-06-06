let displayFunc = () => {
    // take the user input
    const inputValue = document.querySelector('#number').value; 
    
    // Output to #display
    document.querySelector('#display').textContent = inputValue;
}