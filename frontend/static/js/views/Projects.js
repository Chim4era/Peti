import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Projctektek");
    }
    async getHtml(){
        return`
        <h1>Önéletrajzi weboldal<h1>
        <p>felhasznált technologíák</p>
        
        
        `;
    }
}