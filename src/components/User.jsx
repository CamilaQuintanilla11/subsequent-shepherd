import { useState } from 'preact/hooks';

export default function User(){

    const randomUser = async() => {
        const response = await feth ('https://randomuser.me/api/');
        const data = await response.json();
        const randomUser = data.result[0];
        console.log(randomUser);
        setUser(randomUser.name.first);
    }
    const [user, setUser] = useState("");

    return (
        <div>
            <h3>{user}! Thank you for visiting!</h3>
            <button onClick={() => randomUser}>
                New User
            </button>
        </div>
    )
}