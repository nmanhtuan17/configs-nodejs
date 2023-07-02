
document.addEventListener('DOMContentLoaded', () => {
    var btnSearch = document.querySelector('.btn-search')
    var inputSearch = document.querySelector('.inputSearch')
    function search(){
        var productItems = document.querySelectorAll('.products-items')
        
        var filter = inputSearch.value.toUpperCase()
        productItems.forEach((el)=>{
            var productName = el.getAttribute('id')
            if(productName.toUpperCase().includes(filter)){
                el.style.display = ''
            }
            else{
                el.style.display = 'none'
            }

        })
    }
    
    inputSearch.addEventListener('input', search)
})