const linksInternos = document.querySelectorAll('.menu a[href^="#"]')

function initScrollSuave(){
  function scrollSuave(e){
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const elemento = document.querySelector(href)
    const topo = elemento.offsetTop
  
    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  
    //forma 2 de fazer
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollSuave)
  })
}

initScrollSuave()