document.addEventListener("DOMContentLoaded", () => {

    const element = document.getElementById("cellThree");
    element.textContent = "This is from JavaScript";
    const tds = document.querySelectorAll("td");
    tds.forEach((item, index) => {
        item.innerHTML = index + ") <strong>" + item.textContent + "</strong>";
    })

    const newSpan = document.createElement("span");
    newSpan.textContent = "This is a span";

    // a reference point
    const div = document.querySelector("div");
    div.insertAdjacentElement("afterend", newSpan);

    div.addEventListener("dblclick", (event) => {
        event.target.textContent = "Hey, that tickles";
    })

    const coordDiv = document.getElementById("coords");
    div.addEventListener("mousemove", (event) => {
        coordDiv.textContent = `${event.clientX} -- ${event.clientY}`
    })

})