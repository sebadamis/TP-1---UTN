import "./styles.css";
import "./master.js";


function registerForm() {
    return (
            <>

                <h2>Register Form</h2>

                <form className="form form-login">

                    <label className="label">Firstname</label>
                    <input  
                            type="text"
                            name="firstname"
                            className="input"
                            autoComplete="off"
                            placeholder="Enter your Firstname"
                            required/>

                    <label className="label">Lastname</label>
                    <input
                        type="text"
                        name="lastname"
                        className="input"
                        autoComplete="off"
                        placeholder="Enter your Lastname"
                        required/>

                    <label className="label">E-mail</label>
                    <input 
                        type="email"
                        name="email"
                        className="input"
                        autoComplete="off"
                        placeholder="John@mail.com"
                        required/>

                    <label className="label">Telephone</label>
                    <input 
                        type="tel"
                        name="telephone"
                        className="input"
                        placeholder="+(11)1234-5678"
                        required/>
                    
                    <div className="form__content">
                        
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="password"
                            placeholder="Enter your password"/>
                        <i className="fa fa-eye show"/>
                    </div>

                    <div className="form__content">

                        <label className="label">Confirm Password</label>
                        <input
                            type="password"
                            name="password"
                            className="password"
                            placeholder="Confirm your password"/>
                        <i className="fa fa-eye show"/>
                    </div>

                    <button type="submit">Send</button>
                </form>

        </>
    )
}

export default registerForm