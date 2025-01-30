import { OPERATORS } from "../constants/operators.js";
import ButtonComponent from "../components/button/button.js"; 
import FooterComponent from "../components/footer/footer.js"; 
import FormComponent from "../components/form/form.js"; 
import HeaderComponent from "../components/header/header.js"; 
import InputComponent from "../components/input/input.js"; 
import OptionComponent from "../components/option/option.js"; 
import SelectComponent from "../components/select/select.js"; 

class AppService {
    static build() {
        HeaderComponent.render();
        FormComponent.render();
        InputComponent.render("first-value", "number", "First Value", true);
        SelectComponent.render();
        
        OPERATORS.forEach(OPERATOR => {
            OptionComponent.render(OPERATOR);
        });

        InputComponent.render("second-value", "number", "Second Value", true);
        ButtonComponent.render("Calcuate Now!", "submit");
        FooterComponent.render();
    } 
}

export default AppService;