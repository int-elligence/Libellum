$(document).ready(func)
function func() {
    $("h4.subheader-article-name").each(function (index, element) {
        title = $(this).html(); //=hear fell their sinew by Eli Schleicher
        title_byPos = title.lastIndexOf(" by ");
        if (title_byPos != -1) {
            author = title.substr(title_byPos + 3).trim();
            titleNew = title.substr(0, title_byPos).trim();
        } else {
            author = "";
            titleNew = title.trim();
        }
        $(this).html(titleNew + '<h3 class="subheader-article-author">' + author + '</h3>')
        //$(this).html('hi-start || '+orignial_text+' || hi-end');
    });
}