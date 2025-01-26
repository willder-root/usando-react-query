import { useProductData } from './hook/useProductData';


function App() {
  const { data } = useProductData();
  
  return (
    <div className="App">
      <table>
        <caption style={{border: "1px solid red"}}><h1>Lista de produtos</h1></caption>
        <thead>
          <tr>
            <th style={{border: "1px solid red", padding: "5px"}}>id</th>
            <th style={{border: "1px solid red", padding: "5px"}}>name</th>
            <th style={{border: "1px solid red", padding: "5px"}}>price</th>
            <th style={{border: "1px solid red", padding: "5px"}}>createdAt</th>
            <th style={{border: "1px solid red", padding: "5px"}}>updatedAt</th>
            <th style={{border: "1px solid red", padding: "5px"}}>deletedAt</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 && 
            data.map((product, index) =>(
              <tr>
                <td style={{border: "1px solid red", padding: "5px"}}>{product.id}</td>
                <td style={{border: "1px solid red", padding: "5px"}}>{product.name}</td>
                <td style={{border: "1px solid red", padding: "5px"}}>{product.price}</td>
                <td style={{border: "1px solid red", padding: "5px"}}>{product.createdAt}</td>
                <td style={{border: "1px solid red", padding: "5px"}}>{product.updatedAt}</td>
                <td style={{border: "1px solid red", padding: "5px"}}>{product.deletedAt}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
