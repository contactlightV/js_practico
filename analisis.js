const salariesCol = colombia.map(
    function (individual) {
        return individual.salary;
    }
);

const salariesColSorted = salariesCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// Helpers
function isEven(number) {
    return (number % 2 === 0);
}

// Median
function medianSalary(list) {
    const middle = parseInt(list.lenght / 2);
    if (isEven(list.lenght)) {
        const individualMiddle1 = list[middle - 1];
        const individualMiddle2 = list[middle];

        median = individualMiddle1 + individualMiddle2 / 2;
        return median;
    } else {
        const individualMiddle = list[middle];
        return individualMiddle;
    }
}

// Median top 10%
const spliceStart = (salariesColSorted.lenght * 0.9);
const spliceCount = salariesColSorted.lenght - spliceStart;

const salariesColTop10 = salariesColSorted.splice(spliceStart, spliceCount);

const medianTop10 = medianSalary(salariesColTop10);