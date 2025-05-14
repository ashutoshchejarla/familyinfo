// This file is responsible for generating the family tree visualization using the data provided. 
// It manages the rendering of the family tree structure.

document.addEventListener('DOMContentLoaded', function() {
    const familyData = [
        {
            name: "Grandfather",
            children: [
                {
                    name: "Uncle",
                    children: [
                        { name: "Cousin 1" },
                        { name: "Cousin 2" }
                    ]
                },
                {
                    name: "Father",
                    children: [
                        { name: "You" },
                        { name: "Sister" }
                    ]
                },
                {
                    name: "Aunt",
                    children: [
                        { name: "Cousin 3" }
                    ]
                }
            ]
        }
    ];

    function createFamilyTree(container, members) {
        const ul = document.createElement('ul');
        members.forEach(member => {
            const li = document.createElement('li');
            li.textContent = member.name;
            ul.appendChild(li);
            if (member.children) {
                createFamilyTree(li, member.children);
            }
        });
        container.appendChild(ul);
    }

    const familyTreeContainer = document.getElementById('family-tree');
    createFamilyTree(familyTreeContainer, familyData);
});