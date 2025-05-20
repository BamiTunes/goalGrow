console.log("What's going on?");
const noOfGoals = 0;
const goalButton = document.getElementById("create-goal");

// goalButton.onclick = alert("You have clicked this button!!!!!!!");

goalButton.addEventListener("click", function() {
    goalButton.innerText = "initializing! Let's get you started..";
    
    const form = 0;
    const docs = Document.getElementById("doc");
   docs.innerHTML = `
// <html>
// <form action="">
//   <label for="">Goal title<input type="text"></label>
// </form>
// </html>
// `; 
}
);

