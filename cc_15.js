//Task 2 - Adding Risk Items
 //Write a function addRiskItem(riskName, riskLevel, department) that:
function addRiskItem(riskName, riskLevel, department) { 
    if (riskName && riskLevel && department) { 
    const riskDashboard = document.getElementById('riskDashboard');  
    console.log('Risk Dashboard Loaded');  

    //Assigns a class "riskCard" to each card.
    const riskCard = document.createElement('div'); 
    riskCard.classList.add('riskCard'); 

     // Create and append risk name header
    const riskNameHeader = document.createElement('h3'); 
    riskNameHeader.textContent = riskName; 

    // Create and append risk level paragraph
    const riskLevelParagraph = document.createElement('p'); 
    riskLevelParagraph.textContent = `riskLevel: ${riskLevel}`; 
    riskLevelParagraph.classList.add('riskLevel'); 

    // Create and append department paragraph
    const departmentParagraph = document.createElement('p'); 
    departmentParagraph.textContent = `Department: ${department}`; 
    departmentParagraph.classList.add('department'); 

    //Task 3 - Removing Risk Items
//Modify addRiskItem to include a "Resolve" button.
    const resolveButton = document.createElement('button'); 
    resolveButton.textContent = 'Resolve'; 
    resolveButton.classList.add('resolveButton'); 
 //Use stopPropagation() to ensure clicking inside a risk card does not trigger unwanted actions on the dashboard.
    resolveButton.addEventListener('click', function(event) { 
        event.stopPropagation(); 
        riskDashboard.removeChild(riskCard);  
        
    });
    

     //Task 4 - Risk Categorization 
//Modify addRiskItem to apply different background colors based on risk level
     if (riskLevel === 'Low') {  
        riskCard.style.backgroundColor = '#00FF00'; // Color is Greento represent Low Risk Level
    } else if (riskLevel === 'Medium') {  
        riskCard.style.backgroundColor = '#FFFF00';  //Color is Yellow to Represent Medium Risk Level
    } else if (riskLevel === 'High') { 
        riskCard.style.backgroundColor = '#FF0000';  //Color is Red to represent High Risk Level
    }
// Task 4 - Complete
//// Append risk information and button to the card
    riskCard.appendChild(riskNameHeader); 
    riskCard.appendChild(riskLevelParagraph); 
    riskCard.appendChild(departmentParagraph); 
    riskCard.appendChild(resolveButton);

    //// Append the risk card to the dashboard
    riskDashboard.appendChild(riskCard); 
    }
}
    const form = document.getElementById('addRiskForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  

    const riskName = document.getElementById('riskName').value; 
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('department').value; 

    addRiskItem(riskName, riskLevel, department); 
    form.reset(); 
    });

// Test Data
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Employee Retention", "Low", "HR");

// Task 5: Bulk Risk Update
//Add a button to the dashboard labeled "Increase Risk Levels" that: Changes Low → Medium, Medium → High, and High remains unchanged.
function increaseRiskLevels() { 
    const riskDashboard = document.getElementById('riskDashboard');  
    const riskCards = riskDashboard.getElementsByClassName('riskCard'); 

for (let i = 0; i < riskCards.length; i++) {  
     const card = riskCards[i];
     const riskLevelParagraph = card.querySelector('.riskLevel');  

let currentRiskLevel = riskLevelParagraph.textContent.replace("Risk Level: ", "");  

if (currentRiskLevel === "Low") {  
      currentRiskLevel = "Medium"; 
      riskLevelParagraph.textContent = `Risk Level: Medium`;  
      card.style.backgroundColor = "#FFFF00";  
}
else if (currentRiskLevel === "Medium") { 
      currentRiskLevel = "High"; 
      riskLevelParagraph.textContent = `Risk Level: High`; 
      card.style.backgroundColor = "#FF0000";  
}
}
}
// Create button to trigger risk level increase
const increaseRiskLevelsButton = document.createElement('button'); 
increaseRiskLevelsButton.textContent = 'Increase Risk Levels';  
increaseRiskLevelsButton.classList.add('increaseRiskLevelsButton'); 

// Add event listener to button
increaseRiskLevelsButton.addEventListener('click', increaseRiskLevels);  

// Append button to the document body
document.body.appendChild(increaseRiskLevelsButton);