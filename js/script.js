const cal = document.querySelectorAll('.cal');
      callories = document.querySelector('.callories')


window.addEventListener('scroll', function stopCal(){
  console.log(pageYOffset);
  if (pageYOffset >= (callories.offsetTop - callories.clientHeight * 3)) {
    cal.forEach((cal)=>{
      let number = +cal.getAttribute('data-num')
      function calPlus(i = 0) {
        cal.innerHTML = i
        i++
        if (i < number) {
          setTimeout(() => {
            calPlus(i)
          }, 80);
        }
      }
      calPlus()
    })
    this.removeEventListener('scroll', stopCal)
}
}) 