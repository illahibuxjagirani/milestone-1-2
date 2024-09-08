// Function to toggle the visibility of the "Skills" section
function toggleSkillsVisibility(): void {
  const skillsSection = document.getElementById('skillsSection') as HTMLElement;
  if (skillsSection.style.display === 'none') {
      skillsSection.style.display = 'block';
  } else {
      skillsSection.style.display = 'none';
  }
}

// Add event listener for the toggle button (Skills Section)
function initializeEventListeners(): void {
  const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
  toggleSkillsButton.addEventListener('click', toggleSkillsVisibility);
}

// Initialize the event listener once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeEventListeners);
