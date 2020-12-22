$(function (){
    

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")
    let produclist = $('#product-list')

    fetchproducts(function(products){
        produclist.empty()
        for(product of products){
            console.log(createproduct(product))
            produclist.append(createproduct(product))
        }

    })
})

