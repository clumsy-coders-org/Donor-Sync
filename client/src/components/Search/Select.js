import React from 'react'

const Select = () => {
    return (
        <div className='grid grid-cols-1 grid-auto-fit-[10rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 ml-12 font-semibold'>
           <select className='w-64 bg-zinc-100 py-3 pl-2 font-semibold rounded-[10px]'>
                <option value="" disabled selected hidden>Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B+</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            <select className='w-64 bg-zinc-100 py-3 pl-2 font-semibold rounded-[10px]'>
                <option value="" disabled selected hidden>District</option>
                <option value="kannur">Kannur</option>
                <option value="kozhikode">Kozhikode</option>
                <option value="alappuzha">Alappuzha</option>
                <option value="ernakulam">Ernakulam</option>
                <option value="thrissur">Thrissur</option>
            </select>
            <select className='w-64 bg-zinc-100 py-3 pl-2 font-semibold rounded-[10px]'>
                <option value="" disabled selected hidden>City</option>
                <option value="payyanur">Payyanur</option>
                <option value="perambra">Perambra</option>
                <option value="chengannur">Chengannur</option>
                <option value="kochi">Kochi</option>
                <option value="irinjalakuda">Irinjalakuda</option>
            </select>
            <select className='w-64 bg-zinc-100 py-3 pl-2 font-semibold rounded-[10px]'>
                <option value="" disabled selected hidden>Donor or BloodBank</option>
                <option value="jerry">Jerry</option>
                <option value="abc hospital">ABC hospital</option>
                <option value="miya">Miya</option>
                <option value="xyz hospital">XYZ hospital</option>
                <option value="varun">Varun</option>
            </select>        
         </div>
        
                
    )
}

export default Select
