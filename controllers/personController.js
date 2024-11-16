
import Person from "../models/personSchema";



// Create and Save a Record of a Model
export const createAndSavePerson = (done) => {
    const newPerson = new Person({
      name: 'John Doe',
      age: 25,
      favoriteFoods: ['Pizza', 'Burger'],
    });
  
    newPerson.save((err, data) => {
      if (err) return console.error(err);
      console.log('Person saved:', data);
      done(null, data);
    });
  };
  
  // Create Many Records with model.create()
 export const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, people) => {
      if (err) return console.error(err);
      console.log('People created:', people);
      done(null, people);
    });
  };
  
  // Use model.find() to Search Your Database
  export const findPeopleByName = (name, done) => {
    Person.find({ name }, (err, data) => {
      if (err) return console.error(err);
      console.log('People found:', data);
      done(null, data);
    });
  };
  
  // Use model.findOne() to Return a Single Matching Document
 export const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, data) => {
      if (err) return console.error(err);
      console.log('Person found by food:', data);
      done(null, data);
    });
  };
  
  // Use model.findById() to Search Your Database By _id
 export const findPersonById = (personId, done) => {
    Person.findById(personId, (err, data) => {
      if (err) return console.error(err);
      console.log('Person found by ID:', data);
      done(null, data);
    });
  };



  // Perform Classic Updates by Running Find, Edit, then Save
 export const findEditThenSave = (personId, done) => {
    Person.findById(personId, (err, person) => {
      if (err) return console.error(err);
      person.favoriteFoods.push('hamburger');
      person.save((saveErr, updatedPerson) => {
        if (saveErr) return console.error(saveErr);
        console.log('Person updated:', updatedPerson);
        done(null, updatedPerson);
      });
    });
  };
  
  // Perform New Updates on a Document Using model.findOneAndUpdate()
 export const updatePersonAge = (personName, done) => {
    Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true },
      (err, updatedPerson) => {
        if (err) return console.error(err);
        console.log('Person age updated:', updatedPerson);
        done(null, updatedPerson);
      }
    );
  };
  
  // Delete One Document Using model.findByIdAndRemove
  export const deletePersonById = (personId, done) => {
    Person.findByIdAndRemove(personId, (err, removedPerson) => {
      if (err) return console.error(err);
      console.log('Person removed:', removedPerson);
      done(null, removedPerson);
    });
  };
  
  // Delete Many Documents with model.remove()
  const deleteManyPeople = (done) => {
    Person.remove({ name: 'Mary' }, (err, result) => {
      if (err) return console.error(err);
      console.log('People removed:', result);
      done(null, result);
    });
  };
  
  // Chain Search Query Helpers to Narrow Search Results
 export const queryChain = (done) => {
    Person.find({ favoriteFoods: 'burritos' })
      .sort('name')
      .limit(2)
      .select('-age')
      .exec((err, data) => {
        if (err) return console.error(err);
        console.log('Chained query result:', data);
        done(null, data);
      });
  };