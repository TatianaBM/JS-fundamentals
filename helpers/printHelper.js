export function printAge(age){
    console.log(age)
}

// first way
export class CustomerDetails{
    //inside we create methods
    printFirstName(firstName){
        console.log(firstName)
    }
    printLastName(lastName){
        console.log(lastName)
    }
}

// second way // we removed a consctructor from the body where we call methods and keep it in class file
class Invoices {
    /**
     * this method prints the last invoice
     * @param {number} amount 
     */
    printTheLastInvoice(amount){
        console.log(amount)
    }
    /**
     * this method prints the very first invoice
     * @param {number} amount 
     */
    printTheFirstInvoice(amount){
        console.log(amount)
    }
}
export const invoice = new Invoices()   // here we declare a const variable