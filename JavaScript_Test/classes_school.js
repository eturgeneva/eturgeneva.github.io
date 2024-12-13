class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStundents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(num) {
      if (!isNaN(num)) {
        this._numberOfStundents = num;
      } else {
        console.log('The value has to be a number')
      }
    }
    quickFacts() {
  
    }
    static pickSubstituteTeacher() {
      
    }
  
  }
  
  const schoolTest = new School ('Evgeny', '35', 5)
  console.log(schoolTest);
  schoolTest.numberOfStudents = 6;
  console.log(schoolTest);
  schoolTest.numberOfStudents = '7';
  console.log(schoolTest);
  schoolTest.numberOfStudents = 'five';