// let sales: number = 123_456_789;

// let course = 'TypeScript';

// let is_published = true;

// let level; // type is assumed to type ANY// to avoid

// level = 1;

// level = 'a';

// // function render(document) {
// //     console.log(document)
// // }



// let numbers: number[] = [1,2,3]; //states number array

// let numbers2 = [];
// numbers2[0] = 1;
// numbers2[1] = 2;

// numbers.forEach( n => n.)


// tuples = fixed length array
// 1, 'Mosh'

// let user: [number, string, boolean, value] = [1, 'Mosh', true, 0] //try to restrict tuples to 2

// user[1]
// user.push(1);


// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase for Enums
// const enum Size { Small = 1, Medium, Large }; //defaults values to 0, 1, 2, 3, 4
// let mySize: Size = Size.Medium;
// console.log(mySize)



// function calculateTax(income: number, taxYear: 2022): number {
//     if ((taxYear || 2022) < 2022 ) 
//         return income * 1.2;
//     // cannot return undefined if output type is defined
//     return income * 1.3;
// }


// calculateTax(10_000) // if not provided, undefined is used
// //"?" = optional

// type Employee = {
//     readonly id: number, //prevents future modification
//     name: string, // ? to make things optional
//     retire: (date: Date) => void; 
// }

// let employee: {
// } = { 
//     id: 1, 
//     name: "" , 
//     retire: (date:Date) => {
//     console.log(date)
// }};
// employee.name = 'Kyle';



// function kgToLbs(weight: number | string): number {
//   // narrow
//   if(typeof weight === 'number'){
//     return weight * 2.2;
//   }
//   else{
//     return parseInt(weight) * 2.2;
//   }
// }


// kgToLbs(10)
// kgToLbs('10kg')

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//   resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// literal (exact/specific) value

// type Quantity = 50 | 100;

// let quantity: Quantity = 100; 

// type Metric = 'cm' | 'inch'


// function greet(name: string | null | undefined) {
//     if (name)
//     console.log(name.toUpperCase());
//     else 
//     console.log('salutations')
// }

// greet(null); 

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date() }
}

let customer = getCustomer(1);
// console.log(customer.birthday)
// if (customer !== null && customer !== undefined)
    console.log(customer?.birthday?.getFullYear()) //? is optional property access operator // only executes if customer is not null/undefined

//optional element access operator
// customers?.[0]

//optional call operator
let log: any = null //(message: string) => console.log()
log?.('a')


