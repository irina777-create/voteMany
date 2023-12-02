window.addEventListener('click', function(event){
    if (event.target.classList.contains('smile'))
    {
        let edit = document.querySelector('.edit');
        edit.value += event.target.attributes['my-data-smile'].value;
    }
});