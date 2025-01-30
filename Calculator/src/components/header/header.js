import Component from "../../abstracts/component.js";

class HeaderComponent extends Component {
    static render() {
        if (!this.areStylesLoaded) {
            this.loadStyles("../src/components/header/header.css");
            this.areStylesLoaded = true;
        }

        const headerElement = document.createElement("header");

        headerElement.innerHTML = `
            <nav>
                <h1>Calculator</h1>
            </nav>
        `;

        document.body.prepend(headerElement);
    }
}

export default HeaderComponent;