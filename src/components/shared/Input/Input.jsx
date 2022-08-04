
import './input.scss'

const Input = ({ id, value, type, placeholder, onChange }) => {

  const isValid = () => {
    if (value) return 'input has-value'
    return 'input'
  }

  return (
    <div className='wrap'>
      <input
        id={id}
        className={isValid()}
        type={type}
        value={value}
        onChange={onChange}
      />
      <span className='custom-placeholder'>
        <span>{placeholder}</span>
      </span>
    </div>
  )
}



export const FileInput = ({ value, onChange, children }) => {

  const isChosen = (file) => {
    if (value) return 'file-input-text chosen'
    return 'file-input-text'
  }
  
  return (
    <div className='file-input'>
      <label className='file-input-btn'>
        {children}
        <input type="file" onChange={onChange} />
      </label>
      <span className={isChosen(value)}> {value || 'Upload your photo'}</span>
    </div>
  )
}

export default Input
