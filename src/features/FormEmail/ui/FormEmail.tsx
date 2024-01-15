
import { FC, useState } from 'react';
import cls from './FormEmail.module.scss'

const FormEmail: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const id = new Date().getMilliseconds()
    // const response = fetch('/', {
    //   headers: POST,
    // })
    // .then(console.log('done'))
    // .catch(console.log('error'))
    setInputValue('')
    const inputElement = document.querySelector('input');

    if (inputElement) inputElement.value = '';
  }
  return (
    <div className={cls.form_email}>
      <input 
        className={cls.form_email__text}
        placeholder='Email address'
        value={inputValue}
        onChange={(e) => handleInput(e)}
        />
      <div className={cls.form_email__btn} onClick={handleSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47" fill="none">
          <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H42C46.4183 0 50 3.58172 50 8V46.0784H0V8.00001Z" fill="#003E66"/>
          <path d="M22.1541 26.8485L25.9749 23.3273L22.1541 19.8062L23.3332 18.7195L28.3332 23.3273L23.3332 27.9352L22.1541 26.8485Z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

export default FormEmail;