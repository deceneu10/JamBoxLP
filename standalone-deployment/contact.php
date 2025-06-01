<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get and sanitize input
$input = json_decode(file_get_contents('php://input'), true);

$name = filter_var($input['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = filter_var($input['phone'] ?? '', FILTER_SANITIZE_STRING);
$establishmentName = filter_var($input['establishmentName'] ?? '', FILTER_SANITIZE_STRING);
$establishmentType = filter_var($input['establishmentType'] ?? '', FILTER_SANITIZE_STRING);
$message = filter_var($input['message'] ?? '', FILTER_SANITIZE_STRING);
$gdprConsent = isset($input['gdprConsent']) && $input['gdprConsent'];

// Validate required fields
if (empty($name) || empty($email) || empty($establishmentName) || empty($message) || !$gdprConsent) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Required fields missing or GDPR consent not given']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Prepare email content
$subject = 'New JamBox Contact Form Submission - ' . $establishmentName;
$email_body = "
New contact form submission from JamBox landing page:

Name: {$name}
Email: {$email}
Phone: {$phone}
Establishment: {$establishmentName}
Type: {$establishmentType}

Message:
{$message}

GDPR Consent: Yes
Submitted at: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
";

// Email headers
$headers = array(
    'From: JamBox Landing <noreply@jambox.ro>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
);

// Send email
$to = 'jambox.vibe@gmail.com';
$sent = mail($to, $subject, $email_body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message']);
}
?>