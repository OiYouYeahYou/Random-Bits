var msg = document.getElementById("message");

//constructor
function person(name, birthMonth, profession) {
    //set default values to a person
    this.name = name || "No Name";
    this.birthMonth = birthMonth || "No Month";
    this.profession = profession || "Nobody";

    //construction of the display function
    this.display = function() {
    var frag = document.createDocumentFragment();
    var para = frag.appendChild(document.createElement("p"));
        para.className = "message";
        para.appendChild(document.createTextNode(this.name + " " + "was born on " + this.birthMonth + " and they are a " + this.profession + ". "));

    //Month comparisons
    if (this.birthMonth == "April") {
        para.appendChild(document.createTextNode("They are meh because they were born in April. (eww)"));
    } else if (this.birthMonth == "January") {
        para.appendChild(document.createTextNode("They are the best because they were born in the best month! "));
        var strong = para.appendChild(document.createElement("strong"));
            strong.textContent = "best month!";
    } else {
        para.appendChild(document.createTextNode("They are okay, at best."));
    }

    msg.appendChild(frag);
    };

}

var test1 = new person("Bob", "April", "Developer");
    test1.display();
var test2 = new person("Bobby", "January", "Developer");
    test2.display();
var test3 = new person("Rob", "else", "Developer");
    test3.display();
