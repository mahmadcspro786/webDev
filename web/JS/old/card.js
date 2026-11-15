function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    
    // Optional: Logic to format views cleanly (e.g., 56000 -> "56K", 1200000 -> "1.2M")
    let viewStr;
    if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
        viewStr = (views / 1000).toFixed(0) + "K";
    } else {
        viewStr = views;
    }

    // Creating the HTML structure using Template Literals (``)
    let html = `
        <div class="card">
            <div class="image-container">
                <img src="${thumbnail}" alt="Thumbnail">
                <div class="duration">${duration}</div>
            </div>
            <div class="content">
                <h3>${title}</h3>
                <p>${cName} • ${viewStr} views • ${monthsOld} months ago</p>
            </div>
        </div>
    `;

    // Injecting the card into the .container element in the DOM
    document.querySelector(".container").innerHTML += html;
}

// Test calling the function with sample data
createCard(
     "communication skills",
  
     "Irfan Malik", 
    
    723000, 
    7, 
    "31:20", 
    "https://i.ytimg.com/an_webp/2tkerYBeDXc/mqdefault_6s.webp?du=3000&sqp=COLVgtcG&rs=AOn4CLC7j_UeqnN8nzAbmOrHBs-kc2huoA&usqp=CCc"
);

// You can call it multiple times to add more cards dynamically!
createCard(
      "Q/A session ", 
    "Life of Fahad",
    45000, 
    2, 
    "24:15", 
    "https://i.ytimg.com/an_webp/M1WNsE22p88/mqdefault_6s.webp?du=3000&sqp=CObTgtcG&rs=AOn4CLABAedPUoD4upkVRi24zyJqHMG8wA&usqp=CCc"
);