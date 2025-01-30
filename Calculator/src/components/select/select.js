import Component from "../../abstracts/component.js";

class SelectComponent extends Component {
    static render(type, placeholder, isRequired) {
        if (!this.areStylesLoaded) {
            this.loadStyles("../src/components/select/select.css");
            this.areStylesLoaded = true;
        }

        const selectElement = document.createElement("select");

        const formContainerElement = document.querySelector("#form-container");
        formContainerElement.append(selectElement);
    }
}

export default SelectComponent;