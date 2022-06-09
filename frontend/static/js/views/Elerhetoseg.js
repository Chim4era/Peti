import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Elérhetőség");
    }
    async getHtml(){
        return`
        <h1>heyho kanabisz<h1>
        
        
        `;
    }
}