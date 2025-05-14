// This file contains the main application logic for family information management.
// It handles language selection, data management for family members, and rendering the family member table.

const familyMembers = [];
let currentLanguage = 'en';

// Load language data
async function loadLanguage(lang) {
    const response = await fetch(`assets/lang/${lang}.json`);
    const data = await response.json();
    return data;
}

// Render family member table
function renderFamilyMemberTable() {
    const tableBody = document.getElementById('family-member-table-body');
    tableBody.innerHTML = '';

    familyMembers.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.relation}</td>
            <td>${member.age}</td>
            <td>${member.language}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Add family member
function addFamilyMember(name, relation, age, language) {
    familyMembers.push({ name, relation, age, language });
    renderFamilyMemberTable();
}

// Change language
async function changeLanguage(lang) {
    currentLanguage = lang;
    const translations = await loadLanguage(lang);
    document.getElementById('app-title').innerText = translations.appTitle;
    document.getElementById('add-member-title').innerText = translations.addMemberTitle;
    // Update other UI elements with translations...
}

// Event listeners
document.getElementById('language-select').addEventListener('change', (event) => {
    changeLanguage(event.target.value);
});

document.getElementById('add-member-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const relation = event.target.relation.value;
    const age = event.target.age.value;
    const language = currentLanguage;
    addFamilyMember(name, relation, age, language);
    event.target.reset();
});

// Initial load
changeLanguage(currentLanguage);