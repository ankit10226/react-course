import { useState } from 'react' 
import './App.css'

function App() {
  const contents = [
    [
        'HTML is the standard markup language for Web pages.',
        'With HTML you can create your own Website.',
        'HTML is easy to learn - You will enjoy it!', 
    ],
    [
        'CSS is the language we use to style an HTML document.',
        'CSS describes how HTML elements should be displayed.',
        'This tutorial will teach you CSS from basic to advanced.', 
    ],
    [
        "JavaScript is the world's most popular programming language",
        'JavaScript is the programming language of the Web.',
        'JavaScript is easy to learn.', 
    ]
  ]
  const [key, setKey] = useState(0); 

  return (
    <>
      <div className="h-screen w-screen bg-blue-100 flex flex-col justify-center items-center">
        <div className="w-1/2 h-24 bg-yellow-400 flex justify-evenly items-center">
            <button className="bg-blue-100 w-1/5 py-3 rounded text-grey-900 hover:bg-gray-900 hover:text-white" id="htmlBtn" onClick={()=>setKey(0)}>HTML</button>
            <button className="bg-blue-100 w-1/5 py-3 rounded text-grey-900 hover:bg-gray-900 hover:text-white" id="cssBtn" onClick={()=>setKey(1)}>CSS</button>
            <button className="bg-blue-100 w-1/5 py-3 rounded text-grey-900 hover:bg-gray-900 hover:text-white" id="javascriptBtn" onClick={()=>setKey(2)}>JAVASCRIPT</button>
        </div>
        <div className="w-1/2 h-40 bg-gray-900 flex justify-start items-center px-10">
            <ul className="text-white" id="contentUL"> 
               {contents[key].map((items) =>
                <li key={items}>{items}</li>
               )}
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
