import Service from './Service'

export const getStockApi = async() => {
    try{
        return await Service.get('/mockdata')
    }catch(e){}
}