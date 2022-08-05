import { useState } from 'react';
import styles from './Switch.module.css'


function Switch({onChange}) {

    const [option, setOption] = useState('all');

    function handleOnChange(ev) {
        setOption(ev.target.value)
        onChange(ev.target.value)
    }

    const classObj = {
        all: 'translate-x-[2px] w-[88px]',
        ux: 'translate-x-[90px] w-[88px]',
        front: 'translate-x-[174px] w-[112px]'
    }

    
    return (
    <>
        
    <div className="wrapper flex border border-white/60 h-8 rounded-full relative">
        <div className={`bubble z-0 transition duration-200 bg-white/60 rounded-full w-[90px] top-[2px] h-[26px] absolute ${classObj[option]}`}></div>
        <div className="container flex w-72 justify-between items-center font-bold z-10  text-xs leading-8 uppercase text-white/60">
            <label 
                className='flex items-center justify-center grow cursor-pointer'
            >
                <input 
                    type="radio" 
                    className="sr-only"
                    name="worktype" 
                    value="all" 
                    checked={option === 'all'} 
                    onChange={(ev)=> handleOnChange(ev)} 
                />
                <span className={option === 'all' ? 'text-color-base/100' : ''}>See All</span>
            </label>
            
            <label 
                className='flex items-center justify-center grow cursor-pointer'
            >
                <input 
                    type="radio" 
                    className='sr-only'
                    name="worktype" 
                    value="ux" 
                    checked={option === 'ux'} 
                    onChange={(ev)=> handleOnChange(ev)} 
                />
                <span className={option === 'ux' ? 'text-color-base/100' : ''}>UX / UI</span>
            </label>
            
            <label 
                className='flex items-center justify-center grow cursor-pointer'
            >
                <input 
                    type="radio" 
                    className='sr-only'
                    name="worktype" 
                    value="front"
                    checked={option === 'front'} 
                    onChange={(ev)=> handleOnChange(ev)}  
                />
                <span className={option === 'front' ? 'text-color-base/100' : ''}>Front-end</span>
            </label>

        </div>

    </div>
    </>
    )

}

export default Switch;