// const tree = require("./PototFamily.json")
// import tree from ('./PototFamily.json')

// console.log(tree)
const tree = {
  Potot: {
    Father: "Benjamin",
    Mother: "Leoncita",
    child: [
      {
        Surname: "Potot",
        Father: "Benjamin Jr",
        Mother: "Maria F",
        child: [
          "Marvin",
          "Rowen",
          "Lauren",
          "Jennelyn",
          "Kevin",
          "Franklin",
          "Mauren",
          "Lialyn",
          "Lovelyn",
        ],
      },
      {
        Surname: "Ochea",
        Father: "William",
        Mother: "Lilibeth",
        child: ["Janessa", "Jennelyn", "William Jr", "Jeycel", "Julia"],
        Extension: [
          {
            Surname: "Barrientos",
            Father: "Clifford",
            Mother: "Janessa",
            child: "Aleeya, Liam, Aya",
          },
          {
            Surname: "Mata",
            Father: "Jojo",
            Mother: "Jennelyn",
            child: "Nicole, 2nd Daughter",
          },
          {
            Surname: "Ochea",
            Father: "William Jr",
            Mother: "Cathy",
            child: "1st Daughter,",
          },
          {
            Surname: "",
            Father: "Charles",
            Mother: "Jeycel",
            child: "1st Son, Noah",
          },
        ],
      },
      {
        Surname: "Ontong",
        Father: "Mario",
        Mother: "Maria Fe",
        child: ["StepheMar", "ShelowMay", "ShenaPril", "SaeverJun"],
        Extension: {
          Ontong: {
            Father: "Stephemar",
            Mother: "Jane",
            child: "Madi, 2nd Daughter, Son",
          },
          Shenapril: {
            Childred: "Travis, Sasa, 2nd Son",
          },
        },
      },
      {
        Surname: "Sorono",
        Father: "Wilfredo",
        Mother: "Grace",
        child: [
          {
            Extended: true,
            child: "Allyssa Mae",
            partner: "Jushua",
            childred: ["Zhyleen Haichee"],
          },"Adrean Paul"
        ],
      },
      {
        Surname: "Novicio",
        Father: "Dionecio",
        Mother: "Luciela",
        child: ["Vincent Christian", "Vanessa Faith", "Verdex Jekyle"],
        Extension: {
          Novicio: {
            Father: "Vincent Christian",
            Mother: "Weena",
            child: "Severus, Stephen jon, Samantha",
          },
        },
      },
      {
        Surname: "Opaon",
        Father: "Eric",
        Mother: "Joy",
        child: ["Erica Joyce", "Mia Mae", "Ella"],
      },
      "Ophelia Potot",
    ],
  },
};

