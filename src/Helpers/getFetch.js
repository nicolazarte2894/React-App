const products = [
    {id: "1", name: "remera roja" , brand:"Zara", category: "remera", description: "Linda remera roja", price: "3500"},
    {id: "1", name: "remera verde" , brand:"Zara", category: "remera", description: "Linda remera verde", price: "3000"},
    {id: "1", name: "remera azul" , brand:"Zara", category: "remera", description: "Linda remera azul", price: "3200"},
    {id: "1", name: "remera amarilla" , brand:"Zara", category: "remera", description: "Linda remera amarila", price: "3400"}
];
export const getFetch = () => {
    return new Promise( (res, rej)=>{
        setTimeout( ()=>{
            res(products)
        },2000)
        
    }
    )
}