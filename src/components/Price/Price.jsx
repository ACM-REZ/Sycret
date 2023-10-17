import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Price = ({current}) => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-end'> 
            <p>Цена со скидкой - <span className='font-bold'>{current.SUMMA.split('.')[0]} р.</span></p>
            <Button onClick={() => navigate('/form')} className='mt-2 bg-blue-400' variant='contained' color='secondary'>Купить</Button>
        </div>
    )
}