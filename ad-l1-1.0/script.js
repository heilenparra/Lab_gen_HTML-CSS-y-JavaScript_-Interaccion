document.getElementsByTagName("h1")[0].textContent ="Good Bye";


document.getElementsByTagName("h1")[1].style.color = "orange";


document.getElementsByTagName("h1")[2].addEventListener("click", function()
{document.getElementsByTagName("h1")[2].style.color="brown"});

setInterval(() => {
    if (document.getElementsByTagName("h2")[0].style.visibility === "hidden")
    {document.getElementsByTagName ("h2") [0].style.visibility = "visible";

    }
    else
        document.getElementsByTagName("h2")[0].style.visibility = "hidden"
}, 500);
