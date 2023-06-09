import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Bgsignup from '../../assets/bg-signIn.webp'
import Iconcoffer from '../../assets/icon-coffee.svg'
import Icongoogle from '../../assets/google-logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { register } from "../../utils/https/auth";

function Signup() {
  const navigate = useNavigate();
  const controller = React.useMemo(() => new AbortController(), []);
  const [form, setForm] = useState({
    email: '',
    password: '',
    phone_number: ''
  });

  useEffect(() => {
    document.title = "Coffe Shop - Sign Up";
  }, [])

  const registerHandler = (e) => {
    e.preventDefault();
    register(form.email, form.password, form.phone_number, controller)
      .then((res) => {
        console.log(res.data);
        handleRedirect();
      })
      .catch((err) => console.log(err));
  };

  const onChangeForm = (e) =>
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));

  const handleRedirect = () => {
    navigate('/');
  }

  return (
    <>
      <main>
        <section className="container-signup ">
          <div className="signup-wrapper flex">
            <div className="background relative z-1 md:h-[650px] md:w-screen lg:w-2/4 lg:h-screen">
              <img src={Bgsignup} alt="background" className='w-full h-full object-cover md:object-cover' />
            </div>
            <div className="signup absolute z-2 text-bgsecondary bg-overlay px-5 py-8 w-full h-[635px] md:h-[650px] md:px-20 lg:relative lg:bg-bgsecondary lg:w-2/4 lg:text-black">
              <div className="header-signup flex justify-between">
                <div className="logo-icon flex items-center gap-4">
                  <img src={Iconcoffer} alt="icon-coffee" />
                  <div className="title-txt pointer font-bold lg:text-xl">Coffee Shop</div>
                </div>
                <div className="btn-signup flex items-center justify-center bg-primary px-4 rounded-xl cursor-pointer lg:px-8">
                  <Link to="/">Login</Link>
                </div>
              </div>
              <p className="title-signup text-center font-bold text-xl mt-10 lg:text-3xl">SignUp</p>
              <form id="formSign" className="form-signup mt-10 px-8 flex flex-col gap-4 mb-3">
                <div className="input-form">
                  <p>Email Address :</p>
                  <input type="text" placeholder="Enter your email address" id="emailInput" className='w-full rounded-xl px-4 py-2 text-black lg:border lg:border-black' value={form.email} onChange={onChangeForm} name="email" />
                  <span id="emailError"></span>
                  <div className="circle-check" id="circleCheck"></div>
                </div>
                <div className="input-form">
                  <p>Password :</p>
                  <input type="password" placeholder="Enter your password" id="passwordInput" className='w-full rounded-xl px-4 py-2 text-black lg:border lg:border-black' value={form.password} onChange={onChangeForm} name="password" />
                  <span id="passwordError"></span>
                  <div className="circle-check" id="circleCheck1"></div>
                </div>
                <div className="input-form">
                  <p>Phone Number :</p>
                  <input type="number" placeholder="Enter your phone number" id="numInput" className='w-full rounded-xl px-4 py-2 text-black lg:border lg:border-black' value={form.phone_number} onChange={onChangeForm} name="phone_number" />
                  <span id="numError"></span>
                  <div className="circle-check" id="circleCheck2"></div>
                </div>
                <span id="submitError"></span>
                <button className="pointer py-2 bg-primary text-secondary font-bold rounded-lg cursor-pointer" onClick={registerHandler} >Sign Up</button>
                <button className="cursor-pointer py-2 flex justify-center bg-bgsecondary lg:shadow-md rounded-lg">
                  <img src={Icongoogle} alt="icon-google" />
                  <p className="btn-txt text-black">Sign up with Google</p>
                </button>
                {/* Overlay dan modal */}
                <div className="overlay" id="overlay"></div>
                <div className="modal" id="modal"></div>
              </form>
            </div>
          </div>
          <div className="card bg-bgsecondary  w-5/6 px-5 py-4 absolute rounded-2xl shadow-sm translate-x-9 -translate-y-14 md:w-4/5 md:translate-x-20 lg:px-10 lg:py-8 lg:-translate-y-20 lg:translate-x-32">
            <div className="card-member flex items-center justify-between">
              <div className="card-txt">
                <p className="card-title font-bold lg:text-2xl">Get your member<br />card now!</p>
                <p className="card-desc text-xs">Let`s join with our member and enjoy the deals.</p>
              </div>
              <div className="btn-create px-2 py-2 h-fit rounded-2xl pointer bg-primary text-center text-xs">Create Now</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


export default Signup