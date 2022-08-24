const handleSubmit = (e,link, setWarning, setInput, setInput1, setInput2, setInput3, setStyle, setStyle1, setStyle2, setStyle3, setData, data) => {
    e.preventDefault();
    if (e.target[3].value.length < 8) {
        setWarning(true)
        setInput(<small style={{color:"red"}} className="smallError">Password must exceed 8 characters</small>)
        setStyle({border: "1px solid red"})
        if (e.target[3].value === "") {
            setInput(<small style={{color:"red"}} className="smallError">Password cannot be empty</small>)
        }
    }else{
        setWarning(false)
        setStyle({})
    }
    if (!e.target[0].value) {
        setInput1(<small style={{color:"red"}} className="smallError">{e.target[0].placeholder} cannot be empty</small>)
        setStyle1({border: "1px solid red"})
    }
    if (!e.target[1].value) {
        setInput2(<small style={{color:"red"}} className="smallError">Email cannot be empty</small>)
        setStyle2({border: "1px solid red"})
    }
    if (!e.target[2].value) {
        setInput3(<small style={{color:"red"}} className="smallError">Phone Number cannot be empty</small>)
        setStyle3({border: "1px solid red"})
    }
    if ((e.target[0].value || e.target[1].value || e.target[2].value || e.target[3].value) && e.target[3].value.length > 8) {
        setData(re=> re = JSON.stringify({username:e.target[0].value, email:e.target[1].value, password: e.target[3].value, accountType: e.target[0].placeholder}))
        localStorage.setItem("UserData", data)
        link("/Account/SignUp/Welcome")
    }
}
const strength = (e, setInput, warning, setStyle)=>{
    if (!e.target.value && warning) {
        setInput(<small style={{color:"red"}} className="smallError">Password cannot be empty</small>)
    }
    if (!e.target.value & !warning) {
        setInput(null)
    }
    if (e.target.value.length>=1 && e.target.value.length < 6) {
      setInput(<small style={{color:"red"}} className="smallError">Password is TOO WEAK</small>)
      if (warning) {
        setStyle({border: "1px solid red"})
      }
    }
    if (e.target.value.length >= 6) {
      setInput(<small style={{color:"red"}} className="smallError">Password is WEAK</small>)
      if (warning) {
        setStyle({border: "1px solid red"})
      }
    }
    if ( e.target.value.length >= 8) {
      setInput(<small style={{color:"limegreen"}} className="smallError">Password is OKAY</small>)
      if (warning) {
        setStyle({border: "1px solid limegreen"})
      }
    }
    if ( e.target.value.length >= 10) {
      setInput(<small style={{color:"limegreen"}} className="smallError">Password is GOOD</small>)
      if (warning) {
        setStyle({border: "1px solid limegreen"})
      }
    }
    if (e.target.value.length >= 12) {
      setInput(<small style={{color:"limegreen"}} className="smallError">Password is STRONG</small>)
    }
}
const inputVal = (e, setInput, setStyle, warning) =>{
    if(!e.target.value && warning){
        setInput(<small style={{color:"red"}} className="smallError">{e.target.placeholder} cannot be empty</small>)
        setStyle({border: "1px solid red"})
    }else{
        setInput(null)
        setStyle({})
    }
}
const percent = (num) => {
    if (Number(num) > 0) {
        let number
        number = Number(num).toFixed(2)
        number = `+ ${number.substring(0)}%`
        return number
    } else {
        let number
        number = Number(num).toFixed(2)
        number = `- ${number.substring(1)}%`
        return `${number}`
    }
}
const percentLogic = (x) => {
    if (x > 0) {
        return `percent rise`
    } else if (x < 0) {
        return `percent dump`
    }
    return `percent`
}
function nameChange(setName) {
    const head = document.querySelector(".formHead")
    if (head.className === "formHead") {
        head.classList.toggle('formHeadBusiness')
        setName(["BusinessName", "Business Name"])
    }
}
function nameChange2(setName) {
    const head = document.querySelector(".formHead")
    if (head.className === "formHead formHeadBusiness") {
        head.classList.toggle('formHeadBusiness')
        setName(["Username", "Username"])
    }
}
const change = ()=>{
    document.querySelector('.menu').classList.toggle('active');
    if (document.querySelector('.menu').className === 'menu active') {
        document.querySelector('.Home').style.overflowY = "hidden"
        document.querySelector('.Home').style.height = "100vh"
    }else{
        document.querySelector('.Home').style.overflowY = "";
        document.querySelector('.Home').style.height = "max-content"
    }
}
const change1 = ()=>{
    document.querySelector('.AccountnavCon').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
}
const navClick = ()=>{
    if (window.screen.width <= 767) {
        document.querySelector('.AccountnavCon').classList.toggle('active');
        document.querySelector('.menu').classList.toggle('active');
    }
}
function nameChangeA(setName) {
    const head = document.querySelector(".formHead")
    if (head.className === "formHead") {
      head.classList.toggle('formHeadBusiness')
      setName("Sell")
    }
}
function nameChangeA2(setName) {
    const head = document.querySelector(".formHead")
    if (head.className === "formHead formHeadBusiness") {
      head.classList.toggle('formHeadBusiness')
      setName("Buy")
    }
}
function handleSubmit2(e, setVal1, setVal2, setvalStyle1, setvalStyle2, link, setWarning) {
    e.preventDefault()
    setWarning(true)
    if (!e.target[0].value) {
        setVal1(<small style={{color:"red"}} className="smallError">Username cannot be empty</small>)
        setvalStyle1({border: "1px solid red"})
    }
    if (!e.target[1].value) {
        setVal2(<small style={{color:"red"}} className="smallError">password cannot be empty</small>)
        setvalStyle2({border: "1px solid red"})
    }
    if (!localStorage.getItem("UserData") && (e.target[0].value && e.target[1].value)) {
        setVal1(<small style={{color:"red"}} className="smallError">Invalid username</small>)
        setvalStyle1({border: "1px solid red"})
        setVal2(<small style={{color:"red"}} className="smallError">Invalid Password</small>)
        setvalStyle2({border: "1px solid red"})
    }
    if(localStorage.getItem("UserData") && (e.target[0].value && e.target[1].value)){
        setWarning(false)
        // const userData = JSON.parse(localStorage.getItem("UserData"))
        // if (userData[`${e.target[0].placeholder}`] !== e.target[0].value && e.target[0].value) {
        //     setVal1(<small style={{color:"red"}} className="smallError">Invalid username</small>)
        //     setvalStyle1({border: "1px solid red"})
        // }
        // if (userData.Password !== e.target[1].value && e.target[1].value) {
        //     setVal2(<small style={{color:"red"}} className="smallError">Invalid Password</small>)
        //     setvalStyle2({border: "1px solid red"})
        // }
        // if (userData[`${e.target[0].placeholder}`] === e.target[0].value && userData.Password === e.target[1].value) {
        //     setTimeout(() => {
        //         link("/App")
        //     }, 600);
        // }
    }
}
export {handleSubmit, handleSubmit2, strength, inputVal, percent, percentLogic, nameChange, nameChange2, change, change1, navClick, nameChangeA, nameChangeA2}