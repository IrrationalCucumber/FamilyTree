// const tree = require("./PototFamily.json")
// import tree from ('./PototFamily.json')

// console.log(tree)
const tree = {
  Potot: {
    Father: "Benjamin",
    Mother: "Leoncita",
    children: [
      {
        Surname: "Potot",
        Father: "Benjamin Jr",
        Mother: "Maria F",
        children: [
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
        children: [
          {
            Extended: true,
            child: "Janessa",
            partner: "Clifford",
            surname: "Barrientos",
            childred: ["ch1", "ch2", "ch3"],
          },
          {
            Extended: true,
            child: "Jerwelyn",
            partner: "Jojo",
            surname: "Mata",
            children: ["ch1", "ch2", "ch3"],
          },
           {
            Extended: true,
            child: "William Jr",
            partner: "Cathy",
            surname: "Ochea",
            children: ["ch1", "ch2", "ch3"],
          },
           {
            Extended: true,
            child: "Jeycel",
            partner: "Charles",
            surname: "",
            children: ["ch1", "ch2", "ch3"],
          },
          "Julia",
        ],
      },
      {
        Surname: "Ontong",
        Father: "Mario",
        Mother: "Maria Fe",
        children: [
          {
            Extended: true,
            child: "StepheMar",
            partner: "Jane",
            surname: "Ontong",
            children: ["Ch1", "ch2", "ch3"],
          },
          {
            Extended: true,
            child: "ShelowMay",
            partner: "Angelou",
            surname: "",
          },
          {
            Extended: true,
            child: "ShenaPril",
            surname: "Ontong",
            children: ["ch1", "ch2", "ch3"],
          },
          "SaeverJun",
        ],
      },
      {
        Surname: "Sorono",
        Father: "Wilfredo",
        Mother: "Grace",
        children: [
          {
            Extended: true,
            child: "Allyssa Mae",
            partner: "Jushua",
            surname: "Aredidon",
            children: ["Zhyleen Haichee"],
          },
          "Adrean Paul",
        ],
      },
      {
        Surname: "Novicio",
        Father: "Dionecio",
        Mother: "Luciela",
        children: [
          {
            Extended: true,
            child: "Vincent Christian",
            partner: "Wena",
            children: ["ch1", "ch2", "ch3"],
          },
          "Vanessa Faith",
          "Verdex Jekyle",
        ],
      },
      {
        Surname: "Opaon",
        Father: "Eric",
        Mother: "Joy",
        children: ["Erica Joyce", "Mia Mae", "Ella"],
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

  //array to store childrenren
  var cArray = [];
  var cLength;

  //alert(name);
  switch (name) {
    case "jr":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[0].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.children[0].Father;
      document.getElementById("m").innerHTML = tree.Potot.children[0].Mother;
      //add childreneren loop
      cArray = tree.Potot.children[0].children; // assign array
      cLength = tree.Potot.children[0].children.length; // store length
      //loop to get array postition and name
      for (let i = 0; i < cLength; i++) {
        //check if children hva a family
        if (cArray[i].Extended) {
          console.log(cArray);
          var num = i;
          var n = cArray[i].child;
          var ext = cArray[i].Extended;
          addchildren(num, n, ext);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n);
        }
      }
      break;
    case "lilibeth":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[1].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.children[1].Father;
      document.getElementById("m").innerHTML = tree.Potot.children[1].Mother;
      //add childreneren
      cArray = tree.Potot.children[1].children; // assign array
      cLength = tree.Potot.children[1].children.length; // store length
      //loop to get array postition and name
      for (let i = 0; i < cLength; i++) {
        //check if children hva a family
        if (cArray[i].Extended) {
          console.log(cArray);
          var num = i;
          var n = cArray[i].child;
          var ext = cArray[i].Extended;
          addchildren(num, n, ext);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n);
        }
      }
      break;
    case "flor":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[2].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.children[2].Father;
      document.getElementById("m").innerHTML = tree.Potot.children[2].Mother;
      //add childreneren
      cArray = tree.Potot.children[2].children; // assign array
      cLength = tree.Potot.children[2].children.length; // store length
      //loop to get array postition and name
      for (let i = 0; i < cLength; i++) {
        //check if children hva a family
        if (cArray[i].Extended) {
          console.log(cArray);
          var num = i;
          var n = cArray[i].child;
          var ext = cArray[i].Extended;
          addchildren(num, n, ext);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n);
        }
      }
      break;
    case "grace":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[3].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.children[3].Father;
      document.getElementById("m").innerHTML = tree.Potot.children[3].Mother;
      //add childreneren
      //create funtion to add instead of static display
      //less bloat to script and html files
      cArray = tree.Potot.children[3].children; // assign array
      cLength = tree.Potot.children[3].children.length; // store length
      //loop to get array postition and name
      //then pass to function
      for (let i = 0; i < cLength; i++) {
        //check if children hva a family
        if (cArray[i].Extended) {
          console.log(cArray);
          //document.getElementById("test").innerHTML = "success"
          var num = i;
          var n = cArray[i].child;
          var ext = cArray[i].Extended;
          var arr = tree.Potot.children[3].children[i]
          addchildren(num, n, ext, arr);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n);
        }
      }
      break;
    case "ophelia":
      document.getElementById("fam").innerHTML = tree.Potot.children[6];
      break;
    case "luciela":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[4].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.children[4].Father;
      document.getElementById("m").innerHTML = tree.Potot.children[4].Mother;
      //add childreneren
      cArray = tree.Potot.children[4].children; // assign array
      cLength = tree.Potot.children[4].children.length; // store length
      //loop to get array postition and name
      for (let i = 0; i < cLength; i++) {
        //check if children hva a family
        if (cArray[i].Extended) {
          console.log(cArray);
          var num = i;
          var n = cArray[i].child;
          var ext = cArray[i].Extended;
          addchildren(num, n, ext);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n);
        }
      }
      break;
    case "joy":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[5].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.children[5].Father;
      document.getElementById("m").innerHTML = tree.Potot.children[5].Mother;
      //add chidlren
      cArray = tree.Potot.children[5].children; // assign array
      cLength = tree.Potot.children[5].children.length; // store length
      //loop to get array postition and name
      //then pass to function
      for (let i = 0; i < cLength; i++) {
        var num = i;
        var n = cArray[i];
        addchildren(num, n);
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

//funtion to add children if more than one
function addchildren(num, children, ext, arr) {
  const number = num; //num passed
  const name = children; //name passed
  const e = ext;
  const elemnt = document.createElement("h2"); // add elemnt
  if (e == true) {
    elemnt.style.border = "2px solid red";
    elemnt.addEventListener("click", () => showExtension(arr));
  }
  elemnt.id = "ch" + number; // assign id

  elemnt.textContent = name;

  document.body.appendChild(elemnt);
}

function showExtension(fam){
   console.log("showExtension data:", fam);
}
