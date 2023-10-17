import { Link } from 'react-router-dom';

export const NotFound404 = () => {
    return (
        <>
            <div className="w-fit mx-auto">
                <Link to={'/'} className='font-bold text-lg hover:text-gray-700 duration-200'>Вернуться назад</Link>
            </div>
            <p className="text-red-500 text-center text-4xl mt-5">Страница не найдена</p>
        </>
    )
}