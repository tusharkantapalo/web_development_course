//querySelector()
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Angela";

//getElementsByTagName()
document.firstElementChild.lastElementChild.getElementsByClassName("Ramayan")[0].getElementsByTagName("li")[0].style.color = "red";

//getElementsByClassName()
document.firstElementChild.lastElementChild.getElementsByClassName("Ramayan")[0].getElementsByTagName("li")[0].style.color = "red";

//getElementById()
document.getElementById("Sita").getElementsByTagName("li")[2].style.color = "red";  //IMPORTANT

//combining selectors
document.querySelector("li a").innerHTML = "Chiku";

//querySelecter("selector" or "#id" or".class") - finds the FIRST query by name at that label
            //if we want to add any class or id at the place of selector name, then we can use # or . notation
//getElementsByTagName("tag") - finds all the queries by name at that label and it returns an array, for which we have to provide the index to which we want to make any change regarding style
            //like - document.getElementsByName("li")[0].style.color = "purple";, here the [] contains the index
//getElementsByClassName("class") - finds all the queries by name at that label and it returns an array
//getElementById("id") - returns a single item not an array
