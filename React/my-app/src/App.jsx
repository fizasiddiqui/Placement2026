// function App(){

//     return <div>
//     <h1>Hello</h1>
//     <h2>Not hello</h2>

//     </div>


// }

//import React from 'react'

// const App = () => {
//     return (
//         <div>App</div>
//     )
// }


// const App = () => {
//     let user = 'sid'

//     // const abc = () => {
//     //     console.log("Helloo")

//     const changeUser = ()=>{
//         console.log(user)
//         user ="fiza";
//         console.log(user)
//     }    
    
    


//     return (
//         <div>
//             <h1>Username is {user}</h1>
//             <button onClick={changeUser}>Change User</button>

//         </div>
//     )
// }



// const App = () =>{
//     return (
//         <div>
//             <h2>Helo guys</h2>

//         </div>
//     )
// }



import React from 'react';

// ✅ Define and use MyForm
function MyForm() {
  return (
    <form className="p-4">
      <label className="block mb-2 text-lg font-semibold">
        Enter your name:
        <input type="text" className="ml-2 border p-1 rounded" />
      </label>
    </form>
  );
}

// ✅ Define App and render MyForm
function App() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Welcome to My React App</h1>
      <MyForm />
    </div>
  );
}

export default App;
