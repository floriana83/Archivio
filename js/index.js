const q = (selector) => document.querySelector(selector);

const API = "https://jsonplaceholder.typicode.com/users";

document.addEventListener("DOMContentLoaded", () => {
    fetch(API)
        .then((response) => response.json())
        .then((data) => data.map((element) => {
            element.active=true
            return element
        })) 
        .then((data) => List(data));
});

const render = (container, content) => (container.innerHTML = content);

const List = (data) => {
    const elements = data
        .map((item) => `
        <li>
            <h3>${item.name}</h3> <input type="checkbox" ${item.active ? "checked" : ""} /> 
            <p>${item.username}</p>         
            <p><strong>Email:</strong> <a href="mailto:${item.email}">${item.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${item.phone}">${item.phone}</a></p>

         </li>`)
        .join("");


    const container = document.querySelector("#container");
    render(
        container,
        `<ul>${elements}</ul>`
    );
};