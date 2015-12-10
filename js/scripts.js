$(document).ready(function(){
    var loc = location.pathname.substring(1);
    if(loc == "resume.html")
        addCollapse();
                
                 
                  
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