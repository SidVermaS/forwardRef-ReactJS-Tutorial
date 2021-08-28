import {forwardRef, useImperativeHandle, useState} from 'react'

const Profile = forwardRef((props, ref) => {
    const [name, setName]=useState('')

    useImperativeHandle(ref, ()=>({
        changeName(newName) {
            setName(newName)
        }
    }))

    return (
        <div>
            <input type='text' value={name} />
            
            {/* <input type='text' ref={ref} /> */}
        </div>
    )
})

export default Profile
