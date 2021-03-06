import React from 'react'
import './newsletter.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState, useEffect } from 'react'


const NewsletterForm = () => {
  const {register, handleSubmit, reset, formState: { errors }} = useForm()
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);


  useEffect((data) => {
        reset({ Email: '' });
        setTimeout((data) => {
          setIsSuccessfullySubmitted(false)  
        }, 3000)
  }, [isSuccessfullySubmitted])
  
  const onSubmit = (data) => {
    console.log(data.Email)
    axios.post(`https://consoltserver.herokuapp.com/user/sendinblue`, data)
        .then(response => setIsSuccessfullySubmitted(true))
        .catch(error => console.log('error'))
  }


  return (
    <div>
      <div className="formArea">
        <form id="formArea" onSubmit={handleSubmit(onSubmit)}>
          <div className='entry__field'>
            <input type="text" className="inputArea" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          </div>
          <button className="subForm" type='submit'>Subscribe</button>
        </form>
        {errors.Email && <p className='error'>Email is invalid</p>}
        {isSuccessfullySubmitted && (<p className="success">Thanks for Subscribing!</p>)}
            
      </div>
    </div>
  )
}

export default NewsletterForm




















// import React from 'react'


// const NewsletterForm = () => {


//   <script>
//   window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
//   window.LOCALE = 'en';
//   window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

//   window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

//   window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";




//   window.translation = {
//     common: {
//       selectedList: '{quantity} list selected',
//       selectedLists: '{quantity} lists selected'
//     }
//   };

//   var AUTOHIDE = Boolean(0);
// </script>
// <script src="https://sibforms.com/forms/end-form/build/main.js"></script>
//   return (
//       <section className="emailSubscription">
             
//              <div className="sib-form" style="text-align: center; width: fit-content;">
//                <div id="sib-form-container" className="sib-form-container">
//                  <div id="error-message" className="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
//                    <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
//                      <svg viewBox="0 0 512 512" Name="sib-icon sib-notification__icon">
//                        <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
//                      </svg>
//                      <span className="sib-form-message-panel__inner-text">
//                                        Your subscription could not be saved. Please try again.
//                                    </span>
//                    </div>
//                  </div>
//                  <div></div>
//                  <div id="success-message" className="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
//                    <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
//                      <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
//                        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
//                      </svg>
//                      <span className="sib-form-message-panel__inner-text">
//                                        Your subscription has been successful.
//                                    </span>
//                    </div>
//                  </div>
                 
//                 <form id="sib-form" className="useForm" method="POST" style="align-items: center;" action="https://14e10974.sibforms.com/serve/MUIEAP8JkoQdx-ycN8tMdM8Sj25E23Wx-2OEKVVh5OjKysXypL0Q2ZV-Lea4IKKdi09btFZFAd6TK57EXP4m34QEZfhWcP_JwKuBtXswKyjv562NheMHpswDmm0A6g_q9G41bdLrTd-lvDmof_X3XDmWGr8PW62DdpHxYoWQhhNxJiym8KQCUod34XdVzs2CWIURZbuRE8v98lsc" data-type="subscription">
//                   <div style="padding: 8px 0;">
//                     <div className="sib-input sib-form-block" style="padding: 0;">
//                       <div className="form__entry entry_block">
//                         <div className="form__label-row ">
//                           <div className="entry__field" style="
//                           border: 2px solid #000000;">
//                             <input className="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
//                           </div>
//                         </div>
      
//                         <label className="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div style="padding: 8px 0;">
//                     <div className="sib-form-block" style="text-align: left; padding: 0;">
//                       <button className="sib-form-block__button sib-form-block__button-with-loader formBtn" style="font-size:16px; width: auto; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#3E4857; border-radius:0 0.5rem 0.5rem 0; border-width:0px;" form="sib-form" type="submit">
//                         <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
//                           <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
//                         </svg>
//                         SUBSCRIBE
//                       </button>
//                     </div>
//                   </div>
      
//                   <input type="text" name="email_address_check" value="" className="input--hidden" />
//                   <input type="hidden" name="locale" value="en" />
      
//                 </form>
         
//                </div>
//              </div>
         
            
//       </section>

//   )
// }

// export default NewsletterForm