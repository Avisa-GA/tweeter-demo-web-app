

(function() {

    // Constants and State variable
 
    // Cached Elements Reference
    const select = document.getElementById('changeStatus')
    const tweetButton = document.getElementById('tweetButton')

    // EventListener
    select.addEventListener('click', handleSelect)
    select.addEventListener('click', handleClick)

    // Functions
    function handleSelect() {
        console.log('I am here')
    }

    function handleClick() {
        console.log('here')
    }

})();