# JamBox Landing Page - Standalone Deployment

Deploy this exact replica of your landing page to `landing.jambox.ro`

## What You're Getting:
- **Exact visual replica** of your current landing page
- **Full functionality** including contact form with GDPR compliance
- **Multilingual support** (Romanian default, English available)
- **Mobile app screenshot** properly displayed
- **All styling and animations** preserved
- **Contact form** that sends emails to jambox.vibe@gmail.com

## Required Hosting Features:
- PHP 7.4 or higher
- Mail function enabled (standard on most shared hosting)
- HTTPS support (recommended)

## Deployment Steps:

### 1. Create Subdomain
In your cPanel:
- Go to "Subdomains"
- Create subdomain: `landing` 
- Point to: `landing.jambox.ro`

### 2. Upload Files
Upload ALL files from this folder to your `landing.jambox.ro` directory:
- `index.html`
- `contact.php`
- `.htaccess`
- `assets/` folder (contains CSS, JS, and images)
- `logo.png`

### 3. Set Permissions
Set these file permissions:
- `contact.php` → 755
- `.htaccess` → 644
- All other files → 644

### 4. Test Email Function
Create a test file `test-mail.php` in the same directory:
```php
<?php
$to = 'jambox.vibe@gmail.com';
$subject = 'Test from landing.jambox.ro';
$message = 'Email function is working!';
$headers = 'From: noreply@jambox.ro';

if(mail($to, $subject, $message, $headers)) {
    echo 'Email sent successfully';
} else {
    echo 'Email failed';
}
?>
```
Visit `landing.jambox.ro/test-mail.php` to test.

### 5. WordPress Homepage Redirect
In your main WordPress site, set the homepage to redirect:

Option A - WordPress Admin:
- Go to Settings > Reading
- Set "Front page displays" to "A static page"
- Create a new page with this content:
```html
<script>
window.location.href = 'https://landing.jambox.ro';
</script>
<meta http-equiv="refresh" content="0;url=https://landing.jambox.ro">
```

Option B - .htaccess redirect (in main domain):
```apache
RewriteEngine On
RewriteRule ^$ https://landing.jambox.ro [R=301,L]
```

## File Structure:
```
landing.jambox.ro/
├── index.html (Main page)
├── contact.php (Form handler)
├── .htaccess (URL routing & security)
├── logo.png
└── assets/
    ├── index-BQVKH3iv.css (All styling)
    ├── index-QH5bp7KG.js (React app)
    └── Mobile_vertical-C6yasqJy.png (App screenshot)
```

## Features Included:
- Hero section with mobile app image
- For Users and For Businesses sections
- Contact form with phone/email options
- Privacy Policy and Terms of Service (routed through React)
- Language switching (Romanian/English)
- GDPR-compliant consent checkbox
- Responsive design (mobile/tablet/desktop)

## Support:
- The page will look exactly like your current version
- Contact form sends to jambox.vibe@gmail.com
- All translations and content preserved
- No WordPress dependencies or conflicts

## Testing Checklist:
- [ ] Page loads at landing.jambox.ro
- [ ] All sections display correctly
- [ ] Mobile app image shows
- [ ] Contact form submits successfully
- [ ] Email arrives at jambox.vibe@gmail.com
- [ ] Language switching works
- [ ] Mobile responsive design works
- [ ] Privacy/Terms links work

Once deployed, your main site visitors will be automatically redirected to the standalone landing page that looks exactly like what you see in development.