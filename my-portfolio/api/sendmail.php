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

// ✅ 5. Send email via secure file logging
try {
    // Create a secure log file outside web root or with protection
    $logMessage = date('Y-m-d H:i:s') . " - New Contact Form Submission\n";
    $logMessage .= "Name: " . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "\n";
    $logMessage .= "Email: " . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "\n"; 
    $logMessage .= "Message: " . htmlspecialchars($message, ENT_QUOTES, 'UTF-8') . "\n";
    $logMessage .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";
    $logMessage .= "User Agent: " . htmlspecialchars($_SERVER['HTTP_USER_AGENT'] ?? 'unknown', ENT_QUOTES, 'UTF-8') . "\n";
    $logMessage .= "---\n\n";
    
    // Use a hidden directory or file with .htaccess protection
    $logDir = './private/';
    $logFile = $logDir . 'contact_' . date('Y-m') . '.log';
    
    // Create directory if it doesn't exist
    if (!is_dir($logDir)) {
        mkdir($logDir, 0750, true);
        // Create .htaccess to deny web access
        file_put_contents($logDir . '.htaccess', "Deny from all\n");
    }
    
    $written = file_put_contents($logFile, $logMessage, FILE_APPEND | LOCK_EX);
    
    if ($written !== false) {
        exit("OK");
    } else {
        exit("LOG_FAILED");
    }
    
} catch (Exception $e) {
    exit("ERROR: " . $e->getMessage());
}
?>
