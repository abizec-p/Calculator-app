import { useRef, useState } from "react"
import dayjs from "dayjs";

export default function Age(){
    const [birthdate, setBirthdate] = useState("");
    const [age, setAge] = useState("");
 
    const handleDateChange = (e) => {
        setBirthdate(e.target.value);
    };


    const [selected, setSelected] = useState("")
    const CorrectAnswer = useRef();
    const incorrectAnswer = useRef();
    function CheckAnswer(){
        if( selected === "23"){
           CorrectAnswer.current.style.display = "block";
           incorrectAnswer.current.style.display = "none";
        }
        else{
           CorrectAnswer.current.style.display = "none";
           incorrectAnswer.current.style.display = "block";
        }
    }

    const calculateAge = () => {

        if(!birthdate   ){
            alert("Please select a date");
            return;
        }
        const birth = dayjs(birthdate);
        const today = dayjs();

        if(birth.isAfter(today)){
            alert("Something might be wrong, please check and try again");
            return; 
        }
        const years = today.diff(birth, "year");
        const months = today.diff(birth.add(years,"year"),"month");
        const days = today.diff(birth.add(years,"year").add(months,"month"),"day");
        setAge({years,months,days});
    }


    return(
        <section className="age-calculator">
            <div className="heading">
                <h1 className="main-heading">Age Calculator</h1>
            </div>
            <div className="age-form">
                <div className="input-button">
                <input  value={birthdate} onChange={handleDateChange} type="date" name="age" /><button onClick={calculateAge}> Calculate</button>
                 </div>
                <div className="text-part-age">
                <div><p>Today's date: <b>{dayjs().format("MMMM D,YYYY")}</b> </p></div>
            <br />    <div className="age-result"><p>So your age should be: <br /> <b>{age.years} years {age.months} Months {age.days} Days</b> </p></div>
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
            <div ref={incorrectAnswer} style={{display:"none",background:"red",padding:"20px"}} className="incorrect">no, Sorry!</div>
            </div>
        </div>
        </section>
    )
}