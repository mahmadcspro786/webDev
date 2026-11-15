let btn = document.querySelector("#sub");
let output = document.querySelector(".output");

btn.addEventListener("click", function(event) {
    // Page reload hone se rokne ke liye
    event.preventDefault(); 

    let name = document.querySelector("#name").value;
    let department = document.querySelector("#department").value;
    let batch = document.querySelector("#batch").value;
    
    // File input se local image ka object URL banane ka tareeqa
    let fileInput = document.querySelector("#pick");
    let pick = "";
    if (fileInput.files && fileInput.files[0]) {
        pick = URL.createObjectURL(fileInput.files[0]);
    }

    let bio = document.querySelector("#bio").value;

    // Output div ke andar card inject karna
    output.innerHTML += `
    <div class="card">
        <img src="${pick}" alt="Profile Pick">
        <h3>${name}</h3>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Batch:</strong> ${batch}</p>
        <p><strong>Bio:</strong> ${bio}</p>
    </div>
    `;
});