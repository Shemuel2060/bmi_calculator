
/**
 * This component containts the aread for the name, age, and sex
 * of the person. 
 */
import { useState } from "react"; 



export default function PersonalInfo() {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    return (
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
          <label>Sex</label>
          <input value={sex} onChange={(e) => setSex(e.target.value)} />
          <label>Age</label>
          <input value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
    )
}

