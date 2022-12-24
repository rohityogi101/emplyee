let array = [
  { id: 1, name: "John", age: "18", profession: "Developer" },
  { id: 2, name: "Jack", age: "20", profession: "Developer" },
  { id: 3, name: "Karen", age: "19", profession: "Admin" },
];

array = array.map((item) => {
  return {
    id: item.id,
    name: item.name,
    profession: item.profession,
    age: parseInt(item.age),
  };
});

array.forEach((item) => {
  if (item.name === "john") {
    item.age = 19;
  }
});

array.forEach((item) => {
  let cardHtml = `
        <ul id="card-design">
            <li class="adjust">${item.id}.</li>
            <li class="adjust">Name: ${item.name}</li>
            <li class="adjust">Profession: ${item.profession}</li>
            <li class="adjust">Age: ${item.age}</li>
        </ul> `;
  document.getElementById("card-container").innerHTML += cardHtml;
});

document.getElementById("filter-button").addEventListener("click", () => {
  let profession = document.getElementById("profession-select").value;
  if (profession === "") {
    alert("Please select a profession before clicking the button");
    return;
  }
  let filteredArray = array.filter((item) => item.profession === profession);
  document.getElementById("card-container").innerHTML = "";
  filteredArray.forEach((item) => {
    let cardHtml = `
        <ul id="card-design">
        <li class="adjust">ID: ${item.id}.</li>
        <li class="adjust">Name: ${item.name}</li>
        <li class="adjust">Age: ${item.age}</li>
        <li class="adjust">Profession: ${item.profession}</li>
    </ul> `;
    document.getElementById("card-container").innerHTML += cardHtml;
  });
});

//todo..................................................

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
