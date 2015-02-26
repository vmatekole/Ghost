/// Shameful hacks for my about page
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        title = document.getElementsByTagName("title")[0].innerHTML;

        if(title === "about") {
            html = document.getElementsByTagName("html")[0];
            html.className = "about";
        }
    }
}