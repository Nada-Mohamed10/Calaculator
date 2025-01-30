import Component from "../../abstracts/component.js";

class FooterComponent extends Component {
    static render() {
        if (!this.areStylesLoaded) {
            this.loadStyles("../src/components/footer/footer.css");
            this.areStylesLoaded = true;
        }

        const footerElement = document.createElement("footer");

        footerElement.innerHTML = `
            <p>Copyright &copy; - Nada Mohamed Mosad</p>
        `;

        const formElement = document.querySelector("form");
        formElement.insertAdjacentElement("afterend", footerElement);
    }
}

export default FooterComponent;