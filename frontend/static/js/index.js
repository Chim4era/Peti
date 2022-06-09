import Magamrol from "./views/Magamrol.js";
import Elerhetoseg from "./views/Elerhetoseg.js";
import Projects from "./views/Projects.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path:"/projects", view: Projects},
        {path:"/magamrol", view: Magamrol},
        {path:"/elerhetoseg", view: Elerhetoseg},
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

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();


};

window.addEventListener("popstate",router);

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            
            navigateTo(e.target.href);
        }
    });

    router();
});


