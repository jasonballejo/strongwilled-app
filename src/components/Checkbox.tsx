import React, { useState } from 'react'

export default function Checkbox() {
    const [checkboxes, setCheckbox] = useState([
      { id: 1, label: "Dog", checked: false },
      { id: 2, label: "Cat", checked: false },
      { id: 3, label: "Cow", checked: false },
      { id: 4, label: "Chicken", checked: false },
    ])

    function toggleChange(id: any) {
      setCheckbox(
        checkboxes.map((checkbox) =>
        checkbox.id === id ? {...checkbox, checked: !checkbox.checked } : checkbox
        )
      )
    }

    function toggleChecked() {
      setCheckbox(
        checkboxes.map((checkbox) =>
          ({ ...checkbox, checked: true}) 
        ))
    }

    function toggleUnChecked() {
      setCheckbox(
        checkboxes.map((checkbox) =>
          ({ ...checkbox, checked: false}) 
        ))
    }

  return (
    <div>
      {checkboxes.map((checkbox) => (
        <div className='flex items-center gap-2' key={checkbox.id}>
          <input 
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => toggleChange(checkbox.id)}
          />
          {checkbox.label}
        </div>
      ))}
      <button 
        className='border border-red-500 bg-yellow-500 text-black px-2 py-1'
        onClick={toggleChecked}
        >
          Check ALL
        </button>
    </div>
  )
}
