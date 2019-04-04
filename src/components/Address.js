import React, {useState} from 'react';
import './Address.css';

const  Address = () => {
  // using hooks to manage state
  const [edit, setEdit] = useState(true),
        [name, setName] = useState(''),
        [a1, setA1] = useState(''),
        [a2, setA2] = useState(''),
        [city, setCity] = useState(''),
        [zip, setZip] = useState('');
  return edit ? (
    <form className="address">
      <input placeholder='Name' value={name} onChange={(e) =>setName(e.target.value)} />
      <br />
      <input placeholder='Address 1' value={a1} onChange={(e) =>setA1(e.target.value)} />
      <input placeholder='Address 2'  value={a2} onChange={(e) =>setA2(e.target.value)} />
      <input placeholder='City and State'  value={city} onChange={(e) =>setCity(e.target.value)} />
      <input placeholder='Zipcode'  value={zip} onChange={(e) =>setZip(e.target.value)} />
      <button onClick={()=>setEdit(false)}>save</button>
    </form>
  ) : (
    <div className="address readOnly">
      <h2>{name}</h2>
      <h3>{a1}</h3>
      <h3>{a2}</h3>
      <h3>{city}</h3>
      <h3>{zip}</h3>
      <button onClick={()=>setEdit(true)}>edit</button>
    </div>
  )
}
export default Address;

