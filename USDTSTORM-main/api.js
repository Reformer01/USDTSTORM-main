const API_URL = "https://usdtstorm.fly.dev";

if (!localStorage.getItem("token") && window.location.href.includes("/db/")) {
  location.replace("/sign-in.html");
}

// Register endpoint
async function registerUser(body) {
  return fetch(API_URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

// Login endpoint
async function loginUser(body) {
  return fetch(API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

async function depositFunds(formData) {
  const token = localStorage.getItem("token");

  return fetch(API_URL + "/deposit", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

// Withdrawal endpoint
async function withdrawFunds(body) {
  const token = localStorage.getItem("token");

  return fetch(API_URL + "/withdrawal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

// Transactions history endpoint
async function getTransactionHistory() {
  const token = localStorage.getItem("token");

  return fetch(API_URL + "/transactions", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

// Forgot password endpoint
async function forgotPassword(body) {
  return fetch(API_URL + "/forgot-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

// Reset password endpoint
async function resetPassword(body) {
  return fetch(API_URL + "/reset-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

async function getCurrentUser() {
  const token = localStorage.getItem("token");

  return fetch(API_URL + "/current-user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

// Function to format numbers as currency
function formatNumberAsCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
