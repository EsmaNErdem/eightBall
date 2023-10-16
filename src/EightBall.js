import React, {useState} from 'react';
import "./EightBall.css";


const getRandom = (answers) => {
    const randomIndex = Math.floor(Math.random() * answers.length)
    return answers[randomIndex]
}
const EightBall = ({answers}) => {
    const [color, setColor] = useState("black")
    const [msg, setMsg] = useState("Think of a Question")
    const [counterRed, setCounterRed] = useState(0)
    const [counterGreen, setCounterGreen] = useState(0)
    const [counterYellow, setCounterYellow] = useState(0)

    const  handleClick = () => {
        const {msg, color} = getRandom(answers)
        setMsg(msg)
        setColor(color)

        if (color == "red") {
            setCounterRed(counterRed + 1)
        } else if (color == "green") {
            setCounterGreen(counterGreen + 1)
        } else {
            setCounterYellow(counterYellow + 1)
        }
    }

    const restart = () => {
        setMsg("Think of a Question")
        setColor("black")
        setCounterRed(0)
        setCounterGreen(0)
        setCounterYellow(0)
    }

    return (
        <div className='EightBall'>
            <div className='EightBall-circle' 
                style={{backgroundColor: color}}
                onClick = {handleClick}
            >
                <p className='EightBall-msg'>{msg}</p>
            </div>
            <p>Counter Red:{counterRed} Counter Green:{counterGreen} Counter Yellow:{counterYellow}</p>
            <button onClick={restart}>Reset</button>
        </div>
    )
}

const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
]

EightBall.defaultProps = {
    answers:answers
}

export default EightBall;