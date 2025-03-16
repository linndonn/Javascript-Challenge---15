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

    riskCard.appendChild(riskNameHeader); 
    riskCard.appendChild(riskLevelParagraph); 
    riskCard.appendChild(departmentParagraph); 

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

// Task 2 Test Data
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
