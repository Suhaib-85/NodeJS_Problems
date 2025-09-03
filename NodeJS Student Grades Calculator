const GRADE_THRESHOLDS = [
    { grade: 'A+', minMarks: 96 },
    { grade: 'A', minMarks: 91 },
    { grade: 'B', minMarks: 78 },
    { grade: 'C', minMarks: 65 },
    { grade: 'D', minMarks: 51 },
    { grade: 'F', minMarks: 0 }
];

function calculateGrade(marks) {
    for (const { grade, minMarks } of GRADE_THRESHOLDS) {
        if (marks >= minMarks) {
            return grade;
        }
    }
    return 'F';
}

function adjustMarksForAttendance(marks, attendance) {
    let penalty = 0;
    let warning = null;

    if (attendance <= 55) {
        penalty = 5;
        warning = 'Severe attendance issue';
    }
    if (attendance > 55 && attendance <= 65) {
        penalty = 2;
        warning = 'Significant attendance issue';
    }
    if (attendance > 65 && attendance <= 75) {
        penalty = 1;
        warning = 'Slight attendance issue';
    }

    return {
        adjustedMarks: Math.max(0, marks - penalty),
        warning
    };
}

function evaluateStudent(student) {
    const { name, marks, attendance } = student;

    if (
        typeof name !== 'string' ||
        typeof marks !== 'number' ||
        typeof attendance !== 'number' ||
        marks < 0 || marks > 100 ||
        attendance < 0 || attendance > 100
    ) {
        throw new Error(`Invalid data for student: ${name}`);
    }

    const { adjustedMarks, warning } = adjustMarksForAttendance(marks, attendance);
    const grade = calculateGrade(adjustedMarks);

    return {
        name,
        originalMarks: marks,
        adjustedMarks,
        attendance,
        grade,
        warning
    };
}

const students = [
    { name: "Alice", marks: 92, attendance: 85 },
    { name: "Bob", marks: 76, attendance: 68 },
    { name: "Charlie", marks: 59, attendance: 60 },
    { name: "Daisy", marks: 88, attendance: 52 }
];

for (const student of students) {
    try {
        const result = evaluateStudent(student);
        console.log(`\nStudent: ${result.name}`);
        console.log(`Original Marks: ${result.originalMarks}`);
        console.log(`Adjusted Marks: ${result.adjustedMarks}`);
        console.log(`Attendance: ${result.attendance}%`);
        console.log(`Grade: ${result.grade}`);
        if (result.warning) {
            console.warn(`Warning: ${result.warning}`);
        }
    } catch (error) {
        console.error(`Error processing student: ${error.message}`);
    }
}
