import Component from "../../abstracts/component.js";

class ButtonComponent extends Component {
    static render(value, type) {
        if (!this.areStylesLoaded) {
            this.loadStyles("../src/components/button/button.css");
            this.areStylesLoaded = true;
        }

        const buttonElement = document.createElement("button");
        buttonElement.innerHTML = value;
        buttonElement.type = type

        const formContainerElement = document.querySelector("#form-container");
        formContainerElement.append(buttonElement);
    }
}

export default ButtonComponent;