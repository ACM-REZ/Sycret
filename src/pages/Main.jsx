
import { Selector } from '../components/Selector/Selector';
import { Price } from '../components/Price/Price';
import { useSelector } from "react-redux";

export const Main = () => {
    const data = useSelector(state => state.app.data)
    const current = useSelector(state => state.app.current)

    return (
        <div className='container mx-auto flex flex-col justify-between h-3/5 items-end px-4'>
            <Selector current={current} data={data.data}/>
            {current && <Price current={current} data={data}/>}
        </div>
    )
}