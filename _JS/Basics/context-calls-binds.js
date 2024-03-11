// bind or arrow func

const obj = {
    a: 42,
    say: function () {
        setTimeout(function () {
            console.log(this.a)
        }, 1000)
    }
}

obj.say()

class Test1 {
    constructor(name) {
        this.currentName = name;
    }

    test() {
        console.log(this.currentName);
    }

    test2 = () => {
        console.log(this.currentName);
    }
}

const instanceFirst = new Test1('Oleg');

instanceFirst.test();//result ?

setTimeout(instanceFirst.test, 1000);//result ?

setTimeout(instanceFirst.test2, 1000);//result ?