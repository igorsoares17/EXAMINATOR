class Patient {

    constructor(name, glucose) {

        this._name = name;
        this._glucose = glucose;
    }

    get name() {

        return this._name;
    }

    set name(value) {

        this._name = value;
    }

    get glucose() {

        return this._glucose;
    }

    set glucose(value) {

        this._glucose = value;
    }
}