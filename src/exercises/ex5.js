const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');

hoverArea.addEventListener('mouseover', () => {
  // Your code here: Update the text content when the user hovers over the area.
  interactionResult.textContent = "Eh oui ça marche! WOUW!";
});

hoverArea.addEventListener('mouseout', () =>{

  interactionResult.textContent = "Hover over the area.";
});