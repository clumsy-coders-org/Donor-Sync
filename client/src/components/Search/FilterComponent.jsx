import React, {useState} from 'react'

const FilterComponent = () => {
    const [bloodGroup, setBloodGroup] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [donorBloodBank, setDonorBloodBank] = useState('')
    const [filterCardDetails, setFilterCardDetails] = useState([])

    const searchButton = () => {
        const filteredData =  [  
                { id: 1, donor: 'Jerry',   bloodGroup: 'B+', phoneNumber: '1234567890', email: 'jerry@gmail.com' },
                { id: 2, donor: 'Meera', bloodGroup: 'B+', phoneNumber: '3692580741', email: 'meera@gmail.com' },
                { id: 3, donor: 'Varun', bloodGroup: 'B+', phoneNumber: '7894561203', email: 'varun@gmail.com' },
                { id: 4, donor: 'Miya',  bloodGroup: 'B+', phoneNumber: '4102587963', email: 'miya@gmail.com'  },
                { id: 5, donor: 'Manu',  bloodGroup: 'B+', phoneNumber: '456123789', email: 'manu@gmail.com'  },
                { id: 6, donor: 'Sana',  bloodGroup: 'B+', phoneNumber: '258741963', email: 'sana@gmail.com'  },
                { id: 7, bloodBank: 'ABC Hospital', availableUnits : '2', phoneNumber: '8527410963', email: 'abc@gmail.com' },
                { id: 8, bloodBank: 'EFG Hospital', availableUnits: '4', phoneNumber: '4506123789', email: 'efg@gmail.com' },
                { id: 9, bloodBank: 'MNO Hospital', availableUnits: '3', phoneNumber: '5879461230', email: 'mno@gmail.com' },
                { id: 10, bloodBank: 'XYZ Hospital', availableUnits: '5', phoneNumber: '8745021396', email: 'xyz@gmail.com' },
                { id: 11, bloodBank: 'JKL Hospital', availableUnits: '1', phoneNumber: '258963741', email: 'jkl@gmail.com' },
                { id: 12, bloodBank: 'STU Hospital', availableUnits: '2', phoneNumber: '987456321', email: 'stu@gmail.com' },
            ]             
        setFilterCardDetails(filteredData)
    }

    return (
        <div>
            <div className="mt-5 flex flex-col gap-5 items-center justify-center">
                <h1 className= "text-red-800 text-3xl px-8 font-bold">
                    Be Someone's Lifeline . Donate Blood & Make A Difference
                </h1>
            </div>
            <div className="grid grid-cols-1 grid-auto-fit-[10rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 ml-12 font-semibold">
                <select
                    className='w-48 bg-red-800 text-white py-2 pl-2 font-semibold rounded-[10px] '
                    value = {bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                >
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
                <select
                    className='w-48 bg-red-800 text-white py-3 pl-2 font-semibold rounded-[10px]'
                    value = {donorBloodBank}
                    onChange={(e) => setDonorBloodBank(e.target.value)}
                >
                    <option value="" disabled selected hidden>Donor or BloodBank</option>
                    <option value="jerry">Jerry</option>
                    <option value="abc hospital">ABC hospital</option>
                    <option value="miya">Miya</option>
                    <option value="xyz hospital">XYZ hospital</option>
                    <option value="varun">Varun</option>
                </select>
                <select
                    className='w-48 bg-red-800 text-white py-3 pl-2 font-semibold rounded-[10px]'
                    value = {district}
                    onChange={(e) => setDistrict(e.target.value)}
                >
                    <option value="" disabled selected hidden>District</option>
                    <option value="kannur">Kannur</option>
                    <option value="kozhikode">Kozhikode</option>
                    <option value="alappuzha">Alappuzha</option>
                    <option value="ernakulam">Ernakulam</option>
                    <option value="thrissur">Thrissur</option>
                </select>
                <select
                    className='w-48 bg-red-800 text-white py-3 pl-2 font-semibold rounded-[10px]'
                    value = {city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="" disabled selected hidden>City</option>
                    <option value="payyanur">Payyanur</option>
                    <option value="perambra">Perambra</option>
                    <option value="chengannur">Chengannur</option>
                    <option value="kochi">Kochi</option>
                    <option value="irinjalakuda">Irinjalakuda</option>
                </select>                   
                <button
                    className='w-48 bg-red-800 text-white py-3 pl-2 font-semibold rounded-[10px]'
                    onClick={searchButton}
                    >
                        Search
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 ml-8 gap-4">
                {
                    filterCardDetails.map((card) => (
                        <div key={card.id} className=" bg-red-800 text-white  w-72 px-8 py-4 rounded-[20px]">
                            <div>{card.donor} {card.bloodBank}</div>
                            <div>{card.bloodGroup} {card.availableUnits}</div>
                            <div>{card.phoneNumber}</div>
                            <div>{card.email}</div>
                        </div>
                    ))
                }
            </div>
        </div>      
    )
}

export default FilterComponent

