import { Controller, useForm } from "react-hook-form"
import { FormInput } from "../components/FormInput/FormInput";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import MaskInput from "react-input-mask";
import { ErrorForm } from "../components/Errors/ErrorForm";
import { useSelector } from "react-redux";
import { sendFormData } from "../reducers/app/actions";

export const Form = () => {
    const navigate = useNavigate();

    const { 
        handleSubmit, 
        register,
        formState: { errors },
        reset,
        control
    } = useForm();

    const {err, current} = useSelector(state => {
        return {
            err: state.app.error,
            current: state.app.current
        }
    }) 

    const onSubmit = (data) => {
        data.phone = data.phone.replace(/[^0-9]/gi, "").substr(1)
        const sendData = {...data, ...current}
        sendFormData(sendData)
        navigate('/payment')
        reset()
    }

    if(!current) {
        return <Navigate to={'/'} />;
    }

    return (
        <div className="pt-4 px-4">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[400px] w-full py-4 px-4 bg-white rounded-md mx-auto">
                {err && <p className="text-red-600 text-center">Ошибка сервера</p>}
                <p className="text-center font-bold">{current.NAME}</p>
                <FormInput 
                    state="name" 
                    name="ФИО" 
                    register={register} 
                    required="ФИО должно быть заполнено" 
                    placeholder="Введите ФИО" 
                    errors={errors.name}
                />
                <div className="mt-3">
                    <p className={`pl-2 ${errors.phone ? 'text-red-600' : ''}`}>Телефон*</p>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Телефон должен быть заполнен',
                                validate: (value) =>
                                value.match(/\d/g).length === 11 ||
                                'Телефон должен содержать 11 цифр',
                            }}
                            render={({ field }) => (
                                <MaskInput
                                    {...field}
                                    id='tel'
                                    mask="+7 (999) 999-99-99"
                                    maskChar="_"
                                    type="tel"
                                    placeholder="+7 (___) ___-__-__"
                                    className={`border-2 rounded-md outline-none focus:border-pink-300 w-full pl-2 py-1 ${errors.phone ? 'border-red-600' : 'border-sky-500'}`}
                                />
                            )}
                        />
                    {errors?.phone && <ErrorForm errors={errors.phone.message}/>}
                </div>
                <div className="mt-3">
                    <p className={`pl-2 ${errors.message ? 'text-red-600' : ''}`}>Сообщение</p>
                    <textarea 
                        type="text" 
                        className={`border-2 rounded-md outline-none focus:border-pink-300 w-full pl-2 py-1 resize-none h-[80px] ${errors.message ? 'border-red-600' : 'border-sky-500'}`}
                        {...register('message', {
                            maxLength: {
                                value: 100,
                                message: `Максимальная длинна 100 символов`
                            }
                        })}
                    />
                    {errors?.message && <ErrorForm errors={errors.message.message}/>}
                    
                </div>
                <FormInput 
                    state="mail" 
                    name="Почта" 
                    register={register} 
                    required="Почта должна быть заполнена" 
                    placeholder="Введите почту" 
                    errors={errors.mail}
                    message="Введите почту правильно"
                    pattern={/^\S+@\S+$/i}
                />
                <div className="w-fit mx-auto mt-2"><a target="blank" href="https://sycret.ru/" className="text-blue-600">Правила</a></div>
                <div className="flex justify-between mt-5">
                    <Button onClick={() => navigate('/')} className="max-w-[120px] w-full bg-blue-400" variant='contained' color='secondary'>назад</Button>
                    <Button className="max-w-[120px] w-full bg-blue-400" type="submit" variant='contained' color='secondary'>Отправить</Button>
                </div>
            </form>
        </div>
    )
}