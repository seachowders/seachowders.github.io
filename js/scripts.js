$(document).ready(function(){
    var loc = location.pathname.substring(1);
   // alert(loc);
    if(loc == "resume.html")
        addCollapse();
    if(loc == "projects.html")
        projCollapse();
                
                 
                  
                  });



function addCollapse(){
    var loc = location.pathname.substring(1);
    $('.coll1').readmore({
                      moreLink:'<a href="#">Experience</a>', 
                      collapsedHeight:0, 
                      speed:500//
                     
                  });
    $('.coll2').readmore({
        moreLink:'<a href="#">Education</a>', 
                      collapsedHeight:0, 
                      speed:500//
                     
                  });
    $('.coll3').readmore({
        moreLink:'<a href="#">Skills</a>', 
                      collapsedHeight:0, 
                      speed:500//
                     
                  });
    
}

function projCollapse(){
   // alert("HEREE");
    $('.proj1').readmore({
        collapsedHeight:0,
        moreLink:'<a href="#">Shopping Cart</a>',
        speed:500
    });
    
     $('.proj2').readmore({
        collapsedHeight:0,
        moreLink:'<a href="#">D.B. International Logo</a>',
        speed:500
    });
    
     $('.proj3').readmore({
        collapsedHeight:0,
        moreLink:'<a href="#">Pixalated Peach Logo</a>',
        speed:500
    });
    
     $('.proj4').readmore({
        collapsedHeight:0,
        moreLink:'<a href="#">Color the Weather</a>',
        speed:500
    });
    
    $('.proj5').readmore({
        collapsedHeight:0,
        moreLink:'<a href="#">Shape of Space</a>',
        speed:500
    });
    
   $('.mag1').magnificPopup({type:'image'});
    $('.mag2').magnificPopup({type:'image'});
    $('.mag3').magnificPopup({type:'image'});
}