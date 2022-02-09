const Park = function (name, price, dinosaurs){
    this.name = name;
    this.price = price;
    this.dinosaurs = [];

}

Park.prototype.numberOfDinosaurs = function(){
    return  this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    return  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}
Park.prototype.findMostVisited = function(){
    let mostVisitedDinosaur = this.dinosaurs[0];
    for (const dinosaur of this.dinosaurs){
        if(dinosaur.guestsAttractedPerDay > mostVisitedDinosaur.guestsAttractedPerDay){
            mostVisitedDinosaur = dinosaur;
        };
    };
    return mostVisitedDinosaur

}

module.exports = Park;