$(document).ready(function(){
    $(".default__option").click(function(){
        $(this).parent().toggleClass("active");
    })

    $(".select__ul li").click(function(){
        var currentele = $(this).html();
        //console.log(this, 'this')
        $(".default__option li").html(currentele);
        $(this).parents(".select__wrap").removeClass("active");
    })
});

const selectUlLi = document.querySelectorAll('.select__ul li')

selectUlLi.forEach( function (selectLi) {
    selectLi.addEventListener('click', function (e) {
        let currentLi = e.target.closest('.option')
        let atr = currentLi.childNodes[0].nextSibling.getAttribute('data-language')

        window.localStorage.setItem("locale", atr)

        location.href = window.location.pathname + '#' + atr
        let hash = window.location.hash

        hash = hash.substr(1)
         for (let key in langArr) {
           // console.log(document.querySelector('.lang-'+key), key)
            document.querySelector('.lang-'+key).innerHTML = langArr[key][hash]
          }
    })
})

window.onload = () => {
    let locale = localStorage.getItem('locale');

    if (locale) {
        location.href = window.location.pathname + '#' + locale;
        let hash = window.location.hash;

        hash = hash.substr(1);

        for (let key in langArr) {
            document.querySelector('.lang-'+key).innerHTML = langArr[key][hash]
        }
    }


}

