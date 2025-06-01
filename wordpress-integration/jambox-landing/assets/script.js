// JamBox Landing Page JavaScript for WordPress
jQuery(document).ready(function($) {
    
    // Translation object
    const translations = {
        en: {
            'contact.success.title': 'Message Sent!',
            'contact.error.title': 'Sending Error',
            'contact.gdpr.errorTitle': 'Consent Required',
            'contact.gdpr.errorMessage': 'Please agree to the privacy policy and terms of service to continue.',
            'contact.button.sending': 'Sending...',
            'contact.button.send': 'Send Message',
            'successMessages': [
                '🎉 Excellent! You\'re on your way to the Music Hall of Fame!',
                '🕺 Your message hit all the right notes. We\'ll dance to it soon!',
                '🎧 Mic check complete. Our team is tuning into your vibes now!',
                '🥁 Boom! Your message just dropped like an awesome bass line.',
                '🎤 You\'ve connected with the Jam gods. Expect a response soon.'
            ],
            'errorMessages': [
                '🎤 Oops... someone dropped the mic. Try again!',
                '🔌 Oops! Looks like the DJ unplugged the system. Give it another shot.',
                '🐛 That was a false note. Something glitched – please try again!',
                '📡 Signal\'s unclear. Our vinyl is skipping. Try once more?',
                '⚡ Oops, we hit a false chord. Can you resend?'
            ]
        },
        ro: {
            'contact.success.title': 'Mesaj Trimis!',
            'contact.error.title': 'Eroare la trimitere',
            'contact.gdpr.errorTitle': 'Consimțământ Necesar',
            'contact.gdpr.errorMessage': 'Te rog să accepți politica de confidențialitate și termenii de utilizare pentru a continua.',
            'contact.button.sending': 'Se trimite...',
            'contact.button.send': 'Trimite Mesaj',
            'successMessages': [
                '🎉 Excelent! Ești pe drumul spre Music Hall of Fame!',
                '🕺 Mesajul tău a nimerit toate notele potrivite. Vom dansa pe el în curând!',
                '🎧 Verificare microfon completă. Echipa noastră se acordează la vibrațiile tale acum!',
                '🥁 Boom! Mesajul tău tocmai a căzut ca o linie de bass grozavă.',
                '🎤 Ai luat legătura cu zeii Jam. Așteaptă un răspuns curând.'
            ],
            'errorMessages': [
                '🎤 Ups... cineva a scăpat microfonul. Încearcă din nou!',
                '🔌 Oops! Se pare că DJ-ul a deconectat sistemul. Mai încearcă o dată.',
                '🐛 A fost o notă falsă. Ceva s-a defectat – te rugăm să încerci din nou!',
                '📡 Semnalul e neclar. Vinilul nostru sare. Mai încerci o dată?',
                '⚡ Ups, am lovit un acord fals. Poți retrimite?'
            ]
        }
    };
    
    // Get current language
    const currentLang = jambox_ajax.language || 'ro';
    const t = translations[currentLang] || translations.ro;
    
    // Get random message
    function getRandomMessage(messages) {
        return messages[Math.floor(Math.random() * messages.length)];
    }
    
    // Show toast notification
    function showToast(title, message, type = 'success') {
        // Create toast element
        const toast = $(`
            <div class="jambox-toast jambox-toast-${type}" style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#22c55e' : '#ef4444'};
                color: white;
                padding: 16px 24px;
                border-radius: 8px;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                z-index: 9999;
                max-width: 400px;
                opacity: 0;
                transform: translateX(100%);
                transition: all 0.3s ease;
            ">
                <div style="font-weight: bold; margin-bottom: 4px;">${title}</div>
                <div style="font-size: 14px;">${message}</div>
            </div>
        `);
        
        $('body').append(toast);
        
        // Animate in
        setTimeout(() => {
            toast.css({
                opacity: 1,
                transform: 'translateX(0)'
            });
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            toast.css({
                opacity: 0,
                transform: 'translateX(100%)'
            });
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }
    
    // Contact form handling
    $('#jambox-contact-form').on('submit', function(e) {
        e.preventDefault();
        
        const $form = $(this);
        const $submitBtn = $form.find('button[type="submit"]');
        const originalText = $submitBtn.text();
        
        // Check GDPR consent
        if (!$form.find('#gdprConsent').is(':checked')) {
            showToast(t['contact.gdpr.errorTitle'], t['contact.gdpr.errorMessage'], 'error');
            return;
        }
        
        // Disable submit button
        $submitBtn.prop('disabled', true).text(t['contact.button.sending']);
        
        // Prepare form data
        const formData = {
            action: 'jambox_contact',
            nonce: jambox_ajax.nonce,
            name: $form.find('#name').val(),
            email: $form.find('#email').val(),
            phone: $form.find('#phone').val(),
            establishmentName: $form.find('#establishmentName').val(),
            establishmentType: $form.find('#establishmentType').val(),
            message: $form.find('#message').val(),
            gdprConsent: $form.find('#gdprConsent').is(':checked')
        };
        
        // Send AJAX request
        $.ajax({
            url: jambox_ajax.ajax_url,
            type: 'POST',
            data: formData,
            success: function(response) {
                if (response.success) {
                    showToast(
                        t['contact.success.title'],
                        getRandomMessage(t.successMessages),
                        'success'
                    );
                    $form[0].reset(); // Reset form
                } else {
                    showToast(
                        t['contact.error.title'],
                        getRandomMessage(t.errorMessages),
                        'error'
                    );
                }
            },
            error: function() {
                showToast(
                    t['contact.error.title'],
                    getRandomMessage(t.errorMessages),
                    'error'
                );
            },
            complete: function() {
                // Re-enable submit button
                $submitBtn.prop('disabled', false).text(originalText);
            }
        });
    });
    
    // Language selector (if you want to add it later)
    $('.jambox-language-selector').on('change', function() {
        // You can implement language switching here if needed
        const selectedLang = $(this).val();
        // Redirect to the same page with language parameter
        window.location.href = window.location.pathname + '?lang=' + selectedLang;
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
});