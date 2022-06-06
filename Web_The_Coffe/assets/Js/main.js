
const menuName = document.querySelectorAll('.js-name');

for(let x of menuName){
    x.addEventListener('click',function () {
        if (x.textContent.includes('Eat')) {
            document.querySelector('.name-menu-1').classList.add('change');
            document.querySelector('.content-menu-eat').classList.add('open');
            document.querySelector('.content-menu-drink').classList.remove('open');
            document.querySelector('.name-menu-2').classList.remove('change');
        }else{
            document.querySelector('.name-menu-2').classList.add('change');
            document.querySelector('.content-menu-drink').classList.add('open');
            document.querySelector('.content-menu-eat').classList.remove('open');
            document.querySelector('.name-menu-1').classList.remove('change');
        }

    })
}




