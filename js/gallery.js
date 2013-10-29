var gallery = {
    strParam : 'gallery-text',
    
    Init : function(strParam){
        this.Bind();
        if(strParam !== ''){
            this.strParam = strParam;
        }
        this.ShowGallery();
        this.MarkActive();
    },
    
    Bind : function(){
        var self = this;
        $('#gallery-nav a').on('click', function(e){
            e.preventDefault();
            self.strParam = $(this).attr('rel');
            self.ShowGallery();
            self.MarkActive();
        });
    },
    
    ShowGallery : function(){
        $('.gallery').hide();
        $('#' + this.strParam).show();
    },
    
    MarkActive : function(){
        $('#gallery-nav li').removeClass('active');
        $('#gallery-nav li a.' + this.strParam).parent().addClass('active');
    }
};

$(document).ready(function(){
    var strURL = document.URL;
    var intIndex = strURL.indexOf('?');
    var strParam = '';
    if(intIndex !== -1){
        strParam = strURL.substring(intIndex+1);
    }
    gallery.Init(strParam);
});