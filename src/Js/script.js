

const shareBtn = document.getElementById('shareBtn');
const linksContainer = document.querySelector('.links-share');
const linksBtn = document.getElementById('linksBtn');

shareBtn.addEventListener('click', () => {
    if(linksContainer.classList.contains('hidden')){
        linksContainer.classList.remove('hidden');
    }else{
        linksContainer.classList.add('hidden');
    }
})

linksBtn.addEventListener('click', () => {
    linksContainer.classList.add('hidden');
})