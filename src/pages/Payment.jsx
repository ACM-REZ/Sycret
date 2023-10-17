import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

export const Payment = () => {

    const current = useSelector(state => state.app.current)

    if(!current) {
        return <Navigate to={'/'} />;
    }

    return (
        <div className="mx-auto w-[300px] bg-white mt-12 p-4 rounded-md">
            <p className="text-center font-bold">К оплате {current.SUMMA}</p>
            <div className="mx-auto w-fit mt-2">
                <Link to='/' className="text-blue-400 hover:text-blue-600 duration-100">На главную</Link>
            </div>
        </div>
    )
}