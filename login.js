document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    console.log("Email:", email);
    console.log("Password:", password);
  
    // Dummy credentials for validation
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";
  
    if (email === adminEmail && password === adminPassword) {
      console.log("Login successful. Redirecting...");
      window.location.href = "admin.html"; // Redirect to admin page
    } else {
      console.log("Invalid login attempt.");
      alert("Invalid email or password. Please try again.");
    }
  });
  