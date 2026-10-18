<?php
/**
 * Plugin Name: TheTechForever Headless Core Engine
 * Plugin URI: https://thetechforever.com
 * Description: Core Headless CMS backend extensions for TheTechForever: registers Custom Post Types (Services, Portfolio, Testimonials, FAQs), custom REST endpoints, CORS headers, and lead capture.
 * Version: 1.0.0
 * Author: TheTechForever Engineering
 * Author URI: https://thetechforever.com
 * License: GPL2
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TTF_Headless_Core {

    public function __construct() {
        add_action('init', array($this, 'register_custom_post_types'));
        add_action('rest_api_init', array($this, 'register_rest_routes'));
        add_action('rest_api_init', array($this, 'register_scf_rest_fields'));
        add_action('init', array($this, 'handle_cors'));
        add_filter('rest_pre_serve_request', array($this, 'add_cors_headers'), 10, 4);
    }

    /**
     * Add CORS headers for React frontend
     */
    public function handle_cors() {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Wpnonce");
    }

    public function add_cors_headers($value) {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Wpnonce");
        return $value;
    }

    /**
     * Register Custom Post Types for Headless Architecture
     */
    public function register_custom_post_types() {
        // 1. Services CPT
        register_post_type('services', array(
            'labels' => array(
                'name' => __('Services', 'ttf'),
                'singular_name' => __('Service', 'ttf'),
            ),
            'public' => true,
            'show_in_rest' => true, // Exposes to /wp-json/wp/v2/services
            'has_archive' => false,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'menu_icon' => 'dashicons-hammer'
        ));

        // 2. Portfolio / Case Studies CPT
        register_post_type('portfolio', array(
            'labels' => array(
                'name' => __('Portfolio', 'ttf'),
                'singular_name' => __('Project', 'ttf'),
            ),
            'public' => true,
            'show_in_rest' => true, // Exposes to /wp-json/wp/v2/portfolio
            'has_archive' => false,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'menu_icon' => 'dashicons-portfolio'
        ));

        // 3. Testimonials CPT
        register_post_type('testimonials', array(
            'labels' => array(
                'name' => __('Testimonials', 'ttf'),
                'singular_name' => __('Testimonial', 'ttf'),
            ),
            'public' => true,
            'show_in_rest' => true, // Exposes to /wp-json/wp/v2/testimonials
            'has_archive' => false,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'menu_icon' => 'dashicons-testimonial'
        ));

        // 4. FAQs CPT
        register_post_type('faqs', array(
            'labels' => array(
                'name' => __('FAQs', 'ttf'),
                'singular_name' => __('FAQ', 'ttf'),
            ),
            'public' => true,
            'show_in_rest' => true, // Exposes to /wp-json/wp/v2/faqs
            'has_archive' => false,
            'supports' => array('title', 'editor', 'custom-fields'),
            'menu_icon' => 'dashicons-editor-help'
        ));

        // 5. Inquiries / Leads CPT (stores incoming leads)
        register_post_type('ttf_inquiries', array(
            'labels' => array(
                'name' => __('Inquiries & Leads', 'ttf'),
                'singular_name' => __('Inquiry', 'ttf'),
            ),
            'public' => false,
            'show_ui' => true,
            'show_in_rest' => false,
            'supports' => array('title', 'editor', 'custom-fields'),
            'menu_icon' => 'dashicons-email-alt'
        ));
    }

    /**
     * Register Custom REST API Endpoints
     */
    public function register_rest_routes() {
        register_rest_route('ttf/v1', '/inquiry', array(
            'methods' => 'POST',
            'callback' => array($this, 'handle_incoming_inquiry'),
            'permission_callback' => '__return_true'
        ));
    }

    /**
     * Expose Secure Custom Fields (SCF) data on all Headless REST Endpoints
     */
    public function register_scf_rest_fields() {
        $cpts = array('services', 'portfolio', 'testimonials', 'faqs', 'post', 'page');
        foreach ($cpts as $cpt) {
            // Expose as 'scf' (Secure Custom Fields)
            register_rest_field($cpt, 'scf', array(
                'get_callback' => array($this, 'get_scf_fields_for_rest'),
                'schema' => null,
            ));
            // Backwards-compatible 'acf' alias
            register_rest_field($cpt, 'acf', array(
                'get_callback' => array($this, 'get_scf_fields_for_rest'),
                'schema' => null,
            ));
        }
    }

    public function get_scf_fields_for_rest($post_arr) {
        $post_id = $post_arr['id'];
        if (function_exists('get_fields')) {
            $fields = get_fields($post_id);
            if (!empty($fields)) {
                return $fields;
            }
        }
        // Fallback: fetch raw post meta if SCF get_fields is not initialized
        $meta = get_post_meta($post_id);
        $clean_meta = array();
        if (is_array($meta)) {
            foreach ($meta as $key => $values) {
                if (substr($key, 0, 1) !== '_') {
                    $clean_meta[$key] = maybe_unserialize($values[0]);
                }
            }
        }
        return $clean_meta ?: new stdClass();
    }

    /**
     * Handle Contact & Estimator Leads
     */
    public function handle_incoming_inquiry($request) {
        $params = $request->get_json_params();

        // Basic Honeypot verification
        if (!empty($params['website_hp'])) {
            return new WP_REST_Response(array('success' => false, 'message' => 'Spam detected.'), 400);
        }

        $name = sanitize_text_field($params['name'] ?? '');
        $email = sanitize_email($params['email'] ?? '');
        $phone = sanitize_text_field($params['phone'] ?? '');
        $service = sanitize_text_field($params['service'] ?? 'General');
        $budget = sanitize_text_field($params['budget'] ?? 'Not specified');
        $message = sanitize_textarea_field($params['message'] ?? '');

        if (empty($name) || empty($email)) {
            return new WP_REST_Response(array('success' => false, 'message' => 'Name and Email are required.'), 400);
        }

        $post_title = $name . ' — ' . $service . ' (' . date('Y-m-d H:i') . ')';
        $post_content = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\nBudget: $budget\n\nProject Scope / Message:\n$message";

        $post_id = wp_insert_post(array(
            'post_title' => $post_title,
            'post_content' => $post_content,
            'post_type' => 'ttf_inquiries',
            'post_status' => 'publish'
        ));

        // Send email alert to official company inbox
        $to = 'info@thetechforever.com';
        $subject = '[New Lead] ' . $name . ' - ' . $service;
        $headers = array('Content-Type: text/plain; charset=UTF-8', 'From: TheTechForever Web <noreply@thetechforever.com>');
        @wp_mail($to, $subject, $post_content, $headers);

        return new WP_REST_Response(array(
            'success' => true,
            'message' => 'Inquiry registered successfully. Our senior consultant will get in touch shortly.',
            'refId' => 'TTF-' . $post_id
        ), 200);
    }
}

new TTF_Headless_Core();
