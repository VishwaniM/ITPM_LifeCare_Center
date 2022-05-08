import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'

const Reactphone = () => {

    const [value, setValue] = useState()
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
  )
};

export default Reactphone;