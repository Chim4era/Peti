const router = async () => {
    const routes = [
        {path:"/projects", view: () => console.log("Viewing Projects")},
        {path:"/magamrol", view: () => console.log("Viewing Magamrol")},
        {path:"/elerhetoseg", view: () => console.log("Viewing Elerhetoseg")},
    ];

    //gyökerek egyezésének vizsgálata
    const potentialMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
    
    if (!match){
        match ={
        route: routes[0],
        isMatch: true
    }
    };

    console.log(match.route.view());

};

document.addEventListener("DOMContentLoaded",()=>{
    router();
});


