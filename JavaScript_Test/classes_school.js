class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
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
      if (typeof num === 'number') {
        this._numberOfStudents = num;
      } else {
        console.log('The value has to be a number')
      }
    }
    quickFacts() {
    }
    static pickSubstituteTeacher() {
    }
  }
  
  class Primary extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
      super(name, level, numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  const primaryTest = new Primary('Elenas Primary School', 'primary', 250, 'school bus')
  console.log(primaryTest);
  console.log(primaryTest.numberOfStudents)
  console.log(primaryTest.pickupPolicy)
  
  const schoolTest = new School ('Evgenys School', 'ultimate', 500)
  console.log(schoolTest);
  schoolTest.numberOfStudents = 650;
  console.log(schoolTest);
  schoolTest.numberOfStudents = '7';
  console.log(schoolTest);
  schoolTest.numberOfStudents = 'five';