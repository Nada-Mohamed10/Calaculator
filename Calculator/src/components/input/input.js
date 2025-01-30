import Component from "../../abstracts/component.js";

class InputComponent extends Component {
    static render(id, type, placeholder, isRequired) {
        if (!this.areStylesLoaded) {
            this.loadStyles("../src/components/input/input.css");
            this.areStylesLoaded = true;
        }

        const inputElement = document.createElement("input");
        inputElement.id = id;
        inputElement.type = type;
        inputElement.placeholder = placeholder;
        inputElement.required = isRequired;

        const formContainerElement = document.querySelector("#form-container");
        formContainerElement.append(inputElement);
    }
}

export default InputComponent;