const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputName: "",
            names: [],
            error: "",
            showError: false,
            result: "",
        }
    },
    computed: {
        isReady() {
            return this.names.length > 1;
        }
    },
    methods: {
        addToList() {
            const userName = this.inputName;
            if (this.doValidation(userName)) {
                this.names.push(userName);
                this.inputName = "";
                this.showError = false;
            } else {
                this.showError = true;
            }

        },
        doValidation(name) {
            this.error = "";
            if (name === "") {
                this.error = "Sorry, no empty names";
                return false;
            }
            if (this.names.includes(name)) {
                this.error = "Sorry, we already have this name!";
                return false;
            }
            return true;
        },
        removeName(index) {
            this.names.splice(index, 1);
        },
        getRandomName() {
            return this.names[Math.floor(Math.random() * this.names.length)];
        },
        generateTheLooser() {
            let randName = this.getRandomName();
            if (this.result !== "") {
                while (randName === this.result) {
                    randName = this.getRandomName();
                }
            }
            this.result = randName;
        },
        showResult() {
            this.generateTheLooser();
            this.state = false;
        },
        update() {
            this.state = true;
            this.inputName = "";
            this.names = [];
            this.error = "";
            this.showError = false;
            this.result = "";
        },
        getNewResult() {
            this.generateTheLooser()
        }
    }

}).mount("#app");