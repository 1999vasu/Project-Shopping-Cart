let productName = $('#productName')
let prdoductManufacturer = $('#manufacturer')
let price = $('#price')

$(function (){
    $('#btnProductAdd').click(function(){
        // console.log(productName.val(),
        // prdoductManufacturer.val(),
        // price.val())
        addProduct(
            productName.val(),
            prdoductManufacturer.val(),
            price.val(),
            function(addedProduct){
                console.log("this function called")
                window.alert("Added "+addedProduct.name + " to Database")

            }
        )
    })
})