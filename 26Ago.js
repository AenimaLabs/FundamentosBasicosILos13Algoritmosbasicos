miprimerArray=["Lain", "PsychoPass", "Evangelion", "Ghost in the Shell"];

console.log(miprimerArray.length);
console.log(miprimerArray[3])
miprimerArray[3]= "Konosuba";
console.log(miprimerArray[3]);

console.log("--------");
console.log("For Loop");
console.log("--------");
/*For loop*/
for (var i=0; i<miprimerArray.length; i++){
    console.log(miprimerArray[i]);
}

console.log("***********");
console.log("For Each");
console.log("***********");

miprimerArray.forEach(element =>console.log(element));
console.log("!!!!!!Reverse!!!!");
miprimerArray.reverse();
miprimerArray.forEach(element =>console.log(element));

console.log(".........Sort........")
miprimerArray.sort();
miprimerArray.forEach(element  =>console.log(element));

console.log("####### Find #####")
var array2=[7,8,10,23,3];
var encontrar= array2.find(element => element>10);
console.log(encontrar);
