import { useDispatch } from "react-redux";
import { setCurrent } from "../../reducers/app/reducer";

export const Item = ({current, item}) => {
    const dispatch = useDispatch();
    return (
        <div  
            className="flex items-center gap-2 pl-2 hover:font-bold py-2 first:rounded-t-[4px] last:rounded-b-[4px]"
            onClick={() => dispatch(setCurrent(item))}
            >
            <div className="border-2 border-sky-500 rounded-full w-5 h-5 flex justify-center items-center">
                <div className={`rounded-full w-3 h-3 ${current === item ? 'bg-sky-500' : ''}`}></div>
            </div>
            <p>{item.NAME}</p>
        </div>
    )
}