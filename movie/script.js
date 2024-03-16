const movieSelect = document.getElementById("movie");
const ticketInput = document.getElementById("tickets");
const totalDisplay = document.getElementById("total");
const balanceDisplay = document.getElementById("balance");

const ticketPrices = {
  "GOOD NIGHT": 100,
  PREMAM: 80,
  "MANJUMEL BOYS": 120,
  JOE: 150,
  "PRIYAMANA THOZHI": 150,
};

let availableTickets = {
  "GOOD NIGHT": 100,
  PREMAM: 150,
  "MANJUMEL BOYS": 120,
  JOE: 100,
  "PRIYAMANA THOZHI": 100,
};

// Function to format the amount in Indian Rupees
function formatAmount(amount) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return formatter.format(amount);
}

function calculateTotal() {
  const selectedMovie = movieSelect.value;
  const numTickets = parseInt(ticketInput.value);
  const totalPrice = ticketPrices[selectedMovie] * numTickets;
  totalDisplay.textContent = `Total: ${formatAmount(totalPrice)}`;

  if (numTickets <= availableTickets[selectedMovie]) {
    availableTickets[selectedMovie] -= numTickets;
    balanceDisplay.textContent = `Balance Tickets for ${selectedMovie}: ${availableTickets[selectedMovie]}`;
  } else {
    balanceDisplay.textContent = "Not enough tickets available!";
  }
}
