const students = [
    { name: 'Alice', age: 18, grades: [85, 90, 92], hobbies: ['reading', 'drawing'] },
    { name: 'Bob', age: 19, grades: [80, 88, 95], hobbies: ['music', 'sports'] },
    { name: 'Charlie', age: 20, grades: [90, 92, 88], hobbies: ['cooking', 'photography'] }
  ];
  
  function findTopStudents(students, threshold) {
    return students.filter(student => { //returning a filtered array 
      const averageGrade = student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length; //getting the avrage of grades 
      return averageGrade > threshold; // return if the grades are more than the given threshold
    });
  }
  
  function addHobby(students, name, hobby) {
    const student = students.find(student => student.name === name);//finding the student from the arrray
    if (student) { //checking whether student's truthness
      student.hobbies.push(hobby);
      console.log(`Added '${hobby}' to the hobbies array of ${name}.`);
    } else {
      console.log(`Student with name ${name} not found.`);
    }
  }
  
  function updateStudent(students, name, updatedInfo) {
    const student = students.find(student => student.name === name);
    if (student) {
      Object.assign(student, updatedInfo);// assigning the updated info to student 
      console.log(`Updated information for ${name}.`);
    } else {
      console.log(`Student with name ${name} not found.`);
    }
  }
  
  
  
  const topStudents = findTopStudents(students, 85);
  console.log(topStudents);
  
  
  addHobby(students, 'Alice', 'painting');
  
  
  updateStudent(students, 'Alice', { age: 20, grades: [90, 80, 95], hobbies: ['reading', 'painting'] });
  
  
  console.log(students);
  
  