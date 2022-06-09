import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Projctektek");
    }
    async getHtml(){
        return`
        <h1>hnope<h1>
        
        
        `;
    }
}