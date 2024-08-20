import Banar from "./component/banar";
import Product from "./component/product";



export default function Home() {
  return (
    <>
        <Banar  />
        <div className='w-full sm:-mt-40 md:-mt-60  '>
        <Product />
        </div>
    </>

    
  );  
}
