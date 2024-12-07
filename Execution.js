class Execution {

    constructor() {

        this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " "];

        this.arrayPatients = [];
        this.formSubmit = document.querySelector("form");
        this.inputs = document.querySelectorAll("input");
        this.hipoDiv = document.getElementById("hypoglicemia");
        this.normalDiv = document.getElementById("normal");
        this.preDiv = document.getElementById("prediabetes");
        this.diabeteDiv = document.getElementById("diabetes");
        this.submit();

    }

    submit() {

        this.formSubmit.addEventListener('submit', event => {

            event.preventDefault();

            let count = 0;

            this.inputs.forEach((element, index) => {

                if (!element.value) {

                    count++;                    
                }
            })

            if (count > 0) {

                window.alert("Por favor preencha todos os campos!")
            }

            else if (this.validName(this.inputs[0].value) != true) {

                window.alert(this.validName(this.inputs[0].value));
            }

            else if (this.validGlucose(this.inputs[1].value) != true) {

                window.alert(this.validGlucose(this.inputs[1].value));
            }

            else {

                this.addPatient();
            }
        })
    }

    validName(name) {

        let errors = 0;

        for (let x = 0; x < name.length; x++) {

            if (this.letters.indexOf(name[x]) < 0) {

                console.log(this.letters.indexOf(name[x]));
                errors++;
            }
        }

        if (errors > 0) {

            return "O nome deve conter apenas letras!";
        }

        else {

            return true;
        }
    }

    validGlucose(glucose) {

        if (isNaN(glucose)) {

            return "A glicose deve ser um número";
        }

        else {

            return true;
        }
    }

    addPatient() {

        let patient = new Patient(this.inputs[0].value, this.inputs[1].value);
        this.arrayPatients.push(patient);

        if (patient._glucose <= 70) {

            this.hipoDiv.insertAdjacentHTML('beforeend', `<p class="text-result">${patient._name}: ${patient._glucose}</p>`);
        }

        else if (patient._glucose < 100 && patient._glucose > 70) {

            this.normalDiv.insertAdjacentHTML('beforeend', `<p class="text-result">${patient._name}: ${patient._glucose}</p>`);
        }

        else if (patient._glucose >= 100 && patient._glucose <= 125) {

            this.preDiv.insertAdjacentHTML('beforeend', `<p class="text-result">${patient._name}: ${patient._glucose}</p>`);
        }

        else {

            this.diabeteDiv.insertAdjacentHTML('beforeend', `<p class="text-result">${patient._name}: ${patient._glucose}</p>`);
        }
    }
}

let execution = new Execution();

