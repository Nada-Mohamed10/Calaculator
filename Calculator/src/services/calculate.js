class CalculateService {
    static add(valueOne, valueTwo) {
        return valueOne + valueTwo;
    }

    static subtract(valueOne, valueTwo) {
        return valueOne - valueTwo;
    }

    static multiply(valueOne, valueTwo) {
        return valueOne * valueTwo;
    }

    static divide(valueOne, valueTwo) {
        return valueOne / valueTwo;
    }

    static calculate(valueOne, valueTwo, operator) {
        let result;

        switch(operator) {
            case "+": result = this.add(valueOne, valueTwo); break;
            case "-": result = this.subtract(valueOne, valueTwo); break;
            case "*": result = this.multiply(valueOne, valueTwo); break;
            case "/": result = this.divide(valueOne, valueTwo); break;
        }

        return result;
    }
}

export default CalculateService;