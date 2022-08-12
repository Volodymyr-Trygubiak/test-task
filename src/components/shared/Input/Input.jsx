import { forwardRef } from 'react';
import './input.scss'

const Input = forwardRef(({ value, error, placeholder, onChange, ...inputProps }, ref) => {
  
  const isValue = value.length > 0 ? ' value' : '';

  return (
    <div className='wrap'>
      <input
        className={`input${error ? ' invalid' : ''}`}
        onChange={onChange}
        {...inputProps}
      />
      <label className={`custom-placeholder${isValue}`}>
        <span>{placeholder}</span>
      </label>
      {error && <div className='error-text'>{error?.message || 'Error'}</div>}
    </div>
  )
})



export const FileInput = ({ value, error, onChange, children = 'Upload', ...props }) => {

  return (

    <div className='file-input'>
      <label className={`file-input-btn${error ? ' error' : ''}`}>
        {children}
        <input type="file" onChange={onChange} />
      </label>
      <div className={`file-input-text${error ? ' error' : ''}`}>
        <span className={`${value ? 'chosen' : ''}`}>
          {value?.name || 'Upload your photo'}
        </span>
      </div>
      {error && <div className='error-text'>{error?.message || 'Error'}</div>}
    </div>
  )
}

export default Input
