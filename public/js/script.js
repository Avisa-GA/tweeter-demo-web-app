(function () {

    const button = document.getElementById('edit-button')
    const editForm = document.getElementById('edit-form')
    const profileDetails = document.getElementById('profile-details')

    button.addEventListener('click', handleClick)

    function handleClick() {
        editForm.classList.toggle('hidden')
        profileDetails.classList.toggle('hidden')
    }


})();