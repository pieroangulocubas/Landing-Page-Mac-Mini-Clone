const menuButton = document.getElementById("menu-button"),
      mainHeader=document.getElementById('main-header'),
      overlay=document.getElementById('main-overlay'),
      activeClass='is-active',
      isTablet=matchMedia('(max-width: 734px)')

function toogleMenu(){
  mainHeader.classList.toggle(activeClass)
}
function closeMenu(){
  mainHeader.classList.remove(activeClass)
}
function closeMenuWhenClickLink(e){
  if(e.target.tagName === 'A') closeMenu()
}

function closeWhenTypeScape(e){
  if(e.code === 'Escape') closeMenu()
}



function handleAddEventListener(){
  menuButton.addEventListener('click',toogleMenu)
  overlay.addEventListener('click',closeMenu)
  mainHeader.addEventListener('click',closeMenuWhenClickLink)
  mainHeader.addEventListener('keydown',closeWhenTypeScape)
}

function handleRemoveEventListener(){
  menuButton.removeEventListener('click',toogleMenu)
  overlay.removeEventListener('click',closeMenu)
  mainHeader.removeEventListener('click',closeMenuWhenClickLink)
  mainHeader.removeEventListener('keydown',closeWhenTypeScape)
}

function handleEventListener(mediaQuery){
  if(mediaQuery.matches) handleAddEventListener()
  else handleRemoveEventListener()
}

export function handleActiveMenu(){
  if(isTablet.matches) handleAddEventListener()
  isTablet.addEventListener('change',handleEventListener)
}
