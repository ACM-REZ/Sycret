import { ErrorForm } from "../Errors/ErrorForm"

export const FormInput = ({name, register, required, message, placeholder, errors, state, pattern}) => {
    return (
        <div className="mt-3">
            <p className={`pl-2 ${errors ? 'text-red-600' : ''}`}>{name}*</p>
            <input 
                type="text" 
                className={`border-2 rounded-md outline-none focus:border-pink-300 w-full pl-2 py-1 ${errors ? 'border-red-600' : 'border-sky-500'}`} 
                placeholder={placeholder}
                {...register(`${state}`, {
                    required: `${required}`,
                    pattern: {
                        value: pattern,
                        message: `${message}`
                    },
                    maxLength: {
                        value: 100,
                        message: `Максимальная длинна 100 символов`
                    }
                })}
            />
            {errors && <ErrorForm errors={errors.message}/>}
        </div>
    )
}