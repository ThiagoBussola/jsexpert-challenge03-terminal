import chalk from "chalk"
import figlet from "figlet"
class AsciiMessage {
    welcomeMessage() {
        figlet('msg aqui', (err, result) => {
            console.log(err || result)
        })
    }
}

export default AsciiMessage