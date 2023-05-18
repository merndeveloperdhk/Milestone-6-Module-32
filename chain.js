const users = [
    { id: 1, name: 'Marifa', Roll: 1 },
    { id: 2, name: 'Misam', Roll: 2 },
    { id: 3, name: 'Fatiha', Roll: 3 }
]
console.log("First Object = ", users[0].name);
console.log("Second Object = ", users[1].Roll);
console.log("Third Object = ", users[2].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'Marifa', Roll: 1 },
        { id: 2, name: 'Misam', Roll: 2 },
        { id: 3, name: 'Fatiha', Roll: 3 }
    ]
}
 console.log("Name from array in object = ",data.data[0].name);