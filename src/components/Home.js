import {useState, useRef} from 'react'
import Profile from './Profile'
const Home = () => {
    const [name, setName]=useState('')
    const ref=useRef()

    const passText=()=> {
        // ref.current.value=name
        ref.current.changeName(name)
    }

    return (
        <div>
            <input type='text' value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={passText} type='button'>Pass Text</button>
            <Profile ref={ref} />
        </div>
    )
}

export default Home
