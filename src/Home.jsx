<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard Home</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f6f9;
      transition: 0.3s;
    }

    /* NAVBAR */
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #111827;
      padding: 15px 30px;
      color: white;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin: 0 10px;
    }

    nav a:hover {
      color: #00bcd4;
    }

    /* HERO SECTION */
    .hero {
      text-align: center;
      padding: 80px 20px;
      background: linear-gradient(135deg, #00bcd4, #3f51b5);
      color: white;
    }

    .hero h1 {
      font-size: 40px;
      margin-bottom: 10px;
    }

    .hero p {
      font-size: 18px;
      opacity: 0.9;
    }

    .hero button {
      margin-top: 20px;
      padding: 12px 25px;
      border: none;
      background: #111827;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }

    /* CARDS */
    .cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 40px;
      gap: 20px;
    }

    .card {
      background: white;
      padding: 20px;
      width: 200px;
      text-align: center;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    /* BUTTON */
    .top-btn {
      text-align: center;
      margin: 20px;
    }

    .top-btn button {
      padding: 10px 15px;
      border: none;
      background: #111827;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }

    /* DARK MODE */
    .dark {
      background: #0f172a;
      color: white;
    }

    .dark .card {
      background: #1e293b;
      color: white;
    }
  </style>
</head>

<body>

  <!-- NAVBAR -->
  <nav>
    <div><b>DASHBOARD</b></div>
    <div>
      <a href="index.html">Home</a>
      <a href="signup.html">Signup</a>
      <a href="login.html">Login</a>
      <a href="dashboard.html">Dashboard</a>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <h1>Welcome to Your Dashboard</h1>
    <p>Manage your account, profile and settings easily</p>
    <button onclick="goDashboard()">Go to Dashboard</button>
  </section>

  <!-- BUTTONS -->
  <div class="top-btn">
    <button onclick="toggleTheme()">Dark Mode</button>
  </div>

  <!-- CARDS -->
  <section class="cards">
    <div class="card">👤 User Profile</div>
    <div class="card">📊 Analytics</div>
    <div class="card">⚙️ Settings</div>
    <div class="card">🔒 Security</div>
  </section>

  <script>
    function goDashboard() {
      window.location.href = "dashboard.html";
    }

    function toggleTheme() {
      document.body.classList.toggle("dark");
    }
  </script>

</body>
</html>
