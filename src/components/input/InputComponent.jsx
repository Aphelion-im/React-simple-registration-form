import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './InputComponent.css';

export default function InputComponent({
  inputType,
  inputName,
  inputId,
  placeholder,
  validationRules,
  register,
  errors,
  iconName,
  autoFocus
}) {
  return (
    <>
      <div className="inputfield-container">
        <span className="inputfield-icon">
          <FontAwesomeIcon icon={iconName} />
        </span>
        <input
          type={inputType}
          id={inputId}
          placeholder={placeholder}
          {...register(inputName, validationRules)}
          autoFocus={autoFocus}
        />
      </div>
      <div className="error-message">
        {errors[inputName] && (
          <p>
            <span className="warning-icon">
              <FontAwesomeIcon icon={faTriangleExclamation} />
            </span>
            {errors[inputName].message}
          </p>
        )}
      </div>
    </>
  );
}
