// const tree = require("./PototFamily.json")
// import tree from ('./PototFamily.json')

// console.log(tree)
const tree = {
  Potot: {
    Father: "Benjamin",
    Mother: "Leoncita",
    Children: {
      BenjaminJr: {
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
      Lilibeth: {
        Surname: "Ochea",
        Father: "William",
        Mother: "Lilibeth",
        Children: ["Janessa", "Jennelyn", "William Jr", "Jeycel", "Julia"],
        Extension: {
          Barrientos: {
            Surname: "Barrientos",
            Father: "Clifford",
            Mother: "Janessa",
            Children: "Aleeya, Liam, Aya",
          },
          Jennelyn: {
            Surname: "Mata",
            Father: "Jojo",
            Mother: "Jennelyn",
            Children: "Nicole, 2nd Daughter",
          },
          "Ochea Jr": {
            Surname: "Ochea",
            Father: "William Jr",
            Mother: "Cathy",
            Children: "1st Daughter,",
          },
          Jeycel: {
            Surname: "",
            Father: "Charles",
            Mother: "Jeycel",
            Children: "1st Son, Noah",
          },
        },
      },
      MariaFe: {
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
      Grace: {
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
      Luciela: {
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
      Joy: {
        Surname: "Opaon",
        Father: "Eric",
        Mother: "Joy",
        Children: ["Erica Joyce", "Mia Mae", "Ella"],
      },
      Ophelia: "Ophelia Potot",
    },
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
        tree.Potot.Children.BenjaminJr.Surname + " Family";
      console.log(tree);

      break;
    case "lilibeth":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children.Lilibeth.Surname + " Family";
      break;
    case "flor":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children.MariaFe.Surname + " Family";
      break;
    case "grace":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children.Grace.Surname + " Family";
      document.getElementById("f").innerHTML = tree.Potot.Children.Grace.Father;
      document.getElementById("m").innerHTML = tree.Potot.Children.Grace.Mother;
      document.getElementById("ch1").innerHTML = tree.Potot.Children.Grace.Children[0];
      document.getElementById("ch2").innerHTML = tree.Potot.Children.Grace.Children[1];
      document.getElementById("gh").innerHTML = tree.Potot.Children.Grace.Extension[0].Father
      document.getElementById("gch1").innerHTML = tree.Potot.Children.Grace.Extension[0].Children
      break;
    case "ophelia":
      document.getElementById("fam").innerHTML = tree.Potot.Children.Ophelia;
      break;
    case "luciela":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children.Luciela.Surname + " Family";
      break;
    case "joy":
      document.getElementById("fam").innerHTML =
        tree.Potot.Children.Joy.Surname + " Family";
      break;
  }
  // if(name == "grace"){
  //     document.getElementById("fam").innerHTML = tree.Potot.Children.Grace.Surname +" Family";
  //     document.getElementById("f").innerHTML = tree.Potot.Children.Grace.Father;
  //     document.getElementById("m").innerHTML = tree.Potot.Children.Grace.Mother;
  //     document.getElementById("ch1").innerHTML = tree.Potot.Children.Grace.Children[0];
  //     document.getElementById("ch2").innerHTML = tree.Potot.Children.Grace.Children[1];
  //     //console.log(tree);
  // }

  //window.alert("Hello JavaScript!"); // response to button click
  //window.print(); // print the current page
}

function goToFamily(fam) {
  const x = fam;
  // window.alert("vaiable: "+ x)
  document.location = "Family.html?fam=" + encodeURIComponent(x); //go to Family page
  // apply myFunction
}