function myFunction(passedName) {
  const qs = window.location.search; // get from url
  const params = new URLSearchParams(qs); //decode value from url
  let name = params.get("fam"); // store value
  name = name.toLowerCase();

  //array to store children
  var cArray = []
  var cLength

  //alert(name);
  switch (name) {
    case "jr":
      document.getElementById("fam").innerHTML =
        tree.Potot.child[0].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.child[0].Father;
      document.getElementById("m").innerHTML = tree.Potot.child[0].Mother;
      document.getElementById("ch1").innerHTML =
        tree.Potot.child[0].child[0];
      document.getElementById("ch2").innerHTML =
        tree.Potot.child[0].child[1];
      document.getElementById("ch3").innerHTML =
        tree.Potot.child[0].child[2];
      document.getElementById("ch4").innerHTML =
        tree.Potot.child[0].child[3];
      document.getElementById("ch5").innerHTML =
        tree.Potot.child[0].child[4];
      document.getElementById("ch6").innerHTML =
        tree.Potot.child[0].child[5];
      document.getElementById("ch7").innerHTML =
        tree.Potot.child[0].child[6];
      document.getElementById("ch8").innerHTML =
        tree.Potot.child[0].child[7];
      document.getElementById("ch9").innerHTML =
        tree.Potot.child[0].child[8];
      break;
    case "lilibeth":
      document.getElementById("fam").innerHTML =
        tree.Potot.child[1].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.child[1].Father;
      document.getElementById("m").innerHTML = tree.Potot.child[1].Mother;
      document.getElementById("ch1").innerHTML =
        tree.Potot.child[1].child[0];
      document.getElementById("ch2").innerHTML =
        tree.Potot.child[1].child[1];
      document.getElementById("ch3").innerHTML =
        tree.Potot.child[1].child[2];
      document.getElementById("ch4").innerHTML =
        tree.Potot.child[1].child[3];
      document.getElementById("ch5").innerHTML =
        tree.Potot.child[1].child[4];
      break;
    case "flor":
      document.getElementById("fam").innerHTML =
        tree.Potot.child[2].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.child[2].Father;
      document.getElementById("m").innerHTML = tree.Potot.child[2].Mother;
      document.getElementById("ch1").innerHTML =
        tree.Potot.child[2].child[0];
      document.getElementById("ch2").innerHTML =
        tree.Potot.child[2].child[1];
      document.getElementById("ch3").innerHTML =
        tree.Potot.child[2].child[2];
      document.getElementById("ch4").innerHTML =
        tree.Potot.child[2].child[3];
      break;
    case "grace":
      document.getElementById("fam").innerHTML =
        tree.Potot.child[3].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.child[3].Father;
      document.getElementById("m").innerHTML = tree.Potot.child[3].Mother;
      //add childeren
      //create funtion to add instead of static display
      //less bloat to script and html files
      cArray = tree.Potot.child[3].child // assign array
      cLength = tree.Potot.child[3].child.length // store length
      //loop to get array postition and name
      //then pass to function
      for(let i=0; i <cLength; i++){
        //check if child hva a family
        if(cArray[i].Extended){
          console.log(cArray)
           //document.getElementById("test").innerHTML = "success"
           var num = i
           var n = cArray[i].child
           var ext = cArray[i].Extended
           addChild(num, n, ext)
        }
        else{
          var num = i
          var n = cArray[i]
          addChild(num, n)
        }
      }
      break;
    case "ophelia":
      document.getElementById("fam").innerHTML = tree.Potot.child[6];
      break;
    case "luciela":
      document.getElementById("fam").innerHTML =
        tree.Potot.child[4].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.child[4].Father;
      document.getElementById("m").innerHTML = tree.Potot.child[4].Mother;
      document.getElementById("ch1").innerHTML =
        tree.Potot.child[4].child[0];
      document.getElementById("ch2").innerHTML =
        tree.Potot.child[4].child[1];
      document.getElementById("ch3").innerHTML =
        tree.Potot.child[4].child[2];
      break;
    case "joy":
      document.getElementById("fam").innerHTML =
        tree.Potot.child[5].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.child[5].Father;
      document.getElementById("m").innerHTML = tree.Potot.child[5].Mother;
      //add chidlren
      cArray = tree.Potot.child[5].child // assign array
      cLength = tree.Potot.child[5].child.length // store length
      //loop to get array postition and name
      //then pass to function
      for(let i=0; i <cLength; i++){
        var num = i
        var n = cArray[i]
        addChild(num, n)
      }
      break;
  }

  //console.log(tree);

  //window.alert("Hello JavaScript!"); // response to button click
  //window.print(); // print the current page
}

function goToFamily(fam) {
  const x = fam;
  // window.alert("vaiable: "+ x)
  document.location = "Family.html?fam=" + encodeURIComponent(x); //go to Family page
  // apply myFunction
}

//funtion to add child if more than one
function addChild(num, child, ext) {
  const number = num //num passed
  const name = child //name passed
  const e = ext
  const elemnt = document.createElement('h2'); // add elemnt
  if(e == true){
    elemnt.style.border = '2px solid red';
  }
    elemnt.id = "ch" + number // assign id
  
  elemnt.textContent = name

  document.body.appendChild(elemnt);
}