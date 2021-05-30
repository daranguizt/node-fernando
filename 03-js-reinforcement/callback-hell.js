
//callback hell consist in the nesting of callbacks
//sometimes, you need to execute callbacks inside
//other callbacks. 
//Promises might be a solution if well implemented.

const employees = [
    {
        id: 1,
        name: 'Diego'
    },
    {
        id: 2,
        name: 'Elisa'
    },
    {
        id: 3,
        name: 'Miru'
    },
];

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 2000
    },
];

const id = 1;

const getEmployee = (id, cb) => {
    const empleado = employees.find((e) => e.id === id);

    if(empleado){
        cb(null, empleado);
    }else{
        cb(`Empleado con id ${id} no existe`);
    }
}

const getSalary = (id, cb) => {
    const salary = salaries.find((salary) => salary.id === id)?.salary;
    
    if(salary){
        cb(null, salary);
    }else{
        cb(`Salary with id ${id} does not exist`);
    }
}

getEmployee(3, (err, employee) => {
    if(err){
        console.log('ERROR');
        return console.log(err);
    }

    console.log('Employee exists');
    console.log(employee);

    getSalary(id, (err, salary) => {
        if(err){
            console.log('ERROR');
            return console.log(err);
        }
    
        console.log('Salary found');
        console.log(salary);
    })
});