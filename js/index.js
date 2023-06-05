const form = document.querySelector('form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')
const nameInfo = document.querySelector('.name-info')
const emailInfo = document.querySelector('.email-info')
const messageInfo = document.querySelector('.message-info')
const modal = document.querySelector('.modal')

let storedInfo = JSON.parse(localStorage.getItem('info')) ? JSON.parse(localStorage.getItem('info')) : []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let name = nameInput.value.trim()
    let email = emailInput.value.trim()
    let textarea = messageInput.value.trim()

    if (name && email && textarea) {
        let obj = {
            name,
            email,
            textarea
        }

        storedInfo.push(obj)
        localStorage.setItem('info', JSON.stringify(storedInfo))
        nameInput.value = ""
        emailInput.value = ""
        messageInput.value = ""

        modal.classList.add('active')
        setTimeout(() => {
            modal.classList.remove('active')
        }, 3500)
    } else if (!name) {
        nameInfo.classList.add('active')
        setTimeout(() => {
            nameInfo.classList.remove('active')
        }, 3000)
    } else if (!email) {
        emailInfo.classList.add('active')
        setTimeout(() => {
            emailInfo.classList.remove('active')
        }, 3000)
    } else if (!textarea) {
        messageInfo.classList.add('active')
        setTimeout(() => {
            messageInfo.classList.remove('active')
        }, 3000)
    }
})


///////////////// navbar////////////////////////////




//////////////// back to top /////////////////////

const btn = document.getElementById('topButton')
window.onscroll= function() {scroll()}

const scroll = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
    var scrolled = (winScroll / height) * 100;  
    document.getElementById("progressBar").style.width = Math.floor(scrolled) + "%";
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
}


const backTotop = () => {
    document.documentElement.scrollTop = 0;
}


