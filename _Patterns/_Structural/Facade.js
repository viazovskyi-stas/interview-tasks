// Facade

class PlumbingSystem {
    // low level access to plumbing system
    setPressure(v) {}
    turnOn() {}
    turnOff() {}
}

class ElectricalSystem {
    // low level access to plumbing system
    setVoltage(v) {}
    turnOn() {}
    turnOff() {}
}

class House {
    #plumbing = new PlumbingSystem()
    #electrical = new ElectricalSystem()

    turnOnSystems() {
        this.#electrical.setVoltage()
        this.#electrical.turnOn()
        this.#plumbing.setPressure()
        this.#plumbing.turnOn()
    }
}

const client = new House()
client.turnOnSystems() // this is facade