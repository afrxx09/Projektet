var form = {
    strSelected : 0,
    
    Init : function(strSelected, boolSend){
        this.Bind();
        if(boolSend){
            $('#form-container').hide();
            $('#form-submitted').show();
        }
        else{
            if(strSelected !== 0){
                this.strSelected = strSelected;
            }
            this.SelectProduct();
        }
    },
    
    Bind : function(){
        var self = this;
        $('#submit-button').on('click',function(){
            $('#order-form').trigger('submit');
        });
    },
    
    SelectProduct : function(){
        $('#product').val(this.strSelected);
    }
};

$(document).ready(function(){
    var strURL      = document.URL;
    var intIndex    = strURL.indexOf('?');
    var intSelected = 0;
    if(intIndex !== -1){
        var strParam = strURL.substring(intIndex+1);
        if(strParam === 'send'){
            form.Init(intSelected, true);
        }
        else{
            form.Init(parseInt(strParam), false);
        }
    }
});