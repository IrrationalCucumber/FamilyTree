// const tree = require("./PototFamily.json")
// import tree from ('./PototFamily.json')

// console.log(tree)
const tree = {
  Potot: {
    Father: "Benjamin",
    Mother: "Leoncita",
    Children: [
       {
        Surname: "Potot",
        Father: "Benjamin Jr",
        Mother: "Maria F",
        Children: [
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
        Children: ["Janessa", "Jennelyn", "William Jr", "Jeycel", "Julia"],
        Extension: [
          {
            Surname: "Barrientos",
            Father: "Clifford",
            Mother: "Janessa",
            Children: "Aleeya, Liam, Aya",
          },
           {
            Surname: "Mata",
            Father: "Jojo",
            Mother: "Jennelyn",
            Children: "Nicole, 2nd Daughter",
          },
          {
            Surname: "Ochea",
            Father: "William Jr",
            Mother: "Cathy",
            Children: "1st Daughter,",
          },
           {
            Surname: "",
            Father: "Charles",
            Mother: "Jeycel",
            Children: "1st Son, Noah",
          },
        ],
      },
       {
        Surname: "Ontong",
        Father: "Mario",
        Mother: "Maria Fe",
        Children: ["StepheMar", "ShelowMay", "ShenaPril", "SaeverJun"],
        Extension: {
          Ontong: {
            Father: "Stephemar",
            Mother: "Jane",
            Children: "Madi, 2nd Daughter, Son",
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
        Children: ["Adrean Paul", "Allyssa Mae"],
        Extension: [{
            Surname: "Aredidon",
            Father: "Jushua",
            Mother: "Allyssa",
            Children: "Zhyleen Haichee",
          
        }],
      },
       {
        Surname: "Novicio",
        Father: "Dionecio",
        Mother: "Luciela",
        Children: ["Vincent Christian", "Vanessa Faith", "Verdex Jekyle"],
        Extension: {
          Novicio: {
            Father: "Vincent Christian",
            Mother: "Weena",
            Children: "Severus, Stephen jon, Samantha",
          },
        },
      },
    {
        Surname: "Opaon",
        Father: "Eric",
        Mother: "Joy",
        Children: ["Erica Joyce", "Mia Mae", "Ella"],
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

  //alert(name);
  switch (name) {
    case "jr":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children[0].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.Children[0].Father;
      document.getElementById("m").innerHTML = tree.Potot.Children[0].Mother;
      document.getElementById("ch1").innerHTML = tree.Potot.Children[0].Children[0];
      document.getElementById("ch2").innerHTML = tree.Potot.Children[0].Children[1];
      document.getElementById("ch3").innerHTML = tree.Potot.Children[0].Children[2];
      document.getElementById("ch4").innerHTML = tree.Potot.Children[0].Children[3];
      document.getElementById("ch5").innerHTML = tree.Potot.Children[0].Children[4];
      document.getElementById("ch6").innerHTML = tree.Potot.Children[0].Children[5];
      document.getElementById("ch7").innerHTML = tree.Potot.Children[0].Children[6];
      document.getElementById("ch8").innerHTML = tree.Potot.Children[0].Children[7];
      document.getElementById("ch9").innerHTML = tree.Potot.Children[0].Children[8];
      break;
    case "lilibeth":
      document.getElementById("fam").innerHTML = tree.Potot.Children[1].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.Children[1].Father;
      document.getElementById("m").innerHTML = tree.Potot.Children[1].Mother;
      document.getElementById("ch1").innerHTML = tree.Potot.Children[1].Children[0];
      document.getElementById("ch2").innerHTML = tree.Potot.Children[1].Children[1];
      document.getElementById("ch3").innerHTML = tree.Potot.Children[1].Children[2];
      document.getElementById("ch4").innerHTML = tree.Potot.Children[1].Children[3];
      document.getElementById("ch5").innerHTML = tree.Potot.Children[1].Children[4];
      break;
    case "flor":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children[2].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.Children[2].Father;
      document.getElementById("m").innerHTML = tree.Potot.Children[2].Mother;
      document.getElementById("ch1").innerHTML = tree.Potot.Children[2].Children[0];
      document.getElementById("ch2").innerHTML = tree.Potot.Children[2].Children[1];
      document.getElementById("ch3").innerHTML = tree.Potot.Children[2].Children[2];
      document.getElementById("ch4").innerHTML = tree.Potot.Children[2].Children[3];
      break;
    case "grace":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children[3].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.Children[3].Father;
      document.getElementById("m").innerHTML = tree.Potot.Children[3].Mother;
      document.getElementById("ch1").innerHTML = tree.Potot.Children[3].Children[1];
      document.getElementById("ch2").innerHTML = tree.Potot.Children[3].Children[0];
      document.getElementById("gh").innerHTML = tree.Potot.Children[3].Extension[0].Father
      document.getElementById("gch1").innerHTML = tree.Potot.Children[3].Extension[0].Children
      break;
    case "ophelia":
      document.getElementById("fam").innerHTML = tree.Potot.Children[6];
      break;
    case "luciela":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children[4].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.Children[4].Father;
      document.getElementById("m").innerHTML = tree.Potot.Children[4].Mother;
      document.getElementById("ch1").innerHTML = tree.Potot.Children[4].Children[0];
      document.getElementById("ch2").innerHTML = tree.Potot.Children[4].Children[1];
      document.getElementById("ch3").innerHTML = tree.Potot.Children[4].Children[2];
      break;
    case "joy":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children[5].Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.Children[5].Father;
      document.getElementById("m").innerHTML = tree.Potot.Children[5].Mother;
      document.getElementById("ch1").innerHTML = tree.Potot.Children[5].Children[0];
      document.getElementById("ch2").innerHTML = tree.Potot.Children[5].Children[1];
      document.getElementById("ch3").innerHTML = tree.Potot.Children[5].Children[2];
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
