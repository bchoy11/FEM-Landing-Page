function showList(){
    let liststyle = document.getElementsByClassName('nav');
    if(liststyle[0].style.display === ''){
        liststyle[0].style.display = 'inline-block';
    }
    else{
        liststyle[0].style.display = '';
    }
    // liststyle[0].style.display ='inline-block';
}