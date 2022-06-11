import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Elérhetőség");
    }
    async getHtml(){
        return`
        <h1>e-mail: npeti001@gmail.com<h1>
        <h1>tel.: 06307394788<h1>
        <h1>Linkedln: <h1>        
        
        `;
    }
}