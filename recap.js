//  var let const
// break up with var
const numbers = [12,25,16,25]
// default parameter
function calculateSalary(salary, tax, bonus){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// Template string
const elementHTML = `
<div>
<h1>This is template string.</h1>
</div?
`

// Arrow function
const doubleIt = x => x *2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// spread
const ages = [15,25,24,16,18,24]
const newAges = [...ages, 22, 17]

// destructuring
const {x,y, ...c} = {x: 45, y:12, z:18, name: 'Misam', Roll: 2};
const [a,b,...r] = [12,13,15,18]

