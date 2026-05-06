import React,{ useEffect } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {

   useEffect(() => {
    const toggle = document.getElementById('modeToggle')
    const body = document.body

    if (!toggle ) return 
    if (localStorage.getItem('theme') ===  'light') {
        body.classList.add('light-mode')
        toggle.checked = true
    }

    const onChange = () => {
        body.classList.toggle('light-mode')
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark')
    }
    toggle.addEventListener('change', onChange)
    return () => toggle.removeEventListener('change', onChange)
   }, [])


    return (



    <div className="theme-switch">
      <label className="switch">
        <input type="checkbox" id="modeToggle" />
        <span className="slider"></span>
      </label>
    </div>

        </div>
    )
}

export default Sidebar;