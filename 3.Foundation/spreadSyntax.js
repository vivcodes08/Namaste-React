const person={
    firstname:"Vivek",
    lastname:"Rao",
    middlename:"Sngh",
    age:20,
    bloodgroup:"O+ve",
    phoneNumber:12345678909
}

const {age ,...other} = person

//! Expected results

console.log(age)
console.log(other)

/** 
20
{
  firstname: 'Vivek',
  lastname: 'Rao',
  middlename: 'Sngh',
  bloodgroup: 'O+ve',
  phoneNumber: 12345678909
}
*/

