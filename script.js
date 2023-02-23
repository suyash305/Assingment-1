// Define country, state, and city data
const data = {
  "USA": {
    "California": ["Los Angeles", "San Francisco", "San Diego"],
    "Texas": ["Houston", "Dallas", "Austin"],
    "New York": ["New York City", "Buffalo", "Rochester"]
  },
  "Canada": {
    "Ontario": ["Toronto", "Ottawa", "Hamilton"],
    "Quebec": ["Montreal", "Quebec City", "Sherbrooke"],
    "British Columbia": ["Vancouver", "Victoria", "Kelowna"]
  },
  "India": {
    "Maharashtra": ["Mumbai", "Pune", "Thane"],
    "West Bengal": ["Kolkata", "Durgapur", "Kharagpur"],
    "Karnataka": ["Bangalore", "Mangaluru", "Chikkamagaluru"]
  },
};

// Update state dropdown based on selected country
function updateState() {
  const country = document.getElementById("country").value;
  const stateDropdown = document.getElementById("state");
  const cityDropdown = document.getElementById("city");
  // Clear state and city dropdowns
  stateDropdown.innerHTML = "<option value=''>Select State</option>";
  cityDropdown.innerHTML = "<option value=''>Select City</option>";
  // Disable state and city dropdowns until a country is selected
  stateDropdown.disabled = true;
  cityDropdown.disabled = true;
  if (country !== "") {
    // Populate state dropdown based on selected country
    for (const state in data[country]) {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateDropdown.appendChild(option);
    }
    // Enable state dropdown
    stateDropdown.disabled = false;
  }
}

// Update city dropdown based on selected state
function updateCity() {
  const country = document.getElementById("country").value;
  const state = document.getElementById("state").value;
  const cityDropdown = document.getElementById("city");
  // Clear city dropdown
  cityDropdown.innerHTML = "<option value=''>Select City</option>";
  // Disable city dropdown until a state is selected
  cityDropdown.disabled = true;
  if (state !== "") {
    // Populate city dropdown based on selected state
    for (const city of data[country][state]) {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      cityDropdown.appendChild(option);
    }
    // Enable city dropdown
    cityDropdown.disabled = false;
  }
}