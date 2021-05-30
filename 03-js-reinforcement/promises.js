const employees = [
  {
    id: 1,
    name: "Diego",
  },
  {
    id: 2,
    name: "Elisa",
  },
  {
    id: 3,
    name: "Miru",
  },
];

const salaries = [
  {
    id: 1,
    salary: 1000,
  },
  {
    id: 2,
    salary: 2000,
  },
];

const id = 3;

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = employees.find((e) => e.id === id);
    empleado ? resolve(empleado) : reject(`Empleado con id ${id} no existe`);
  });
};

const getSalary = (id) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((salary) => salary.id === id)?.salary;
    salary ? resolve(salary) : reject(`Salary with id ${id} not found`);
  });
};

let name;

getEmployee(id)
  .then((employee) => {
    name = employee?.name;
    return getSalary(id);
  })
  .then((salary) => console.log(name, "has a salary of", salary))
  .catch((err) => console.log(err));
