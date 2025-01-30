import AppService from "../services/app.js";

class AppComponent {
    static #isAppRunning = false;

    constructor() {
        throw new Error("Cannot Initialize A Singleton Class");
    }

    static run() {
        if (this.#isAppRunning) {
            console.error("Application is already running");
        } else {
            this.#isAppRunning = true;
            AppService.build();
        }
    }
}

AppComponent.run();