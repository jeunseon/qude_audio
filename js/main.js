window.onload = function(){
    //  01. gnb 애니메이션

    const menuOpen = document.querySelector('.gnb .menuOpen');
    const menuBox = document.querySelector('.gnb .menuBox');

    menuOpen.addEventListener('click', () => {
        menuBox.classList.toggle('on');
    });
}

