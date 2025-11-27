<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Please submit the form using POST.'
    ]);
    exit;
}

$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Name, email, and message are required.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid email address.'
    ]);
    exit;
}

$storageDir = __DIR__ . '/storage';
if (!is_dir($storageDir) && !mkdir($storageDir, 0755, true)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to prepare storage for contact requests.'
    ]);
    exit;
}

$logEntry = json_encode([
    'timestamp' => date(DATE_ATOM),
    'name' => $name,
    'email' => $email,
    'message' => $message,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
], JSON_UNESCAPED_UNICODE);

file_put_contents($storageDir . '/contact-messages.log', $logEntry . PHP_EOL, FILE_APPEND | LOCK_EX);

$recipient = 'support@usdtstormgain.com';
$subject = 'New Contact Form Submission';
$body = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";
$headers = "From: noreply@usdtstormgain.com\r\nReply-To: {$email}\r\n";

$mailSent = @mail($recipient, $subject, $body, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Thanks for reaching out. Our team will contact you shortly.',
    'mailSent' => $mailSent
], JSON_UNESCAPED_UNICODE);
exit;

