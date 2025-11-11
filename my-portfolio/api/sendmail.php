<?php
// SECURITY: Allow only POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("METHOD_NOT_ALLOWED");
}

// SECURITY: Rate-limiting (per IP)
session_start();
if (!isset($_SESSION['last_submit'])) {
    $_SESSION['last_submit'] = 0;
}
if (time() - $_SESSION['last_submit'] < 10) { 
    exit("RATE_LIMIT");
}
$_SESSION['last_submit'] = time();

// Collect data
$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");
$honeypot = trim($_POST["hp"] ?? "");
$loadTime = intval($_POST["loadTime"] ?? 0);

// ✅ 1. Honeypot (invisible field bots fill)
if (!empty($honeypot)) {
    exit("OK"); // pretend success, discard
}

// ✅ 2. Ensure human time (bots submit immediately)
if ($loadTime < 1500) { // less than 1.5 seconds
    exit("BOT");
}

// ✅ 3. Basic validation
if (strlen($name) < 2 || strlen($name) > 80) exit("INVALID_NAME");
if (strlen($message) < 5 || strlen($message) > 2000) exit("INVALID_MESSAGE");

// ✅ 4. Email validation
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit("INVALID_EMAIL");
}

// ✅ 5. Build email
$to = "you@yourdomain.ch";
$subject = "Neue Kontaktformular Nachricht";
$body = "Name: $name\nEmail: $email\n\nNachricht:\n$message";

$headers = "From: noreply@yourdomain.ch\r\n";
$headers .= "Reply-To: $email\r\n";

// ✅ 6. Send
if (mail($to, $subject, $body, $headers)) {
    exit("OK");
} else {
    exit("ERROR");
}
?>
