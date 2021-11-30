const q = (selector) => document.querySelector(selector);

let data = [];

document.addEventListener("DOMContentLoaded", async () => { 
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    data = await res.json()
    data = data.map((element) => {
        element.active = [Math.floor(Math.random() * 10) + 1];
        if (element.active >= 5) {
            return  {...element, active: true};
        } if (element.active < 5) {
            return  {...element, active: false};
        }
        else {
            return element
        } 
    })
    List(data)
    ListTwo(data);
  

});




 /// inactive user

 const renderActive = (containerTwo, content) => (containerTwo.innerHTML = content);

 const ListTwo = (data) => {
     const elements = data
         .filter((el) => {        
          if(!el.active){`
         <input type="radio"  ${el.active}/>`
        } else {
             return (el) 
         }
         }).map((el) =>`
             <li>
                 <label for="search">Status User <input type="radio"  ${el.active ? "checked" : ""}  />  </label>
                 <h3>${el.name}</h3>  
                       
                 <p><strong>Email:</strong> <a href="mailto:${el.email}">${el.email}</a></p>
                 <p><strong>Phone:</strong> <a href="tel:${el.phone}">${el.phone}</a></p>
     
              </li>`)
         .join("");


const containerTwo = q("#containerTwo"); 


renderActive(
    containerTwo,
    `<ul>${elements}</ul>`
);

};

/// List inactive user

const renderInactive = (container, content) => (container.innerHTML = content);

const List = (data) => {
    const elementsTwo = data
        .filter((item) => {
        if(item.active){`
        <input type="radio"  ${item.active} />`
        }else {
            return (item) 
        }
        }).map((el) =>`
        <li>
            <label for="search">Status User <input type="radio"  ${el.active ? "checked" : ""}  />  </label>
            <h3>${el.name}</h3>  
                  
            <p><strong>Email:</strong> <a href="mailto:${el.email}">${el.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${el.phone}">${el.phone}</a></p>

         </li>`)
    .join("");
       
        const container = q("#container");      
        renderInactive(
            container,
            `<ul>${elementsTwo}</ul>`
        );
    
    
    };