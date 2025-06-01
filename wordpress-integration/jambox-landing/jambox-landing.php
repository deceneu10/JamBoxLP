<?php
/**
 * Plugin Name: JamBox Landing Page
 * Description: Complete JamBox landing page with contact form and multilingual support
 * Version: 1.0.0
 * Author: JamBox Team
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class JamBoxLanding {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        add_action('wp_ajax_jambox_contact', array($this, 'handle_contact_form'));
        add_action('wp_ajax_nopriv_jambox_contact', array($this, 'handle_contact_form'));
        add_shortcode('jambox_landing', array($this, 'render_landing_page'));
        
        // Add page creation on activation
        register_activation_hook(__FILE__, array($this, 'create_landing_pages'));
    }
    
    public function init() {
        // Load text domain for translations
        load_plugin_textdomain('jambox-landing', false, dirname(plugin_basename(__FILE__)) . '/languages/');
    }
    
    public function enqueue_assets() {
        // Check if we're on a JamBox landing page
        if (is_page('jambox') || is_page('jambox-privacy') || is_page('jambox-terms')) {
            // Enqueue CSS
            wp_enqueue_style(
                'jambox-landing-styles', 
                plugin_dir_url(__FILE__) . 'assets/styles.css',
                array(),
                '1.0.0'
            );
            
            // Enqueue JavaScript
            wp_enqueue_script(
                'jambox-landing-script',
                plugin_dir_url(__FILE__) . 'assets/script.js',
                array('jquery'),
                '1.0.0',
                true
            );
            
            // Localize script for AJAX
            wp_localize_script('jambox-landing-script', 'jambox_ajax', array(
                'ajax_url' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('jambox_contact_nonce'),
                'language' => $this->get_current_language()
            ));
        }
    }
    
    public function create_landing_pages() {
        // Create main landing page
        $this->create_page('jambox', 'JamBox - Multiplayer Music Experience', '[jambox_landing]');
        
        // Create privacy policy page
        $this->create_page('jambox-privacy', 'Privacy Policy - JamBox', '[jambox_privacy_policy]');
        
        // Create terms of service page
        $this->create_page('jambox-terms', 'Terms of Service - JamBox', '[jambox_terms_of_service]');
    }
    
    private function create_page($slug, $title, $content) {
        $page = get_page_by_path($slug);
        if (!$page) {
            wp_insert_post(array(
                'post_title' => $title,
                'post_content' => $content,
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_name' => $slug
            ));
        }
    }
    
    public function handle_contact_form() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'jambox_contact_nonce')) {
            wp_die('Security check failed');
        }
        
        // Sanitize input data
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $phone = sanitize_text_field($_POST['phone']);
        $establishment_name = sanitize_text_field($_POST['establishmentName']);
        $establishment_type = sanitize_text_field($_POST['establishmentType']);
        $message = sanitize_textarea_field($_POST['message']);
        $gdpr_consent = isset($_POST['gdprConsent']) ? true : false;
        
        // Validate required fields
        if (empty($name) || empty($email) || empty($establishment_name) || empty($message) || !$gdpr_consent) {
            wp_send_json_error('Required fields missing or GDPR consent not given');
            return;
        }
        
        // Prepare email content
        $subject = 'New JamBox Contact Form Submission';
        $email_content = "
        Name: {$name}
        Email: {$email}
        Phone: {$phone}
        Establishment: {$establishment_name}
        Type: {$establishment_type}
        
        Message:
        {$message}
        
        GDPR Consent: Yes
        ";
        
        // Send email
        $to = 'jambox.vibe@gmail.com'; // Your contact email
        $headers = array(
            'Content-Type: text/plain; charset=UTF-8',
            'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
            'Reply-To: ' . $name . ' <' . $email . '>'
        );
        
        $sent = wp_mail($to, $subject, $email_content, $headers);
        
        if ($sent) {
            wp_send_json_success('Message sent successfully');
        } else {
            wp_send_json_error('Failed to send message');
        }
    }
    
    private function get_current_language() {
        // Check for WPML
        if (function_exists('icl_get_current_language')) {
            $lang = icl_get_current_language();
            return $lang === 'ro' ? 'ro' : 'en';
        }
        
        // Check for Polylang
        if (function_exists('pll_current_language')) {
            $lang = pll_current_language();
            return $lang === 'ro' ? 'ro' : 'en';
        }
        
        // Default to Romanian (as per your requirement)
        return 'ro';
    }
    
    public function render_landing_page() {
        $language = $this->get_current_language();
        
        ob_start();
        include plugin_dir_path(__FILE__) . 'templates/landing-page.php';
        return ob_get_clean();
    }
}

// Initialize the plugin
new JamBoxLanding();

// Additional shortcodes for privacy and terms pages
add_shortcode('jambox_privacy_policy', function() {
    ob_start();
    include plugin_dir_path(__FILE__) . 'templates/privacy-policy.php';
    return ob_get_clean();
});

add_shortcode('jambox_terms_of_service', function() {
    ob_start();
    include plugin_dir_path(__FILE__) . 'templates/terms-of-service.php';
    return ob_get_clean();
});