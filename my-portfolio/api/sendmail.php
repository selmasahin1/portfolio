<?php
header('Content-Type: text/plain; charset=utf-8');
ini_set('display_errors', '0');

// Allow same-site usage for production origin only.
$allowedOrigins = [
  'https://selmasahin.ch',
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins, true)) {
  header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
  header('Vary: Origin');
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo 'ERROR';
  exit;
}

function clean_header_value($value) {
  return str_replace(["\r", "\n"], '', trim((string)$value));
}

$name = clean_header_value($_POST['name'] ?? '');
$email = clean_header_value($_POST['email'] ?? '');
$phone = clean_header_value($_POST['phone'] ?? '');
$message = trim((string)($_POST['message'] ?? ''));
$website = trim((string)($_POST['website'] ?? ($_POST['hp'] ?? '')));
$loadTime = (int)($_POST['loadTime'] ?? 0);

if ($website !== '') {
  echo 'OK';
  exit;
}

if ($loadTime > 0 && $loadTime < 2000) {
  echo 'OK';
  exit;
}

if ($name === '' || $email === '' || $message === '') {
  http_response_code(422);
  echo 'ERROR';
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo 'ERROR';
  exit;
}

$to = 's.sahin@bluewin.ch';
$subject = 'Neue Kontaktanfrage von der Website';
$body = "Neue Nachricht von selmasahin.ch\n\n";
$body .= "Name: {$name}\n";
$body .= "E-Mail: {$email}\n";
$body .= "Telefon: " . ($phone !== '' ? $phone : '-') . "\n\n";
$body .= "Nachricht:\n{$message}\n";

$headers = [
  'From: Selma Sahin Website <noreply@selmasahin.ch>',
  "Reply-To: {$email}",
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion(),
];

if (!function_exists('mail')) {
  http_response_code(500);
  echo 'ERROR';
  exit;
}

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo 'ERROR';
  exit;
}

echo 'OK';
