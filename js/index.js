function showSuggestions() {
    const suggestions = document.getElementById('suggestions');

    suggestions.style.opacity = '1';

    suggestions.style.display = 'block';

    

}

document.addEventListener('click', function handleClickOutsideBox(event) {

    const suggestions = document.getElementById('suggestions');

    if (!suggestions.contains(event.target)) {
         suggestions.style.display = 'none';
   }

} );