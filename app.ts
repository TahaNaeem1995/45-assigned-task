//Task 45

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}
function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model;
        ...optional
    }
}

const mycar: car = createCar("honda", "civic", { color: "black , year: "2022"})
console.log(mycar)