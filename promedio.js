function arithmeticMean(list) {
    const sumList = list.reduce(
        function (accuValue = 0, nextElement) {
            return accuValue + nextElement;
        }
    );
    meanList = sumList / list.length;
    return meanList;
}

function arithmeticMedian(list) {
    const sortedList = list.sort(
        function (a, b) {
            return a - b;
        }
    );

    if (sortedList.length % 2 === 0) {
        median = sortedList.length / 2;
        return median;
    } else {
        median = parseInt(sortedList.length / 2);
        return median;
    }
}

function arithmeticMode(list) {
    const sortedList= {};
    list.map(
        function (element) {
            if (sortedList[element]) {
                sortedList[element] += 1;
            } else {
                sortedList[element] = 1;
            }
        }
    );

    const orderedList = Object.entries(sortedList).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );

    const mode = orderedList[orderedList.length - 1];
    return mode;
}

function weightedArithMean(list) {
    const gradeWithCredit = grades.map(
        function (gradeObject) {
            return gradeObject.grade * gradeObject.credit;
        }
    );
    
    const sumGradeWithCredit  = gradeWithCredit.reduce(
        function (sum = 0, nextVal) {
            return sum += nextVal;
        }
    );

    const credits = grades.map(
        function (gradeObject) {
            return gradeObject.credit;
        }
    );

    const sumCredits = credits.reduce(
        function (sum = 0, nextVal) {
            return sum += nextVal;
        }
    );

    const weightedAverage = sumGradeWithCredit / sumCredits;
    return weightedAverage;
}




const grades = [
    {
        course: "Educación Física",
        grade: 10,
        credit: 2,
    },
    {
        course: "Programación",
        grade: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        grade: 7,
        credit: 5,
    },
];
