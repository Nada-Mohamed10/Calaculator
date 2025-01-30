import Component from "../../abstracts/component.js";
import AlertService from "../../services/alert.js";
import CalculateService from "../../services/calculate.js";

class FormComponent extends Component {
    static render() {
        if (!this.areStylesLoaded) {
            this.loadStyles("../src/components/form/form.css");
            this.areStylesLoaded = true;
        }

        const formElement = document.createElement("form");

        formElement.innerHTML = `
            <div id="form-container">
                <h1>Form</h1>
            </div>
        `;

        formElement.onsubmit = this.submit;

        const headerElement = document.querySelector("header");
        headerElement.insertAdjacentElement("afterend", formElement);
    }

    static submit(event) {
        event.preventDefault();

        const firstValue = parseInt(document.querySelector("#first-value").value);
        const secondValue = parseInt(document.querySelector("#second-value").value);
        const operator = document.querySelector("select").value;

        const result = CalculateService.calculate(firstValue, secondValue, operator);

        AlertService.popup(`${firstValue} ${operator} ${secondValue} = ${result}`);
    }
}

export default FormComponent;