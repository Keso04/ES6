//Task N1
function operations(a, b, ...args){
    let sum = a + b;
    let res = 1;
    for(const num of args){
        res = res*num;
    }

    return [sum, res];
}

//Task N2
function returnObjectField(user){
    user = {
       banks: ["Bank of Georgia", "TBC", "Liberty Bank", "Tera Bank"],
       adress: {
         city: "Tbilisi"
       }
    }

    const {banks, adress: {city}} = user;

    if(city != undefined)
       return city;

    return "Undefined!!!";
}

//Task N3
function returnTheSameObject(restaurant){
    restaurant = {
        name: "Mcdonalds",
        logo: "M",
        creator: "Ray Kroc",
        staff: {
            CustomerService: "Ben",
            FoodPreparation: "Nick",
            Hygiene: "Mary",
            Manager: "Kate" 
        },
        adress: {
            city: "New York",
            street: "Broadway"
        }
    }

    const restaurant2 = {
        ...restaurant,
        staff: {
            ...restaurant.staff
        },
        adress: {
            ...restaurant.adress
        }
    }

    return restaurant2;
}

//testing the functions

user = {
    banks: ["Bank of Georgia", "TBC", "Liberty Bank", "Tera Bank"],
    adress: {
      city: "Tbilisi"
    }
 }

 restaurant = {
    name: "Mcdonalds",
    logo: "M",
    creator: "Ray Kroc",
    staff: {
        CustomerService: "Ben",
        FoodPreparation: "Nick",
        Hygiene: "Mary",
        Manager: "Kate" 
    },
    adress: {
        city: "New York",
        street: "Broadway"
    }
}

//Function1
console.log(operations(67, 34, 2, 4, 1, 5, 6, 7));

//Function2
console.log(returnObjectField(user));

//Function3
console.log(returnTheSameObject(restaurant));