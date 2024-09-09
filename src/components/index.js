//navbar
const navBar = document.createElement('nav');
navBar.style.backgroundColor = '#1f2026'; // Adjust color to match your dashboard
navBar.style.padding = '10px';
navBar.style.display = 'flex'; // Add flexbox to align items
navBar.style.justifyContent = 'space-between'; // Align items to opposite sides

//logo
const logo = document.createElement('span');
logo.style.color = 'white';
logo.style.fontSize = '18px';
logo.style.fontWeight = 'bold';
logo.innerText = 'Soil Sense';
navBar.appendChild(logo);

//button container
const buttonContainer = document.createElement('div');
navBar.appendChild(buttonContainer);

// Appending
document.body.prepend(navBar);

//background color
document.body.style.backgroundColor = '#1f2026';