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
            children: ["ch1", "ch2", "ch3"],
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

  //wrapp content into div
  document.getElementById("test")
  const wholeWrapp = document.createElement("div");
  wholeWrapp.className = "subFamily__wrapper";
  document.body.appendChild(wholeWrapp);
  wholeWrapp.insertAdjacentElement("afterend", document.getElementById("gallery"))

  //alert(name);
  switch (name) {
    case "jr":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[0].Surname + " Family";
      mat = tree.Potot.children[0].Father;
      pat = tree.Potot.children[0].Mother;
      addParents(pat, mat, wholeWrapp);
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
          var arr = tree.Potot.children[0].children[i];
          addchildren(num, n, ext, arr, wholeWrapp);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n, null, null, wholeWrapp)
        }
      }
      break;
    case "lilibeth":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[1].Surname + " Family";
      mat = tree.Potot.children[1].Father;
      pat = tree.Potot.children[1].Mother;
      addParents(pat, mat, wholeWrapp);
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
          var arr = tree.Potot.children[1].children[i];
          addchildren(num, n, ext, arr, wholeWrapp);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n, null, null, wholeWrapp)
        }
      }
      break;
    case "flor":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[2].Surname + " Family";
      mat = tree.Potot.children[2].Father;
      pat = tree.Potot.children[2].Mother;
      addParents(pat, mat, wholeWrapp);
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
          var arr = tree.Potot.children[2].children[i];
          addchildren(num, n, ext, arr, wholeWrapp);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n, null, null, wholeWrapp);
        }
      }
      break;
    case "grace":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[3].Surname + " Family";
      mat = tree.Potot.children[3].Father;
      pat = tree.Potot.children[3].Mother;
      addParents(pat, mat, wholeWrapp);
      let surn = document.createElement("p");
      surn.id = "see__fam";
      surn.textContent = "Go to " + tree.Potot.children[3].Surname + " Family";
      surn.addEventListener("click", () => goTo());
      wholeWrapp.appendChild(surn);
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
          var arr = tree.Potot.children[3].children[i];
          addchildren(num, n, ext, arr, wholeWrapp);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n, null, null, wholeWrapp);
        }
      }
      break;
    case "ophelia":
      document.getElementById("fam").innerHTML = tree.Potot.children[6];
      break;
    case "luciela":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[4].Surname + " Family";
      mat = tree.Potot.children[4].Father;
      pat = tree.Potot.children[4].Mother;
      addParents(pat, mat, wholeWrapp);
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
          var arr = tree.Potot.children[4].children[i];
          addchildren(num, n, ext, arr, wholeWrapp);
        } else {
          var num = i;
          var n = cArray[i];
          addchildren(num, n, null, null, wholeWrapp);
        }
      }
      break;
    case "joy":
      document.getElementById("fam").innerHTML =
        tree.Potot.children[5].Surname + " Family";
      mat = tree.Potot.children[5].Father;
      pat = tree.Potot.children[5].Mother;
      addParents(pat, mat, wholeWrapp);
      //add chidlren
      cArray = tree.Potot.children[5].children; // assign array
      cLength = tree.Potot.children[5].children.length; // store length
      //loop to get array postition and name
      //then pass to function
      for (let i = 0; i < cLength; i++) {
        var num = i;
        var n = cArray[i];
        addchildren(num, n, null, null, wholeWrapp);
      }
      break;
  }

  //console.log(tree);

  //window.alert("Hello JavaScript!"); // response to button click
  //window.print(); // print the current page
}

function goToFamily(fam) {
  try {
    const x = fam;
  // window.alert("vaiable: "+ x)
  document.location = "Family.html?fam=" + encodeURIComponent(x); //go to Family page
  // apply myFunction
  } catch (error) {
    console.log(error);
  }
}

function goTo() {
  document.location = "SoronoFamily.html";
}

//funtion to add children if more than one
function addchildren(num, children, ext, arr, wholeWrapp) {
  try {
    const number = num; //num passed
  const name = children; //name passed
  const e = ext; //if true: (child has extended family)
  const elemnt = document.createElement("h2"); // add elemnt
  elemnt.textContent = name;
  if (e == true) {
    elemnt.className = "child__with__extension";
    elemnt.style.border = "2px solid red";
    elemnt.addEventListener("click", () => showExtension(arr, elemnt, number, wholeWrapp));
  } else {
    elemnt.className = "child";
  }
  elemnt.id = "ch" + number; // assign id
  wholeWrapp.appendChild(elemnt);
  } catch (error) {
    console.log(error);
  }
  
}

function showExtension(fam, triggerElem, number, wholeWrapp) {
  // console.log(fam);
  // console.log(number);
  if (!fam || !triggerElem) return;
  const containerId = "sur" + number; //assing surname id
  const existing = document.getElementById(containerId);
  //remove if exist
  if (existing) {
    existing.remove();
    return;
  }

  // create a wrapper for all extension info (surname, partner, children)
  const wrapper = document.createElement("div");
  wrapper.id = containerId;
  wrapper.className = "extension";
  wholeWrapp.append(wrapper)

  // surname (handle different property names)
  const surnameText = fam.surname || fam.Surname || "Surname not available";
  const sur = document.createElement("h3");
  sur.textContent = surnameText + " Family";
  wrapper.appendChild(sur);
  // partner
  if (fam.partner) {
    const part = document.createElement("h4");
    part.id = "extPart-" + number;
    part.textContent = fam.partner;
    wrapper.appendChild(part);
  }
  // add child/ren
  const extChArray = fam.children || [];
  //check if array is not null
  if (Array.isArray(extChArray) && extChArray.length) {
    //create list
    const ul = document.createElement("ul");
    //add child based on number of child
    extChArray.forEach((c, i) => {
      const li = document.createElement("li");
      li.id = `extCh-${number}-${i}`;
      li.textContent = c;
      ul.appendChild(li);
    });
    wrapper.appendChild(ul);
  }

  // insert the whole extension block right after the clicked element
  triggerElem.insertAdjacentElement("afterend", wrapper);
}

//add parents
function addParents(mat, pat, wholeWrapp) {
  try{
    const wrapper = document.createElement("div");
    wrapper.className = "parent__wrapper";
    const mother = document.createElement("h2");
    mother.id = "m";
    mother.className = "parent";
    mother.textContent = mat;
    const father = document.createElement("h2");
    father.className = "parent";
    father.id = "f";
    father.textContent = pat;
    wholeWrapp.appendChild(wrapper);
    wrapper.appendChild(father);
    wrapper.appendChild(mother);
  }
  catch(error){
    console.log(error);
    
  }
}
