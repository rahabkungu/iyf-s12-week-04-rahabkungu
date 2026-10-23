const gradeTracker = {
    students: [],

    addStudent(name, grades){
        this.students.push({name, grades});
    },
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student || Object.keys(student.grades).length === 0) return 0;

        const scores = Object.values(student.grades);
        const sum = scores.reduce((total, score) => total + score, 0);
        return Number((sum / scores.length).toFixed(2));
    },

    getSubjectAverage(subject) {
        let totalScore = 0;
        let count =0;

        for (const student of this.students) {
            if (student.grades[subject] !== undefined){
            totalScore += student.grades[subject];
            count++;
            }
        }
        if (count === 0) return 0;
        return Number((totalScore / count).toFixed(2));
    },

    getTopStudent() {
        if (this.students.length === 0) return null;

        let topStudent = this.students[0];
        let highestAvg = this.getStudentAverage(topStudent.name);

        for (let i = 1; i < this.students.length; i++) {
            const currentAvg = this.getSubjectAverage(this.students[i].name);
            if (currentAvg > highestAvg) {
                highestAvg = currentAvg;
                topStudent = this.student[i];
            }
        }
        return topStudent.name;
    },

    getStrugglingStudents() {
        return this.students
            .filter(student => this.getStudentAverage(student.name) < 70)
            .map(student => this.students.name);
    },

    getLetterGrade(score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `Student ${name} not found.`;
        
        const avg = this.getStudentAverage(name);
        const letter = this.getLetterGrade(avg);

        let report = `--- Report Card: ${student.name} ---\n`;
        for (const [subject, score] of Object.entries(student.grades)){
            report += `- ${subject.charAt(0).toUpperCase() + subject.slice(1)}: ${score} (${this.getLetterGrade(score)})\n`
        }
        
        report += `----------------------------\n`;
        report += `Overall Average: ${avg} (${letter})`;

        return report;
    }
}


gradeTracker.addStudent("Alice", { math: 95, english: 88, science:92 });
gradeTracker.addStudent("Bob", { math:72, english:85, science:78});
gradeTracker.addStudent("Charlie", { math: 60, english:65, science:58});

console.log(gradeTracker.getStudentAverage("Alice"));  //91.67
console.log(gradeTracker.getSubjectAverage("math"));   //75.67
console.log(gradeTracker.getTopStudent());             //Alice
console.log(gradeTracker.getStrugglingStudents());      // ['Charlie']
console.log(gradeTracker.generateReportCard("Alice")); 
    




