import { useQuery } from 'react-query';
import axios from 'axios';
import api from '../services/api';

const listaProduct = async () => {    
    const repsonse = await api.get("http://localhost:9001/product")
    return repsonse?.data
}

export function useProductData(){
    const query = useQuery({
        queryFn: listaProduct,
        queryKey:['product-data'],
      })

      return query
}