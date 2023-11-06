/** eslint-disable */
import { useState } from 'react';
import chevron_down from "@/assets/chevron_down";
import SearchBarAdmin from '../SearchBarAdmin';


const FilterBarTwo = () => {
    // Search Bar
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
    };
    // Options for dropdown menu
    const weeklyAvailability = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const language = ["English", "Ga", "Twi", "Hausa"]
    const genders = ["Male", "Female"]

    /**
     * Handles all the filter processing before the users are 
     * mapped onto the screen. 
     */
    const filter = () => {
        console.log("Filter successful");
    }

    return (

        <div className="flex flex-row justify-center items-center p-0 gap-2">
            <div className="Search Name or Title">
                <SearchBarAdmin onSearch={(handleSearch)} />
            </div>
            {/* <input type="text" placeholder="Search Name" onChange={handleSearch} className="btn btn-sm border border-solid bg-white text-gray-500 italic text-left normal-case hover:bg-white" /> */}

            <div className="w-[210px] h-9 px-4 py-2 bg-white rounded-lg border border-zinc-600 justify-between items-center inline-flex">
                <div className="dropdown">
                    <label tabIndex={0} className="text-neutral-400 flex gap-16 m-1 text-xs font-normal font-['Montserrat']">Weekly Availability{chevron_down}</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {weeklyAvailability.map((e) => <li>{e}</li>)}
                        </ul>
                </div>    
            </div>

            <div className="w-[210px] h-9 px-4 py-2 bg-white rounded-lg border border-zinc-600 justify-between items-center inline-flex">
                <div className="dropdown">
                    <label tabIndex={0} className="text-neutral-400 flex gap-16 m-1 text-xs font-normal font-['Montserrat']">Language{chevron_down}</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {language.map((e) => <li>{e}</li>)}
                        </ul>
                </div>    
            </div>

            <div className="w-[210px] h-9 px-4 py-2 bg-white rounded-lg border border-zinc-600 justify-between items-center inline-flex">
                <div className="dropdown">
                    <label tabIndex={0} className="text-neutral-400 flex gap-16 m-1 text-xs font-normal font-['Montserrat']">Gender{chevron_down}</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {genders.map((e) => <li>{e}</li>)}
                    </ul>
                </div>    
            </div>

            <button className="px-[46px] py-2.5 bg-white rounded-[10px] border border-sky-700 justify-center items-center gap-2.5 inline-flex" onClick={filter}>
                <div className="w-[34px] h-4 text-sky-700 text-xs font-bold font-['Montserrat']">Filter</div>
            </button>
        </div>
    )
}

export default FilterBarTwo;