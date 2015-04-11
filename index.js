var database = '[';

database = database + '{"name" : "Bandage Strap", "img" : "bandage_strap.JPG", ';
database = database + '"gif" : "bandage_strap.gif", "src" : "bandage_strap.stl", ';
database = database + '"about" : "A \'Bandage Strap\' is a stretchable strap used to create localized pressure. A \'Bandage Strap\' can be used in many ways. But most common uses include holding a gauze on affected part, holding splint in place and to protect it as well as to hold patches in place."}, ';

database = database + '{"name" : "Umbilical Cord Clamp", "img" : "umbilical_cord_clamp.JPG", ';
database = database + '"gif" : "umbilical_cord_clamp.gif", "src" : "umbilical_cord_clamp.stl", ';
database = database + '"about" : "Th eumbilical cord connects your baby to the placenta. As soon as your baby is born, your provider places 2 umbilical cord clamps on the umbilical cord to stop the blood flow. Then she or he cuts between the clamps on the cord so your baby is no longer attached to the placenta which is still in your uterus."}, ';

database = database + '{"name" : "Forceps", "img" : "forceps.JPG", ';
database = database + '"gif" : "forceps.gif", "src" : "forceps.stl", ';
database = database + '"about" : "Forceps (plural forcipes) are a handheld, hinged instrument used for grasping and holding objects. Forceps are used when fingers are too large to grasp small objects or when many objects need to be held at one time while the hands are used to perform a task. The term \'forceps\' is used almost exclusively within the medical field. Outside medicine, people usually refer to forceps as tweezers, tongs, pliers, clips or clamps."}, ';

database = database + '{"name" : "Syringe", "img" : "syringe.JPG", ';
database = database + '"gif" : "syringe.gif", "src" : "syringe.stl", ';
database = database + '"about" : "A syringe is a simple pump consisting of a plunger that fits tightly in a tube. The plunger can be pulled and pushed along inside a cylindrical tube (called a barrel), allowing the syringe to take in and expel a liquid or gas through an orifice at the open end of the tube."}, ';

database = database + '{"name" : "Scalpel", "img" : "scalpel.JPG", ';
database = database + '"gif" : "scalpel.gif", "src" : "scalpel.stl", ';
database = database + '"about" : "A scalpel  is a small and extremely sharp bladed instrument used for surgery, anatomical dissection, and various arts and crafts (called a hobby knife)."}, ';

database = database + '{"name" : "Cast", "img" : "cast.JPG", ';
database = database + '"gif" : "cast.gif", "src" : "cast.stl", ';
database = database + '"about" : "A cast is a shell, frequently made from plaster, encasing a limb (or, in some cases, large portions of the body) to stabilize and hold anatomical structures, most often a broken bone (or bones), in place until healing is confirmed. It is similar in function to a splint."}';

database = database + "]";


var sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
}

function populate() {
    var elem = document.getElementById("info");

    var data = JSON.parse(database);
    data.sort(sort_by('name', false, function(a){return a.toUpperCase()}));

    var code = '';
    code = code + '<div class="large-8 columns"><div class="row">';

    var i = 0;
    while (i < data.length) {
        code = code + '<div class="large-4 small-6 columns">';
        code = code + '<a href="#" onclick="individual(' + i + ')">';
        code = code + '<img class="data_img" src="' + data[i]["img"] + '">';
        code = code + '</a>';
        code = code + '<div class="panel data_txt_box">';
        code = code + '<h5 class="data_txt">'+ data[i]["name"] + '</h5>';
        code = code + '</div></div>';
        i++;
    }

    code = code + '</div></div>';

    elem.innerHTML = code;

}

function individual(i) {
    var elem = document.getElementById("info");
    var data = JSON.parse(database);
    data.sort(sort_by('name', false, function(a){return a.toUpperCase()}));

    var code = '';
    code = code + '<div class="large-8 columns"><div class="row">';
    code = code + '<h1 class="astrofont">' + data[i]["name"] + '</h1>';
    code = code + '<img src="' + data[i]["gif"] + '">';
    code = code + '<h4>' + data[i]["about"] + '</h4>';
    code = code + '<h4>.stl: <a href="' + data[i]["src"] + '">' + data[i]["src"] + '</a></h4>';
    code = code + '<br></div></div>';

    elem.innerHTML = code;
}
