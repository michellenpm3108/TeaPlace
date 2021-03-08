const exitBtn = document.getElementById('exit');
const menuBtn = document.getElementById('menu-btn')
const navigation = document.getElementById('nav')
menuBtn.addEventListener('click', function() {
    navigation.classList.add('open-nav')
   })
exitBtn.addEventListener('click', function() {
 navigation.classList.remove('open-nav')
})