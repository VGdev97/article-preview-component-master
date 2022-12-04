const shareButton = document.getElementById('share-icon')
const shareBox = document.getElementById('share')

shareButton.addEventListener('click',()=>{
    shareBox.classList.toggle('active')
})