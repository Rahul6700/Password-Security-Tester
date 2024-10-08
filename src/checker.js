import { useState } from "react"
import zxcvbn from 'zxcvbn';

export default function Checker(){

    const [password,setpassword] = useState("");
    const [score,setscore] = useState(0);
    const [feedback,setfeedback] = useState([]);
    const [disp,setdisp] = useState(false);

    const handleChange =(e)=>{
        setdisp(true);
        const NewPass = e.target.value;
        setpassword(NewPass);
        const result = zxcvbn(NewPass);
        setscore(result.score);
        setfeedback(result.feedback.suggestions.join(' '));
        if (result.feedback && result.feedback.suggestions) {
            setfeedback(result.feedback.suggestions);
        } else {
            setfeedback([]); // No feedback suggestions available
        }
    }

    const getStrength =()=>{
        switch (score) {
            case 0:
                return "Very Weak";
            case 1:
                return "Weak";
            case 2:
                return "Average";
            case 3:
                return "Strong";
            case 4:
                return "Very Strong";
            default:
                return "";
        }
    };

    const getColor =()=>{
        switch (score) {
            case 0:
                return 0;
            case 1:
                return 25;
            case 2:
                return 50;
            case 3:
                return 75;
            case 4:
                return 100;
            default:
                return 0;
        }
    }

    return (
        <div className="main">
            <h1 id="heading">Enter your Password</h1>
            <textarea 
                id="textarea" 
                value={password} 
                onChange={handleChange} 
                placeholder="Password" 
            />
            {password && (
                <div id="data">
                <h1>Password is {getStrength()}</h1>
                <progress value={getColor()} max="100"></progress>
                <ul>
                {feedback.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
                ))}
                </ul>
                </div>
            )}
        </div>
    );
    
}