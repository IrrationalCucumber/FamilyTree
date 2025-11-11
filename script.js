// const tree = require("./PototFamily.json")
// import tree from ('./PototFamily.json')

// console.log(tree)
const tree = {
    
    
        "Potot":
        {
            "Father":"Benjamin",
            "Mother": "Leoncita",
            "Children":{
                "Benjamin Jr":{
                    "Father":"Benjamin Jr",
                    "Mother": "Maria F",
                    "Children":"Marvin, Rowen, Jerwelyn, Kevin, Franklin, Lovelyn"
                },
                "Lilibeth":{
                    "Father": "William",
                    "Mother": "Lilibeth",
                    "Children": "Janessa, Jennelyn, William Jr, Jeycel, Julia",
                    "Extension": 
                        {
                            "Barrientos":
                            {
                                "Father": "Clifford",
                                "Mother": "Janessa",
                                "Children": "Aleeya, Liam, Aya"
                            },
                            "Jennelyn":
                            {
                                "Father": "Jojo",
                                "Mother": "Jennelyn",
                                "Children": "Nicole, 2nd Daughter"
                            },
                            "Ochea Jr":{
                                "Father": "William Jr",
                                "Mother": "Cathy",
                                "Children": "1st Daughter,"
                            },
                            "Jeycel":{
                                "Father": "Charles",
                                "Mother": "Jeycel",
                                "Children": "1st Son, 2nd Son"
                            }
                        }
                },
                "Maria Fe":{
                    "Father" :"Mario",
                    "Mother" : "Maria Fe",
                    "Children" : "StepheMar, Shelow May, Shenapril, Saever Jun",
                    "Extension": 
                        {
                            "Ontong":
                            {
                                "Father": "Stephemar",
                                "Mother": "Jane",
                                "Children": "Madi, 2nd Daughter, Son"
                            },
                            "Shenapril":{
                                "Childred": "Travis, Sasa, 2nd Son"
                            }
                            
                        }
                },
                "Grace":{
                    "Surname": "Sorono",
                    "Father" :"Wilfredo",
                    "Mother" : "Grace",
                    "Children" : ["Adrean Paul", "Allyssa Mae"],
                    "Extension": 
                        {
                            "Aredidon":
                            {
                                "Father": "Jushua",
                                "Mother": "Allyssa",
                                "Children": "Zhyleen Haichee"
                            }
                        }
                },
                 "Luciela":{
                    "Father" :"Dionecio",
                    "Mother" : "Luciela",
                    "Children" : "Vincent Christian, Vanessa Faith, Verdex Jekyle",
                    "Extension": 
                        {
                            "Novicio":
                            {
                                "Father": "Vincent Christian",
                                "Mother": "Weena",
                                "Children": "Severus, Stephen jon, Samantha"
                            }
                        }
                    
                }, 
                 "Joy":{
                    "Father" :"Eric",
                    "Mother" : "Joy",
                    "Children" : "Erica Joyce, Mia Mae, Ella"
                },
                "Ophelia": "Ophelia"
            }
        }
    }
    



function myFunction() {
  //document.getElementById("demo").innerHTML = "Hello";
  document.getElementById("fam").innerHTML = tree.Potot.Children.Grace.Surname +" Family";
  document.getElementById("f").innerHTML = tree.Potot.Children.Grace.Father;
  document.getElementById("m").innerHTML = tree.Potot.Children.Grace.Mother;
  document.getElementById("ch1").innerHTML = tree.Potot.Children.Grace.Children[0];
  document.getElementById("ch2").innerHTML = tree.Potot.Children.Grace.Children[1];
  console.log(tree);
  
  //window.alert("Hello JavaScript!"); // response to button click
  //window.print(); // print the current page
}

function goToFamily(fam){
    const x = fam
    window.alert("vaiable: "+ x)
}