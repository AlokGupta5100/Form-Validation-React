import { React, useState } from 'react'
import "../App.css";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
  }


  return (
    <div>
      <form onSubmit={submitForm} className='loginForm'>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" required autoComplete='off' />
        </div><br/>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            id="password" name="password" required autoComplete='off' />
        </div><br/>
        <div>
          <button className='click' type='submit'>Login</button>
        </div>
      </form>
      <div>
        {
          allEntry.map((curElem) => {
            return (
              <div>
                <p>{curElem.email}</p>
                <p>{curElem.password}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default BasicForm; 
