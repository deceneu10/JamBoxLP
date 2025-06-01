# JamBox Landing Page - WordPress Integration

This package contains everything you need to integrate your JamBox landing page into WordPress.

## What's Included

- **Complete WordPress Plugin** with contact form functionality
- **All styling and assets** from your original design
- **Multilingual support** (English/Romanian)
- **Contact form with email handling** using WordPress native functions
- **Privacy Policy and Terms of Service pages**
- **GDPR-compliant contact form** with consent checkboxes

## Installation Instructions

### Step 1: Upload Plugin to WordPress

1. Zip the `jambox-landing` folder
2. Go to your WordPress admin panel
3. Navigate to **Plugins > Add New > Upload Plugin**
4. Upload the zip file and activate the plugin

### Step 2: Configure Email Settings

The contact form uses WordPress's native `wp_mail()` function. To ensure emails are delivered:

**Option A: Use SMTP Plugin (Recommended)**
1. Install a WordPress SMTP plugin like "WP Mail SMTP" or "Easy WP SMTP"
2. Configure it with your email provider (Gmail, SendGrid, etc.)

**Option B: Use SendGrid WordPress Plugin**
1. Install the "SendGrid" plugin from WordPress repository
2. Add your SendGrid API key in the plugin settings

### Step 3: Access Your Pages

After activation, the plugin automatically creates these pages:
- `/jambox` - Main landing page
- `/jambox-privacy` - Privacy Policy
- `/jambox-terms` - Terms of Service

### Step 4: Language Configuration

**For WPML Users:**
- The plugin automatically detects WPML language settings
- Pages will display in Romanian by default, English when WPML language is set to English

**For Polylang Users:**
- Similar automatic detection for Polylang

**For Manual Language Switching:**
- Add `?lang=en` to URLs for English
- Add `?lang=ro` to URLs for Romanian

## Customization

### Styling
- All styles are in `assets/styles.css`
- Uses CSS custom properties for easy color customization
- Fully responsive design

### Content Updates
- Edit content in template files: `templates/landing-page.php`, `templates/privacy-policy.php`, `templates/terms-of-service.php`
- Update translations in the main plugin file

### Contact Form
- Form submissions go to: `jambox.vibe@gmail.com`
- Change recipient email in `jambox-landing.php` line 76
- Success/error messages use fun, randomized responses

## Technical Details

### Email Handling
- Uses WordPress `wp_mail()` function
- Includes proper sanitization and validation
- GDPR consent validation before sending
- Anti-spam nonce verification

### Security Features
- CSRF protection with WordPress nonces
- Input sanitization and validation
- GDPR compliance with explicit consent

### Performance
- Minimal JavaScript footprint
- CSS optimized from production build
- Assets only load on relevant pages

## Troubleshooting

### Emails Not Sending
1. Check if your hosting supports `wp_mail()`
2. Install an SMTP plugin
3. Check spam folders
4. Enable WordPress debug logging

### Styling Issues
1. Check for theme CSS conflicts
2. Ensure plugin CSS loads after theme CSS
3. Use browser developer tools to inspect CSS

### Language Issues
1. Verify WPML/Polylang configuration
2. Check URL parameters (?lang=en)
3. Clear any caching plugins

## File Structure

```
jambox-landing/
├── jambox-landing.php (Main plugin file)
├── assets/
│   ├── styles.css (All styling)
│   ├── script.js (Contact form JavaScript)
│   └── Mobile_vertical-C6yasqJy.png (App screenshot)
├── templates/
│   ├── landing-page.php (Main page template)
│   ├── privacy-policy.php (Privacy policy template)
│   └── terms-of-service.php (Terms template)
└── README.md (This file)
```

## Support

For technical issues:
1. Check WordPress error logs
2. Verify plugin compatibility with your theme
3. Test with a default WordPress theme
4. Ensure all required PHP extensions are installed

The plugin is compatible with WordPress 5.0+ and PHP 7.4+.