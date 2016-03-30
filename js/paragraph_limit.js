$(document).ready(paragraph_limit)

function paragraph_limit() {
    var preferredLength = 1132;
    var articleClass = '.post-text';
   
    var pathname = window.location.pathname;
    if (pathname.length > 5) {
            pathname = pathname.substr(0, 5);
        }
//    $(".post-text").html(pathname);
    
    //pathname = "/";

    if (pathname == "/" || pathname == "/inde" || pathname == "/page" || pathname == "/tagg") {
//        $(".post-text").html(pathname+" we got da if");
        
        $('.post-text').each(function (index, element) {
            var articleLength = $(this).text().length;
            // INITIALIZE
            if (articleLength > preferredLength) {
//                $(".post-text").html(pathname+" WE got da if --> if");
                var myCode = $(this).html();
                //imgStartPlace=myCode.indexOf("<img");
                //  $(".demo").text(imgStartPlace);
                var newew = myCode.substring(0, preferredLength);
                var newew1 = newew;
                var newew2 = newew;
                if (newew.lastIndexOf('<') > newew.lastIndexOf('>')) {
//                    $(".post-text").html(pathname+" WE got da if --> if --> if");
                    var newew1 = newew.substring(0, newew.lastIndexOf('<') - 1);
                } else {
//                    $(".post-text").html(pathname+" WE got da if --> if --> else");
                    newew1a = newew;
                    var newew1SpaceIndex = newew1a.substring(0, newew1a.length).lastIndexOf(' ');
                    var newew1Space = newew1a.substring(0, newew1SpaceIndex);
                    if (newew1a < newew1Space + 10) {
//                        $(".post-text").html(pathname+" WE got da if --> if --> else --> if");
                        newew1 = newew1Space;
                    } else {
//                        $(".post-text").html(pathname+" WE got da if --> if --> else --> else");
                        newew1 = newew1_;
                    }
                }

                $(this).html(newew1.trim() + " <b>. . .<b>");
            }
        });
    } else{
        $(".post-text").html(pathname+" we got da original else");
        $('.post-text').each(function (index, element) {
            //$(this).html("HIIIHOISAKHLKJHSAD");
        });
}
}
/*
    var preferredLength = 532;
    var articleClass = '.post-text';
    $(articleClass).each(function (index, element) {
        var articleLength = $(this).text().length;
        $(".demo").text(articleLength + "  :  " + preferredLength);
        // INITIALIZE

        if (articleLength > preferredLength) {
            var myCode = $(this).html();
            var newew = myCode.substring(0, preferredLength);
            var newew1 = newew;
            var newew2 = newew;
            if (newew.lastIndexOf('<') > newew.lastIndexOf('>')) {
                var newew1Force = newew.substring(0, newew.lastIndexOf('<') - 1);
                var newew1Space = newew1Force.substring(0, newew1Force.lastIndexOf(' ')-1);
                if(newew1Force<newew1Space+10){
                    newew1=newew1Space;
                }else{
                    newew1=newew1Force;
                }
            } else {
                newew1 = newew;
            }
            $(this).html(newew1.trim() + " <b>. . .<b>");
        }
        // $(".demo").append("<p>"+newew1.length+"</p>");
    });
    /*$('.text-post').each(function (e) {
        // text for scurrent paragraph 
        var pathname = window.location.pathname;
        pathname = "/";
        if (pathname.length > 5) {
            pathname = pathname.substr(0, 5);
        }
        var text = $(this).text();
        var code = $(this).html();
        
        if (pathname == "/" || pathname == "/inde" || pathname == "/page" || pathname == "/tagg") {
            if (text.length > 1132) {
                var textNew = text.substr(0, 1129).trim() + "...";
                text = textNew
                $(this).text(text);
            }
        }
    });*/
//}