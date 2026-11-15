Objective:
Build a web page where**a user can fill out a simple form (or input fields) with their details, click a button, and instantly generate a brand-new, beautifully styled student card on the screen using JavaScript DOM manipulation—without reloading the page!**
📋 What You Need to Implement:
 * The Input Area (HTML + CSS):
   * Create a simple form or a set of input  fields for:
     * Full Name
     * Class of  Student or degree
     * Batch
     * Avatar/Profile Picture URL 
     * Short Bio
 * The Output Container (HTML + CSS):
   * An empty container div (<div class="card-container">) where the generated cards will appear.
 * The JavaScript Logic:
   * Write an event listener on a "Generate Card" button.
   * When clicked, grab the values from the input fields.
   * Use a JavaScript function and Template Literals (``) to construct the HTML structure of the student card dynamically.
   * Inject that card into your container using .innerHTML += html.
   * (Bonus Challenge): Clear the input fields automatically after the card is successfully created!