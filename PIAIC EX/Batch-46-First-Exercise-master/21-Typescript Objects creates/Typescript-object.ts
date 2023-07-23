type Countries = {

name: string;
capital:string;
population:number;
};

const country:Countries[]=
[
{
    name:"Pakistan",
    capital:"Islamabad",
    population:210,
},

{
    name:"India",
    capital:'Dehli',
    population:420,
},
];

console.log(country);//for entire objects of array
console.log(country[0].capital);//for specific object of array
