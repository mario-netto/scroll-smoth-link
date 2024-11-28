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

//voltar para o topo da página
function initVoltaTopo(){
  const botaoVoltaTopo = document.querySelector('.voltar-topo')
  
  function mostraVoltaTopo(e){
    botaoVoltaTopo.classList.remove('ativo')
    if (window.scrollY > 300){
      botaoVoltaTopo.classList.add('ativo')
      botaoVoltaTopo.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      })
    }
  }
  
  window.addEventListener('scroll', mostraVoltaTopo)
}

initScrollSuave()
initVoltaTopo()