// const data = [
//     {id: "1", name: "remera roja" , brand:"Zara", category: "remera", description: "Linda remera roja", price: "3500"},
//     {id: "1", name: "remera verde" , brand:"Zara", category: "remera", description: "Linda remera verde", price: "3000"},
//     {id: "1", name: "remera azul" , brand:"Zara", category: "remera", description: "Linda remera azul", price: "3200"},
//     {id: "1", name: "remera amarilla" , brand:"Zara", category: "remera", description: "Linda remera amarila", price: "3400"}
// ];
const data = [
    {id: "1", name: "Stacker Doble" , description: "Doble carne, doble chedar y baicon", price: "820", img: "Assets/img/stacker-doble.png"},
    {id: "2", name: "Stacker Triple" , description: "Triple carne, triple chedar y baicon", price: "930", img: "Assets/img/stacker-triple.png"},
    {id: "3", name: "Stacker Cuadruple" , description: "Cuadruple carne, cuadruple chedar y baicon", price: "1020", img: "Assets/img/stacker-cuadruple.png"},
    {id: "4", name: "Stacker Quintuple" , description: "Quintuple carne, doble chedar y baicon", price: "1100", img: "Assets/img/stacker-quintuple.png"},
    {id: "5", name: "BBQ Bacon XL Simple" , description: "Medallón de  carne, chedar, baicon y salsa barbacoa", price: "700", img: "Assets/img/bbq-bacon-xl.png"},
    {id: "6", name: "BBQ Bacon XL Doble" , description: "Medallón de  carne, chedar, baicon y salsa barbacoa", price: "820", img: "Assets/img/doble-bbq-bacon-xl.png"},
    {id: "7", name: "WOWcamole de carne" , description: "Medallón de carne, tomate, cebolla y un exquicito guacamole", price: "900", img: "Assets/img/wowcamole-carne.png"},

    
]
export const getFetch = () => {
    return new Promise( (res, rej)=>{
        setTimeout( ()=>{
            res(data)
        },2000)
        
    }
    )
}