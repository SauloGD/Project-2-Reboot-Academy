
const municipios = ["Agaete","Agüimes","Artenara","Arucas","Firgas","Gáldar","Ingenio","La Aldea de San Nicolás","Las Palmas de Gran Canaria","Mogán","Moya","San Bartolomé de Tirajana","Santa Brígida","Santa Lucía de Tirajana","Santa María de Guía de Gran Canaria","Tejeda","Telde","Teror","Valleseco","Valsequillo de Gran Canaria", "Vega de San Mateo"]

function titleCase(foo) {
    var foo = foo.toLowerCase().split(" ");
    for (let i = 0; i < foo.length; i++) {
      foo[i] = foo[i][0].toUpperCase() + foo[i].slice(1);
    }
    
    return foo.join(" ");
  }

function findSites (filter){
    var fooArray = []
    municipios.forEach((elem) => {
        if (elem.toLowerCase().includes(filter)){
            fooArray.push(elem)
        }
    })
    return fooArray
}

module.exports = {titleCase, findSites}




//({$and : [$or : [{location: fooArray}, {"category.categoryType": req.query.categoryType},{"category.tags": { $in: req.query.tags }}],  $or : [{location: fooArray}, {"category.categoryType": req.query.categoryType}], {location: fooArray}]})

//{ {location: fooArray}, {"category.categoryType": req.query.categoryType}, {"category.tags": { $in: req.query.tags } }}