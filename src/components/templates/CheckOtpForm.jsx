
import { checkOtp } from '../../services/auth';
import setCookie from '../../utils/cookie';

function CheckOtpForm({code,setCode,mobile,setStep}) {
  const submitHandler=async(event)=>{
    event.preventDefault();
    if (code.length!==5) return;
    const {response,error}=await checkOtp(mobile,code)
    if (response){
      setCookie(response.data)
      console.log("first")
    }
    if(error){
      console.log(error.response.data.message)
    }
  }
  return (
   <form onSubmit={submitHandler}>
    <p>تایید کد پیامک شده</p>
    <span>کد پیامک شده به  شماره {mobile} را وارد کنید.</span>
    <label htmlFor='input'>کد تایید را وارد کنید.</label>
    <input type="text" placeholder='کد تایید' id="input" value={code} onChange={e=>setCode(e.target.value)} />
    <button type="submit">ورود</button>
    <button onClick={()=>setStep(1)}>تغییر شماره موبایل</button>
   </form>
  )
}

export default CheckOtpForm