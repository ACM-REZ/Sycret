import axios from "axios";
import types from "./types";

export const fetchData = () => (dispatch) => {
    axios.get('https://sycret.ru/service/api/api?ApiKey=011ba11bdcad4fa396660c2ec447ef14&ismob=0&MethodName=OSGetGoodList').then(response => {
        dispatch({type: types.fetchDataList, payload: response.data});
    }).catch(err => {
        dispatch({type: types.ErrorFetch, payload: 'Failed'})
    });
}

export const sendFormData = (data) => {
    const sendData = {
        ApiKey: '011ba11bdcad4fa396660c2ec447ef14',
        MethodName: 'OSSale',
        Id: data.ID,
        TableName: data.TABLENAME,
        PrimaryKey: data.PRIMARYKEY,
        Price: data.PRICE,
        Summa: data.SUMMA, 
        ClientName: data.name,
        Phone: data.phone, 
        Email: data.mail,
        PaymentTypeId: 2, 
        UseDelivery: 0, 
        DeliveryAddress: 0,
        IsGift: 0, 
        MsgText: data.message,
    }
    axios.post('https://sycret.ru/service/api/api?ApiKey=011ba11bdcad4fa396660c2ec447ef14&ismob=0&MethodName=OSSale', sendData).then(response => {
        console.log(response.data)
    })
}