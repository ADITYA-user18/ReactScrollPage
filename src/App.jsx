import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const data = [
  {
    label: 'Item 1',
    style: {
      width: '100%',
      height: '300px',
      backgroundColor: 'red',
      
    }
  },
  {
    label: 'Item 2',
    style: {
      width: '100%',
      height: '300px',
      backgroundColor: 'green',
      
    }
  },
  {
    label: 'Item 3',
    style: {
      width: '100%',
      height: '300px',
      backgroundColor: 'orange'
    }
  },
  {
    label: 'Item 4',
    style: {
      width: '100%',
      height: '300px',
      backgroundColor: 'pink',
      
    }
  }
];


function App() {

  const scrollref = useRef(null)

  function ScrollerHandler(){
     const pos = scrollref.current.getBoundingClientRect().top;
    window.scrollTo({
      top:pos,
      behavior:'smooth'
    })

  }

  function ScrollToTop(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })

  }




  return (
   <>
    <h1>WelCome To Scroll App</h1>
    <button onClick={ScrollerHandler}>
      Scroll Button
    </button>

    {
      data.map((val,index)=>(
        <div  ref={index == 1 ? scrollref:null} key={index} style={val.style}>
          <p>{val.label}</p>
        </div>

      ))
    }

    <button onClick={ScrollToTop}>
      Scroll To Top
    </button>


   
   </>
  )
}

export default App
