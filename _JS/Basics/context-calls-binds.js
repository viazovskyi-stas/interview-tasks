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