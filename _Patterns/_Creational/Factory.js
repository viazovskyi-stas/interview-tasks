// Factory

class IOSButton {}
class AndroidButton {}

// without factory
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()

// with factory
class ButtonFactory {
    createButton(os) {
        if(os === 'ios') {
            return new IOSButton()
        } else {
            return new AndroidButton()
        }
    }
}

const factory = new ButtonFactory()
const btn1 = factory.createButton('android')
