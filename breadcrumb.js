$( document ).ready(_ => {
    $( document.body.insertAdjacentHTML('afterbegin', `<nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item active" aria-current="page">Actual</li></ol></nav>`) )

    const breadcrumb       = $(".breadcrumb-item")[0]
    const breadcrumbActive = $(".active")[0]
    const pathPage         = $( location ).attr('pathname').split('/').filter(p => p)
    
    const routes = new Array()
         
    breadcrumbActive.innerText = pathPage[pathPage.length - 1]
    pathPage.forEach((path, i) => (i === 0) ? routes.push(path) : routes.push(routes[i - 1] + '/' + path))
                                                    
    for (let i = 0; i < pathPage.length - 1; i++) {
        breadcrumb.insertAdjacentHTML('beforebegin', `<li class="breadcrumb-item"><a href="${location.origin}/${routes[i]}">${pathPage[i]}</a></li>`)
    }
})