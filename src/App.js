import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./reducers/app/actions";
import { Main } from "./pages/Main";
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound404 } from "./pages/NotFound404";
import { Form } from "./pages/Form";
import bg from './images/sycretBg.jpg'
import { useEffect } from "react";
import { Payment } from "./pages/Payment";

function App() {
  const dispatch = useDispatch()
  
  const { loaded } = useSelector(state => {
    return {
      ...state,
      loaded: state.app.loaded,
    }
  })

  useEffect(() => {
    if(!loaded) 
      dispatch(fetchData())
  }, [loaded])

  if(!loaded) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="h-screen w-screen bg-pink-300 overflow-hidden">
      <div className="z-10 relative h-full">
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route path="/form" element={<Form />} />
          <Route path='/payment' element={<Payment />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
      <img src={bg} className="w-full h-full absolute top-0 left-0 blur-sm object-cover" alt="" />
    </div>
  );
}

export default App;
