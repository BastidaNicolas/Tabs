const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content'); 

about.addEventListener('click', function(e){

    //getting data-id from what was clicked (in this case only buttons have that)
    const id =  e.target.dataset.id;
    
    if(id){
        //remove class of active from all buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');//add active class to button that was clicked
        });
        //removing active class from all articles 
        articles.forEach(function(article){
            article.classList.remove('active');
        });
        //latter adding it only to the one that matches the data-id of the button that was clicked
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});