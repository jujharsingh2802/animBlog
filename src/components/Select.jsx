import React, { useId } from 'react'

function Select({
    options=[],
    label,
    className="",
    ...props
},ref) {
  const id = useId()
  
  return (
    <div className='w-full'>
      {label && <label className='' htmlFor={id}>{label}</label>}
      <select 
       id={id}
       {...props}
        ref={ref} 
       className={`px-3 py-2 rounded-lg text-black bg-white outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
       >
        {
          options?.map((option)=>{
            return <option value={option} key={option}>
              {option}
            </option>
          })
        }

       </select>
    </div>
  )
}

export default React.forwardRef(Select)