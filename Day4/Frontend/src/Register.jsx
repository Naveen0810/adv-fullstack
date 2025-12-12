import React from 'react';

function Register() {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [password, setPassword] = React.useState("")

    const submitFormHandler = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Password: ${password}`);


    }
    return (
        <form action="">
            <fieldset>
                <h1>Resiter form</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={(e) =>
                    setName(e.target.value)
                } /><br /><br />


                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={(e) =>
                    setEmail(e.target.value)} /><br /><br />


                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" onChange={(e) =>
                    setPhone(e.target.value)} /><br /><br />


                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) =>
                    setPassword(e.target.value)} /><br /><br />


                <button type="submit" onClick={submitFormHandler}>Register</button>
                <button type="reset">Reset</button>
            </fieldset>
        </form>
    )
}
export default Register;