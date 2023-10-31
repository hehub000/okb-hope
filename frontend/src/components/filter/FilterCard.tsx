import { useState } from "react";

const FilterCard = ({ name, username, created, active }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center pr-10 pl-10 w-full">
      <div className='flex justify-between items-center w-full border-solid border-gray-300 border-2 rounded-lg py-5 px-6'>
        <div className="flex items center">
          <input type="checkbox" className="checkbox ml-5 mr-20" checked={isChecked} onChange={handleOnChange} />
          <div className="">{name}</div>
        </div>
        <div className="">{username}</div>
        <div className="">{created}</div>
        <div className="">{active}</div>
      </div>
    </div>
  )
}

export default FilterCard