//author_create_single_post.js
$(document).ready(func)
function func() {
    $("h1.article-title").each(function (index, element) {
        title = $(this).html(); //=hear fell their sinew by Eli Schleicher
        title_byPos = title.lastIndexOf(" by ");
        if (title_byPos != -1) {
            author = title.substr(title_byPos + 3).trim();
            titleNew = title.substr(0, title_byPos).trim();
        } else {
            author = "";
            titleNew = title.trim();
        }
//        $(this).html(titleNew + '<h3 class="subheader-article-author">' + author + '</h3>');
        var h2string = '<h2 class="article-author">' + author + '</h2>';
        
        $(this).html(titleNew);
        $(this).append(h2string);
       
        //$(this).html('hi-start || '+orignial_text+' || hi-end');
    });
     //$('<br>').appendTo('h4.subheader-article-name');
}