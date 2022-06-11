import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Magamról");
    }
    async getHtml(){
        return`
        <p>Nemes Péter vagyok a Szegedi tudományegyetemen tanulok gazdaságinformatikát.<p>
        
        
        `;
    }
}