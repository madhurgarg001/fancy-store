define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    /*on requiring listCategories , it will first call define function
    * which in turn will return an object which contains different
    * methods that will be required to fetchData, filterData etc.
    * */
    var listCategories = require('./list-categories');
    var filterCategories = require('./filter-categories');
    var singleProduct = require('./single-product');
    var template = require('./_templates/_templates');
    var product = require('./getUrlParams');
    // Load library/vendor modules using
    // full IDs, like:
    var $ = require('jquery');


    /* getCategoryData, getFilteredData and getSingleData are acting as
    * interfaces to get the data from API
    * */
    $(document).ready(function () {
        //Fetching categories

        listCategories.getCategoryData(function (catObj) {
            console.log(catObj);
            template.renderCatTemplate(catObj);

            //Filtering products on the basis of selected category

            $(".categoriesMenu>select").change(function(){
                filterCategories.setCatObj(catObj);
                filterCategories.getFilteredData(function (productsObj) {
                    console.log(productsObj);
                    template.renderProductsTemplate(productsObj);
                });
            }).change();
        });





        //Getting single data

        singleProduct.getSingleData((function (productInfo) {
            console.log(productInfo);
        }));
    });





});
