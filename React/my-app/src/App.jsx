// function App(){

//     return <div>
//     <h1>Hello</h1>
//     <h2>Not hello</h2>

//     </div>


// }

import React from 'react'

// const App = () => {
//     return (
//         <div>App</div>
//     )
// }


const App = () => {
    let user = 'sid'

    // const abc = () => {
    //     console.log("Helloo")

    const changeUser = ()=>{
        console.log(user)
        user ="fiza";
        console.log(user)
    }    
    
    


    return (
        <div>
            <h1>Username is {user}</h1>
            <button onClick={changeUser}>Change User</button>

        </div>
    )
}

export default App