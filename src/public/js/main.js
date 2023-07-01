
document.addEventListener('DOMContentLoaded', () => {
    var btnSearch = document.querySelector('.btn-search')
    function search(){
        var inputSearch = document.querySelector('.inputSearch')
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
    
    btnSearch.addEventListener('click', search)
})