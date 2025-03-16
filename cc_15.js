//Task 2 - Adding Risk Items
 
const riskDashboard = document.getElementById('riskDashboard');  
function addRiskItem(riskName, riskLevel, department) { 
    if (riskName && riskLevel && department) { 
    const riskDashboard = document.getElementById('riskDashboard');  
    console.log('Risk Dashboard Loaded');  

    const riskCard = document.createElement('div'); 
    riskCard.classList.add('riskCard'); 

    const riskNameHeader = document.createElement('h3'); 
    riskNameHeader.textContent = riskName; 

    const riskLevelParagraph = document.createElement('p'); 
    riskLevelParagraph.textContent = `Risk Level: ${riskLevel}`; 
    riskLevelParagraph.classList.add('riskLevel'); 

    const departmentParagraph = document.createElement('p'); 
    departmentParagraph.textContent = `Department: ${department}`; 
    departmentParagraph.classList.add('department'); 

    //Task 3 - Removing Risk Items

    const resolveButton = document.createElement('button'); 
    resolveButton.textContent = 'Resolve'; 
    resolveButton.classList.add('resolveButton'); 
 
    resolveButton.addEventListener('click', function(event) { 
        event.stopPropagation(); 
    }
    { 
    riskDashboard.removeChild(riskCard);  
     });
    

     //Task 4 - Risk Categorization 

     if (riskLevel === 'Low') {  
        riskCard.style.backgroundColor = '#00FF00'; 
    } else if (riskLevel === 'Medium') {  
        riskCard.style.backgroundColor = '#FFFF00';  
    } else if (riskLevel === 'High') { 
        riskCard.style.backgroundColor = '#FF0000';  
    }
// Task 4 - Complete
    riskCard.appendChild(riskNameHeader); 
    riskCard.appendChild(riskLevelParagraph); 
    riskCard.appendChild(departmentParagraph); 
    riskCard.appendChild(resolveButton);

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

const increaseRiskLevelsButton = document.createElement('button'); 
increaseRiskLevelsButton.textContent = 'Increase Risk Levels';  
increaseRiskLevelsButton.classList.add('increaseRiskLevelsButton'); 

increaseRiskLevelsButton.addEventListener('click', increaseRiskLevels);  

document.body.appendChild(increaseRiskLevelsButton); 