const studentsDatabase = ["jordan", "erick", "john", "michel"];

const findStudents = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

findStudents(studentsDatabase, "erick");
