import Component from "../../abstracts/component.js";

class OptionComponent extends Component {
    static render(value) {
        if (!this.areStylesLoaded) {
            this.loadStyles("../src/components/option/option.css");
            this.areStylesLoaded = true;
        }

        const optionElement = document.createElement("option");
        optionElement.value = value;
        optionElement.innerHTML = value;

        const selectElement = document.querySelector("select");
        selectElement.append(optionElement);
    }
}

export default OptionComponent;