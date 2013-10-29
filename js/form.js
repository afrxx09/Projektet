var form = {
    strSelected : 0,
    
    Init : function(strSelected){
        this.Bind();
        if(strSelected !== 0){
            this.strSelected = strSelected;
        }
        this.SelectProduct();
    },
    
    Bind : function(){
        var self = this;
    },
    
    SelectProduct : function(){
        $('#product').val(this.strSelected);
        console.log(this.strSelected);
    }
};

$(document).ready(function(){
    var strURL = document.URL;
    var intIndex = strURL.indexOf('?');
    var intSelected = 0;
    if(intIndex !== -1){
        intSelected = parseInt(strURL.substring(intIndex+1));
    }
    form.Init(intSelected);
});