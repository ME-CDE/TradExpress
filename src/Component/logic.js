const strength = (e, setInput, warning, setStyle)=>{
    if (!e.target.value) {
        setInput(<small style={{color:"red"}}>Password cannot be empty</small>)
        
    }
    if (e.target.value.length>=1 && e.target.value.length < 6) {
      setInput(<small style={{color:"red"}}>Password is TOO WEAK</small>)
      if (warning) {
        setStyle({border: "1px solid red"})
      }
    }
    if (e.target.value.length >= 6) {
      setInput(<small style={{color:"red"}}>Password is WEAK</small>)
      if (warning) {
        setStyle({border: "1px solid red"})
      }
    }
    if ( e.target.value.length >= 8) {
      setInput(<small style={{color:""}}>Password is OKAY</small>)
      if (warning) {
        setStyle({})
      }
    }
    if ( e.target.value.length >= 10) {
      setInput(<small style={{color:"limegreen"}}>Password is GOOD</small>)
      if (warning) {
        setStyle({border: "1px solid limegreen"})
      }
    }
    if (e.target.value.length >= 12) {
      setInput(<small style={{color:"limegreen"}}>Password is STRONG</small>)
    }
}
const inputVal = (e, setInput, setStyle, warning) =>{
    if(!e.target.value && warning){
        setInput(<small style={{color:"red"}}>{e.target.placeholder} cannot be empty</small>)
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
function nameChange(setPlace, setName) {
    const head = document.querySelector(".formHead")
    if (head.className === "formHead") {
        head.classList.toggle('formHeadBusiness')
        setPlace("Business Name")
        setName("BusinessName")
    }
}
function nameChange2(setPlace, setName) {
    const head = document.querySelector(".formHead")
    if (head.className === "formHead formHeadBusiness") {
        head.classList.toggle('formHeadBusiness')
        setPlace("Username")
        setName("Username")
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
function handleSubmit2(e, setVal1, setVal2, setvalStyle1, setvalStyle2, link) {
    e.preventDefault()
    if (!e.target[0].value) {
        setVal1(<small style={{color:"red"}}>Username cannot be empty</small>)
        setvalStyle1({border: "1px solid red"})
    }
    if (!e.target[1].value) {
        setVal2(<small style={{color:"red"}}>password cannot be empty</small>)
        setvalStyle2({border: "1px solid red"})
    }
    if (!localStorage.getItem("UserData") && (e.target[0].value && e.target[1].value)) {
        setVal1(<small style={{color:"red"}}>Invalid username</small>)
        setvalStyle1({border: "1px solid red"})
        setVal2(<small style={{color:"red"}}>Invalid Password</small>)
        setvalStyle2({border: "1px solid red"})
    }else{
        const userData = JSON.parse(localStorage.getItem("UserData"))
        if (userData[`${e.target[0].placeholder}`] !== e.target[0].value && e.target[0].value) {
            setVal1(<small style={{color:"red"}}>Invalid username</small>)
            setvalStyle1({border: "1px solid red"})
        }
        if (userData.Password !== e.target[1].value && e.target[1].value) {
            setVal2(<small style={{color:"red"}}>Invalid Password</small>)
            setvalStyle2({border: "1px solid red"})
        }
        if (userData[`${e.target[0].placeholder}`] === e.target[0].value && userData.Password === e.target[1].value) {
            setTimeout(() => {
                link("/App")
            }, 600);
        }
    }
}
export {handleSubmit2, strength, inputVal, percent, percentLogic, nameChange, nameChange2, change, change1, navClick, nameChangeA, nameChangeA2}