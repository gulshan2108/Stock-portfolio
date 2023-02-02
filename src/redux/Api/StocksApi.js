import axios from 'axios'

export const getStockApi = async() => {
    try{
        return axios.get('../../db.json')
    }catch(e){}
}