// export const getFetch = async(setProducts) => {
//     const data = await fetch("../../Data/burger-data.json")
//     const data_parsed = await data.json();
//     try {
//         setTimeout(()=>setProducts(data_parsed),500);    
//     } catch (error) {
//         console.log(error);
//     }
// }
import data from '../../Data/burger-data.json'
export const getFetch = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(data)
        },1000)
    })
}