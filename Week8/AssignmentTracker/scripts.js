document.addEventListener("DOMContentLoaded", () => {
    const displayList = document.getElementById("assignmentList");
    displayList.addEventListener("click",completedClick);

    // this is where my event listeners should go
    // Step 1 find an element on the page
    const addButton = document.getElementById("addButton");
    // Step 2 listen for an event        Step 3. Add your handler
    addButton.addEventListener("click", addAssignment);
})

// add handlers here
function addAssignment() {
    // find the data from the input box
    // Step 1 get a reference to the input box
    const assignmentName = document.getElementById("assignmentInput");
    // Step 2 get due date
    const dueDate = document.getElementById("dueDateInput");
    const displayList = document.getElementById("assignmentList");

    // make sure there's an assignment name
    if (assignmentName.value === "") {
        alert("Please give a name");
        // exits the function with no further code being executed
        return;
    }
    const newLi = createAssignmentDisplay(assignmentName, dueDate);
    displayList.insertAdjacentElement("beforeend", newLi);
}

function createAssignmentDisplay(name, date) {
    // Step 1 create the element
    const li = document.createElement("li");
    // Step 2 Add the data
    const nameSpan = document.createElement("span");
    // add an id
    nameSpan.setAttribute("id", "id_" + name);
    nameSpan.textContent = name.value;
    // add formatting from css
    nameSpan.classList.add("assignmentName")
    li.appendChild(nameSpan);

    // add date
    const dateSpan = document.createElement("span");
    dateSpan.textContent = `${date.value || "No due date"}`;
    li.appendChild(dateSpan);

    // let's add the button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Mark Complete";
    li.appendChild(completeButton);
    // Step 3 return the new li
    return li;
}

function completedClick(event) {
    // create some local variables
    const targetLi = event.target.parentElement;
    const buttonClicked = event.target;
    //    button     li
    // event.target.parentElement.classList.add("completed")
    if(targetLi.classList.contains("completed")){
        // make it uncompleted
        targetLi.classList.remove("completed");
        buttonClicked.textContent = "Mark Complete"
    } else {
        // make it completed
        targetLi.classList.add("completed");
        buttonClicked.textContent = "Mark Incomplete";
    }

}