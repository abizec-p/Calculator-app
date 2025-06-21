import { useRef, useState } from "react"

export default function Age(){
    const today = new Date();
    const [birthdate, setBirthdate] = useState("");
    const [age, setAge] = useState("")
    const [month, setMonth] = useState("")
    const [days, setDays] = useState("")
    const handleDateChange = (e) => {
        setBirthdate(e.target.value);
    };


    const [selected, setSelected] = useState("")
    const CorrectAnswer = useRef();
    const incorrectAnswer = useRef();
    function CheckAnswer(){
        if( selected === "22"){
           CorrectAnswer.current.style.display = "block";
           incorrectAnswer.current.style.display = "none";
        }
        else{
           CorrectAnswer.current.style.display = "none";
           incorrectAnswer.current.style.display = "block";
        }
    }

    const calculateAge = () => {
        const birth = new Date(birthdate);
     let calculatedAge = today.getFullYear() - birth.getFullYear();
     let month = today.getMonth() - birth.getMonth();
     let days = today.getDate() - birth.getDate();
         setAge(calculatedAge);
         setMonth(month);
         setDays(days);

         if(calculateAge < 0 || month < 0 || days < 0){
            alert("please get the real date");
            setAge("");
            setMonth("");
            setDays("");
         }

    }


    return(
        <section className="age-calculator">
            <div className="heading">
                <h1>Age Calculator</h1>
            </div>
            <div className="age-form">
                <input value={birthdate} onChange={handleDateChange} type="date" name="age" /><button onClick={calculateAge}> Calculate</button>

                <div className="text-part-age">
                <div><p>Today's date: <b> {today.toLocaleDateString()}</b> </p></div>
            <br />    <div><p>So your age should be: <br /> <b>{age} year {month} month {days} days</b> </p></div>
</div>



            </div>

        <div className="age-calculator-second-part">
            <h3>Age Quiz: Guess the Age!</h3>
            <div className="age-question">
                <h4>If someone was born in march 2002, how old is that person? </h4>
                <input type="number"  onChange={(e)=> setSelected(e.target.value)} value={selected} /> years old <br />
                <button onClick={CheckAnswer}>Check</button>
            </div>
            <div className="answers-agequiz">
            <div ref={CorrectAnswer} style={{display:"none", background:"green",padding:"20px"}} className="correct">Yes, You're smart!</div>
            <div ref={incorrectAnswer} style={{display:"none",background:"red",padding:"20px"}} className="incorrect">no, you stupid fuck!</div>
            </div>
        </div>
        </section>
    )
}