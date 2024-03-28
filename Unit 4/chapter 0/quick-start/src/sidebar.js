import {useState} from 'react'
function Sidebar(){
  const [value, setValue] = useState(0)
  const hello = () => {
    setValue(value + 1)
    console.log('hello');
  }
  return(
    <button className='sidebar'
      onClick={hello}
     style={{
      color: 'pink',
      fontSize: '100px'
    }}>{value}</button>
  )
}

export default Sidebar
