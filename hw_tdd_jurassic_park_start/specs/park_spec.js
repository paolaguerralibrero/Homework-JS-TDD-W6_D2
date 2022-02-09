const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let allosaurus;
  let velociraptor;
  let triceratops;


  beforeEach(function(){
    park = new Park('Dinopolis', 40);
    allosaurus = new Dinosaur('Allosaurus', 'carnivore', 40)
    velociraptor = new Dinosaur('Velociraptor', 'carnivore', 60)
    triceratops = new Dinosaur('Triceratops', 'carnivore', 100)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dinopolis');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 40);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Velociraptor');
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);

  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.addDinosaur(allosaurus);
    park.addDinosaur(triceratops);
    park.removeDinosaur(allosaurus);
    const expected = [triceratops];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(allosaurus);
    park.addDinosaur(triceratops);
    park.addDinosaur(velociraptor);
    let mostVisistedDinosaur = park.findMostVisited();
    const actual = mostVisistedDinosaur;
    const expected = triceratops;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
