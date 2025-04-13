let links = document.querySelectorAll("#links li a");

links.forEach((li) => {

    li.addEventListener("click" ,  (el) => {

        links.forEach((li) => {
            li.classList.remove("active");
            
        });

        el.currentTarget.classList.add("active");

    });
});

///////////////////////////////////////////////////////////////////////////

let lis = document.querySelectorAll("#lis li");

lis.forEach((li) => {

    li.addEventListener("click" ,  (el) => {

        lis.forEach((li) => {
            li.classList.remove("active" , "rounded-pill");
            
        });

        el.currentTarget.classList.add("active" , "rounded-pill");

    });
});