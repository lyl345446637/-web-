var pageLimit=2; 
$(document).ready(function() {   /* 在P标签末尾添加 pageLimit 次Some */
    for (var i = 1; i <= pageLimit; i++) { 
     $('p').append('Some'); 
    } 
   }); 


$(document).ready(function(){  /* 在P标签末尾添加Some */
    $("p").append("Some");
});

$(document).ready(function(){  /* 在目标 id 末尾 添加一个 class 里的内容 */
    $(function(){ 
        var $button = $('.img_h_p').clone();
        
        $('#update').append($button); 
        var $button2 = $('.img_h_p2').clone();
        
        $('#update').append($button2); 
    }); 
});
