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
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(subsituteTeachers) {
      let randomSubstitute = Math.floor(Math.random() * subsituteTeachers.length);
      // console.log(randomSubstitute);
      return subsituteTeachers[randomSubstitute];
    }
  }
  
  class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School {
    constructor(name, numberOfStudents) {
      super(name, 'middle', numberOfStudents);
    }
  }
  class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  console.log(School.pickSubstituteTeacher(['Evgeny', 'Elena', 'Cat']));
  
  const highTest = new High('Bears High', 340, ['Vasya', 'Petya', 'Bibi']);
  console.log(highTest);
  console.log(highTest.sportsTeams);
  highTest.numberOfStudents = 120;
  console.log(highTest.numberOfStudents);
  highTest.quickFacts();
  
  const middleTest = new Middle('Cats Middle School', 10);
  console.log(middleTest);
  middleTest.quickFacts();
  
  const primaryTest = new Primary('Elenas Primary School', 250, 'school bus')
  console.log(primaryTest);
  console.log(primaryTest.numberOfStudents)
  console.log(primaryTest.pickupPolicy)
  primaryTest.quickFacts();
  
  const schoolTest = new School ('Evgenys School', 'ultimate', 500)
  console.log(schoolTest);
  schoolTest.numberOfStudents = 650;
  console.log(schoolTest);
  schoolTest.numberOfStudents = '7';
  console.log(schoolTest);
  schoolTest.numberOfStudents = 'five';
  schoolTest.quickFacts();
  
  
  