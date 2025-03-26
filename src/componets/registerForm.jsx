import "./styles.css";
import "../Global.css";
import "./master.js";
import { EyeclickBtn } from "./master.js";


function registerForm() {
    return (
            <>

                <form className="form form-login">

                    <h2>Create an Account</h2>
                    <h4>Enter your information to register</h4>

                    <div className="first-last-name-input">

                        <div className="first-input-container">
                            <label className="label">First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                className="input"
                                placeholder="John"
                                required=""/>
                        </div>

                        <div className="second-input-container">
                            <label className="label">Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                className="input"
                                placeholder="Doe"
                                required=""/>
                        </div>
                    </div>

                    <label className="label">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="john.doe@mail.com"
                        required=""/>

                    <label className="label">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        className="input"
                        placeholder="+(11)1234-5678"
                        required=""/>

                    <label className="label">Password</label>
                    <div className="inputpassword" data-toggleblock="password">
                        <input  type="password"
                                name="password"
                                id="pass1"
                                className="input"
                                placeholder="*******"/>

                        <i  id="icon1" className="fa-solid fa-eye password_invisible"
                            data-togglebutton="password" onClick={EyeclickBtn}/>
                        <i  id="icon2" className="fa-solid fa-eye-slash password_visible"
                            data-togglebutton="password" onClick={EyeclickBtn}/>

                    </div>

                    <label className="label">Confirm your Password</label>
                    <div className="inputpassword" data-toggleblock="password">
                        <input  id="pass2"
                                type="password"
                                name="password"
                                className="input"
                                placeholder="*******"/>

                        <i  id="icon3" className="fa-solid fa-eye password_invisible"
                            data-togglebutton="password" onClick={EyeclickBtn}/>
                        <i  id="icon4" className="fa-solid fa-eye-slash password_visible"
                            data-togglebutton="password" onClick={EyeclickBtn}/>

                    </div>

                    <button type="submit">Register</button>

                </form>


        </>
    )
}

export default registerForm