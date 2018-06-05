module.exports = {
    
    menuChange(id){
        let testSelector = document.getElementById(id)
        let ulSelector = document.getElementById('navUl')
        let listItems = ulSelector.getElementsByTagName("li")
        console.log('ulSelector', ulSelector)
        for (var i = 0; i < listItems.length; i++) {
          if (ulSelector[i].classList.contains('active')){
              ulSelector[i].classList.remove('active')
          } 
        }
        
        if (testSelector.classList.contains('active')){
         return testSelector.classList.remove('active')
        } else {
         return testSelector.classList.add('active')
        }                                                         
        return testSelector
    }
}