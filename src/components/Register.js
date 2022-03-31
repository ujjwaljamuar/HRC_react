import { useState } from "react";
function Register(){
    let defaultUser = { name: '', email: '', password: '', cpassword: ''};
    let [user, setUser] = useState(defaultUser);
    let [users, setUsers] = useState([]);
    let { name, email, password, cpassword } = user; 
    let submitHandler = (event) => {
        event.preventDefault();
        let confirmation = window.confirm("Are You sure to Register ?"); 
        if (confirmation) { 
            setUsers([...users, user]);
            setUser(defaultUser); 
        }
    }
    let changeHandler = (event) => { 
        let { name, value}= event.target;
        setUser({ ...user, [name]: value }); 
    }
    return<>
        <form>
            <label>Enter Your name : </label><br/>
            <input onChange={changeHandler} name = "name" value={name} type="text"/>
            <br/>
            <label>Enter Your Email : </label><br/>
            <input onChange={changeHandler} name = "email" value={email} type="email"/>
            <br/>
            <label>Enter Your Password : </label><br/>
            <input onChange={changeHandler} name = "password" value={password} type="password"/>
            <br/>
            <label>Confirm Your Password : </label><br/>
            <input onChange={changeHandler} name = "cpassword" value={cpassword} type="password"/>
            <br/>
            
            <input type="submit" value="Register Me" onClick={submitHandler}/>
        </form>
        <table style={{border:"1px solid red"}}>
            <thread>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    
                </tr>
            </thread>

            <tbody>
                {users.map((user,index) => (
                    <tr key = {index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    </>
}

export default Register;