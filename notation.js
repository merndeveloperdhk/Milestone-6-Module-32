const students = {
    name: 'Misam',
    age : 12,
    class: 'six',
    marks : {
        Math: 95,
        Phy : 80,
        Chemes: 85
    },
}
const marks = students.marks;
const chemistry = students['marks']['Chemes']
console.log(chemistry);