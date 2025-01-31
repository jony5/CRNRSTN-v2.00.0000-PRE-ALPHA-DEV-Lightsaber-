/*
// J5
// Code is Poetry */
// ...such as this lowly JavaScript Document

/*
CRNRSTN :: CLIENT SIDE CODE INSPIRED BY ::
 * Lightbox v2.11.3
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve

RECEIVE COMPLETE DATA RESPONSE FROM SERVER ::
    ~ XML
    ~ JSON
    ~ HTML (injection WITH CSS)
    ~ HTML (injection WITH CSS - WIRE-FRAME ONLY)
    ~ SOAP RESPONSE (XML)
    ~ CARRIER PIGEON

SERVER DRIVEN VARIABLE INITIALIZATION AND STATE MANAGEMENT - REAL-TIME MANAGEMENT CONSIDERATIONS IMPACTING UI/UX ::
    ~ NEW ALERTS
    ~ NEW NOTIFICATIONS
    ~ REGULAR MEASUREMENT FOR MAINTENANCE OF TARGET TOLERANCES FOR RANGES OF OPERATION
        * CONTENT TTL
        * SESSION TTL ALERT TO IMMINENT CHANGE FOR FORCED LOGOUT TO TEMPORARY LANDING PAGE...E.G. BEFORE MAINTENANCE MODE
        * SESSION TTL (FORCED LOGOUT TO TEMPORARY LANDING PAGE...E.G. BEFORE MAINTENANCE MODE)
        * INACTIVITY TIMEOUT DEFAULT - REAL-TIME ADJUSTMENT APPLICATION
        * MAXIMUM UNSUCCESSFUL LOGIN ATTEMPTS ADJUSTMENT - REAL-TIME APPLICATION
        * LOGIN ATTEMPTS EXCEEDED TIMEOUT ADJUSTMENT - REAL-TIME APPLICATION
        * ACCOUNT SUSPENDED BY ADMIN - REAL-TIME APPLICATION
        * ACCOUNT DEACTIVATED BY ADMIN - REAL-TIME APPLICATION
        * ACCOUNT ACTIVATED BY ADMIN - REAL-TIME APPLICATION
    ~ COOKIE MANAGEMENT POLICY - DNF
        * HTML (injection WITH CSS - THEME OPTIONS...PHPNIGHT, HTML, FEATHER...)
        * HTML (injection WITH CSS - WIRE-FRAME ONLY)
    ~ ACCOUNT ACTIVITY
        * START OUT FULL TRANSPARENCY. WHAT THE SYSTEM ADMINISTRATOR SEES.
        * BUILD IN SUPPORT FOR ACCOUNT RELATIONSHIP STRUCTURES WITH REGULATED VISIBILITY INTO THE SAME
            ~ CONSIDER EMPLOYEE vs CLIENT IN CONTEXT OF EXTRANET AND THE VISIBILITY THERE. E.G., WHY WOULD CLIENT "A"
              SEE ACTIVITY FOR CLIENT "B" IN THE SYSTEM?
        * LIVING STREAMS COMMUNICATIONS MESSAGING LAYER WHERE USER @MENTIONS THROW ALERTS TO USERS FOR REAL-TIME
          COMMUNICATIONS IN SYSTEM. CONSIDER DATA OUTPUT FORMAT FOR MOBILE DEVICE APPLICATION READS AND WRITES OF
          CRNRSTN :: DRIVEN MOBILE DEVICE COMMUNICATIONS WHERE LOGGING INTO CRNRSTN :: WILL EXPOSE TO THE SAME
          "MOBILE APP" THREAD WITHIN THE RUNNING LAMP ENVIRONMENT.
        * WE NEED TO PUT TOGETHER A EULA FOR ANY ACCOUNTS IN THE SYSTEM (EULA INTERSTITIAL WAY-POINT WHEN ACTIVATING
          ANY ACCOUNT) WHICH HONORS ALL OF THE ABOVE.

*/
// # # C # R # N # R # S # T # N # : : # # # #
// #
// #  CLASS :: oCRNRSTN_JS
// #  VERSION :: 1.00.0000
// #  DATE :: July 1, 2021 @ 0352 hrs.
// #  AUTHOR :: Jonathan '5' Harris, jharris@eVifweb.com, eVifweb@gmail.com.
// #  URI :: http://evifweb.jony5.com
// #  DESCRIPTION :: CRNRSTN :: Main Javascript Support [DESKTOP VARIANT].
// #  LICENSE :: MIT | https://crnrstn.jony5.com/licensing/
// #
// Uses Node, AMD or browser globals to create a module.
(function (root, factory){

    if (typeof define === 'function' && define.amd){

        // AMD. Register as an anonymous module.
        define(['jquery'], factory);

    } else if (typeof exports === 'object'){

        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));

    } else {

        // Browser globals (root is window)
        // root.lightbox = factory(root.jQuery);
        root.oCRNRSTN_JS = factory(root.jQuery);

    }

}(this, function ($){

    //function Lightbox(options){
    function CRNRSTN_JS(options){

        this.system_hash_algo = 'md5';
        this.md5_IE_32bit_shift_enabled = false;
        this.hex_chr = '0123456789abcdef'.split('');

        if(this.md5('hello') !== '5d41402abc4b2a76b9719d911017c592'){

            // WILL BE JUST A SHY BIT SLOWER...
            this.md5_IE_32bit_shift_enabled = true;

        }

        this.album = [];
        this.currentImageIndex = void 0;

        //
        // CRNRSTN :: CONFIG
        this.CRNRSTN_LOGGING_OUTPUT = 'DOM';    // ['CONSOLE', 'DOM', 'ALERT'];

        //
        // CRNRSTN JS :: DEBUG MODES
        this.CRNRSTN_DEBUG_OFF = 0;
        this.CRNRSTN_DEBUG_BASIC = 100;
        this.CRNRSTN_DEBUG_VERBOSE = 200;
        this.CRNRSTN_DEBUG_LIFESTYLE_BANNER = 300;
        this.CRNRSTN_DEBUG_BASSDRIVE = 420;
        this.CRNRSTN_DEBUG_CONTROLS = 500;

        this.CRNRSTN_INTERACT_UI_MOUSE = {
            X: 0,
            Y: 0
        };

        this.CRNRSTN_INTERACT_UI_ELEM_AT_MOUSE = [];

        this.baseline_z_index = 60;

        //
        // TODO :: NEED TO SET DEBUG MODE FROM SERVER RETURN/SSDTLA XML RESPONSE DATA (WILL HONOR ADMIN SESSION)
        this.oSystem_date = 0;
        this.system_date_str = '';
        this.session_salt = '';
        this.crnrstn_debug_mode = this.CRNRSTN_DEBUG_LIFESTYLE_BANNER;
        this.crnrstn_overlay_mode = 'OFF';
        this.crnrstn_ui_component_state_ARRAY = [];

        this.form_input_serialization_key = 'crnrstn_request_serialization_key';
        this.form_input_serialization_hash = 'crnrstn_request_serialization_hash';
        this.received_settings_data = false;
        this.received_theme_data = false;
        this.get_pushed_autoscroll;
        this.current_theme;
        this.theme_display_position_flag_ARRAY = [];
        this.source_action_ux_element_id = 'page_load';
        this.max_xhr_retrys = 5;
        this.ssdtla_xhr_request_attempt_count_ARRAY = [];
        this.share_component_resource_container_ARRAY = [];
        this.share_component_resource_index_ARRAY = [];
        this.dom_element_mouse_state_tracker_ARRAY = [];
        this.dom_element_mouse_state_lock_ARRAY = [];
        this.dom_element_mouse_state_ARRAY = [];
        this.dom_element_mouse_state_ARRAY['share_module_click'] = 'CLOSED';
        this.body_control_document_width = 0;
        this.body_control_window_width = 0;
        this.b_width_nav_expand = -1;
        this.b_width_nav_min = -1;
        this.side_navigation_toggle_min_width = 17;
        this.side_navigation_toggle_max_width = 250;
        this.content_stage_max_width = 850;
        this.docs_page_css_top = -420;
        this.interact_ui_refresh_state_body = 'SLEEPING';
        this.interact_ui_refresh_state_system_footer = 'SLEEPING';
        this.interact_ui_refresh_state_docs_bg = 'SLEEPING';
        this.docs_page_css_left = 0;
        this.current_serialization_key = '';
        this.current_serialization_hash = '';
        this.loaded_content_hash_ARRAY = [];
        this.expire_content_hash_invalid_ARRAY = [];
        this.current_page_key = '';
        this.content_refresh_trigger_source;
        this.crnrstn_interact_ui_mode = 'mini_canvas';
        this.data_tunnel_ttl_monitor_isactive = false;
        this.ttl_tunnel_monitor_seconds = 0;
        this.rand_index_spoiler_ARRAY = [];
        this.ttl_array_pointer_index_ARRAY = [];
        this.ttl_array_pointer_index_root_ARRAY = [];
        this.transaction_thread_count_ARRAY = [];

        //
        // TODO :: NEED TO POPULATE THIS ARRAY FROM SSDTLA XML RESPONSE DATA
        this.transaction_thread_id_key_ARRAY = [];

        //
        // TODO :: NEED TO POPULATE THIS ARRAY FROM SSDTLA XML RESPONSE DATA
        this.ui_interact_input_id_ARRAY = ['crnrstn_interact_ui_primary_nav_img_shell_menu_glass_case', 'crnrstn_interact_ui_primary_nav_img_shell_close_x_glass_case', 'crnrstn_interact_ui_primary_nav_img_shell_fs_expand_glass_case', 'crnrstn_interact_ui_primary_nav_img_shell_minimize_glass_case'];
        this.ui_interact_input_type_ARRAY = ['menu', 'close_x', 'fs_expand', 'minimize'];

        this.data_array_adjusted_ttl_ARRAY = [];
        this.transaction_count_ARRAY = [];
        this.transaction_ARRAY = [];

        this.jony5_banner_mode = 'PLAY';
        this.client_rtime = '0:00:00';
        this.client_rtime_year = '';
        this.client_rtime_month = '';
        this.client_rtime_week = '';
        this.client_rtime_day = '';
        this.client_rtime_hour = '0';
        this.client_rtime_mins = '0';
        this.client_rtime_secs = '0';
        this.back_press_cnt = 0;
        this.top_lifestyle_banner_image_container = '';
        this.jony5_lifestyle_banner_images_FULLSCREEN_ARRAY = [];
        this.jony5_lifestyle_banner_index_FULLSCREEN_ARRAY = [];
        this.jony5_lifestyle_banner_images_ARRAY = [];
        this.jony5_lifestyle_banner_index_ARRAY = [];
        this.jony5_lifestyle_banner_sequence_control_ARRAY = [];
        this.jony5_lifestyle_banner_sequence_position = 0;
        this.jony5_lifestyle_banner_img_int_sequence_alpha = [];
        this.jony5_lifestyle_banner_img_int_sequence_beta = [];
        this.ssdtl_response_data_container_ARRAY = [];
        this.http_get_data_container_ARRAY = [];
        this.http_get_data_serialization_key_container_ARRAY = [];
        this.ssdtl_response_data_index_tracker_ARRAY = [];
        this.ui_sync_controller_thread_delay_ARRAY = [];

        this.ttl_age_seconds = 1;   // secs
        this.client_rtime_pretty = '';
        this.client_rtime_millis = 0;
        this.interact_ui_ttl_monitor_ARRAY = [];

        this.client_month_abbrev_ARRAY = [];
        this.client_month_ARRAY = [];
        this.client_day_abbrev_ARRAY = [];
        this.client_day_ARRAY = [];

        //
        // CRNRSTN :: CLIENT RESPONSE
        this.response_serial = '';
        this.response_timestamp = '';
        this.response_server_runtime = '';
        this.runtime = '';

        //
        // CRNRSTN :: INITIALIZATION
        this.crnrstn_init();

        // options
        this.options = $.extend({}, this.constructor.defaults);
        this.option(options);

    }

    // Descriptions of all options available on the demo site:
    // http://lokeshdhakar.com/projects/lightbox2/index.html#options
    CRNRSTN_JS.defaults = {
        albumLabel: 'Image %1 of %2',
        alwaysShowNavOnTouchDevices: false,
        fadeDuration: 600,
        fitImagesInViewport: true,
        imageFadeDuration: 600,
        // maxWidth: 800,
        // maxHeight: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: true,
        wrapAround: false,
        disableScrolling: true,
        /*
        Sanitize Title
        If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
        This will free you to add html tags, such as links, in the caption.

        If the caption data is user submitted or from some other untrusted source, then set this to true
        to prevent xss and other injection attacks.
         */
        sanitizeTitle: false

    };

    CRNRSTN_JS.prototype.crnrstn_signin = function(elem){

        //$.extend(this.options, options);
        alert('hello crnrstn_signin {CRNRSTN_JS} world!');

    };

    CRNRSTN_JS.prototype.crnrstn_bassdrive_stream = function(elem){

        //$.extend(this.options, options);
        alert('hello crnrstn_bassdrive_stream {CRNRSTN_JS} world!');

    };

    CRNRSTN_JS.prototype.option = function(options){

        $.extend(this.options, options);

    };

    CRNRSTN_JS.prototype.imageCountLabel = function(currentImageNum, totalImages){

        return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);

    };

    CRNRSTN_JS.prototype.get_ui_component_state = function(component_key){

//        if(this.crnrstn_ui_component_state_ARRAY[component_key].length){
        if(this.crnrstn_ui_component_state_ARRAY[component_key]){

            //alert('[lnum 306] Key[' + component_key + '] is set to [' + this.crnrstn_ui_component_state_ARRAY[component_key] + '].');

            return this.crnrstn_ui_component_state_ARRAY[component_key];

        }

        //alert('[lnum 312] Requested component key not set.' + component_key);

        return this.session_salt;

    }

    CRNRSTN_JS.prototype.set_ui_component_state = function(component_key, state = 'ON'){

        switch(component_key){
            case 'forward_btn_banner':

                if(state === 'ON'){

                    if($('#img_fwd_controller').css('visibility') === 'hidden') {

                        $('#img_fwd_controller').css('visibility', 'visible');

                        $('#img_fwd_controller').animate({
                            opacity: 0
                        }, {
                            duration: 0,
                            queue: true,
                            step: function( now, fx ) {

                            },
                            complete: function () {

                                $('#img_fwd_controller').animate({
                                    opacity: 1.0
                                },{
                                    duration: 750,
                                    queue: true,
                                    step: function( now, fx ) {

                                    },
                                    complete: function () {

                                    }

                                });

                            }

                        });

                    }

                }else{

                    $('#img_fwd_controller').animate({
                        opacity: 0
                    }, {
                        duration: 250,
                        queue: false,
                        step: function( now, fx ) {

                        },
                        complete: function () {

                            $('#img_fwd_controller').css('visibility', 'hidden');

                        }

                    });

                }

            break;
            case 'back_btn_banner':

                if(state === 'ON'){

                    if($('#img_back_controller').css('visibility') === 'hidden') {

                        $('#img_back_controller').css('visibility', 'visible');

                        $('#img_back_controller').animate({
                            opacity: 0
                        }, {
                            duration: 0,
                            queue: true,
                            step: function( now, fx ) {

                            },
                            complete: function () {

                                $('#img_back_controller').animate({
                                    opacity: 1.0
                                },{
                                    duration: 750,
                                    queue: true,
                                    step: function( now, fx ) {

                                    },
                                    complete: function () {

                                    }

                                });

                            }

                        });

                    }

                }else{

                    $('#img_back_controller').animate({
                        opacity: 0
                    }, {
                        duration: 250,
                        queue: false,
                        step: function( now, fx ) {

                        },
                        complete: function () {

                            $('#img_back_controller').css('visibility', 'hidden');

                        }

                    });

                }

            break;
            default:

                //
                // TODO :: CONSIDER PASSING INTERACT UI NAV CONTROL THROUGH THIS ARCHITECTURE
                // TODO :: SISTER METHOD TO GET THE CURRENT STATE OF THE COMPONENT. SO CAN USE ARRAY STRUCTURE
                //alert('[lnum 443] Setting component key [' + component_key + '].');
                this.crnrstn_ui_component_state_ARRAY[component_key] = state;

            break;

        }

    };

    CRNRSTN_JS.prototype.related_link_text_click = function(page_key){

        $('#crnrstn_ui_element_load_indicator').stop();

        this.interact_ui_refresh_state_docs_bg = 'ENABLED';
        this.link_text_click(page_key);

        return false;

    };

    CRNRSTN_JS.prototype.link_text_click = function(page_key){

        this.log_activity('[lnum 463] SSDTLA Sending request for data [' + page_key + '].', this.CRNRSTN_DEBUG_VERBOSE);

        this.current_page_key = page_key;
        this.content_refresh_trigger_source = 'link_text_click';

        //
        // SET THE REQUEST SOURCE.
        $('#crnrstn_request_source').val(this.content_refresh_trigger_source);

        //
        // SET THE LINK.
        $('#crnrstn_interact_ui_link_text_click').val(page_key);

        this.fire_dom_state_controller();
        this.ttl_tunnel_monitor_seconds = 1;
        this.ttl_age_seconds = -1;
        this.data_tunnel_ttl_monitor_isactive = false;
        this.interact_ui_ttl_monitor_ARRAY['crnrstn_page_load_ttl'] = -1;

        //
        // BEGIN UI PAGE LOAD VISUALIZATION EXPERIENCE.
        $('#crnrstn_interact_ui_page_load_progress').val('');

        this.start_page_request_visualization();

        //
        // I HATE TO DO IT THIS WAY...BUT WE JUST NEED TO GET DOCUMENTATION GOING. CAN RETURN TO
        // REFACTOR ALL THIS, AND WILL HAVE MUCH BETTER COPY-PASTE-DOCUMENTATION WHEN THAT CAN HAPPEN.
        var tmp_docs_page = $('#crnrstn_interact_ui_link_text_click').val();

        if(tmp_docs_page.length > 1 && page_key !== 'mit_license'){

            $("#crnrstn_interact_ui_full_doc_close").html('X');

        }

        if((this.docs_page_css_top < -420) || (this.docs_page_css_top === -420)){

            var $window = $(window);
            this.docs_page_css_top = -8; // $window.scrollTop() - 8;
            this.docs_page_css_left = $window.scrollLeft();

            this.size_element('crnrstn_documentation_dyn_shell_bg', 0);
            this.size_element('crnrstn_documentation_dyn_shell');
            this.size_element('crnrstn_ui_system_footer');

        }

        //alert('Color: ' + this.get_theme_attribute('interact.ui.document_bg_overlay_background_color'));
        //alert('Opacity: ' + this.get_theme_attribute('interact.ui.document_bg_overlay_background_opacity'));
        $('#crnrstn_documentation_dyn_shell_bg').animate({
            backgroundColor: this.get_theme_attribute('interact.ui.document_bg_overlay_background_color'),
            top: this.docs_page_css_top + 'px',
            left: this.docs_page_css_left + 'px',
            opacity: this.get_theme_attribute('interact.ui.document_bg_overlay_background_opacity'),
            zIndex: this.get_theme_attribute('interact.ui.document_bg_overlay_background_zindex')
        }, {
            duration: 1000,
            queue: false,
            complete: function () {

            }

        });

    };

    CRNRSTN_JS.prototype.start_page_request_visualization = function(){

        $('#crnrstn_ui_element_load_indicator').animate({
            top: 0
        }, {
            duration: 0,
            queue: false,
            specialEasing: {
                top: "linear"
            },
            complete: function () {

                $('#crnrstn_ui_element_load_indicator').stop();

            }

        });

        //
        // PSSDTL DRIVEN PAGE LOAD VISUALIZATION
        this.size_element_y('crnrstn_ui_element_load_indicator_shell');

        // EXPAND THE WINDOW TO MAX.
        $('#crnrstn_ui_element_load_indicator_shell').animate({
            width: 10
        }, {
            duration: 250,
            queue: false,
            specialEasing: {
                width: "swing"
            },
            complete: function () {

            }

        });

        var tmp_height = $('#crnrstn_ui_element_load_indicator_shell').height();

        tmp_height = tmp_height - 100;

        //alert(tmp_height);
        $('#crnrstn_ui_element_load_indicator').animate({
            top: tmp_height
        }, {
            duration: 5000,
            queue: false,
            specialEasing: {
                top: "swing"
            },
            complete: function () {

            }

        });

    };

    CRNRSTN_JS.prototype.initialize_page_request_visualization = function(){

        if($('#crnrstn_ui_element_load_indicator').length){

            $('#crnrstn_ui_element_load_indicator').animate({
                top: 0
            }, {
                duration: 0,
                queue: false,
                specialEasing: {
                    top: "linear"
                },
                complete: function () {

                }

            });

            //
            // PSSDTL DRIVEN PAGE LOAD VISUALIZATION
            this.size_element_y('crnrstn_ui_element_load_indicator_shell');

        }

    };

    CRNRSTN_JS.prototype.initialize_interact_ui_documentation_mode = function(module_content){

        var self = this;
        var nav_state_final = 'MIN';
        this.$crnrstn_lightbox = $('#crnrstn_interact_ui_full_lightbox');
        var is_init_operation = false;

        if(!$('#crnrstn_interact_ui_full_lightbox_overlay').length){

            this.b_width_nav_expand = parseInt($(window).width()) - parseInt(this.side_navigation_toggle_max_width) - 35;
            this.b_width_nav_min = parseInt($(window).width()) - parseInt(this.side_navigation_toggle_min_width) - 35;

            is_init_operation = true;
            $('<div id="crnrstn_interact_ui_full_doc_header_wrapper_rel" class="crnrstn_interact_ui_full_doc_header_wrapper_rel"><div class="crnrstn_cb"></div><div id="crnrstn_interact_ui_full_doc_header_wrapper" class="crnrstn_interact_ui_full_doc_header_wrapper"><div id="crnrstn_interact_ui_full_doc_close_wrapper_rel" class="crnrstn_interact_ui_full_doc_close_wrapper_rel"><div id="crnrstn_interact_ui_full_doc_close_wrapper" class="crnrstn_interact_ui_full_doc_close_wrapper"><div id="crnrstn_interact_ui_full_doc_close" class="crnrstn_interact_ui_full_doc_close" onclick="oCRNRSTN_JS.crnrstn_interact_ui_ux(\'onclick\', this);" onmouseover="oCRNRSTN_JS.crnrstn_interact_ui_ux(\'onmouseover\', this);" onmouseout="oCRNRSTN_JS.crnrstn_interact_ui_ux(\'onmouseout\', this);"></div></div></div><div class="crnrstn_cb"></div></div></div><div id="crnrstn_interact_ui_full_lightbox_overlay" class="crnrstn_interact_ui_full_lightbox_overlay" onclick="oCRNRSTN_JS.crnrstn_interact_ui_ux(\'onclick\', this);"></div><div id="crnrstn_interact_ui_full_lightbox" class="crnrstn_interact_ui_full_lightbox" onclick="oCRNRSTN_JS.crnrstn_interact_ui_ux(\'onclick\', this);"></div><div id="crnrstn_interact_ui_full_document_wrapper" class="crnrstn_interact_ui_full_document_wrapper"><div class="crnrstn_interact_ui_full_document_rel"><div id="crnrstn_interact_ui_full_document" class="crnrstn_interact_ui_full_document"></div><div id="crnrstn_ui_element_load_indicator_shell_rel" class="crnrstn_ui_element_load_indicator_shell_rel"><div id="crnrstn_ui_element_load_indicator_shell" class="crnrstn_ui_element_load_indicator_shell"><div id="crnrstn_ui_element_load_indicator_bg_rel" class="crnrstn_ui_element_load_indicator_bg_rel"><div id="crnrstn_ui_element_load_indicator_bg" class="crnrstn_ui_element_load_indicator_bg"></div></div><div id="crnrstn_ui_element_load_indicator_rel" class="crnrstn_ui_element_load_indicator_rel"><div id="crnrstn_ui_element_load_indicator" class="crnrstn_ui_element_load_indicator"></div></div></div></div><div id="crnrstn_documentation_dyn_shell_rel" class="crnrstn_documentation_dyn_shell_rel"><div id="crnrstn_documentation_dyn_shell_bg" class="crnrstn_documentation_dyn_shell_bg"><div class="crnrstn_cb"></div></div><div id="crnrstn_documentation_dyn_shell" class="crnrstn_documentation_dyn_shell"></div></div></div></div>').prependTo($('body'));

            self.log_activity('[lnum 629] Initializing CRNRSTN :: INTERACT UI within the DOM.', self.CRNRSTN_DEBUG_VERBOSE);

        }

        //this.initialize_full_doc_navigation_pane();
        this.size_element_y('crnrstn_interact_ui_side_nav');

        //debugger;
        if(!is_init_operation){

            nav_state_final = this.get_ui_component_state('crnrstn_interact_ui_side_nav');

            if(nav_state_final === 'MAX'){

                this.toggle_documentation_side_navigation();

                $('#crnrstn_documentation_dyn_shell_rel').animate({
                    verticalAlign: 'top'
                }, {
                    duration: 1200,
                    queue: false,
                    complete: function () {

                        $('#crnrstn_interact_ui_full_document').html(module_content);

                    }

                });

            }else{

                $('#crnrstn_interact_ui_full_document').html(module_content);

            }

        }else{

            $('#crnrstn_interact_ui_full_document').html(module_content);

        }

        //
        // INITIALIZE AS COLLAPSED UNTIL SSDTLA CAN DRIVE THIS VIA SESSION, COOKIE, DATABASE, PSSDTLP, ETC.
        this.set_ui_component_state('crnrstn_interact_ui_side_nav', 'MIN');

        this.interact_ui_refresh_state_body = 'LISTENING';

        if(is_init_operation){

            //
            // INITIALIZE PAGE REQUEST VISUALIZATION
            this.start_page_request_visualization();
            //$('#crnrstn_ui_element_load_indicator').stop();

        }

        if(!is_init_operation){

            if(nav_state_final === 'MAX'){

                $('#crnrstn_documentation_dyn_shell_rel').animate({
                    verticalAlign: 'top'
                }, {
                    duration: 1500,
                    queue: false,
                    complete: function () {

                        self.toggle_documentation_side_navigation();
                        //self.initialize_full_doc_navigation_pane();
                        self.size_element_y('crnrstn_interact_ui_side_nav');

                    }

                });

            }else{

                //self.initialize_full_doc_navigation_pane();
                self.size_element_y('crnrstn_interact_ui_side_nav');

            }

        }else{

            $('#crnrstn_interact_ui_side_nav').animate({
                width: this.side_navigation_toggle_min_width
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    width: "swing"
                },
                complete: function () {

                }

            });

            $('#crnrstn_interact_ui_side_nav_logo').animate({
                left: 18
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    left: "swing"
                },
                complete: function () {

                }

            });

            $('#crnrstn_interact_ui_side_nav_search').animate({
                left: 18
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    left: "swing"
                },
                complete: function () {

                }

            });

            $('#crnrstn_ui_element_load_indicator_shell').animate({
                marginLeft: this.side_navigation_toggle_min_width
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    marginLeft: "swing"
                },
                complete: function () {

                }

            });

            $('#crnrstn_documentation_dyn_shell_rel').animate({
                marginLeft: this.side_navigation_toggle_min_width
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    marginLeft: "swing"
                },
                complete: function () {

                    //
                    // TO ALLOW BODY SCROLL AFTER LOAD.
                    self.end();

                    if($('#crnrstn_resource_initialize').val().length){

                        //
                        // LOAD DOCUMENTATION FROM LINK. FIRST IMPLEMENTATION.
                        // alert('[lnum 797] crnrstn_resource_initialize=' + $('#crnrstn_resource_initialize').val());
                        // self.link_text_click($('#crnrstn_resource_initialize').val());

                    }

                }

            });

            // Attach event handlers to the newly minted DOM elements
            this.$overlay.hide().on('click', function() {

                self.end();
                return false;

            });

            $("#crnrstn_ui_element_load_indicator").html($("#crnrstn_interact_ui_loadbar_IMAGE_CACHE").html());

        }

    };

    CRNRSTN_JS.prototype.initialize_interact_ui_system_footer = function(module_content){

        //var self = this;
        //this.$system_footer = $('#crnrstn_ui_system_footer_src');

        this.log_activity('[lnum 815] Initializing system footer.', this.CRNRSTN_DEBUG_VERBOSE);

        $('#crnrstn_ui_system_footer_shell').html(module_content);

        // WIDTH
        this.size_element('crnrstn_ui_system_footer');

        // Attach event handlers to the newly minted DOM elements
        // this.$system_footer.hide().on('click', function() {
        //
        //     self.end();
        //     return false;
        //
        // });

        //
        // CSS STYLES
        this.initialize_system_footer_css('crnrstn_ui_system_footer_mit');
        this.initialize_system_footer_css('crnrstn_ui_system_footer_download');
        this.initialize_system_footer_css('crnrstn_ui_system_footer_stat_stime');
        this.initialize_system_footer_css('crnrstn_ui_system_footer_stat_rtime');
        this.initialize_system_footer_css('crnrstn_ui_system_footer_stat_wtime');
        this.initialize_system_footer_css('crnrstn_ui_system_footer_stat_meta');

        //this.$crnrstn_ui_system_footer      = $('#crnrstn_ui_system_footer');
        //this.$ui_system_footer_stat = this.$crnrstn_ui_system_footer.find('.crnrstn_ui_system_footer_stat');
        // this.$ui_system_footer_stat.on('load', function() {
        //
        //     self.$ui_system_footer_stat.css('fontFamily', 'Courier New, Courier, monospace');
        //     self.$ui_system_footer_stat.css('fontSize', '12px');
        //     self.$ui_system_footer_stat.css('lineHeight', '20px');
        //     self.$ui_system_footer_stat.css('color', '#333');
        //
        //     return false;
        //
        // });

    };

    CRNRSTN_JS.prototype.initialize_system_footer_css = function(elem_id){

        $('#' + elem_id).css('fontFamily', 'Courier New, Courier, monospace');
        $('#' + elem_id).css('fontSize', '12px');
        $('#' + elem_id).css('lineHeight', '20px');
        $('#' + elem_id).css('color', '#333');

    };

    CRNRSTN_JS.prototype.initialize_system_footer = function(){

        var self = this;

        /*
        We use a setTimeout 0 to pause JS execution and let the rendering catch-up.
        Why do this? If the `disableScrolling` option is set to true, a class is added to the body
        tag that disables scrolling and hides the scrollbar. We want to make sure the scrollbar is
        hidden before we measure the document width, as the presence of the scrollbar will affect the
        number.
        */

        setTimeout(function() {

            self.$dom_elem_bg
                .width($(document).width())
                .height($(document).height());

        }, 0);

    };

    //crnrstn_deep_link_hash_node_
    //

    CRNRSTN_JS.prototype.initialize_dom_injected_content = function(){

        if($('#crnrstn_deep_link_src_node_count').length){

            //
            // WE HAVE A DEEP LINK REQUEST TO PROCESS.
            var hash_elem_id = '';
            var component_cnt = parseInt($('#crnrstn_deep_link_src_node_count').html());
            var nav_is_init = false;

            for(var i=0; i < component_cnt; i++){

                var hash_elem_id = 'crnrstn_deep_link_hash_node_' + i;

                if($('#' + hash_elem_id).length){

                    //
                    // NAVIGATION HASH INITIALIZATION.
                    if($('#crnrstn_interact_ui_documentation_side_nav_src_HASH').length && !nav_is_init){

                        nav_is_init = true;
                        $('#crnrstn_interact_ui_documentation_side_nav_src_HASH').val($('#' + hash_elem_id).html());
                        //alert('[lnum 909] NAV_HASH=[' + $('#' + hash_elem_id).html() + '].  total component_cnt:' + component_cnt + '.');
                        this.log_activity('[lnum 910] Qty. ' + component_cnt + ' components received for page initialization. crnrstn_interact_ui_documentation_side_nav_src_HASH=[' + $('#' + hash_elem_id).html() + '].  total component_cnt:' + component_cnt + '.', this.CRNRSTN_DEBUG_VERBOSE);

                    }

                    //
                    // PAGE LOAD...HERE? Tuesday, February 28, 2023 @ 0358 hrs

                }

            }

        }

    };

    CRNRSTN_JS.prototype.crnrstn_init = function(){

        var self = this;

        // Both enable and build methods require the body tag to be in the DOM.
        $(document).ready(function() {

            //
            // LOAD CRNRSTN :: INTERACT UI SYSTEM SETTINGS.
            self.load_system_settings();

            if(self.crnrstn_debug_mode === self.CRNRSTN_DEBUG_OFF){

            }else{

                if(self.CRNRSTN_LOGGING_OUTPUT === 'DOM'){

                    //
                    // THIS IS NOT THE SOLUTION WE NEED...BUT IT WILL WORK FOR NOW. 100% OF CRNRSTN :: JS CONFIGURATION
                    // SHOULD COME FROM THE SERVER CONFIG....IMHO.
                    if($('#crnrstn_client_ssdtla_debug_active').length){

                        $('<div id="crnrstn_activity_log_output_wrapper">' +
                            '<div id="crnrstn_activity_log_output_title" style="float:left; padding:5px 0 5px 10px; text-align:left; font-family: Courier New, Courier, monospace; font-size:20px;">C<span class="the_R_in_crnrstn">R</span>NRSTN :: SOAP-SERVICES DATA TUNNEL LAYER ARCHITECTURE (SSDTLA) :: DEBUG</div>' +
                            '<div id="crnrstn_activity_log" class="crnrstn_log_output_wrapper">' +
                            '   <div id="crnrstn_activity_log_output" class="crnrstn_log_output"></div>' +
                            '</div>' +
                            '<div id="crnrstn_activity_log_output_lnk_wrapper" style="margin:0; width:100%; text-align: right; line-height: 20px;">' +
                            '   <div onclick="oCRNRSTN_JS.crnrstn_ui_hide_ssdtla_debug();" style="float:right; padding:5px 5px 0 0; text-align:right;"><a href="#" style="font-family: Courier New, Courier, monospace; color:#06C; font-size:12px;">Hide</a></div>' +
                            '   <div style="float:right; padding:5px 25px 0 0; text-align:right; font-family: Courier New, Courier, monospace; font-size:20px;"><a href="#" onclick="$(\'#crnrstn_activity_log_output\').html(\'\');" style="font-family: Courier New, Courier, monospace; color:#06C; font-size:12px;">Clear</a></div>' +
                            '</div>' +
                            '</div>').prependTo($('body'));

                        switch(self.CRNRSTN_LOGGING_OUTPUT){
                            case 'DOM':

                                $('#crnrstn_activity_log').animate({
                                    opacity: 1.0
                                }, {
                                    duration: 1000,
                                    queue: false,
                                    complete: function () {

                                    }

                                });

                                break;

                        }

                    }

                }

            }

            self.log_activity('[lnum 942] DOM READY.', self.CRNRSTN_DEBUG_VERBOSE);

            //
            // EXTRACT CRNRSTN :: HTTP GET DATA
            self.consume_http_get_data();

            //
            // DEEP LINK FAST TRACK.
            self.process_request_for_deep_link();

            //
            // RECEIVE PROGRAMME OF CRNRSTN :: INTERACT UI MODULES
            var tmp_module_keys = $('#crnrstn_interact_ui_module_programme').val();
            var tmp_module_key_ARRAY = tmp_module_keys.split('|');
            var module_cnt = tmp_module_key_ARRAY.length;

            //
            // INITIALIZE CONTENT HASH FOR DEEP LINK INTEGRATION SUPPORT.
            self.initialize_dom_injected_content();

            for(var i = 0; i < module_cnt; i++){

                //
                // IF MODULE SHELL IS PRESENT IN DOM, REQUEST CONTENT FROM SERVER.
                if($('#' + tmp_module_key_ARRAY[i]).length){

                    $('#' + tmp_module_key_ARRAY[i] + '_HASH').val('J5, my boy!');

                }

            }

            self.crnrstn_data_tunnel_session_init();
            self.initialize_delay_ui_sync_controllers();

            if($("#jony5_banner_component_wrapper").length){

                self.initialize_jony5_lifestyle_banner_controller();

            }

            self.enable();
            self.build();

            self.initialize_page_request_visualization();

        });

    };

    CRNRSTN_JS.prototype.load_system_settings = function(){

        /*
        <input type="hidden" id="crnrstn_page_load_ttl" name="crnrstn_page_load_ttl" value="' . $this->oCRNRSTN->get_resource('page_load_ttl', 0, 'CRNRSTN::RESOURCE::GENERAL_SETTINGS') . '">
        <input type="hidden" id="crnrstn_inactivity_refresh_ttl" name="crnrstn_inactivity_refresh_ttl" value="' . $this->oCRNRSTN->get_resource('crnrstn_inactivity_refresh_ttl', 0, 'CRNRSTN::RESOURCE::GENERAL_SETTINGS') . '">
        <input type="hidden" id="crnrstn_ssdtla_module_sync_ttl" name="crnrstn_ssdtla_module_sync_ttl" value="' . $this->oCRNRSTN->get_resource('crnrstn_ssdtla_module_sync_ttl', 0, 'CRNRSTN::RESOURCE::GENERAL_SETTINGS') . '">
        <input type="hidden" id="crnrstn_share_module_inactivity_close_ttl" name="crnrstn_share_module_inactivity_close_ttl" value="' . $this->oCRNRSTN->get_resource('crnrstn_share_module_inactivity_close_ttl', 0, 'CRNRSTN::RESOURCE::GENERAL_SETTINGS') . '">

        <input type="hidden" id="crnrstn_debug_logging_output_channel" name="crnrstn_debug_logging_output_channel" value="' . $this->oCRNRSTN->get_resource('debug_logging_output_channel', 0, 'CRNRSTN::RESOURCE::GENERAL_SETTINGS') . '">

        <input type="hidden" id="crnrstn_depeche_mode" name="crnrstn_depeche_mode" value="' . $this->oCRNRSTN->get_resource('client_debug_mode', 0, 'CRNRSTN::RESOURCE::GENERAL_SETTINGS') . '">

        */

        this.session_salt = $("#crnrstn_session_salt").val();

        this.load_setting_attribute('crnrstn_interact_ui_ttl');

        //
        // TODO :: CONSIDER SSDTLA DEBUG REPORTING TIMESTAMP IN LINE WITH SERVER CONFIGURATION. SEE $oCRNRSTN->config_set_timezone_default(CRNRSTN_RESOURCE_ALL, 'America/Denver');
        // TODO :: CRNRSTN_JS SHOULD STILL TRACK LOCAL SYSTEM TIME FOR LOCAL DISPLAY AND REPORTING TO SERVER.
        this.system_date_str = $('#crnrstn_interact_ui_sysdate').html();
        this.oSystem_date = new Date(this.system_date_str);

        if(tmp_attribute_value = this.load_setting_attribute('crnrstn_client_debug_mode')){

            this.crnrstn_debug_mode = parseInt(tmp_attribute_value);

        }

        if(tmp_attribute_value = this.load_setting_attribute('crnrstn_debug_logging_output_channel')){

            this.CRNRSTN_LOGGING_OUTPUT = tmp_attribute_value;

        }

        //
        // TTL MANAGEMENT.
        if(tmp_attribute_value = this.load_setting_attribute('crnrstn_page_load_ttl')){

            this.interact_ui_ttl_monitor_ARRAY['crnrstn_page_load_ttl'] = parseInt(tmp_attribute_value);
            //
            // this.ssdtl_response_data_container_ARRAY[tmp_attribute_value + '_0'] = tmp_attribute_value;
            //
            // this.initialize_ttl_tracking(tmp_attribute_value, 0);

        }

        if(tmp_attribute_value = this.load_setting_attribute('crnrstn_share_module_inactivity_close_ttl')){

            this.interact_ui_ttl_monitor_ARRAY['crnrstn_share_module_inactivity_close_ttl'] = parseInt(tmp_attribute_value);

        }

        if(tmp_attribute_value = this.load_setting_attribute('crnrstn_ssdtla_module_sync_ttl')){

            this.interact_ui_ttl_monitor_ARRAY['crnrstn_ssdtla_module_sync_ttl'] = parseInt(tmp_attribute_value);

        }

        if(tmp_attribute_value = this.load_setting_attribute('crnrstn_inactivity_refresh_ttl')){

            this.interact_ui_ttl_monitor_ARRAY['crnrstn_inactivity_refresh_ttl'] = parseInt(tmp_attribute_value);

        }

        //this.initialize_system_settings_ttl_tracking();

        //
        // DATE TIME STRINGS
        this.load_setting_attribute('crnrstn_interact_ui_month_abbrev');
        this.load_setting_attribute('crnrstn_interact_ui_month');
        this.load_setting_attribute('crnrstn_interact_ui_day_abbrev');
        this.load_setting_attribute('crnrstn_interact_ui_day');

    };

    CRNRSTN_JS.prototype.load_setting_attribute = function(sys_attribute){

        switch(sys_attribute){
            case 'crnrstn_interact_ui_month_abbrev':

                var tmp_data_piped = $('#' + sys_attribute).val();
                var tmp_data_ARRAY = tmp_data_piped.split('|');
                var tmp_data_cnt = tmp_data_ARRAY.length;

                for(i = 0; i < tmp_data_cnt; i++){

                    this.client_month_abbrev_ARRAY.push(tmp_data_ARRAY[i]);

                }

            break;
            case 'crnrstn_interact_ui_month':

                var tmp_data_piped = $('#' + sys_attribute).val();
                var tmp_data_ARRAY = tmp_data_piped.split('|');
                var tmp_data_cnt = tmp_data_ARRAY.length;

                for(i = 0; i < tmp_data_cnt; i++){

                    this.client_month_ARRAY.push(tmp_data_ARRAY[i]);

                }

            break;
            case 'crnrstn_interact_ui_day_abbrev':

                var tmp_data_piped = $('#' + sys_attribute).val();
                var tmp_data_ARRAY = tmp_data_piped.split('|');
                var tmp_data_cnt = tmp_data_ARRAY.length;

                for(i = 0; i < tmp_data_cnt; i++){

                    this.client_day_abbrev_ARRAY.push(tmp_data_ARRAY[i]);

                }

            break;
            case 'crnrstn_interact_ui_day':

                var tmp_data_piped = $('#' + sys_attribute).val();
                var tmp_data_ARRAY = tmp_data_piped.split('|');
                var tmp_data_cnt = tmp_data_ARRAY.length;

                for(i = 0; i < tmp_data_cnt; i++){

                    this.client_day_ARRAY.push(tmp_data_ARRAY[i]);

                }

            break;
            case 'crnrstn_interact_ui_ttl':

                var tmp_ttl_piped = $('#' + sys_attribute).val();
                var tmp_ttl_ARRAY = tmp_ttl_piped.split('|');
                var tmp_ttl_cnt = tmp_ttl_ARRAY.length;

                for(i = 0; i < tmp_ttl_cnt; i++){

                    this.interact_ui_ttl_monitor_ARRAY.push(tmp_ttl_ARRAY[i]);

                }

            break;
            default:

                var tmp_attribute_value = $('#' + sys_attribute).val();

                if(tmp_attribute_value.length > 0){

                    return tmp_attribute_value;

                }

                return false;

            break;

        }

    };

    CRNRSTN_JS.prototype.process_request_for_deep_link = function(){

        //
        // DOM INJECTION CHECK.
        if($('#crnrstn_interact_ui_deep_link_src').length){

            var tmp_page = $('#crnrstn_resource_initialize').val();
            this.get_pushed_autoscroll = this.http_get_data('crnrstn_autoscroll');

            if(tmp_page.length > 0){

                alert('[1024] load deep link :: ' + this.session_salt + '=[' + tmp_page + ']. crnrstn_autoscroll[' + this.get_pushed_autoscroll + '].');
                //alert('[1025] CONTENT BODY[' + $('#crnrstn_interact_ui_deep_link_src').html() + '].');

            }

        }

    };

    CRNRSTN_JS.prototype.crnrstn_data_tunnel_session_init = function(){

        this.crnrstn_rtime_timer = setTimeout.call("crnrstn_rtime_timer_interval()", 1000);
        clearTimeout(this.crnrstn_rtime_timer);

        this.start_client_rtime_timer();

    };

    CRNRSTN_JS.prototype.start_client_rtime_timer = function(){

        this.crnrstn_rtime_timer = setTimeout.call("crnrstn_rtime_timer_interval()", 1000);

    };

    //
    // SOURCE :: https://joe-riggs.com/blog/2012/05/javascript-count-up-timer-with-hours-minutes-second-hours-minutes/
    // AUTHOR :: Joe Riggs :: https://joe-riggs.com/blog/author/jriggs/
    CRNRSTN_JS.prototype.crnrstn_rtime_timer_cycle = function(){

        this.log_activity('[lnum 1186] Begin client cycling of a second. TTL delta=[' + this.ttl_age_seconds + ']', this.CRNRSTN_DEBUG_CONTROLS);

        this.ttl_age_seconds = this.ttl_age_seconds + 1;

        if(this.ttl_tunnel_monitor_seconds > -1){

            this.ttl_tunnel_monitor_seconds++;

        }

        var time_chunks = this.client_rtime.split(":");
        var hour, mins, secs;
        var hour_copy = '';
        var min_copy = '';
        var secs_copy = '';

        var temp_curr_date = new Date();
        this.client_millisecs = temp_curr_date.getMilliseconds();

        hour = Number(time_chunks[0]);
        mins = Number(time_chunks[1]);
        secs = Number(time_chunks[2]);
        secs++;

        if (secs === 60){
            secs = 0;
            mins = mins + 1;
        }

        if (mins === 60){
            mins = 0;
            hour = hour + 1;
        }

        //if (hour == 13){
        //	hour = 1;
        //}

        this.client_rtime_hour = hour;
        this.client_rtime_mins = this.plz(mins);
        this.client_rtime_secs = this.plz(secs);
        this.client_rtime = this.client_rtime_hour + ":" + this.client_rtime_mins + ":" + this.client_rtime_secs;

        //
        // TODO :: NEED TO POPULATE UNIT/UNITS FROM THE SSDTLA XML RESPONSE DATA FOR MULTI-LANGUAGE SUPPORT
        if (hour > 0) {

            hour_copy = hour + " hr";

            if (hour > 1) {

                hour_copy = hour_copy + "s";

            }

            hour_copy = hour_copy + " ";

        }

        //
        // TODO :: NEED TO POPULATE UNIT/UNITS FROM THE SSDTLA XML RESPONSE DATA FOR MULTI-LANGUAGE SUPPORT
        if (mins > 0) {

            min_copy = mins + " min";

            if (mins > 1) {

                min_copy = min_copy + "s";

            }

        }

        //
        // TODO :: NEED TO POPULATE UNIT/UNITS FROM THE SSDTLA XML RESPONSE DATA FOR MULTI-LANGUAGE SUPPORT
        if (secs > 0) {

            secs_copy = " " + secs + "." + this.client_millisecs + " secs";

        } else {

            secs_copy = " 0." + this.client_millisecs + " secs";

        }

        this.client_rtime_pretty = hour_copy + min_copy + secs_copy;

        //
        // PROCESS TTL
        this.process_data_tunnel_ttl();

        //
        // PROCESS UI STATE UPDATES
        this.execute_ui_sync_controller();

        //
        // UI DOM COMPONENT STAGE REFRESH
        this.refresh_stage_anchored_dom_component_css();

        if($('#crnrstn_ui_system_footer_stat_wtime').length){

            var curr_date_obj = new Date();

            $('#crnrstn_ui_system_footer_stat_wtime').html('[wtime' + this.return_log_date_string(curr_date_obj, 'sys_rtime') + ']');

        }

    };

    CRNRSTN_JS.prototype.refresh_stage_anchored_dom_component_css = function(){

        var search_mouse_out_listen = true;
        var share_component_mouse_out_listen = true;
        var search_listen_str = 'crnrstn_interact_ui_side_nav_search';
        var share_component_listen_str = 'crnrstn_module_share_component_wrapper';

        if(this.interact_ui_refresh_state_docs_bg === 'ENABLED'){

            this.size_element('crnrstn_documentation_dyn_shell_bg', 0);
            this.size_element('crnrstn_documentation_dyn_shell');
            this.size_element('crnrstn_documentation_dyn_content_shell', 250);
            this.size_element('crnrstn_interact_ui_full_doc_close', 250);

        }

        if(this.interact_ui_refresh_state_system_footer === 'ENABLED'){

            this.size_element('crnrstn_ui_system_footer');

        }

        if(this.crnrstn_overlay_mode !== 'OFF'){

            this.size_element('crnrstn_interact_ui_full_lightbox_overlay');

        }

        // 2022 Update:
        // document.elementsFromPoint() (Note the 's' in elements) is
        // compatible with all major browsers. It basically does the same
        // thing that elementFrompoint does, but retrieves all the
        // elements in DOM order.
        //
        // SOURCE :: https://stackoverflow.com/questions/8813051/determine-which-element-the-mouse-pointer-is-on-top-of-in-javascript
        // COMMENT :: https://stackoverflow.com/a/71458614
        // AUTHOR :: Reid :: https://stackoverflow.com/users/882445/reid
        this.CRNRSTN_INTERACT_UI_ELEM_AT_MOUSE = document.elementsFromPoint(this.CRNRSTN_INTERACT_UI_MOUSE.X, this.CRNRSTN_INTERACT_UI_MOUSE.Y);
        var tmp_elem_cnt = this.CRNRSTN_INTERACT_UI_ELEM_AT_MOUSE.length;

        for(let i = 0; i < tmp_elem_cnt; i++){

            var tmp_elemid = this.CRNRSTN_INTERACT_UI_ELEM_AT_MOUSE[i].id;
            if(tmp_elemid.length > 0){

                //
                // LISTEN FOR SEARCH.
                if(this.stripos(tmp_elemid, search_listen_str)){

                    search_mouse_out_listen = false;
                    //i = (tmp_elem_cnt * 2) + 1;

                }

                if(this.dom_element_mouse_state_ARRAY['share_module_click'] === 'OPEN'){

                    //
                    // LISTEN FOR DEEP LINK SHARE COMPONENT.
                    if(this.stripos(tmp_elemid, share_component_listen_str)) {

                        share_component_mouse_out_listen = false;
                        //i = (tmp_elem_cnt * 2) + 1;

                    }

                }

            }

        }

        if(this.dom_element_mouse_state_ARRAY['share_module_click'] === 'OPEN'){

            var tmp_share_component_ttl = this.get_resource('crnrstn_share_module_inactivity_close_ttl');
            if(share_component_mouse_out_listen){

                //
                // IF ANY DEEP LINK ARE OPEN...CLOSE.
                this.share_component_close_all();

            }else{

                //
                // PUNT TTL ON COMPONENT CLOSE. KEEP OPEN.
                this.add_resource('crnrstn_share_module_inactivity_close_ttl', 2);

            }

        }

        if(search_mouse_out_listen){

            this.search_glass_mouseout();

        }

        //
        // ALWAYS MAINTAIN A DESIRABLE BODY WIDTH.
        this.size_element('body');

        //
        // ALWAYS MAINTAIN A DESIRABLE NAVIGATION HEIGHT.
        if($('#crnrstn_interact_ui_side_nav').length){

            this.size_element_y('crnrstn_interact_ui_side_nav')

        }

    };

    CRNRSTN_JS.prototype.share_component_close_all = function(){

        var tmp_ttl = this.get_resource('crnrstn_share_module_inactivity_close_ttl');

        if(tmp_ttl < 0){

            this.dom_element_mouse_state_ARRAY['share_module_click'] = 'CLOSE';

            //
            // CLOSE ALL.
            //
            // SOURCE :: https://www.geeksforgeeks.org/how-to-dynamically-create-and-apply-css-class-in-javascript/
            var class_elem_set = document.querySelectorAll(".crnrstn_module_share_component_wrapper");

            // Apply CSS property to it
            for(var i = 0; i < class_elem_set.length; i++){

                //
                // PARSE OUT THE SERIAL. crnrstn_module_share_component_{SERIAL}
                var tmp_share_id_ARRAY = class_elem_set[i].id.split('crnrstn_module_share_component_');
                var tmp_cnt = tmp_share_id_ARRAY.length;
                for(iii = 0; iii < tmp_cnt; iii++){

                    if(tmp_share_id_ARRAY[iii].length > 0){

                        this.set_ui_component_state('share_module_click_' + tmp_share_id_ARRAY[iii], 'OFF');
                        document.getElementById("crnrstn_module_share_component_input_" + tmp_share_id_ARRAY[iii]).style.backgroundColor = "#FFF";
                        document.getElementById("crnrstn_module_share_component_copy_status_" + tmp_share_id_ARRAY[iii]).innerHTML = "";

                    }

                }

                if($(class_elem_set[i]).length){

                    if(parseInt(this.string_clean_css_px_int($(class_elem_set[i]).css('width'))) > 5){

                        $(class_elem_set[i]).animate({
                            opacity: 0
                        }, {
                            duration: 1000,
                            queue: false,
                            specialEasing: {
                                opacity: "swing"
                            },
                            complete: function(){

                                $(class_elem_set[i]).animate({
                                    width: 0,
                                    height: 0
                                }, {
                                    duration: 0,
                                    queue: false,
                                    specialEasing: {
                                        color: "swing"
                                    },
                                    complete: function () {

                                        $(class_elem_set[i]).animate({
                                            opacity: 1
                                        }, {
                                            duration: 0,
                                            queue: false,
                                            complete: function () {

                                            }

                                        });

                                    }

                                });

                            }

                        });

                    }

                }

            }

            //
            // RESET TTL TO TWO SECONDS.
            this.add_resource('crnrstn_share_module_inactivity_close_ttl', 2);

            return true;

        }

        tmp_ttl--;

        this.add_resource('crnrstn_share_module_inactivity_close_ttl', tmp_ttl);

    };

    CRNRSTN_JS.prototype.execute_ui_sync_controller = function(){

        var tmp_thread_id_cnt = this.transaction_thread_id_key_ARRAY.length;

        for(let i = 0; i < tmp_thread_id_cnt; i++){

            if(this.ui_sync_controller_thread_delay_ARRAY[this.transaction_thread_id_key_ARRAY[i]] > -1 ){

                var tmp_delay_secs = this.ui_sync_controller_thread_delay_ARRAY[this.transaction_thread_id_key_ARRAY[i]];

                if(tmp_delay_secs > 0){

                    tmp_delay_secs--;
                    this.ui_sync_controller_thread_delay_ARRAY[this.transaction_thread_id_key_ARRAY[i]] = tmp_delay_secs;

                }else{

                    if(tmp_delay_secs === 0){

                        //this.log_activity('[lnum 1088] FIRE! FIRE! FIRE! Executing ' + this.transaction_thread_id_key_ARRAY[i] + ' UI sync now. Looking forward to hearing from you! All the best, J5.', this.CRNRSTN_DEBUG_VERBOSE);

                        this.execution_delay_ui_sync_controller('fire', this.transaction_thread_id_key_ARRAY[i], false);

                        this.ui_sync_controller_thread_delay_ARRAY[this.transaction_thread_id_key_ARRAY[i]] = -1;

                    }

                }

            }

        }

    };

    CRNRSTN_JS.prototype.process_data_tunnel_ttl = function(){

        this.log_activity('[lnum 1539] Analyzing SSDTLA TTL.', this.CRNRSTN_DEBUG_CONTROLS);

        //
        // CHECK PAGE LOAD TTL
        if(this.ttl_age_seconds > this.interact_ui_ttl_monitor_ARRAY['crnrstn_page_load_ttl'] && this.interact_ui_ttl_monitor_ARRAY['crnrstn_page_load_ttl'] != -1){

            this.log_activity('[lnum 1545] CRNRSTN :: SOAP Services Data Tunnel Layer Architecture (SSDTLA) TTL EXPIRED - PAGE LOAD TTL (' + this.interact_ui_ttl_monitor_ARRAY['crnrstn_page_load_ttl'] + ' secs).', this.CRNRSTN_DEBUG_VERBOSE);
            this.fire_dom_state_controller();

            this.data_tunnel_ttl_monitor_isactive = false;
            this.ttl_tunnel_monitor_seconds = 1;
            this.ttl_age_seconds = -1;
            this.interact_ui_ttl_monitor_ARRAY['crnrstn_page_load_ttl'] = -1;

        }else{

            if(this.data_tunnel_ttl_monitor_isactive){

                //
                // DO NOT RUN UNTIL READY TO PROCESS XML DRIVEN TTL UPDATES
                // CHECK FOR THREAD ID TTL EXPIRE
                if(this.thread_id_ttl_expired()){

                    this.log_activity('[lnum 1562] CRNRSTN :: SOAP Services Data Tunnel Layer Architecture (SSDTLA) :: Generic State Management Request.', this.CRNRSTN_DEBUG_VERBOSE);   // CRNRSTN_DEBUG_BASIC
                    this.fire_dom_state_controller();

                    this.ttl_age_seconds = -1;
                    this.data_tunnel_ttl_monitor_isactive = false;
                    this.ttl_tunnel_monitor_seconds = 1;

                }

            }else{

                //
                // INACTIVITY REFRESH. SET TO 5 MIN (300s)?
                if(this.ttl_tunnel_monitor_seconds > parseInt(this.interact_ui_ttl_monitor_ARRAY['crnrstn_inactivity_refresh_ttl'])){

                    this.log_activity('[lnum 1577] CRNRSTN :: SOAP Services Data Tunnel Layer Architecture (SSDTLA) TTL EXPIRED - INACTIVITY REFRESH TTL (5 min).', this.CRNRSTN_DEBUG_VERBOSE);   // CRNRSTN_DEBUG_BASIC
                    this.fire_dom_state_controller();

                    this.ttl_age_seconds = -1;
                    this.data_tunnel_ttl_monitor_isactive = false;
                    this.ttl_tunnel_monitor_seconds = 1;

                }

            }

        }

    };

    CRNRSTN_JS.prototype.fire_dom_state_controller = function(){

        var self = this;
        var ssdtl_endpoint = $("#crnrstn_xhr_root").val();

        if(ssdtl_endpoint !== undefined && ssdtl_endpoint !== ''){

            //
            // SERIALIZATION FOR FORM DATA AND RESPONSE HANDLING
            this.initialize_transaction_serialization();

            var form = $("#crnrstn_soap_data_tunnel_frm");
            var dataString = $(form).serialize();

            this.log_activity('[lnum 1606] Sending CRNRSTN :: SOAP Services Data Tunnel Layer Packet (SSDTLP) in AJAX POST to [' + ssdtl_endpoint + '].', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
            this.log_activity('[lnum 1607] SSDTLP Serialization Key = [' + $('#' + this.form_input_serialization_key).val() + '].', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
            this.log_activity('[lnum 1608] SSDTLP ' + this.system_hash_algo + ' Hash = [' + $('#' + this.form_input_serialization_hash).val() + '].', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

            if($('#crnrstn_interact_ui_link_text_click').val() != ''){

                this.log_activity('[lnum 1612] SSDTLP [ACTION] = [' + $('#crnrstn_interact_ui_link_text_click').val() + '].', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

            }

            $.ajax({
                type: "POST",
                url: ssdtl_endpoint,
                data: dataString,
                dataType: 'xml',
                complete: this.parse_data_tunnel_response

            });

        }

    };

    CRNRSTN_JS.prototype.parse_data_tunnel_response = function(response_data){

        if(response_data !== undefined){

            var packet_dl_bytes = response_data.responseText.length;

            /*
            // USE THIS JUST TO GET AN IDEA OF HOW MANY EXTRA BYTES TO ADD.
            tmp_size_clean_pretty = self.format_bytes(tmp_size_clean, 3);

            //
            // ADD EXTRA BYTES FOR THE TEXT OF THE COUNT OF PAGE BYTES ABOUT TO BE INJECTED
            tmp_size_final = parseInt(tmp_size_clean) + new Blob([tmp_size_clean_pretty]).size;

            //
            // TAKE THIS FINAL NUMBER AND FORMAT IT FOR DISPLAY.
            tmp_size_final_pretty = self.format_bytes(tmp_size_final, 3);

            tmp_content_final = tmp_content.replace(/{CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_PAGE_SIZE}/g, tmp_size_final_pretty);
            //tmp_content_final = tmp_content.replace(tmp_pattern, tmp_size_final_pretty + ' chars');

            */

            tmp_size_final = new Blob([response_data.responseText]).size;
            tmp_size_final_pretty = oCRNRSTN_JS.format_bytes(tmp_size_final, 3);

            oCRNRSTN_JS.log_activity('[lnum 1655] Receiving ' + tmp_size_final_pretty + ' in POST response from CRNRSTN :: SOAP Services Data Tunnel Layer Architecture (SSDTLA).', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

            $('#crnrstn_ui_element_load_indicator').stop();

            var page_load_progress = $('#crnrstn_ui_element_load_indicator').css('top');
            $('#crnrstn_interact_ui_loadbar_progress').val(page_load_progress);
            //$('#crnrstn_interact_ui_pageload_stoptime').val(page_load_progress);

            oCRNRSTN_JS.receive_data_tunnel_response(response_data);

        }

    };

    CRNRSTN_JS.prototype.receive_data_tunnel_response = function(response_data){

        //
        // CONSUME XML RESPONSE DATA
        if(response_data.responseXML === undefined){

            var new_xml_obj;

            //
            // MOST LIKELY XML OBJECT CORRUPTION DUE TO BAD CHAR IN RETURN DOCUMENT.

            try{

                //
                // SOURCE :: https://stackoverflow.com/questions/3054108/how-to-convert-string-to-xml-object-in-javascript
                // COMMENT :: https://stackoverflow.com/a/3054210
                // AUTHOR :: Tim Down :: https://stackoverflow.com/users/96100/tim-down
                new_xml_obj = $.parseXML(response_data.responseText);

                //
                // ATTEMPT TO USE RE-PARSED XML OBJECT.
                this.consume_data_tunnel_response(new_xml_obj, 'XML');

            }catch(err){

                //
                // TODO :: REPORT DATA CORRUPTION ERROR. SAME MECHANISM CAN SYNC THEME PROFILE
                // CHANGES AT CLIENT...AND OTHER NON-RETURN TYPE ACTIONS.
                //alert('[lnum 1413] MOST LIKELY XML OBJECT CORRUPTION DUE TO BAD CHAR IN RETURN DOCUMENT.[' + err.message + '].');
                //$('#crnrstn_client_status').val('XML Error: response_data.responseXML undefined.');
                //$('#crnrstn_client_message').val('[lnum 1413] Most likely XML object corruption due to bad char in return document. ' + err.message);
                //this.send_client_report(str);
                //this.catch_exception(str);

            }

        }else{

            this.consume_data_tunnel_response(response_data.responseXML, 'XML');

        }

        //
        // SYSTEM DEFAULTS :: SETTINGS
        if(this.received_settings_data){

            this.received_settings_data = false;

        }

        //
        // SYNC CLIENT STATE TO THE FRESH XML
        tmp_data_signature_request_serial = this.return_data_tunnel_xml_data('data_signature_request_serial');
        tmp_data_signature_request_hash = this.return_data_tunnel_xml_data('data_signature_request_hash');

        //alert('[lnum 1291] XML data_signature_request_serial='+tmp_data_signature_request_serial);
        this.refresh_ui_state(tmp_data_signature_request_serial, tmp_data_signature_request_hash);

        $('#crnrstn_ui_element_load_indicator').animate({
            opacity: 1.0
        }, {
            duration: 150,
            queue: false,
            complete: function () {

            }

        });

    };

    //
    // SOURCE :: https://stackoverflow.com/questions/19491336/how-to-get-url-parameter-using-jquery-or-plain-javascript
    // COMMENT :: https://stackoverflow.com/a/21903119
    // AUTHOR :: Sameer Kazi :: https://stackoverflow.com/users/1897010/sameer-kazi
    CRNRSTN_JS.prototype.consume_http_get_data = function(){

        //
        // LOAD GET PARAMS
        var param_name = '';
        var param_data = '';
        var tmp_get_params = $('#crnrstn_interact_data_tunnel_get_params').val();

        if(tmp_get_params !== undefined){

            if(tmp_get_params.length > 0){

                var tmp_get_params_ARRAY = tmp_get_params.split('|');
                var tmp_param_cnt = tmp_get_params_ARRAY.length;

                for(var i = 0; i < tmp_param_cnt; i++){

                    if(tmp_get_params_ARRAY[i].length > 0){

                        param_name = tmp_get_params_ARRAY[i];
                        param_data = this.extract_http_get_param_data(tmp_get_params_ARRAY[i]);

                        this.consume_http_get_param_data(param_name, param_data, this.current_serialization_key);

                        this.log_activity('[lnum 1768] SUCCESS TEST CONTROL [' + param_name + ' = ' + this.http_get_data(param_name) + '].');

                        this.log_activity('[lnum 1770] ERR TEST CONTROL [' + this.http_get_data('ssssss12345678hgvs') + '].', );

                        if(this.http_get_data('ssssss12345678hgvs')){

                            this.log_activity('[lnum 1774] *THIS IS WHAT FAILURE LOOKS LIKE* ERR TEST BOOLEAN NEGATIVE [' + this.http_get_data('ssssss12345678hgvs') + '].', this.CRNRSTN_DEBUG_BASIC);

                        }

                        if(!this.http_get_data('ssssss12345678hgvs')){

                            this.log_activity('[lnum 1780] *SUCCESS* ERR TEST BOOLEAN NEGATIVE ![INVERTED] [' + this.http_get_data('ssssss12345678hgvs') + '].');

                        }

                        if(this.http_get_data(param_name)){

                            this.log_activity('[lnum 1786] *SUCCESS* ERR TEST BOOLEAN POSITIVE [' + this.http_get_data('ssssss12345678hgvs') + '].');

                        }

                        if(!this.http_get_data(param_name)){

                            this.log_activity('[lnum 1792] *THIS IS WHAT FAILURE LOOKS LIKE* ERR TEST BOOLEAN POSITIVE ![INVERTED] [' + this.http_get_data('ssssss12345678hgvs') + '].');

                        }

                    }

                }

            }

        }

    };

    //
    // SOURCE :: https://stackoverflow.com/questions/19491336/how-to-get-url-parameter-using-jquery-or-plain-javascript
    // COMMENT :: https://stackoverflow.com/a/21903119
    // AUTHOR :: Sameer Kazi :: https://stackoverflow.com/users/1897010/sameer-kazi
    CRNRSTN_JS.prototype.extract_http_get_param_data = function(sParam){

            var sPageURL = window.location.search.substring(1),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for(i = 0; i < sURLVariables.length; i++){

                sParameterName = sURLVariables[i].split('=');

                if(sParameterName[0] === sParam){

                    return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);

                }

            }

            return false;

    };

    CRNRSTN_JS.prototype.consume_http_get_param_data = function(param_name, param_data, current_serialization_key){

        this.http_get_data_container_ARRAY[param_name] = param_data;
        this.http_get_data_serialization_key_container_ARRAY[param_name] = current_serialization_key;

    };

    CRNRSTN_JS.prototype.http_get_data = function(param_name){

        if(this.http_get_data_container_ARRAY[param_name] !== undefined){

            return this.http_get_data_container_ARRAY[param_name];

        }

    };

    CRNRSTN_JS.prototype.consume_data_tunnel_response = function(response_data, data_type, serialize_response = false){

        switch(data_type){
            case 'XML':

                if(response_data === undefined){

                    this.log_activity('[lnum 1857] ERROR [undefined response_data] experienced on SSDTLA Response return for ' + data_type + '.', this.CRNRSTN_DEBUG_VERBOSE);
                    this.log_activity('[lnum 1858] Resending request SSDTLA request for ' + data_type + '.', this.CRNRSTN_DEBUG_VERBOSE);

                    tmp_cnt = this.ssdtla_xhr_request_attempt_count_ARRAY[data_type];
                    tmp_cnt = parseInt(tmp_cnt) + 1;
                    this.ssdtla_xhr_request_attempt_count_ARRAY[data_type] = tmp_cnt;

                    if(tmp_cnt <= this.max_xhr_retrys){

                        this.fire_dom_state_controller();

                    }

                }

                if(response_data === null){

                    this.log_activity('[lnum 1874] ERROR [NULL response_data] experienced on SSDTLA Response return for ' + data_type + '.', this.CRNRSTN_DEBUG_VERBOSE);
                    this.log_activity('[lnum 1875] SSDTLA Response [NULL] ERROR experienced on return for ' + data_type + '.', this.CRNRSTN_DEBUG_VERBOSE);

                    tmp_cnt = this.ssdtla_xhr_request_attempt_count_ARRAY[data_type];
                    tmp_cnt = parseInt(tmp_cnt) + 1;
                    this.ssdtla_xhr_request_attempt_count_ARRAY[data_type] = tmp_cnt;

                    if(tmp_cnt <= this.max_xhr_retrys){

                        this.fire_dom_state_controller();

                    }

                }

                if(response_data !== undefined && response_data !== null){

                    this.ssdtla_xhr_request_attempt_count_ARRAY[data_type] = 0;

                    var NODE_client_response = response_data.getElementsByTagName('client_response');
                    if(NODE_client_response.length > 0){

                        this.log_activity('[lnum 1896] Extracting ' + data_type + ' data from CRNRSTN :: SOAP Services Data Tunnel Layer (SSDTL) response.', this.CRNRSTN_DEBUG_VERBOSE);
                        this.consume_data_tunnel_xml_node(response_data, 'response_timestamp', 'client_response', 'timestamp' , serialize_response);

                        //
                        // RECEIVE NEW SOAP SERVICES DATA TUNNEL LAYER FORM PACKET SITUATION....SITUATION
                        this.consume_data_tunnel_xml_node(response_data, 'ssdtl_packet', 'soap_services_data_tunnel_layer_packet', '' , serialize_response);

                        //
                        // IF WE HAVE RESPONSE STATUS REPORT DATA
                        var NODE_data_signature = response_data.getElementsByTagName('data_signature');
                        var tmp_node_cnt = NODE_data_signature.length;
                        if (tmp_node_cnt > 0) {

                            for(let i = 0; i < tmp_node_cnt; i++){

                                this.log_activity('Extracting [data_signature] data from CRNRSTN :: SSDTL response.', this.CRNRSTN_DEBUG_CONTROLS);

                                this.consume_data_tunnel_xml_node(NODE_data_signature[i], 'data_signature_request_serial', 'request_serial', '' , true, i);
                                this.consume_data_tunnel_xml_node(NODE_data_signature[i], 'data_signature_request_hash', 'request_hash', '' , true, i);
                                this.consume_data_tunnel_xml_node(NODE_data_signature[i], 'jesus_christ_is_lord_bool', 'jesus_christ_is_lord', '' , true, i);
                                this.consume_data_tunnel_xml_node(NODE_data_signature[i], 'jesus_christ_is_lord_vv', 'jesus_christ_is_lord', 'source' , true, i);
                                this.consume_data_tunnel_xml_node(NODE_data_signature[i], 'satan_is_a_liar_bool', 'satan_is_a_liar', '' , true, i);
                                this.consume_data_tunnel_xml_node(NODE_data_signature[i], 'satan_is_a_liar_vv', 'satan_is_a_liar', 'source' , true, i);

                            }

                        }

                        //
                        // IF WE HAVE BROWSER STATE SYNC DATA
                        var NODE_state_synchronization_data = response_data.getElementsByTagName('state_synchronization_data');
                        if (NODE_state_synchronization_data.length > 0) {

                            this.log_activity('[lnum 1929] Extracting [state_synchronization_data] data from CRNRSTN :: SSDTL response.', this.CRNRSTN_DEBUG_CONTROLS);

                            this.consume_browser_state_sync_data(NODE_state_synchronization_data[0], serialize_response);

                        }

                        //
                        // IF WE HAVE RESPONSE STATUS REPORT DATA
                        var NODE_response_status = response_data.getElementsByTagName('response_status');
                        var tmp_node_cnt = NODE_response_status.length;
                        if (tmp_node_cnt > 0) {

                            for(let i = 0; i < tmp_node_cnt; i++){

                                this.log_activity('[lnum 1943] Extracting [response_status] data from CRNRSTN :: SSDTL response.', this.CRNRSTN_DEBUG_CONTROLS);

                                this.consume_response_status_data(NODE_response_status[i], serialize_response);

                            }

                        }

                        //
                        // RUNTIME
                        var NODE_runtime = response_data.getElementsByTagName('runtime');
                        var tmp_node_cnt = NODE_runtime.length;
                        if(tmp_node_cnt > 0){

                            for(let i = 0; i < tmp_node_cnt; i++){

                                this.log_activity('[lnum 1959] Extracting [runtime] data from CRNRSTN :: SSDTL response.', this.CRNRSTN_DEBUG_CONTROLS);

                                this.consume_response_runtime(NODE_runtime[i], serialize_response);

                            }

                        }

                        //
                        // CLIENT PROFILE DATA
                        var NODE_client_profile = response_data.getElementsByTagName('client_profile');
                        tmp_node_cnt = NODE_client_profile.length;
                        if (tmp_node_cnt > 0) {

                            for(let i = 0; i < tmp_node_cnt; i++){

                                this.log_activity('[lnum 1975] Extracting [client_profile] data from CRNRSTN :: SSDTL response.', this.CRNRSTN_DEBUG_CONTROLS);
                                this.consume_response_client_profile_data(NODE_client_profile[i], serialize_response);

                            }

                        }

                        //
                        // CRNRSTN :: INTERACT UI THEME PROFILE
                        var NODE_crnrstn_interact_ui_profile = response_data.getElementsByTagName('theme_profile_attribute');
                        tmp_node_cnt = NODE_crnrstn_interact_ui_profile.length;
                        if(tmp_node_cnt > 0){

                            for(let i = 0; i < tmp_node_cnt; i++){

                                //this.log_activity('[lnum 2194] Extracting [theme_profile_attribute] data from CRNRSTN :: SSDTLA response.', this.CRNRSTN_DEBUG_VERBOSE);
                                this.consume_response_crnrstn_interact_ui_defaults(NODE_crnrstn_interact_ui_profile[i], serialize_response);

                            }

                        }

                        //
                        // CRNRSTN :: INTERACT UI DATA
                        var NODE_crnrstn_interact_ui_profile = response_data.getElementsByTagName('crnrstn_interact_ui_profile');
                        tmp_node_cnt = NODE_crnrstn_interact_ui_profile.length;
                        if(tmp_node_cnt > 0){

                            for(let i = 0; i < tmp_node_cnt; i++){

                                //this.log_activity('[lnum 1487] Extracting [crnrstn_interact_ui_profile] data from CRNRSTN :: SSDTLA response.', this.CRNRSTN_DEBUG_VERBOSE);
                                this.consume_response_crnrstn_interact_ui_profile_data(NODE_crnrstn_interact_ui_profile[i], serialize_response);

                            }

                        }

                        //
                        // BASSDRIVE DATA
                        var NODE_bassdrive = response_data.getElementsByTagName('bassdrive');
                        tmp_node_cnt = NODE_bassdrive.length;
                        if (tmp_node_cnt > 0) {

                            for(let i = 0; i < tmp_node_cnt; i++){

                                this.log_activity('[lnum 2020] Extracting [bassdrive] data from CRNRSTN :: SSDTL response.', this.CRNRSTN_DEBUG_CONTROLS);
                                this.consume_response_bassdrive_data(NODE_bassdrive[i], serialize_response);

                            }

                        }

                        //
                        // LIFESTYLE IMAGE BANNER DATA
                        var NODE_lifestyle_banner = response_data.getElementsByTagName('lifestyle_banner');
                        tmp_node_cnt = NODE_lifestyle_banner.length;
                        if (tmp_node_cnt > 0) {

                            for(let i = 0; i < tmp_node_cnt; i++){

                                this.log_activity('[lnum 2035] Extracting [lifestyle_banner] data from CRNRSTN :: SSDTL response.', this.CRNRSTN_DEBUG_CONTROLS);

                                this.consume_response_lifestyle_banner_data(NODE_lifestyle_banner[i], serialize_response);

                            }

                        }

                        this.data_tunnel_ttl_monitor_isactive = true;
                        this.log_activity('[lnum 2044] CRNRSTN :: SSDTL response consumption is now complete.', this.CRNRSTN_DEBUG_VERBOSE);
                        this.log_activity('[lnum 2045] CRNRSTN :: SSDTL TTL monitoring for client state is now active.', this.CRNRSTN_DEBUG_VERBOSE);

                    }

                }

            break;
            case 'SOAP':

                //
                // CRNRSTN :: SOAP SERVICES DATA TUNNEL RAW SOAP RESPONSE TO BROWSER (EXPERIMENTAL)

            break;

        }

    };

    CRNRSTN_JS.prototype.return_data_tunnel_xml_data = function(nomination, index = 0){

        return this.ssdtl_response_data_container_ARRAY[nomination + '_' + index];

    };

    CRNRSTN_JS.prototype.return_xml_response_data_index = function(nomination){

        var tmp_index_cnt = 0;

        if(!(nomination in this.ssdtl_response_data_index_tracker_ARRAY)){

            this.ssdtl_response_data_index_tracker_ARRAY[nomination] = 1;
            tmp_index_cnt = this.ssdtl_response_data_index_tracker_ARRAY[nomination];

        }else{

            tmp_index_cnt = this.ssdtl_response_data_index_tracker_ARRAY[nomination];
            tmp_index_cnt = (tmp_index_cnt * 1) + 1;
            this.ssdtl_response_data_index_tracker_ARRAY[nomination] = tmp_index_cnt;

        }

        return tmp_index_cnt;

    };

    CRNRSTN_JS.prototype.get_xml_response_node_data = function(response_data, xml_nom, node_attribute_nom){

        var tmp_data = '';

        if(node_attribute_nom.length > 0){

            if(response_data.localName === xml_nom){

                tmp_data = response_data.getAttribute(node_attribute_nom);

            }else{

                var NODE_response_data = response_data.getElementsByTagName(xml_nom);

                if(NODE_response_data[0] != undefined){

                    tmp_data = NODE_response_data[0].getAttribute(node_attribute_nom);

                }

            }

        }else{

            tmp_len = response_data.childNodes.length;
            for(let i = 0; i < tmp_len; i++){

                var tmp_node = response_data.childNodes[i];
                if(tmp_node.nodeName === xml_nom){

                    tmp_data = tmp_node.textContent;
                    i = tmp_len + 1;

                }else{

                    if(tmp_node.nodeName === '#cdata-section'){

                        tmp_data = response_data.textContent;

                    }

                }

            }

        }

        return tmp_data;

    };

    CRNRSTN_JS.prototype.initialize_system_settings_ttl_tracking = function(){

        /*
        DOM ::
        crnrstn_inactivity_refresh_ttl

        */

        if($.inArray(nomination, this.interact_ui_ttl_monitor_ARRAY) >= 0){

            this.ttl_array_pointer_index_ARRAY.push(nomination + '_' + index);
            this.ttl_array_pointer_index_root_ARRAY[nomination + '_' + index] = nomination;

            this.log_activity('[lnum 2154] TTL tracking has been initialized for XML node [' + nomination + '] with index append of [\'_' + index + '\'] .', this.CRNRSTN_DEBUG_VERBOSE);

        }

    };

    CRNRSTN_JS.prototype.initialize_ttl_tracking = function(nomination, index){

        /*
        DOM ::
        crnrstn_inactivity_refresh_ttl

        XML ::
        bassdrive_is_live_ttl
        the_situation_with_bassdrive_ttl
        bassdrive_title_ttl
        bassdrive_locale_city_province_ttl
        bassdrive_locale_nation_ttl
        stream_relays_ttl
        social_media_connects_ttl
        relay_performance_ttl
        lifestyle_banner_ttl

        */

        if($.inArray(nomination, this.interact_ui_ttl_monitor_ARRAY) >= 0){

            this.ttl_array_pointer_index_ARRAY.push(nomination + '_' + index);
            this.ttl_array_pointer_index_root_ARRAY[nomination + '_' + index] = nomination;

            this.log_activity('[lnum 2184] TTL tracking has been initialized for XML node [' + nomination + '] with index append of [\'_' + index + '\'].', this.CRNRSTN_DEBUG_VERBOSE);

        }

    };

    CRNRSTN_JS.prototype.compile_jony5_lifestyle_banner_images = function(nomination, response_data){

        switch(nomination){
            case 'banner_img_uri':

                if(!(response_data in this.jony5_lifestyle_banner_index_ARRAY)){

                    var tmp_str = this.extract_filename(response_data);
                    this.log_activity('[lnum 2198] STORING CRNRSTN :: SSDTL RESPONSE XML DATA [' + tmp_str + '] FROM NODE ' + nomination + '.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                    this.jony5_lifestyle_banner_index_ARRAY[response_data] = 1;
                    this.jony5_lifestyle_banner_images_ARRAY.push(response_data);

                }else{

                    var tmp_str = this.extract_filename(response_data);
                    this.log_activity('[lnum 2206] SKIPPING CRNRSTN :: SSDTL RESPONSE REDUNDANT XML DATA [' + tmp_str + '] FROM NODE ' + nomination + '.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                }

            break;
            case 'banner_img_full_scrn_uri':

                //
                // FULL SCREEN EXPERIENCE
                if(!(response_data in this.jony5_lifestyle_banner_index_FULLSCREEN_ARRAY)){

                    var tmp_str = this.extract_filename(response_data);
                    this.log_activity('[lnum 2218] STORING CRNRSTN :: SSDTL RESPONSE XML DATA [' + tmp_str + '] FROM NODE ' + nomination + '.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                    this.jony5_lifestyle_banner_index_FULLSCREEN_ARRAY[response_data] = 1;
                    this.jony5_lifestyle_banner_images_FULLSCREEN_ARRAY.push(response_data);

                }else{

                    var tmp_str = this.extract_filename(response_data);
                    this.log_activity('[lnum 2226] SKIPPING REDUNDANT CRNRSTN :: SSDTL RESPONSE XML DATA [' + tmp_str + '] FROM NODE ' + nomination + '.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                }

            break;

        }

    };

    CRNRSTN_JS.prototype.consume_data_tunnel_xml_node = function(response_data, nomination, xml_nom, node_attribute_nom, serialize_response, index = 0){

        var tmp_data = this.get_xml_response_node_data(response_data, xml_nom, node_attribute_nom);

        tmp_data = tmp_data.trim();

        if(xml_nom === 'soap_services_data_tunnel_layer_packet'){

            if(tmp_data != ''){

                $("#crnrstn_soap_data_tunnel_form_shell").html(tmp_data);

            }

        }

        var tmp_index_cnt = this.return_xml_response_data_index(nomination);

        if(serialize_response == true){

            index = tmp_index_cnt;
            index--;

        }

        if((nomination == 'banner_img_uri' || nomination == 'banner_img_full_scrn_uri') && tmp_data != ''){

            this.compile_jony5_lifestyle_banner_images(nomination, tmp_data);

        }

        if(node_attribute_nom.length > 0){

            this.log_activity('[lnum 2269] Storing XML data (len='+ tmp_data.length +') attribute [' + node_attribute_nom + '] from XML node [' + xml_nom + '] as [' + nomination + '] with index append of [\'_' + index + '\'] .', this.CRNRSTN_DEBUG_CONTROLS);

        }else{

            this.log_activity('[lnum 2273] Storing XML node [' + xml_nom + '] data[' + tmp_data + '] (len='+ tmp_data.length +') as [' + nomination + '] with index append of [\'_' + index + '\'] .', this.CRNRSTN_DEBUG_CONTROLS);

        }

        if(tmp_data === 'undefined' || tmp_data === null){

            this.ssdtl_response_data_container_ARRAY[nomination + '_' + index] = '';

        }else{

            //
            // NOTE :: endpoint_url NEEDS URL DECODING BEFORE IMPLEMENTATION AT CLIENT
            this.ssdtl_response_data_container_ARRAY[nomination + '_' + index] = tmp_data;

        }

        this.initialize_ttl_tracking(nomination, index);

    };

    CRNRSTN_JS.prototype.consume_browser_state_sync_data = function(response_data, serialize_response){

        this.consume_data_tunnel_xml_node(response_data, 'response_serial', 'serial', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'request_timestamp', 'request_id', 'timestamp' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'request_id', 'request_id', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'response_server_runtime', 'server_runtime', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'request_authorization_key', 'request_authorization_key', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'request_locale_identifier', 'request_locale_identifier', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'request_referer', 'request_referer', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'client_id', 'client_id', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'client_auth_key', 'client_auth_key', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'server_name', 'server_name', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'server_ip_address', 'server_ip_address', '' , serialize_response);
        this.consume_data_tunnel_xml_node(response_data, 'client_ip_address', 'client_ip_address', '' , serialize_response);

    };

    CRNRSTN_JS.prototype.consume_response_status_data = function(response_data, serialize_response){

        var NODE_status_report = response_data.getElementsByTagName('status_report');
        var tmp_node_cnt = NODE_status_report.length;
        if(tmp_node_cnt > 0){

            for(let i = 0; i < tmp_node_cnt; i++){

                this.consume_data_tunnel_xml_node(NODE_status_report[i], 'target_element', 'target_element', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_status_report[i], 'status_code', 'status_code', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_status_report[i], 'status_message', 'status_message', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_status_report[i], 'is_error_code', 'is_error_code', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_status_report[i], 'is_error_message', 'is_error_message', '' , true, i);

            }

        }

    };

    CRNRSTN_JS.prototype.consume_response_runtime = function(response_data, serialize_response){

   //     this.consume_data_tunnel_xml_node(response_data, 'response_server_runtime', 'server_runtime', '' , serialize_response);

        this.runtime = response_data.innerHTML;
        //this.consume_data_tunnel_xml_node(response_data, 'runtime', 'runtime', '' , true);

    };

    CRNRSTN_JS.prototype.consume_response_client_profile_data = function(response_data, serialize_response){

        //
        // GLOBAL PRIVACY CONTROL
        var NODE_global_privacy_control = response_data.getElementsByTagName('global_privacy_control');
        var tmp_node_cnt = NODE_global_privacy_control.length;
        if(tmp_node_cnt > 0) {

            for(let i = 0; i < tmp_node_cnt; i++) {

                this.consume_data_tunnel_xml_node(NODE_global_privacy_control[i], 'sec_gpc', 'sec_gpc', '' , true, i);

            }

        }

        //
        // DEVICE TYPE
        var NODE_device_type = response_data.getElementsByTagName('device_type');
        tmp_node_cnt = NODE_device_type.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'device_type', 'device_type', '', serialize_response);

        }

        // //
        // // LANGUAGE
        // var NODE_global_privacy_control = response_data.getElementsByTagName('global_privacy_control');
        // var tmp_node_cnt = NODE_global_privacy_control.length;
        // if(tmp_node_cnt > 0) {
        //
        //     for (i = 0; i < tmp_node_cnt; i++) {
        //
        //         this.consume_data_tunnel_xml_node(NODE_global_privacy_control[i], 'sec_gpc', 'sec_gpc', '' , true, i);
        //
        //     }
        //
        // }

        //
        // LANGUAGE PREFERENCES
        var NODE_language = response_data.getElementsByTagName('language');
        tmp_node_cnt = NODE_language.length;
        if(tmp_node_cnt > 0){

            var NODE_language_preference = response_data.getElementsByTagName('language_preference');
            tmp_node_cnt = NODE_language_preference.length;

            for(let i = 0; i < tmp_node_cnt; i++){

                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_request_id_timestamp', 'request_id', 'timestamp' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_request_id', 'request_id', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_request_referer', 'request_referer', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_locale_identifier', 'locale_identifier', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_region_variant', 'region_variant', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_factor_weighting', 'factor_weighting', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_iso_language_nomination', 'iso_language_nomination', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_native_nomination', 'native_nomination', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_iso_639-1_2002', 'iso_639-1_2002', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_iso_639-2_1998', 'iso_639-2_1998', '' , true, i);
                this.consume_data_tunnel_xml_node(NODE_language_preference[i], 'language_preference_iso_639-3_2007', 'iso_639-3_2007', '' , true, i);

            }

        }

    };

    CRNRSTN_JS.prototype.consume_response_crnrstn_interact_ui_defaults = function(response_data, serialize_response){

        //
        // CRNRSTN :: INTERACT UI CONTENT
        /*
        <theme_profile_attribute>
            <theme_position>0</theme_position>
            <theme_nom is_active="0" display_position="0" const_str="CRNRSTN_UI_PHPNIGHT">PHP Night</theme_nom>
            <theme_integer>7051</theme_integer>
            <attribute_name>
                <![CDATA[highlight.string]]>
            </attribute_name>
            <attribute_value>
                <![CDATA[#54B33E]]>
            </attribute_value>
            <description>
                <![CDATA[#54B33E]]>
            </description>
        </theme_profile_attribute>

        */

        this.received_theme_data = true;

        var tmp_theme_position = this.get_xml_response_node_data(response_data, 'theme_position', '');
        var tmp_theme_title = this.get_xml_response_node_data(response_data, 'theme_nom', '');
        var tmp_theme_const_str = this.get_xml_response_node_data(response_data, 'theme_nom', 'const_str');
        var tmp_is_active = this.get_xml_response_node_data(response_data, 'theme_nom', 'is_active');
        var tmp_display_position = this.get_xml_response_node_data(response_data, 'theme_nom', 'display_position');
        var tmp_theme_integer = this.get_xml_response_node_data(response_data, 'theme_integer', '');
        var tmp_attribute_name = this.get_xml_response_node_data(response_data, 'attribute_name', '');
        var tmp_description = this.get_xml_response_node_data(response_data, 'description', '');

        //this.log_activity('[lnum 1914] Reading...' + tmp_theme_title + ': ' + tmp_attribute_name + ' from CRNRSTN :: SSDTLA XML response.', this.CRNRSTN_DEBUG_VERBOSE);

        //
        // CAPTURE DEFAULT FROM SERVER.
        if(tmp_is_active === '1' && this.current_theme === undefined){

            this.current_theme = tmp_theme_const_str;

        }

        //
        // INTIALIZATION CHECK :: RECORD THEME DISPLAY POSITION FOR UI SEQUENCE CONTROL IN SETTINGS.
        if(this.theme_display_position_flag_ARRAY === undefined){

            this.theme_display_position_flag_ARRAY[tmp_theme_const_str] = 1;
            this.consume_data_tunnel_xml_node(response_data, tmp_theme_const_str + '_display_position', 'theme_nom', 'display_position', serialize_response);

        }else{

            if(this.theme_display_position_flag_ARRAY[tmp_theme_const_str] === undefined){

                this.theme_display_position_flag_ARRAY[tmp_theme_const_str] = 1;
                this.consume_data_tunnel_xml_node(response_data, tmp_theme_const_str + '_display_position', 'theme_nom', 'display_position', serialize_response);

            }

        }

        tmp_attribute_name = tmp_theme_const_str + '_' + tmp_attribute_name;
        this.consume_data_tunnel_xml_node(response_data, tmp_attribute_name, 'attribute_value', '', serialize_response);

        /*
        array['CRNRSTN_UI_DARKNIGHT_stage.canvas.box-shadow.color'] = '#000';
        array['CRNRSTN_UI_PHPNIGHT_stage.canvas.box-shadow.color'] = '#FFF';

        color = get_theme_attribute('stage.canvas.box-shadow.color');

        function get_theme_attribute(attribute){

            color = this.current_theme + '_' + attribute;

        }

        */

    }

    CRNRSTN_JS.prototype.get_theme_attribute = function(attribute_name){

        return this.return_data_tunnel_xml_data(this.current_theme + '_' + attribute_name);

    };

    CRNRSTN_JS.prototype.consume_response_crnrstn_interact_ui_profile_data = function(response_data, serialize_response){

        /*
        <crnrstn_interact_ui_profile>
            <is_enabled>true</is_enabled>
            <is_visible>true</is_visible>
            <theme_configuration>
                <canvas z_index="60" window_edge_padding="20" outline_border_edge_line_width="2" outline_border_edge_line_style="solid" outline_border_edge_line_color="#767676" border_width="10" border_color="#FFF" border_opacity="0.3" background_color="#FFF" background_opacity="1" inner_content_edge_padding="25" checksum="1618734614"></canvas>
                <mini_canvas left="84%" width="100" height="70" checksum="956164994"></mini_canvas>
                <signin_canvas width="260" height="305" checksum="2313296795"></signin_canvas>
                <main_canvas width="1080" height="760" checksum="2023304991"></main_canvas>
                <eula_canvas width="700" height="400" checksum="592092546"></eula_canvas>
                <mit_license_canvas width="500" height="400" checksum="1854028937"></mit_license_canvas>
            </theme_configuration>

            <page_content><![CDATA[<div style="padding: 20px;"><h1>crnrstn_ui_html_manager::out_ui_module_html_documentation</h1></div>]]></page_content>
        </crnrstn_interact_ui_profile>

        */

        //
        // CRNRSTN :: INTERACT UI CONTENT
        // var NODE_crnrstn_interact_ui_documentation_content_src = response_data.getElementsByTagName('crnrstn_interact_ui_profile');
        // tmp_node_cnt = NODE_crnrstn_interact_ui_documentation_content_src.length;

        var module_content_node = '';
        var module_hash_node = '';
        var tmp_module_pipe_str = $('#crnrstn_interact_ui_module_programme').val();
        var tmp_module_ARRAY = tmp_module_pipe_str.split('|');
        var tmp_module_len = tmp_module_ARRAY.length;

        for(var i = 0; i < tmp_module_len; i++){

            module_content_node = tmp_module_ARRAY[i];
            module_hash_node = module_content_node + '_HASH';

            if($('#' + tmp_module_ARRAY[i]).length){

                //alert('[lnum 1658] [' + module_content_node + ']. [' + tmp_module_ARRAY[i] + '].');
                this.consume_data_tunnel_xml_node(response_data, module_content_node, module_content_node, '', serialize_response);
                this.consume_data_tunnel_xml_node(response_data, module_hash_node, module_hash_node, '', serialize_response);

            }

        }

        //
        // CRNRSTN :: INTERACT UI ENABLED
        var NODE_crnrstn_interact_ui_is_enabled = response_data.getElementsByTagName('is_enabled');
        tmp_node_cnt = NODE_crnrstn_interact_ui_is_enabled.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'crnrstn_interact_ui_is_enabled', 'is_enabled', '', serialize_response);

        }

        //
        // CRNRSTN :: INTERACT UI IS_VISIBLE
        var NODE_crnrstn_interact_ui_is_visible = response_data.getElementsByTagName('is_visible');
        tmp_node_cnt = NODE_crnrstn_interact_ui_is_visible.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'crnrstn_interact_ui_is_visible', 'is_visible', '', serialize_response);

        }

        //
        // CRNRSTN :: INTERACT UI THEME CONFIGURATION
        var NODE_theme_configuration = response_data.getElementsByTagName('theme_configuration');
        tmp_node_cnt = NODE_theme_configuration.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'canvas_z_index', 'canvas', 'z_index' , serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_window_edge_padding', 'canvas', 'window_edge_padding', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_outline_border_edge_line_width', 'canvas', 'outline_border_edge_line_width', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_outline_border_edge_line_style', 'canvas', 'outline_border_edge_line_style', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_outline_border_edge_line_color', 'canvas', 'outline_border_edge_line_color', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_border_width', 'canvas', 'border_width', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_border_color', 'canvas', 'border_color', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_border_opacity', 'canvas', 'border_opacity', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_background_color', 'canvas', 'background_color', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_background_opacity', 'canvas', 'background_opacity', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_inner_content_edge_padding', 'canvas', 'inner_content_edge_padding', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'canvas_checksum', 'canvas', 'checksum', serialize_response);

            this.consume_data_tunnel_xml_node(response_data, 'mini_canvas_left', 'mini_canvas', 'left', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'mini_canvas_width', 'mini_canvas', 'width', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'mini_canvas_height', 'mini_canvas', 'height', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'mini_canvas_checksum', 'mini_canvas', 'checksum', serialize_response);

            this.consume_data_tunnel_xml_node(response_data, 'signin_canvas_width', 'signin_canvas', 'width', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'signin_canvas_height', 'signin_canvas', 'height', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'signin_canvas_checksum', 'signin_canvas', 'checksum', serialize_response);

            this.consume_data_tunnel_xml_node(response_data, 'main_canvas_width', 'main_canvas', 'width', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'main_canvas_height', 'main_canvas', 'height', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'main_canvas_checksum', 'main_canvas', 'checksum', serialize_response);

            this.consume_data_tunnel_xml_node(response_data, 'eula_canvas_width', 'eula_canvas', 'width', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'eula_canvas_height', 'eula_canvas', 'height', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'eula_canvas_checksum', 'eula_canvas', 'checksum', serialize_response);

            this.consume_data_tunnel_xml_node(response_data, 'mit_license_canvas_width', 'mit_license_canvas', 'width', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'mit_license_canvas_height', 'mit_license_canvas', 'height', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'mit_license_canvas_checksum', 'mit_license_canvas', 'checksum', serialize_response);

        }

    };

    CRNRSTN_JS.prototype.consume_response_bassdrive_data = function(response_data, serialize_response){

        //
        // JSON SOURCE
        var NODE_json_log_id = response_data.getElementsByTagName('json_log_id');
        var tmp_node_cnt = NODE_json_log_id.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_json_log_id', 'json_log_id', '', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_json_log_id_url', 'json_log_id', 'url', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_json_log_id_timestamp', 'json_log_id', 'timestamp', serialize_response);

        }

        //
        // WEB PLAYER URL
        var NODE_web_player_url = response_data.getElementsByTagName('web_player_url');
        tmp_node_cnt = NODE_web_player_url.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_web_player_url', 'web_player_url', '', serialize_response);

        }

        //
        // IS LIVE
        var NODE_is_live = response_data.getElementsByTagName('is_live');
        tmp_node_cnt = NODE_is_live.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_is_live', 'is_live', '', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_is_live_ttl', 'is_live', 'ttl', serialize_response);

        }

        //
        // THE SITUATION WITH BASSDRIVE
        var NODE_the_situation_with_bassdrive = response_data.getElementsByTagName('the_situation_with_bassdrive');
        tmp_node_cnt = NODE_the_situation_with_bassdrive.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'the_situation_with_bassdrive_ttl', 'the_situation_with_bassdrive', 'ttl' , serialize_response);

            var NODE_likely_status = response_data.getElementsByTagName('likely_status');
            var tmp_node_cnt = NODE_likely_status.length;
            for(let i = 0; i < tmp_node_cnt; i++) {

                this.consume_data_tunnel_xml_node(NODE_likely_status[i], 'the_situation_with_bassdrive_likely_status', 'likely_status', '' , serialize_response, i);

            }

        }

        //
        // STREAM KEY
        var NODE_stream_key = response_data.getElementsByTagName('stream_key');
        tmp_node_cnt = NODE_stream_key.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_stream_key', 'stream_key', '', serialize_response);

        }

        //
        // RELAY STREAM TITLE
        var NODE_title = response_data.getElementsByTagName('title');
        tmp_node_cnt = NODE_title.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_title', 'title', '', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_title_ttl', 'title', 'ttl', serialize_response);

        }

        //
        // RELAY BROADCAST LOCALE
        var NODE_locale_city_province = response_data.getElementsByTagName('locale_city_province');
        tmp_node_cnt = NODE_locale_city_province.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_locale_city_province', 'locale_city_province', '', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_locale_city_province_ttl', 'locale_city_province', 'ttl', serialize_response);

        }

        //
        // RELAY BROADCAST LOCALE NATION
        var NODE_locale_nation = response_data.getElementsByTagName('locale_nation');
        tmp_node_cnt = NODE_locale_nation.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_locale_nation', 'locale_nation', '', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_locale_nation_ttl', 'locale_nation', 'ttl', serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_locale_nation_colors_url', 'locale_nation', 'url', serialize_response);

        }

        //
        // RELAY BROADCAST TITLE HTML
        var NODE_title_html = response_data.getElementsByTagName('title_html');
        tmp_node_cnt = NODE_title_html.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_title_html', 'title_html', '', serialize_response);

        }

        //
        // RELAY BROADCAST LOCALE HTML
        var NODE_locale_html = response_data.getElementsByTagName('locale_html');
        tmp_node_cnt = NODE_locale_html.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_locale_html', 'locale_html', '', serialize_response);

        }

        //
        // RELAY BROADCAST SOCIAL MEDIA HTML
        var NODE_social_html = response_data.getElementsByTagName('social_html');
        tmp_node_cnt = NODE_social_html.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'bassdrive_social_html', 'social_html', '', serialize_response);

        }

        //
        // RELAYS
        var NODE_stream_relays = response_data.getElementsByTagName('stream_relays');
        tmp_node_cnt = NODE_stream_relays.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'stream_relays_ttl', 'stream_relays', 'ttl' , serialize_response);

            var NODE_stream = NODE_stream_relays[0].getElementsByTagName('stream');
            var tmp_node_cnt = NODE_stream.length;
            for(let i = 0; i < tmp_node_cnt; i++) {

                this.consume_data_tunnel_xml_node(NODE_stream[i], 'stream_url', 'stream', 'url' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_stream[i], 'stream_url_ios', 'stream', 'url_ios' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_stream[i], 'stream_bitrate', 'bitrate', '' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_stream[i], 'stream_audio_format', 'audio_format', '' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_stream[i], 'stream_listener_count', 'listener_count', '' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_stream[i], 'stream_listener_count_percentage', 'listener_count_percentage', '' , serialize_response, i);

            }

        }

        //
        // SOCIAL MEDIA INTEGRATIONS
        var NODE_social_media_connects = response_data.getElementsByTagName('social_media_connects');
        tmp_node_cnt = NODE_social_media_connects.length;
        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'social_media_connects_ttl', 'social_media_connects', 'ttl' , serialize_response);

            var NODE_endpoint = NODE_social_media_connects[0].getElementsByTagName('endpoint');
            var tmp_node_cnt = NODE_endpoint.length;
            for(let i = 0; i < tmp_node_cnt; i++) {

                this.consume_data_tunnel_xml_node(NODE_endpoint[i], 'endpoint_type', 'endpoint', 'type' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_endpoint[i], 'endpoint_url', 'endpoint', 'url' , serialize_response, i);

            }

        }

        //
        // STREAM PERFORMANCE
        var NODE_performance = response_data.getElementsByTagName('performance');
        var tmp_node_cnt = NODE_performance.length;
        if(tmp_node_cnt > 0) {

            //
            // TTL
            this.consume_data_tunnel_xml_node(response_data, 'relay_performance_ttl', 'performance', 'ttl' , serialize_response);

            //
            // CURRENT STREAM PERFORMANCE
            var NODE_current_statistics = NODE_performance[0].getElementsByTagName('current_statistics');
            tmp_node_cnt = NODE_current_statistics.length;
            for(let i = 0; i < tmp_node_cnt; i++) {

                //
                // TIMESTAMP
                this.consume_data_tunnel_xml_node(NODE_current_statistics[0], 'current_connection_stat_timestamp', 'connection_stat', 'timestamp' , serialize_response);
                this.consume_data_tunnel_xml_node(NODE_current_statistics[0], 'current_connection_stat_json_log_id', 'connection_stat', 'json_log_id' , serialize_response);

                var NODE_current_connection_stat = NODE_current_statistics[0].getElementsByTagName('connection_stat');
                tmp_node_cnt = NODE_current_connection_stat.length;
                for(let ii = 0; ii < tmp_node_cnt; ii++) {

                    var NODE_current_stream_stat = NODE_current_connection_stat[ii].getElementsByTagName('stream_stat');
                    var tmp_node_cnt_inner = NODE_current_stream_stat.length;
                    for(let iii = 0; iii < tmp_node_cnt_inner; iii++) {

                        this.consume_data_tunnel_xml_node(NODE_current_stream_stat[iii], 'current_stream_stat_type', 'stream_stat', 'type' , serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_current_stream_stat[iii], 'current_stream_stat_connections', 'connections', '', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_current_stream_stat[iii], 'current_stream_stat_connections_capacity', 'connections', 'capacity', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_current_stream_stat[iii], 'current_stream_stat_bandwidth', 'bandwidth', '', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_current_stream_stat[iii], 'current_stream_stat_bandwidth_format', 'bandwidth', 'format', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_current_stream_stat[iii], 'current_stream_stat_bitrate', 'bitrate', '', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_current_stream_stat[iii], 'current_stream_stat_bitrate_format', 'bitrate', 'format', serialize_response, iii);

                    }

                }

            }

            //
            // RECENT STREAM PERFORMANCE
            //var ii = 0;
            var NODE_recent_statistics = NODE_performance[0].getElementsByTagName('recent_statistics');
            tmp_node_cnt = NODE_recent_statistics.length;
            for(let i = 0; i < tmp_node_cnt; i++) {

                //
                // TIMESTAMP
                this.consume_data_tunnel_xml_node(NODE_recent_statistics[0], 'recent_connection_stat_timestamp', 'connection_stat', 'timestamp' , serialize_response);

                var NODE_recent_connection_stat = NODE_recent_statistics[0].getElementsByTagName('connection_stat');
                tmp_node_cnt = NODE_recent_connection_stat.length;
                for(let ii = 0; ii < tmp_node_cnt; ii++) {

                    var NODE_recent_stream_stat = NODE_recent_connection_stat[ii].getElementsByTagName('stream_stat');
                    tmp_node_cnt_inner = NODE_recent_stream_stat.length;
                    for(let iii = 0; iii < tmp_node_cnt_inner; iii++) {

                        this.consume_data_tunnel_xml_node(NODE_recent_stream_stat[iii], 'recent_stream_stat_type', 'stream_stat', 'type' , serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_recent_stream_stat[iii], 'recent_stream_stat_connections', 'connections', '', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_recent_stream_stat[iii], 'recent_stream_stat_connections_capacity', 'connections', 'capacity', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_recent_stream_stat[iii], 'recent_stream_stat_bandwidth', 'bandwidth', '', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_recent_stream_stat[iii], 'recent_stream_stat_bandwidth_format', 'bandwidth', 'format', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_recent_stream_stat[iii], 'recent_stream_stat_bitrate', 'bitrate', '', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_recent_stream_stat[iii], 'recent_stream_stat_bitrate_format', 'bitrate', 'format', serialize_response, iii);

                    }

                }

            }

            //
            // HISTORICAL STREAM PERFORMANCE
            var NODE_historical_statistics = NODE_performance[0].getElementsByTagName('historical_statistics');
            var tmp_node_cnt_outer = NODE_historical_statistics.length;
            for(let i = 0; i < tmp_node_cnt_outer; i++) {

                var NODE_historical_connection_stat = NODE_historical_statistics[0].getElementsByTagName('connection_stat');
                tmp_node_cnt = NODE_historical_connection_stat.length;
                for(let ii = 0; ii < tmp_node_cnt; ii++) {

                    //
                    // TIMESTAMP
                    this.consume_data_tunnel_xml_node(NODE_historical_connection_stat[ii], 'historical_connection_stat_timestamp', 'connection_stat', 'timestamp' , serialize_response);

                    var NODE_historical_stream_stat = NODE_historical_connection_stat[ii].getElementsByTagName('stream_stat');
                    tmp_node_cnt_inner = NODE_historical_stream_stat.length;
                    for(let iii = 0; iii < tmp_node_cnt_inner; iii++) {

                        this.consume_data_tunnel_xml_node(NODE_historical_stream_stat[iii], 'historical_stream_stat_type', 'stream_stat', 'type' , serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_historical_stream_stat[iii], 'historical_stream_stat_connections', 'connections', '', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_historical_stream_stat[iii], 'historical_stream_stat_connections_capacity', 'connections', 'capacity', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_historical_stream_stat[iii], 'historical_stream_stat_bandwidth', 'bandwidth', '', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_historical_stream_stat[iii], 'historical_stream_stat_bandwidth_format', 'bandwidth', 'format', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_historical_stream_stat[iii], 'historical_stream_stat_bitrate', 'bitrate', '', serialize_response, iii);
                        this.consume_data_tunnel_xml_node(NODE_historical_stream_stat[iii], 'historical_stream_stat_bitrate_format', 'bitrate', 'format', serialize_response, iii);

                    }

                }

            }

        }

    };

    CRNRSTN_JS.prototype.consume_response_lifestyle_banner_data = function(response_data, serialize_response){

        //
        // BANNER
        var NODE_lifestyle_banner = response_data.getElementsByTagName('banner_img');
        var tmp_node_cnt = NODE_lifestyle_banner.length;

        if(tmp_node_cnt > 0) {

            this.consume_data_tunnel_xml_node(response_data, 'lifestyle_banner_ttl', 'lifestyle_banner', 'ttl' , serialize_response);
            this.consume_data_tunnel_xml_node(response_data, 'lifestyle_banner_ttl_count', 'lifestyle_banner', 'count' , serialize_response);

            for(let i = 0; i < tmp_node_cnt; i++) {

                this.consume_data_tunnel_xml_node(NODE_lifestyle_banner[i], 'banner_img_uri', 'banner_img', 'uri' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_lifestyle_banner[i], 'banner_img_full_scrn_uri', 'banner_img', 'full_scrn_uri' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_lifestyle_banner[i], 'banner_img_filesize', 'filesize', '' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_lifestyle_banner[i], 'banner_img_md5', 'filesize', 'md5' , serialize_response, i);
                this.consume_data_tunnel_xml_node(NODE_lifestyle_banner[i], 'banner_img_sha1', 'filesize', 'sha1' , serialize_response, i);

            }

        }

    };

    //
    // CRNRSTN_JS.prototype.update_dom_state_controller_ttl = function(thread_id_index) {
    //
    //     //
    //     // MODIFY FORM HIDDEN INPUT TO ACKNOWLEDGE EXPIRED TTL
    //
    //     /*
    //     CRNRSTN :: UI SOAP SERVICES DATA TUNNEL MODULE OUTPUT
    //     $tmp_str_array[] = '
    //     <div id="crnrstn_soap_data_tunnel_form_shell" class="hidden">
    //
    //     <form action="' . $this->crnrstn_http_endpoint.'soa/tunnel/" method="post" id="crnrstn_soap_data_tunnel_frm" name="crnrstn_soap_data_tunnel_frm" enctype="multipart/form-data">
    //
    //         <textarea id="crnrstn_soap_srvc_data" name="crnrstn_soap_srvc_data" cols="130" rows="5">SOAP_DATA_TUNNEL_LAYER_PACKET</textarea>
    //         <button type="submit">SUBMIT</button>
    //         <input type="hidden" id="crnrstn_request_serialization_key" name="crnrstn_request_serialization_key" value="">
    //         <input type="hidden" id="crnrstn_request_serialization_hash" name="crnrstn_request_serialization_hash" value="">
    //         <input type="hidden" id="crnrstn_ttl_expired_ui_threads" name="crnrstn_ttl_expired_ui_threads" value="">
    //         ' . $this->oCRNRSTN_USR->ui_content_module_out(CRNRSTN_UI_FORM_INTEGRATION_PACKET, 'crnrstn_soap_data_tunnel_form').'
    //
    //     </form>
    //
    //     </div>';
    //     */
    //
    //     //
    //     // CHECK FOR EXISTENCE OF TTL TO BE EXPIRED
    //     var tmp_ttl_expired_input_val_ARRAY = $('#crnrstn_ttl_expired_ui_threads').val().split('|');
    //     var input_val_str = '';
    //
    //     if($.inArray(thread_id_index, tmp_ttl_expired_input_val_ARRAY) >= 0){
    //
    //         //
    //         // NOTHING TO DO, WE ALREADY HAVE THE TTL RECORDED
    //
    //     }else{
    //
    //         var clean_thread_id_index = this.remove_trailing_underscored_index(thread_id_index);
    //         //debugger;
    //
    //         //
    //         // ADD NEW THREAD TTL TO SSDTL REQUEST
    //         tmp_ttl_expired_count = tmp_ttl_expired_input_val_ARRAY.length;
    //         for(let i = 0; i < tmp_ttl_expired_count; i++){
    //
    //             if(tmp_ttl_expired_input_val_ARRAY[i] !== ''){
    //
    //                 input_val_str += tmp_ttl_expired_input_val_ARRAY[i] + '|';
    //
    //             }
    //
    //         }
    //
    //         input_val_str += clean_thread_id_index + '|';
    //
    //         this.log_activity('The CRNRSTN :: SOAP SERVICES data tunnel layer has received a new TTL expired thread [' + clean_thread_id_index + '].', this.CRNRSTN_DEBUG_CONTROLS);
    //
    //         $('#crnrstn_ttl_expired_ui_threads').val(input_val_str);
    //
    //     }
    //
    // }

    CRNRSTN_JS.prototype.remove_trailing_underscored_index = function(str){

        //
        // I'M NOT DOING THIS WORK IN THE CLOUD.
        // xxxx_xxxx_xxx_0 <- REMOVE TRAILING INDEX FOR CLEAN SERVER PROCESSING.
        var clean_index_str = '';
        var tmp_clean_input_str_ARRAY = [];
        var tmp_str_ARRAY = str.split('_');
        var tmp_array_len = tmp_str_ARRAY.length;
        tmp_array_len--;
        for(let i = 0; i < tmp_array_len; i++){

            tmp_clean_input_str_ARRAY.push(tmp_str_ARRAY[i]);

        }

        tmp_array_len = tmp_clean_input_str_ARRAY.length;

        for(let i = 0; i < tmp_array_len; i++){

            if(clean_index_str === ''){

                clean_index_str = tmp_clean_input_str_ARRAY[i];

            }else{

                clean_index_str = clean_index_str + '_' + tmp_clean_input_str_ARRAY[i];

            }

        }

        return clean_index_str;

    };

    CRNRSTN_JS.prototype.array_adjust_ttl_value = function(thread_id_index){

        //
        // WHERE thread_id_index = 'xml_node_name' + '_' + array_increment
        tmp_xml_node_nomination = this.ttl_array_pointer_index_root_ARRAY[thread_id_index];
        tmp_ttl_secs = this.return_data_tunnel_xml_data(tmp_xml_node_nomination);
        //alert('[lnum 2955] ' + tmp_xml_node_nomination + ' [' + tmp_ttl_secs + '].');

        switch(tmp_xml_node_nomination){
            case 'lifestyle_banner_ttl':

                //
                // CURRENTLY, ONLY ONE USE CASE TO SUPPORT (GLOBAL/MACRO TTL AT TOP NODE).
                // THIS MAY CHANGE...WITH THE ADDITION OF MICRO-TTL'D REPORTING META ARRAY....E.G.
                if(!(tmp_xml_node_nomination in this.data_array_adjusted_ttl_ARRAY)){

                    tmp_count = this.return_data_tunnel_xml_data(tmp_xml_node_nomination + '_count');

                    //
                    // RULE OF THUMB IS TO EXPIRE TTL LEAVING A MINIMUM OF 15 SECONDS TO PROCESS RESPONSE FROM
                    // SERVER. SO, 10 IMAGES WITH 7 SEC TTL...HAS 55 SECS BEFORE TTL EXPIRE.
                    var tmp_ttl_buffer_secs = ((tmp_count * 1) * tmp_ttl_secs) - 15;

                    this.data_array_adjusted_ttl_ARRAY[tmp_xml_node_nomination] = tmp_ttl_buffer_secs;

                }else{

                    tmp_ttl_buffer_secs = this.data_array_adjusted_ttl_ARRAY[tmp_xml_node_nomination];

                    if(tmp_ttl_buffer_secs > -1){

                        tmp_ttl_buffer_secs--;
                        this.data_array_adjusted_ttl_ARRAY[tmp_xml_node_nomination] = tmp_ttl_buffer_secs;

                    }else{

                        tmp_count = this.return_data_tunnel_xml_data(tmp_xml_node_nomination + '_count');
                        var tmp_ttl_buffer_secs = ((tmp_count * 1) * tmp_ttl_secs) - 15;

                        this.data_array_adjusted_ttl_ARRAY[tmp_xml_node_nomination] = tmp_ttl_buffer_secs;

                    }

                }

                return tmp_ttl_buffer_secs;

            break;
            default:

                return tmp_ttl_secs;

            break;

        }

    };

    CRNRSTN_JS.prototype.thread_id_ttl_expired = function(){

        var tmp_ttl_expired = false;
        var tmp_array_adjusted_ttl = 0;

        //
        // BASED OFF TTL DATA FROM CONSUMED XML RESPONSE DOCUMENT
        tmp_ttl_cnt = this.ttl_array_pointer_index_ARRAY.length;
        for(let i = 0; i < tmp_ttl_cnt; i++){

            //tmp_array_adjusted_ttl = this.array_adjust_ttl_value(this.ttl_array_pointer_index_ARRAY[i], this.ssdtl_response_data_index_tracker_ARRAY[this.ttl_array_pointer_index_ARRAY[i]]);
            tmp_array_adjusted_ttl = this.array_adjust_ttl_value(this.ttl_array_pointer_index_ARRAY[i]);

            if((tmp_array_adjusted_ttl < this.ttl_age_seconds) && (tmp_array_adjusted_ttl > 0)){

                //
                // TTL IS EXPIRED. ADD TO CLIENT SYNC REQUEST.
                //this.update_dom_state_controller_ttl(this.ttl_array_pointer_index_ARRAY[i]);

                tmp_ttl_expired = true;

                this.log_activity('[lnum 3089] TTL for a data tunneled thread [' + this.ttl_array_pointer_index_ARRAY[i] + '] has been expired at ' + this.ttl_age_seconds + ' seconds, where the threshold is ' + tmp_array_adjusted_ttl + ' secs.', this.CRNRSTN_DEBUG_BASIC);

            }

        }

        tmp_ttl_cnt = this.interact_ui_ttl_monitor_ARRAY.length;
        for(let i = 0; i < tmp_ttl_cnt; i++){

            //tmp_ttl_cnt = this.interact_ui_ttl_monitor_ARRAY.length;
            if(this.interact_ui_ttl_monitor_ARRAY[i] !== undefined){

                //
                // THIS IS A UI ELEMENT MANAGED ELSEWHERE. NO NEED DATA TO REQUEST VIA SSDTLA FOR SHARE MODULE.
                if(this.interact_ui_ttl_monitor_ARRAY[i] !== 'crnrstn_share_module_inactivity_close_ttl'){

                    if((parseInt(this.interact_ui_ttl_monitor_ARRAY[this.interact_ui_ttl_monitor_ARRAY[i]]) < this.ttl_age_seconds)){

                        if(this.dom_element_mouse_state_ARRAY['share_module_click'] === 'OPEN'){

                            if(share_component_mouse_out_listen){

                                //
                                // IF ANY DEEP LINK ARE OPEN...CLOSE.
                                this.share_component_close_all();

                            }else{

                                //
                                // PUNT TTL ON COMPONENT CLOSE. KEEP OPEN.
                                this.add_resource('crnrstn_share_module_inactivity_close_ttl', 2);

                            }

                        }

                        //
                        // TTL IS EXPIRED. ADD TO CLIENT SYNC REQUEST.
                        //this.update_dom_state_controller_ttl(this.ttl_array_pointer_index_ARRAY[i]);
                        this.update_dom_state_controller_ttl(this.interact_ui_ttl_monitor_ARRAY[i]);

                        tmp_ttl_expired = true;
                        alert('[lnum 3131]: ' + this.interact_ui_ttl_monitor_ARRAY[i] + ': ttl = ' + parseInt(this.interact_ui_ttl_monitor_ARRAY[this.interact_ui_ttl_monitor_ARRAY[i]]));

                        this.log_activity('[lnum 3133] TTL for a data tunneled thread [' + this.ttl_array_pointer_index_ARRAY[i] + '] has been expired at ' + this.ttl_age_seconds + ' seconds, where the threshold is ' + tmp_array_adjusted_ttl + ' secs.', this.CRNRSTN_DEBUG_BASIC);

                    }

                }

            }

        }

        return tmp_ttl_expired;

    };

    CRNRSTN_JS.prototype.return_count_response_data = function(nomination){

        //
        // COUNT FOR LOOP CONTROL OF XML ARRAY DATA
        return this.ssdtl_response_data_index_tracker_ARRAY[nomination]

    };

    CRNRSTN_JS.prototype.update_thread_count = function(thread_id, delta, scheduler_invoked){

        if(!scheduler_invoked){

            tmp_cnt = this.transaction_thread_count_ARRAY[thread_id];
            tmp_cnt = tmp_cnt + (delta);
            this.transaction_thread_count_ARRAY[thread_id] = tmp_cnt;

            this.log_activity('[lnum 3163] UI sync controller transaction thread count updated to ' + tmp_cnt + ' with the initialization of [' + thread_id + '].', this.CRNRSTN_DEBUG_CONTROLS);

        }

    };

    CRNRSTN_JS.prototype.update_transaction_count = function(){

        this.transaction_count_ARRAY.push(this.current_serialization_key);
        this.transaction_ARRAY.push(this.current_serialization_key);

        if(this.transaction_count_ARRAY.length > 1){

            tmp_str = 'have';

        }else{

            tmp_str = 'has';

        }

        this.log_activity('1 out of ' + this.transaction_count_ARRAY.length + ' UI state sync transactions (serialization key=[' + this.current_serialization_key + ']) ' + tmp_str + ' been started.', this.CRNRSTN_DEBUG_BASIC);

    };

    CRNRSTN_JS.prototype.active_thread_count = function(tmp_thread_id = null){

        if(tmp_thread_id == null){

            //
            // TOTAL THREAD COUNT
            var tmp_thread_cnt = this.transaction_thread_id_key_ARRAY.length;
            for(let i = 0; i < tmp_thread_cnt; i++){

                tmp_thread_id = this.transaction_thread_id_key_ARRAY[i];
                tmp_cnt += this.transaction_thread_count_ARRAY[tmp_thread_id];

            }

        }else{

            //
            // THREAD COUNT OF ID
            if(tmp_thread_id in this.transaction_thread_count_ARRAY){

                tmp_cnt = this.transaction_thread_count_ARRAY[tmp_thread_id];

            }else{

                //
                // ERR IN SILENCE
                tmp_cnt = 0;

            }

        }

        return tmp_cnt;

    };

    CRNRSTN_JS.prototype.active_transaction_count = function(){

        if(this.transaction_count_ARRAY[this.current_serialization_key] != undefined){

            return this.transaction_count_ARRAY[this.current_serialization_key];

        }

        this.transaction_count_ARRAY[this.current_serialization_key] = 0;

        return this.transaction_count_ARRAY[this.current_serialization_key];

    };

    CRNRSTN_JS.prototype.initialize_transaction_serialization = function(){

        var tmp_serial = null;
        var request_serial = '';

        if(this.current_serialization_key.length > 5){

            tmp_serial = this.current_serialization_key;

        }

        if(tmp_serial == null){

            request_serial = this.generate_new_key();

        }else{

            if(tmp_serial.length < 1){

                request_serial = this.generate_new_key();

            }else{

                request_serial = tmp_serial;

            }

        }

        this.current_serialization_key = request_serial;
        this.current_serialization_hash = this.hash(request_serial);

        $('#' + this.form_input_serialization_key).val(this.current_serialization_key);
        $('#' + this.form_input_serialization_hash).val(this.current_serialization_hash);

        this.log_activity('[lnum 3273] Setting current_serialization_key to ' + request_serial + '.', this.CRNRSTN_DEBUG_VERBOSE);
        this.log_activity('[lnum 3274] Setting current_serialization_hash to ' + this.current_serialization_hash + '.', this.CRNRSTN_DEBUG_VERBOSE);

    };

    CRNRSTN_JS.prototype.authorize_transaction = function(request_serial, request_hash, max_concurrent = 1, redundancy_ok = false, expire_checksum_hold_ttl = null){

        tmp_transaction_is_authorized = true;
        tmp_active_count = this.active_transaction_count();

        if(redundancy_ok){

            if(tmp_active_count >= max_concurrent){

                tmp_transaction_is_authorized = false;

            }

        }else{

            if((this.current_serialization_key == request_serial) && (this.current_serialization_hash == request_hash) && (this.hash(request_serial) == request_hash)){

                if(tmp_active_count >= max_concurrent){

                    tmp_transaction_is_authorized = false;

                }

            }else{

                tmp_transaction_is_authorized = false;

            }

        }

        return tmp_transaction_is_authorized;

    };

    CRNRSTN_JS.prototype.crnrstn_interact_ui_canvas_theme_sync = function(){
        /*
        <canvas
        z_index="60"
        window_edge_padding="20"
        outline_border_edge_line_width="2"
        outline_border_edge_line_style="solid"
        outline_border_edge_line_color="#767676"
        border_width="10"
        border_color="#FFF"
        border_opacity="0.3"
        background_color="#FFF"
        background_opacity="1"
        inner_content_edge_padding="25"
        checksum="1618734614">
        </canvas>

        this.containerPadding = {
            top: parseInt(this.$container.css('padding-top'), 10),
            right: parseInt(this.$container.css('padding-right'), 10),
            bottom: parseInt(this.$container.css('padding-bottom'), 10),
            left: parseInt(this.$container.css('padding-left'), 10)
        };

        this.imageBorderWidth = {
            top: parseInt(this.$image.css('border-top-width'), 10),
            right: parseInt(this.$image.css('border-right-width'), 10),
            bottom: parseInt(this.$image.css('border-bottom-width'), 10),
            left: parseInt(this.$image.css('border-left-width'), 10)
        */


        tmp_canvas_z_index = this.return_data_tunnel_xml_data('canvas_z_index');
        this.baseline_z_index = tmp_canvas_z_index;
        tmp_canvas_window_edge_padding = this.return_data_tunnel_xml_data('canvas_window_edge_padding');

        tmp_canvas_outline_border_edge_line_width = this.return_data_tunnel_xml_data('canvas_outline_border_edge_line_width');
        tmp_canvas_outline_border_edge_line_style = this.return_data_tunnel_xml_data('canvas_outline_border_edge_line_style');
        tmp_canvas_outline_border_edge_line_color = this.return_data_tunnel_xml_data('canvas_outline_border_edge_line_color');

        tmp_canvas_border_width = this.return_data_tunnel_xml_data('canvas_border_width');
        tmp_canvas_border_color = this.return_data_tunnel_xml_data('canvas_border_color');
        tmp_canvas_border_opacity = this.return_data_tunnel_xml_data('canvas_border_opacity');

        tmp_canvas_background_color = this.return_data_tunnel_xml_data('canvas_background_color');
        tmp_canvas_background_opacity = this.return_data_tunnel_xml_data('canvas_background_opacity');

        tmp_canvas_inner_content_edge_padding = this.return_data_tunnel_xml_data('canvas_inner_content_edge_padding');

        tmp_canvas_checksum = this.return_data_tunnel_xml_data('canvas_checksum');

        //
        // PRIMARY NAVIGATION DISPLAY CASE Z-INDEX INIT
        tmp_tgt_z = parseInt(this.baseline_z_index) + 10;
        $('#crnrstn_interact_ui_primary_nav_img_shell_menu_glass_case').css('zIndex', parseInt(tmp_tgt_z));
        $('#crnrstn_interact_ui_primary_nav_img_shell_close_x_glass_case').css('zIndex', parseInt(tmp_tgt_z));
        $('#crnrstn_interact_ui_primary_nav_img_shell_fs_expand_glass_case').css('zIndex', parseInt(tmp_tgt_z));
        $('#crnrstn_interact_ui_primary_nav_img_shell_minimize_glass_case').css('zIndex', parseInt(tmp_tgt_z));

        $('#crnrstn_interact_ui_wrapper').css('zIndex', parseInt(this.baseline_z_index));

        $('#crnrstn_interact_ui_wrapper').css('padding-top', parseInt(tmp_canvas_window_edge_padding));
        $('#crnrstn_interact_ui_wrapper').css('padding-right', parseInt(tmp_canvas_window_edge_padding));
        $('#crnrstn_interact_ui_wrapper').css('padding-bottom', parseInt(tmp_canvas_window_edge_padding));
        $('#crnrstn_interact_ui_wrapper').css('padding-left', parseInt(tmp_canvas_window_edge_padding));

        // border: 2px solid #767676;
        $('#crnrstn_interact_ui_bg_border').css('border-top-width', parseInt(tmp_canvas_outline_border_edge_line_width));
        $('#crnrstn_interact_ui_bg_border').css('border-right-width', parseInt(tmp_canvas_outline_border_edge_line_width));
        $('#crnrstn_interact_ui_bg_border').css('border-bottom-width', parseInt(tmp_canvas_outline_border_edge_line_width));
        $('#crnrstn_interact_ui_bg_border').css('border-left-width', parseInt(tmp_canvas_outline_border_edge_line_width));
        $('#crnrstn_interact_ui_bg_border').css('borderStyle', tmp_canvas_outline_border_edge_line_style);
        $('#crnrstn_interact_ui_bg_border').css('borderColor', tmp_canvas_outline_border_edge_line_color);
        $('#crnrstn_interact_ui_bg_border').css('opacity', tmp_canvas_border_opacity);
        $('#crnrstn_interact_ui_bg_border').css('backgroundColor', tmp_canvas_border_color);

        //crnrstn_interact_ui_bg_border_edge
        $('#crnrstn_interact_ui_bg_border_edge').css('border-top-width', parseInt('1'));
        $('#crnrstn_interact_ui_bg_border_edge').css('border-right-width', parseInt('1'));
        $('#crnrstn_interact_ui_bg_border_edge').css('border-bottom-width', parseInt('1'));
        $('#crnrstn_interact_ui_bg_border_edge').css('border-left-width', parseInt('1'));
        $('#crnrstn_interact_ui_bg_border_edge').css('borderStyle', 'solid');
        $('#crnrstn_interact_ui_bg_border_edge').css('borderColor', '#FFF');
        $('#crnrstn_interact_ui_bg_border_edge').css('opacity', '0.5');
        $('#crnrstn_interact_ui_bg_border_edge').css('backgroundColor', 'transparent');

        $('#crnrstn_interact_ui_bg_solid').css('backgroundColor', tmp_canvas_background_color);
        $('#crnrstn_interact_ui_bg_solid').css('width', 80);
        $('#crnrstn_interact_ui_bg_solid').css('height', 50);

        //$('#crnrstn_interact_ui_bg_solid').css('opacity', tmp_canvas_background_opacity);
        //$('#crnrstn_interact_ui_bg_solid').css('margin-top', parseInt(tmp_canvas_border_width) - parseInt(tmp_canvas_outline_border_edge_line_width));
        //$('#crnrstn_interact_ui_bg_solid').css('margin-left', parseInt(tmp_canvas_border_width) - parseInt(tmp_canvas_outline_border_edge_line_width));
        //$('#crnrstn_interact_ui_bg_solid').css('margin-left', parseInt(10));

        $('#crnrstn_interact_ui_content_wrapper').css('padding-top', parseInt(tmp_canvas_inner_content_edge_padding));
        $('#crnrstn_interact_ui_content_wrapper').css('padding-left', parseInt(tmp_canvas_inner_content_edge_padding));

        this.canvas_border_calibrate($('#crnrstn_interact_ui_wrapper'), $('#crnrstn_interact_ui_bg_border'), $('#crnrstn_interact_ui_bg_solid'), $('#crnrstn_interact_ui_bg_border_edge'), tmp_canvas_border_width);

        /*
        XML
        <crnrstn_interact_ui_profile>
            <is_enabled>true</is_enabled>
            <is_visible>true</is_visible>
            <theme_configuration>
                <canvas z_index="60" window_edge_padding="20" outline_border_edge_line_width="2" outline_border_edge_line_style="solid" outline_border_edge_line_color="#767676" border_width="10" border_color="#FFF" border_opacity="0.3" background_color="#FFF" background_opacity="1" inner_content_edge_padding="25" checksum="1618734614"></canvas>

                <mini_canvas left="84%" width="100" height="70" checksum="956164994"></mini_canvas>
                <signin_canvas width="260" height="305" checksum="2313296795"></signin_canvas>
                <main_canvas width="1080" height="760" checksum="2023304991"></main_canvas>
                <eula_canvas width="700" height="400" checksum="592092546"></eula_canvas>
                <mit_license_canvas width="500" height="400" checksum="1854028937"></mit_license_canvas>

            </theme_configuration>
        </crnrstn_interact_ui_profile>

        CSS
        .crnrstn_interact_ui_wrapper                    { position:-webkit-sticky; position: sticky; bottom:5px; z-index: 60; width: 100px; left: 84%; height: 70px; padding: 0 0 20px 0; left:-3000px; width:0; height: 0; overflow: hidden;}
        .crnrstn_interact_ui                            { }
        .crnrstn_interact_ui_bg_border                  { position: absolute; width:100px; height: 70px; border: 2px solid #767676; background-color: #FFF; opacity: 0.3; }
        .crnrstn_interact_ui_bg_solid                   { position: absolute; width: 85px; height:46px; background-color: #FFF; opacity: 1; margin: 8px; padding: 11px 0 0 2px; cursor:pointer; }

        .crnrstn_interact_ui_content_wrapper         { position: absolute; display: none; z-index: 61; padding: 25px 0 0 25px; }
        .crnrstn_interact_ui_content_wrapper input   { text-align: left; font-size: 20px; width: 208px; height: 34px; border:2px solid #676767; background-color: #FFF;}
        .crnrstn_interact_ui_signin_frm_lbl             { text-align: left; font-size: 20px;}
        .crnrstn_interact_ui_signin_frm_chkbx_eula      { float: left; width: 16px;}
        .crnrstn_interact_ui_signin_frm_lbl_eula        { float: left; width: 80px; font-size: 18px; padding:7px 0 0 0; cursor: pointer;}
        .crnrstn_interact_ui_signin_frm_lbl_eula a      { text-decoration: none; color: #0066CC; text-decoration: underline;}
        .crnrstn_interact_ui_frm_submit                 { width: 115px; height: 37px; background-color: #FFF; border: 2px solid #5C98EB; cursor:pointer; }
        .crnrstn_interact_ui_signin_frm_btn_submit      { text-align: left; font-size: 20px; color: #5C98EB; font-weight: bold; padding: 7px 0 0 17px; cursor:pointer;}

        HTML
        <div id="crnrstn_interact_ui_wrapper" class="crnrstn_interact_ui_wrapper">
            <div class="crnrstn_interact_ui">
                <div id="crnrstn_interact_ui_bg_border" class="crnrstn_interact_ui_bg_border"></div>
                <div id="crnrstn_interact_ui_bg_solid" class="crnrstn_interact_ui_bg_solid" onclick="oCRNRSTN_JS.sign_in_transition_via_micro_expansion();">
                    ' . $this->return_creative('MESSAGE_CONVERSATION_BUBBLE_MICRO_THUMB_BLUE00', CRNRSTN_HTML) . '
                    <div class="crnrstn_cb"></div>
                </div>
                <div id="crnrstn_interact_ui_content_wrapper" class="crnrstn_interact_ui_content_wrapper">
                    <div id="crnrstn_interact_ui_signin_frm_username" class="crnrstn_interact_ui_signin_frm_lbl">' . $this->oCRNRSTN->multi_lang_content_return('FORM_LABEL_USERNAME') . '</div>
                    <div class="crnrstn_cb_5"></div>
                    <input type="text" name="username" value="">
                    <div class="crnrstn_cb_15"></div>
                    <div id="crnrstn_interact_ui_signin_frm_password" class="crnrstn_interact_ui_signin_frm_lbl">' . $this->oCRNRSTN->multi_lang_content_return('FORM_LABEL_PASSWORD_OPTIONAL') . '</div>
                    <div class="crnrstn_cb_5"></div>
                    <input type="password" name="password" value="">
                    <div class="crnrstn_cb_10"></div>

                    <div class="crnrstn_interact_ui_signin_frm_chkbx_eula"><input type="checkbox" style="width: 20px;" name="crnrstn_signin_chkbx_eula_accept" value="eula_i_agree"></div>
                    <div class="crnrstn_interact_ui_signin_frm_lbl_eula"><a href="#">EULA</a></div>

                    <div class="crnrstn_cb_10"></div>

                    <div class="crnrstn_interact_ui_frm_submit" onclick="oCRNRSTN_JS.sign_in_form_submit_via_micro_expansion();">
                        <div id="crnrstn_interact_ui_signin_frm_btn_submit" class="crnrstn_interact_ui_signin_frm_btn_submit">' . $this->oCRNRSTN->multi_lang_content_return('FORM_BUTTON_TEXT_CONNECT') . '</div>
                    </div>
                </div>
            </div>
        </div>

        */

    };

    CRNRSTN_JS.prototype.canvas_border_calibrate = function(elem_wrap, elem_bg, elem_bg_solid, elem_bg_edge, border_width){

        tmp_left = this.return_data_tunnel_xml_data(this.crnrstn_interact_ui_mode + '_left');
        tmp_width = this.return_data_tunnel_xml_data(this.crnrstn_interact_ui_mode + '_width');
        tmp_height = this.return_data_tunnel_xml_data(this.crnrstn_interact_ui_mode + '_height');

        tmp_target_net_border_width = parseInt(border_width) * 2;
        tmp_target_delta_border_width = parseInt(border_width) / 2;

        tmp_inner_width = tmp_width - tmp_target_net_border_width;
        tmp_inner_height = tmp_height - tmp_target_net_border_width;

        //
        // SYNC TO WIDTH AND HEIGHT
        elem_wrap.css('left', tmp_left);
        elem_wrap.css('width', parseInt(tmp_width));
        elem_wrap.css('height', parseInt(tmp_height));

        elem_bg.css('width', parseInt(tmp_width));
        elem_bg.css('height', parseInt(tmp_height));

        elem_bg_edge.css('width', parseInt(tmp_width));
        elem_bg_edge.css('height', parseInt(tmp_height));
        elem_bg_edge.css('margin-top', parseInt(1));
        elem_bg_edge.css('margin-left', parseInt(1));

        //elem_bg_solid.css('width', parseInt(tmp_inner_width));
        //elem_bg_solid.css('height', parseInt(tmp_inner_height));
        elem_bg_solid.css('width', parseInt(78));
        elem_bg_solid.css('height', parseInt(45));

        elem_bg_solid.css('padding-top', parseInt(tmp_target_delta_border_width + 2));
        //elem_bg_solid.css('padding-left', parseInt(tmp_target_delta_border_width + 2));
        elem_bg_solid.css('padding-left', parseInt(tmp_target_delta_border_width + 2));

        elem_wrap.css('opacity', 0);

    };

    CRNRSTN_JS.prototype.crnrstn_interact_ui_canvas_mode_sync = function(){

        this.crnrstn_interact_ui_is_visible(this.return_data_tunnel_xml_data('crnrstn_interact_ui_is_visible'));

    };

    CRNRSTN_JS.prototype.crnrstn_interact_ui_is_visible = function(is_visible){

        switch(is_visible){
            case 'true':

                // show
                this.crnrstn_interact_ui_is_visible_show();

            break;
            default:

                //false
                //this.crnrstn_interact_ui_is_visible_hide();

            break;
        }

    };

    CRNRSTN_JS.prototype.crnrstn_interact_ui_is_visible_show = function(){

        $( "#crnrstn_interact_ui_wrapper").animate({
            opacity: 1.0
        }, {
            duration: 250,
            queue: false,
            specialEasing: {
                opacity: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

            }
        });

    };

    CRNRSTN_JS.prototype.crnrstn_ui_hide_ssdtla_debug = function(){

        $( "#crnrstn_activity_log").animate({
            opacity: 0,
            height: 0
        }, {
            duration: 1500,
            queue: false,
            specialEasing: {
                opacity: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

                $( "#crnrstn_activity_log_output_wrapper").animate({
                    height: 0
                }, {
                    duration: 500,
                    queue: false,
                    specialEasing: {
                        height: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }

                });

            }

        });

        $( "#crnrstn_activity_log_output_title").animate({
            opacity: 0,
            height: 0
        }, {
            duration: 1000,
            queue: false,
            specialEasing: {
                opacity: "swing"
            },
            complete: function () {

                $('#crnrstn_activity_log_output_lnk_wrapper').html('');

            }
        });

    };

    CRNRSTN_JS.prototype.execute_ui_sync = function(ui_thread_id){

        var self = this;

        switch(ui_thread_id){
            case 'crnrstn_interact_ui':

                //
                // LOAD CRNRSTN :: INTERACT UI MODULES
                var tmp_module_keys = $('#crnrstn_interact_ui_module_programme').val();
                var tmp_module_key_ARRAY = tmp_module_keys.split('|');
                var module_cnt = tmp_module_key_ARRAY.length;

                for(var i = 0; i < module_cnt; i++){

                    /*
                    crnrstn_interact_ui_mit_license_src
                    crnrstn_interact_ui_documentation_content_src
                    crnrstn_interact_ui_documentation_side_nav_src
                    crnrstn_interact_ui_system_footer_src
                    crnrstn_interact_ui_search_src
                    crnrstn_interact_ui_messenger_src
                    crnrstn_interact_ui_documentation_view_source_src

                    interact_ui_animation_sequence = function(module_key)

                    */

                    //
                    // IF MODULE SHELL IS PRESENT IN DOM, REQUEST CONTENT FROM SERVER.
                    //alert('Do we have crnrstn_interact_ui_documentation_content_src? [' + tmp_module_key_ARRAY[i] + ']');
                    if($('#' + tmp_module_key_ARRAY[i]).length){

                        //
                        // INITIALIZE FLAG.
                        this.expire_content_hash_invalid_ARRAY[tmp_module_key_ARRAY[i] + '_' + this.current_page_key] = false;

                        //
                        // GET CONTENT HASH FROM SSDTLA XML RESPONSE.
                        var tmp_hash = this.return_data_tunnel_xml_data(tmp_module_key_ARRAY[i] + '_HASH');

                        if(this.loaded_content_hash_ARRAY[tmp_module_key_ARRAY[i] + '_' + this.current_page_key] !== undefined){

                            var curr_hash = this.loaded_content_hash_ARRAY[tmp_module_key_ARRAY[i] + '_' + this.current_page_key];

                            if(curr_hash !== tmp_hash){

                                this.expire_content_hash_invalid_ARRAY[tmp_module_key_ARRAY[i] + '_' + this.current_page_key] = true;

                            }

                        }

                        if(tmp_hash.length > 0){

                            $('#' + tmp_module_key_ARRAY[i] + '_HASH').val(tmp_hash);
                            this.log_activity('[lnum 3673] UPDATE [' + tmp_module_key_ARRAY[i] + '_HASH' + '] to [' + tmp_hash + '].', this.CRNRSTN_DEBUG_VERBOSE);

                            this.interact_ui_animation_sequence(tmp_module_key_ARRAY[i]);

                        }

                    }

                }

                //
                // SYNC CANVAS THEME.
                //this.crnrstn_interact_ui_canvas_theme_sync();

                //
                // SYNC UI MODE.
                //this.crnrstn_interact_ui_canvas_mode_sync();

            break;
            case 'bassdrive_title':

                tmp_title_html = this.return_data_tunnel_xml_data('bassdrive_title_html');
                tmp_title_html = tmp_title_html.trim();
                if(tmp_title_html.length > 0){

                    this.transitions_ui_content_update('stream_info', tmp_title_html, 'blind');

                }

            break;
            case 'bassdrive_locale_colors':

                tmp_locale_colors = this.return_data_tunnel_xml_data('bassdrive_locale_html');
                tmp_locale_colors = tmp_locale_colors.trim();
                if(tmp_locale_colors.length > 0) {

                    this.transitions_ui_content_update('broadcast_nation', tmp_locale_colors);

                }

            break;
            case 'bassdrive_social':

                tmp_social_html = this.return_data_tunnel_xml_data('bassdrive_social_html');
                tmp_social_html = tmp_social_html.trim();
                if(tmp_social_html.length > 0) {

                    this.transitions_ui_content_update('stream_social', tmp_social_html, 'blind');

                }

            break;
            case 'bassdrive_connection_stats':

                tmp_stat_connections = this.return_data_tunnel_xml_data('current_stream_stat_connections');
                tmp_stat_connections_capacity = this.return_data_tunnel_xml_data('current_stream_stat_connections_capacity');
                tmp_stat_bandwidth = this.return_data_tunnel_xml_data('current_stream_stat_bandwidth');
                tmp_stat_bandwidth_format = this.return_data_tunnel_xml_data('current_stream_stat_bandwidth_format');

                tmp_stat_connections = tmp_stat_connections.trim();
                tmp_stat_connections_capacity = tmp_stat_connections_capacity.trim();
                tmp_stat_bandwidth = tmp_stat_bandwidth.trim();
                tmp_stat_bandwidth_format = tmp_stat_bandwidth_format.trim();

                tmp_stat_bandwidth_format = this.short_format_data_size(tmp_stat_bandwidth_format);
                tmp_stat_connections = this.pretty_format_number(tmp_stat_connections);
                tmp_stat_connections_capacity = this.pretty_format_number(tmp_stat_connections_capacity);

                if($('#crnrstn_curr_total_connections').html() != tmp_stat_connections && tmp_stat_connections.length > 0){

                    this.transitions_ui_content_update('crnrstn_curr_total_connections', tmp_stat_connections, 'blind');

                }

                if($('#crnrstn_curr_total_capacity').html() != tmp_stat_connections_capacity && tmp_stat_connections_capacity.length > 0){

                    this.transitions_ui_content_update('crnrstn_curr_total_capacity', tmp_stat_connections_capacity, 'blind');

                }

                if($('#crnrstn_curr_total_bandwidth').html() != tmp_stat_bandwidth && tmp_stat_bandwidth.length > 0){

                    this.transitions_ui_content_update('crnrstn_curr_total_bandwidth', tmp_stat_bandwidth, 'blind');

                }

                if($('#crnrstn_curr_total_bandwidth_format').html() != tmp_stat_bandwidth_format && tmp_stat_bandwidth_format.length > 0){

                    this.transitions_ui_content_update('crnrstn_curr_total_bandwidth_format', tmp_stat_bandwidth_format, 'blind');

                }

            break;
            case 'bassdrive_the_situation':

                tmp_count = this.return_count_response_data('the_situation_with_bassdrive_likely_status');

                rand_index = Math.floor(Math.random() * tmp_count);

                tmp_bassdrive_situation = this.return_data_tunnel_xml_data('the_situation_with_bassdrive_likely_status', rand_index);

                tmp_bassdrive_situation = tmp_bassdrive_situation.trim();
                if(tmp_bassdrive_situation.length > 0) {

                    this.transitions_ui_content_update('crnrstn_bassdrive_situation', tmp_bassdrive_situation, 'blind');

                }

            break;
            case 'lifestyle_banner_image_rotation':

                if(this.jony5_banner_mode == 'PLAY'){

                    this.log_activity('[lnum 3786] FIRE! FIRE! FIRE! [' + ui_thread_id + ']. ', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                    this.rotate_lifestyle_banner_image();

                }

            break;
            default:

                this.log_activity('[lnum 3795] UI sync instructions have not been configured for [' + ui_thread_id + '].', this.CRNRSTN_DEBUG_CONTROLS);

            break;

        }

    };

    CRNRSTN_JS.prototype.interact_ui_animation_sequence = function(module_key){

        var self = this;

        switch(module_key){
            case 'crnrstn_interact_ui_mit_license_src':

                tmp_mit_content = this.return_data_tunnel_xml_data(module_key);

                this.log_activity('[lnum 3812] Fire intro transition animation sequence [' + module_key + '] for loaded XML data. Content len=' + oCRNRSTN_JS.pretty_format_number(tmp_mit_content.length) + '.', this.CRNRSTN_DEBUG_VERBOSE);

                //alert('[lnum 3625] MIT content received. Setting overlay width, height, and Z.');
                $('#crnrstn_interact_ui_full_lightbox_overlay').css('width', '100%');

                $('#crnrstn_interact_ui_full_lightbox_overlay').animate({
                    height: $(document).height() + 'px',
                    zIndex: 9999
                }, {
                    duration: 0,
                    queue: false,
                    complete: function () {

                        $('#crnrstn_interact_ui_full_lightbox_overlay').animate({
                            opacity: 0.5
                        }, {
                            duration: 0,
                            queue: false,
                            specialEasing: {
                                opacity: "swing"
                            },
                            complete: function () {

                            }

                        });

                        $('#crnrstn_interact_ui_full_lightbox').animate({
                            top: self.docs_page_css_top + 'px',
                            left: self.docs_page_css_left + 'px',
                            width: $(document).width(),
                            height: $(document).height()

                        }, {
                            duration: 100,
                            queue: false,
                            complete: function () {

                                if($('#crnrstn_interact_ui_full_lightbox').length){

                                    // Disable scrolling of the page while open
                                    if(self.options.disableScrolling && self.source_action_ux_element_id !== 'crnrstn_general_mit_lnk'){

                                        $('body').addClass('lb-disable-scrolling');

                                    }

                                    $('#crnrstn_interact_ui_full_lightbox').animate({
                                        opacity: 0
                                    }, {
                                        duration: 0,
                                        queue: false,
                                        complete: function () {

                                            var top_delta = $(window).scrollTop();

                                            $('#crnrstn_interact_ui_full_lightbox').css('paddingTop', top_delta + 'px');
                                            $('#crnrstn_interact_ui_full_lightbox').css('width', '100%');
                                            $('#crnrstn_interact_ui_full_lightbox').html(tmp_mit_content);
                                            $('#crnrstn_interact_ui_link_text_click').val('');

                                            $('#crnrstn_interact_ui_full_lightbox').animate({
                                                opacity: 1.0
                                            }, {
                                                duration: 500,
                                                queue: false,
                                                specialEasing: {
                                                    opacity: "swing"
                                                },
                                                complete: function () {

                                                }

                                            });

                                        }

                                    });

                                }

                            }

                        });

                    }

                });

            break;
            case 'crnrstn_interact_ui_documentation_content_src':

                tmp_content = this.return_data_tunnel_xml_data(module_key);
                tmp_content_final = tmp_content;

                this.log_activity('[lnum 3907] Fire intro transition animation sequence [' + module_key + '] for loaded XML data. Content len=' + oCRNRSTN_JS.pretty_format_number(tmp_content.length) + '.', this.CRNRSTN_DEBUG_VERBOSE);

                $('#crnrstn_documentation_dyn_shell').animate({
                    top: this.docs_page_css_top + 'px',
                    left: this.docs_page_css_left + 'px'
                }, {
                    duration: 100,
                    queue: false,
                    complete: function () {

                        if($('#crnrstn_documentation_dyn_shell').length){

                            // Disable scrolling of the page while open
                            if(self.options.disableScrolling){

                                $('body').addClass('lb-disable-scrolling');

                            }

                            if((self.expire_content_hash_invalid_ARRAY[module_key + '_' + self.current_page_key] === false && self.content_refresh_trigger_source === 'link_text_click') || (self.content_refresh_trigger_source === 'link_text_click')){

                                $('#crnrstn_documentation_dyn_shell').animate({
                                    opacity: 0
                                }, {
                                    duration: 0,
                                    queue: false,
                                    complete: function(){

                                        //
                                        // CHECK FOR {CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_PAGE_SIZE}
                                        tmp_pattern = '{CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_PAGE_SIZE}';
                                        tmp_pos_pattern = self.strpos(tmp_content, tmp_pattern);
                                        if(tmp_pos_pattern){

                                            //
                                            // SOURCE :: https://stackoverflow.com/questions/2219526/how-many-bytes-in-a-javascript-string
                                            // COMMENT :: https://stackoverflow.com/a/52254083
                                            // AUTHOR :: P Roitto :: https://stackoverflow.com/users/9292799/p-roitto
                                            tmp_size_total = new Blob([tmp_content]).size;

                                            //
                                            // SUBTRACT COUNT OF BYTES FROM THE PLACEHOLDER STRING DATA (WILL BE REPLACED)
                                            tmp_size_filler = new Blob([tmp_pattern]).size;
                                            tmp_size_clean = parseInt(tmp_size_total) - parseInt(tmp_size_filler);

                                            //
                                            // USE THIS JUST TO GET AN IDEA OF HOW MANY EXTRA BYTES TO ADD.
                                            tmp_size_clean_pretty = self.format_bytes(tmp_size_clean, 3);

                                            //
                                            // ADD EXTRA BYTES FOR THE TEXT OF THE COUNT OF PAGE BYTES ABOUT TO BE INJECTED
                                            tmp_size_final = parseInt(tmp_size_clean) + new Blob([tmp_size_clean_pretty]).size;

                                            //
                                            // TAKE THIS FINAL NUMBER AND FORMAT IT FOR DISPLAY.
                                            tmp_size_final_pretty = self.format_bytes(tmp_size_final, 3);

                                            tmp_content_final = tmp_content.replace(/{CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_PAGE_SIZE}/g, tmp_size_final_pretty);
                                            //tmp_content_final = tmp_content.replace(tmp_pattern, tmp_size_final_pretty + ' chars');

                                        }

                                        tmp_pattern = '{CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_RESPONSE_TIME}';
                                        tmp_pos_pattern = self.strpos(tmp_content_final, tmp_pattern);
                                        if(tmp_pos_pattern){

                                            //this.consume_data_tunnel_xml_node(response_data, 'response_server_runtime', 'server_runtime', '' , serialize_response);
                                            //this.consume_data_tunnel_xml_node(response_data, 'runtime', 'runtime', '' , true);

                                            tmp_server_runtime = self.return_data_tunnel_xml_data('response_server_runtime');

                                            if(self.runtime === ''){

                                                self.runtime = tmp_server_runtime;

                                            }

                                            tmp_content_final = tmp_content_final.replace(/{CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_RESPONSE_TIME}/g, self.runtime);

                                        }

                                        //
                                        // INSERT CONTENT FROM CRNRSTN :: SSDTLA INTO DOM OBJECT.
                                        $("#crnrstn_documentation_dyn_shell").html(tmp_content_final);

                                        //
                                        // CLEAR THE REQUEST SOURCE.
                                        $('#crnrstn_request_source').val('');

                                        tmp_hash = self.return_data_tunnel_xml_data(module_key + '_HASH');
                                        self.loaded_content_hash_ARRAY[module_key] = tmp_hash;
                                        self.content_refresh_trigger_source = '';
                                        self.size_element_x('crnrstn_j5_wolf_pup_outter_wrap');

                                        tmp_window_width = $(window).width();
                                        tmp_new_doc_content_width = (tmp_window_width) * 0.64;

                                        $('#crnrstn_documentation_dyn_content_shell').animate({
                                            width: tmp_new_doc_content_width
                                        }, {
                                            duration: 0,
                                            queue: false,
                                            complete: function () {

                                                $('#crnrstn_ui_element_load_indicator_shell').animate({
                                                    width: 3
                                                }, {
                                                    duration: 250,
                                                    queue: false,
                                                    specialEasing: {
                                                        width: "swing"
                                                    },
                                                    complete: function () {

                                                    }

                                                });

                                            }

                                        });

                                        //
                                        // APPLY CURRENT CSS THEME STYLES
                                        self.refresh_interact_ui_dom_css();

                                        $('#crnrstn_documentation_dyn_shell').animate({
                                            opacity: 1.0
                                        }, {
                                            duration: 500,
                                            queue: false,
                                            specialEasing: {
                                                opacity: "swing"
                                            },
                                            complete: function () {

                                                self.crnrstn_interact_ui_ux('scrolltop', false);

                                                if($("#crnrstn_interact_ui_documentation_j5_wolf_pup").length){

                                                    $('#crnrstn_interact_ui_documentation_j5_wolf_pup').css('visibility', 'visible');

                                                }

                                                //
                                                // AUTO SCROLL
                                                if(this.get_pushed_autoscroll){

                                                    alert('[lnum 4055] get_pushed_autoscroll[' + this.get_pushed_autoscroll + '].');

                                                }

                                            }

                                        });

                                    }

                                });

                            }else{

                                //
                                // HASH INVALIDATION UPDATE :: NO PAGE BLINK OR SCROLL.
                                //
                                // CHECK FOR {CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_PAGE_SIZE}
                                tmp_pattern = '{CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_PAGE_SIZE}';
                                tmp_pos_pattern = self.strpos(tmp_content, tmp_pattern);
                                if(tmp_pos_pattern){

                                    //
                                    // SOURCE :: https://stackoverflow.com/questions/2219526/how-many-bytes-in-a-javascript-string
                                    // COMMENT :: https://stackoverflow.com/a/52254083
                                    // AUTHOR :: P Roitto :: https://stackoverflow.com/users/9292799/p-roitto
                                    tmp_size_total = new Blob([tmp_content]).size;

                                    //
                                    // SUBTRACT COUNT OF BYTES FROM THE PLACEHOLDER STRING DATA (WILL BE REPLACED)
                                    tmp_size_filler = new Blob([tmp_pattern]).size;
                                    tmp_size_clean = parseInt(tmp_size_total) - parseInt(tmp_size_filler);

                                    //
                                    // USE THIS JUST TO GET AN IDEA OF HOW MANY EXTRA BYTES TO ADD.
                                    tmp_size_clean_pretty = self.format_bytes(tmp_size_clean, 3);

                                    //
                                    // ADD EXTRA BYTES FOR THE TEXT OF THE COUNT OF PAGE BYTES ABOUT TO BE INJECTED
                                    tmp_size_final = parseInt(tmp_size_clean) + new Blob([tmp_size_clean_pretty]).size;

                                    //
                                    // TAKE THIS FINAL NUMBER AND FORMAT IT FOR DISPLAY.
                                    tmp_size_final_pretty = self.format_bytes(tmp_size_final, 3);

                                    tmp_content_final = tmp_content.replace(/{CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_PAGE_SIZE}/g, tmp_size_final_pretty);

                                }

                                tmp_pattern = '{CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_RESPONSE_TIME}';
                                tmp_pos_pattern = self.strpos(tmp_content_final, tmp_pattern);
                                if(tmp_pos_pattern){

                                    tmp_server_runtime = self.return_data_tunnel_xml_data('response_server_runtime');

                                    if(self.runtime === ''){

                                        self.runtime = tmp_server_runtime;

                                    }

                                    tmp_content_final = tmp_content_final.replace(/{CRNRSTN_DYNAMIC_CONTENT_MODULE::DOCUMENT_RESPONSE_TIME}/g, self.runtime);

                                }

                                //
                                // INSERT CONTENT FROM CRNRSTN :: SSDTLA INTO DOM OBJECT.
                                $("#crnrstn_documentation_dyn_shell").html(tmp_content_final);

                                //
                                // CLEAR THE REQUEST SOURCE.
                                $('#crnrstn_request_source').val('');

                                tmp_hash = self.return_data_tunnel_xml_data(module_key + '_HASH');
                                self.expire_content_hash_invalid_ARRAY[module_key + '_' + self.current_page_key] = false;
                                self.loaded_content_hash_ARRAY[module_key + '_' + this.current_page_key] = tmp_hash;
                                self.size_element_x('crnrstn_j5_wolf_pup_outter_wrap');

                                tmp_window_width = $(window).width();
                                tmp_new_doc_content_width = (tmp_window_width) * 0.64;

                                $('#crnrstn_documentation_dyn_content_shell').animate({
                                    width: tmp_new_doc_content_width
                                }, {
                                    duration: 0,
                                    queue: false,
                                    complete: function () {

                                        $('#crnrstn_ui_element_load_indicator_shell').animate({
                                            width: 3
                                        }, {
                                            duration: 250,
                                            queue: false,
                                            specialEasing: {
                                                width: "swing"
                                            },
                                            complete: function () {

                                            }

                                        });

                                    }

                                });

                                //
                                // APPLY CURRENT CSS THEME STYLES
                                self.refresh_interact_ui_dom_css();

                            }

                        }

                    }

                });

            break;
            case 'crnrstn_interact_ui_documentation_view_source_src':

                //alert('[lnum 3164] [VIEW-SOURCE DYN FOOTER] we have arrived. throw animation. load content.');

                tmp_content = this.return_data_tunnel_xml_data(module_key);
                this.log_activity('[lnum 4179] Fire component load animation sequence [' + module_key + '] for loaded XML data. Content len=' + oCRNRSTN_JS.pretty_format_number(tmp_content.length) + '.', this.CRNRSTN_DEBUG_VERBOSE);

            break;
            case 'crnrstn_interact_ui_documentation_side_nav_src':

                tmp_content = this.return_data_tunnel_xml_data(module_key);
                this.log_activity('[lnum 4185] Fire component load animation sequence [' + module_key + '] for loaded XML data. Content len=' + oCRNRSTN_JS.pretty_format_number(tmp_content.length) + '.', this.CRNRSTN_DEBUG_VERBOSE);

                this.initialize_interact_ui_documentation_mode(tmp_content);

            break;
            case 'crnrstn_interact_ui_system_footer_src':

                tmp_content = this.return_data_tunnel_xml_data(module_key);
                this.log_activity('[lnum 4193] Fire component load animation sequence [' + module_key + '] for loaded XML data. Content len=' + oCRNRSTN_JS.pretty_format_number(tmp_content.length) + '.', this.CRNRSTN_DEBUG_VERBOSE);

                this.initialize_interact_ui_system_footer(tmp_content);

            break;
            case 'crnrstn_interact_ui_theme_profile':

                //
                // SILENCE IS GOLDEN
                //tmp_content = this.return_data_tunnel_xml_data(module_key);
                //this.log_activity('[lnum 3326] Configure oCRNRSTN_JS system theme defaults. Content len=' + oCRNRSTN_JS.pretty_format_number(tmp_content.length) + '.', this.CRNRSTN_DEBUG_VERBOSE);

                //alert(tmp_content);
                //this.initialize_interact_ui_system_footer(tmp_content);

            break;
            case 'crnrstn_interact_ui_search_src':

                tmp_content = this.return_data_tunnel_xml_data(module_key);
                this.log_activity('[lnum 4212] Fire component load animation sequence [' + module_key + '] for loaded XML data. Content len=' + oCRNRSTN_JS.pretty_format_number(tmp_content.length) + '.', this.CRNRSTN_DEBUG_VERBOSE);

            break;
            case 'crnrstn_interact_ui_messenger_src':

                tmp_content = this.return_data_tunnel_xml_data(module_key);
                this.log_activity('[lnum 4218] Fire component load animation sequence [' + module_key + '] for loaded XML data. Content len=' + oCRNRSTN_JS.pretty_format_number(tmp_content.length) + '.', this.CRNRSTN_DEBUG_VERBOSE);

            break;
            default:

                this.log_activity('[lnum 4223] Cannot oCRNRSTN_JS.interact_ui_animation_sequence() on unknown XML node [' + module_key + '] which has been provided. ', this.CRNRSTN_DEBUG_VERBOSE);

            break;

        }

    };

    CRNRSTN_JS.prototype.refresh_interact_ui_dom_css = function(){

        /*
        NEED SETTINGS FOR ::
        TEXT COLOR TITLE
        FONT-FAMILY TITLE
        TEXT COLOR COPY
        FONT-FAMILY COPY
        TEXT LINK COLOR
        TEXT COLOR CODE DATA TYPE NAME
        TEXT COLOR CODE STRING DATA
        TEXT COLOR CODE DATA TYPE
        ?TECH SPECS BULLET POINT STYLE

        */

        //
        // THEME SYNC :: PAGE TITLE
        this.sync_theme_styles_page_title();

        //
        // THEME SYNC :: PAGE DESCRIPTION
        this.sync_theme_styles_page_description();

        //
        // THEME SYNC :: DOCUMENTATION ALERT / CAUTION
        this.sync_theme_styles_page_alert_caution();

        //
        // THEME SYNC ::
        //
        // THEME SYNC ::
        //
        // THEME SYNC ::
        //
        // THEME SYNC ::
        //
        // THEME SYNC ::
        //
        // THEME SYNC ::

        //this.received_theme_data = false;


    };

    CRNRSTN_JS.prototype.sync_theme_styles_page_title = function(){

        //
        // LOAD CRNRSTN :: INTERACT UI CSS
        /*  class="crnrstn_documentation_dyn_content_title"

        THEME DATA
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_font_family'][] = 'Arial, Helvetica, sans-serif';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_color'][] = '#333';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_line_height'][] = '55px';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_padding_top'][] = '0';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_padding_right'][] = '10px';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_padding_bottom'][] = '0';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_padding_left'][] = '20px';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_text_shadow'][] = '1px 1px 2px #ECECEC, 0 0 1em #ECECEC, 0 0 0.2em #ECECEC';

        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_font_size_h1'][] = '45px';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_font_size_h2'][] = '35px';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_font_size_h3'][] = '25px';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_font_size_h4'][] = '15px';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_title_copy_margin_bottom'][] = '0';


        AFFECTED CSS CLASSES
        CURRENTLY, NO ELEM_ID IN DOM. WILL ADD ID IF CANNOT GET TRANSITIONS W/O IT.
        .crnrstn_documentation_dyn_content_title                    {
                                                                    text-shadow: ; }
        .crnrstn_documentation_dyn_content_title h1                 { font-size: 45px; overflow-wrap: break-word; }
        .crnrstn_documentation_dyn_content_title h2                 { font-size: 35px; margin-bottom:0;}
        .crnrstn_documentation_dyn_content_title h3                 { font-size: 25px; margin-bottom:0;}
        .crnrstn_documentation_dyn_content_title h4                 { font-size: 15px; margin-bottom:0;}

        */

        //
        // SOURCE :: https://www.geeksforgeeks.org/how-to-dynamically-create-and-apply-css-class-in-javascript/
        var class_elem_set = document.querySelectorAll(".crnrstn_documentation_dyn_content_title");

        // Apply CSS property to it
        for(var i = 0; i < class_elem_set.length; i++){

            //
            // YAH, I KNOW...LOOPS INSIDE OF LOOPS...BUT, HEY...FAT CLIENT.
            var class_elem_h_set = class_elem_set[i].querySelectorAll("h1");
            //var class_elem_h_set = document.querySelectorAll("h1");
            for(var ii = 0; ii < class_elem_h_set.length; ii++){

                //
                // YAH, I KNOW...IF THE PAGE ITSELF HAS *LITERALLY ANY* <H1> WITH PERFECTLY MATCHING .INNERHTML CONTENT,
                // THIS WILL EVAL TO BOOLEAN TRUE AND THEN THE FONTSIZE CSS WILL BE APPLIED TO THE CRNRSTN :: DOCS
                // TITLE ELEMENT.
                $(class_elem_set[i]).css('fontSize', this.get_theme_attribute('interact.ui.document_page_title_copy_font_size_h1'));

            }

            class_elem_h_set = class_elem_set[i].querySelectorAll("h2");
            for(ii = 0; ii < class_elem_h_set.length; ii++){

                //if('<h2>' + class_elem_h_set[ii].innerHTML + '</h2>' === class_elem_set[i].innerHTML){

                    $(class_elem_set[i]).css('fontSize', this.get_theme_attribute('interact.ui.document_page_title_copy_font_size_h2'));

                //}

            }

            class_elem_h_set = class_elem_set[i].querySelectorAll("h3");
            for(ii = 0; ii < class_elem_h_set.length; ii++){

                //if('<h3>' + class_elem_h_set[ii].innerHTML + '</h3>' === class_elem_set[i].innerHTML){

                    $(class_elem_set[i]).css('fontSize', this.get_theme_attribute('interact.ui.document_page_title_copy_font_size_h3'));

                //}

            }

            $(class_elem_set[i]).css('fontFamily', this.get_theme_attribute('interact.ui.document_page_title_copy_font_family'));
            $(class_elem_set[i]).css('fontWeight', this.get_theme_attribute('interact.ui.document_page_title_copy_font_weight'));
            $(class_elem_set[i]).css('lineHeight', this.get_theme_attribute('interact.ui.document_page_title_copy_line_height'));
            $(class_elem_set[i]).css('overflowWrap', this.get_theme_attribute('interact.ui.document_page_copy_overflow_wrap'));
            $(class_elem_set[i]).css('textShadow', this.get_theme_attribute('interact.ui.document_page_title_copy_text_shadow'));

            $(class_elem_set[i]).animate({
                paddingTop: this.get_theme_attribute('interact.ui.document_page_title_copy_padding_top'),
                paddingRight: this.get_theme_attribute('interact.ui.document_page_title_copy_padding_right'),
                paddingBottom: this.get_theme_attribute('interact.ui.document_page_title_copy_padding_bottom'),
                paddingLeft: this.get_theme_attribute('interact.ui.document_page_title_copy_padding_left')
            }, {
                duration: 0,
                queue: false,
                complete: function () {


                }

            });

            $(class_elem_set[i]).animate({
                color: this.get_theme_attribute('interact.ui.document_page_title_copy_color')
            }, {
                duration: 1000,
                queue: false,
                specialEasing: {
                    color: "swing"
                },
                complete: function () {


                }

            });

        }

    };

    CRNRSTN_JS.prototype.sync_theme_styles_page_description = function(){

        //
        // LOAD CRNRSTN :: INTERACT UI CSS
        /*  class="crnrstn_documentation_dyn_content_title"

        THEME DATA


        AFFECTED CSS CLASSES
        CURRENTLY, NO ELEM_ID IN DOM.
        .crnrstn_documentation_dyn_content_description              { width: 90%; font-size: 20px; overflow-wrap: break-word; padding: 12px 10px 25px 20px; font-family: Arial, Helvetica, sans-serif; color:#333; line-height: 33px; text-shadow: 1px 1px 2px #ECECEC, 0 0 1em #ECECEC, 0 0 0.2em #ECECEC; }
        .crnrstn_documentation_dyn_content_description p            { padding: 0; margin: 0; text-align: left; display: inline-block;}
        .crnrstn_documentation_dyn_content_description a            { text-decoration: none; color:#0066CC;}
        .crnrstn_documentation_dyn_content_description .crnrstn_text_embedded_image { padding: 0px 6px 0 0px; line-height: 90px;}
        .crnrstn_documentation_dyn_content_example                  { width: 98%; padding:0 10px 0 10px; font-family: "Courier New", Courier, monospace;}

        //
        // PAGE TITLE SECTION :: PAGE TITLE DESCRIPTION
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = '0';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = '0';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = 'left';

        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = 'none';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = '#0066CC';

        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = '0';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = '6px';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = '0';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = '0';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.'][] = '90px';
        */

        //
        // SOURCE :: https://www.geeksforgeeks.org/how-to-dynamically-create-and-apply-css-class-in-javascript/
        var class_elem_set = document.querySelectorAll(".crnrstn_documentation_dyn_content_description");

        // Apply CSS property to it
        for(var i = 0; i < class_elem_set.length; i++){

            //
            // YAH, I KNOW...LOOPS INSIDE OF LOOPS...BUT, HEY...FAT CLIENT.
            var class_elem_h_set = class_elem_set[i].querySelectorAll("p");
            for(var ii = 0; ii < class_elem_h_set.length; ii++){

                //
                // YAH, I KNOW...IF THE PAGE ITSELF HAS *LITERALLY ANY* <H1> WITH PERFECTLY MATCHING .INNERHTML CONTENT,
                // THIS WILL EVAL TO BOOLEAN TRUE AND THEN THE FONTSIZE CSS WILL BE APPLIED TO THE CRNRSTN :: DOCS
                // TITLE ELEMENT.
                $(class_elem_h_set[ii]).css('margin', this.get_theme_attribute('interact.ui.document_page_title_description_paragraph_margin'));
                $(class_elem_h_set[ii]).css('padding', this.get_theme_attribute('interact.ui.document_page_title_description_paragraph_padding'));
                $(class_elem_h_set[ii]).css('textAlign', this.get_theme_attribute('interact.ui.document_page_title_description_paragraph_text_align'));
                $(class_elem_h_set[ii]).css('padding', this.get_theme_attribute('interact.ui.document_page_title_description_paragraph_padding'));

             }

            class_elem_h_set = class_elem_set[i].querySelectorAll("a");
            for(ii = 0; ii < class_elem_h_set.length; ii++){

                $(class_elem_h_set[ii]).css('textDecoration', this.get_theme_attribute('interact.ui.document_page_title_description_paragraph_anchor_text_decoration'));
                $(class_elem_h_set[ii]).css('color', this.get_theme_attribute('interact.ui.document_page_title_description_paragraph_anchor_color'));

            }

            var class_elem_img_set = class_elem_set[i].querySelectorAll(".crnrstn_text_embedded_image");
            for(ii = 0; ii < class_elem_img_set.length; ii++){

                $(class_elem_img_set[ii]).css('lineHeight', this.get_theme_attribute('interact.ui.document_page_title_description_text_embed_image_line_height'));

                $(class_elem_img_set[ii]).animate({
                    paddingTop: this.get_theme_attribute('interact.ui.document_page_title_description_text_embed_image_padding_top'),
                    paddingRight: this.get_theme_attribute('interact.ui.document_page_title_description_text_embed_image_padding_right'),
                    paddingBottom: this.get_theme_attribute('interact.ui.document_page_title_description_text_embed_image_padding_bottom'),
                    paddingLeft: this.get_theme_attribute('interact.ui.document_page_title_description_text_embed_image_padding_left')
                }, {
                    duration: 0,
                    queue: false,
                    complete: function () {

                    }

                });

            }

            $(class_elem_set[i]).css('fontFamily', this.get_theme_attribute('interact.ui.document_page_title_description_font_family'));
            $(class_elem_set[i]).css('fontSize', this.get_theme_attribute('interact.ui.document_page_title_description_font_size'));
            $(class_elem_set[i]).css('lineHeight', this.get_theme_attribute('interact.ui.document_page_title_description_line_height'));
            $(class_elem_set[i]).css('overflowWrap', this.get_theme_attribute('interact.ui.document_page_title_description_overflow_wrap'));
            $(class_elem_set[i]).css('textShadow', this.get_theme_attribute('interact.ui.document_page_title_description_text_shadow'));

            $(class_elem_set[i]).animate({
                width: this.get_theme_attribute('interact.ui.document_page_title_description_width'),
                paddingTop: this.get_theme_attribute('interact.ui.document_page_title_description_padding_top'),
                paddingRight: this.get_theme_attribute('interact.ui.document_page_title_description_padding_right'),
                paddingBottom: this.get_theme_attribute('interact.ui.document_page_title_description_padding_bottom'),
                paddingLeft: this.get_theme_attribute('interact.ui.document_page_title_description_padding_left')
            }, {
                duration: 0,
                queue: false,
                complete: function () {

                }

            });

            $(class_elem_set[i]).animate({
                color: this.get_theme_attribute('interact.ui.document_page_title_description_color')
            }, {
                duration: 1000,
                queue: false,
                specialEasing: {
                    color: "swing"
                },
                complete: function () {

                }

            });

        }

    };

    CRNRSTN_JS.prototype.sync_theme_styles_page_alert_caution = function(){

        /*
        // CRNRSTN :: INTERACT UI
        // DOCUMENTATION GENERAL :: ALERT / CAUTION NOTE
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_alert_caution_border_wrap_border'][] = '85%';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_alert_caution_copy_text_align'][] = 'left';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_alert_caution_copy_paragraph_padding'][] = '0';
        $tmp_theme_attributes_ARRAY[$int_const]['interact.ui.document_page_alert_caution_copy_paragraph_background_color'][] = 'rgba(255, 255, 255, 0.67)';

        .crnrstn_documentation_caution_copy_shell                   { text-align: center; margin: 0 auto; width: 90%;
                                                                    padding: 10px 0 10px 0;}
        .crnrstn_documentation_caution_copy_border_wrap             { text-align: center; overflow: hidden;}
        .crnrstn_documentation_bg_caution_icon_wrapper_rel          { position: relative; text-align: right; height: 0; }
        .crnrstn_documentation_bg_caution_icon_wrapper              { position: absolute; z-index: 3; top:-120px; left: 48%;}
        .crnrstn_documentation_bg_caution_icon                      { float:right; padding: 4px 15px 0 10px;}
        .crnrstn_documentation_caution_copy_wrap_rel                { position: relative;}
        .crnrstn_documentation_caution_copy_wrap                    { position: absolute; z-index: 4;}

        .crnrstn_documentation_caution_copy                         { width: 85%; : ; }
        .crnrstn_documentation_caution_copy p                       {  background-color: ; }

        */

        var class_elem_set = document.querySelectorAll(".crnrstn_documentation_bg_caution_icon_wrapper");
        for(var i = 0; i < class_elem_set.length; i++){

            $(class_elem_set[i]).css('top', this.get_theme_attribute('interact.ui.document_page_alert_caution_bg_icon_wrap_top'));
            $(class_elem_set[i]).css('left', this.get_theme_attribute('interact.ui.document_page_alert_caution_bg_icon_wrap_left'));

        }

        class_elem_set = document.querySelectorAll(".crnrstn_documentation_caution_copy_border_wrap");
        for(var i = 0; i < class_elem_set.length; i++){

            $(class_elem_set[i]).css('border', this.get_theme_attribute('interact.ui.document_page_alert_caution_border_wrap_border'));
            $(class_elem_set[i]).css('margin', this.get_theme_attribute('interact.ui.document_page_alert_caution_border_wrap_margin'));
            $(class_elem_set[i]).css('padding', this.get_theme_attribute('interact.ui.document_page_alert_caution_border_wrap_padding'));

        }

        class_elem_set = document.querySelectorAll(".crnrstn_documentation_caution_copy");
        for(i = 0; i < class_elem_set.length; i++){

            $(class_elem_set[i]).css('textAlign', this.get_theme_attribute('interact.ui.document_page_alert_caution_copy_text_align'));
            $(class_elem_set[i]).css('fontFamily', this.get_theme_attribute('interact.ui.document_page_title_description_font_family'));
            $(class_elem_set[i]).css('fontSize', this.get_theme_attribute('interact.ui.document_page_title_description_font_size'));
            $(class_elem_set[i]).css('lineHeight', this.get_theme_attribute('interact.ui.document_page_title_description_line_height'));
            $(class_elem_set[i]).css('textShadow', this.get_theme_attribute('interact.ui.document_page_title_description_text_shadow'));

            $(class_elem_set[i]).animate({
                width: this.get_theme_attribute('interact.ui.document_page_alert_caution_copy_width'),
                paddingTop: this.get_theme_attribute('interact.ui.document_page_alert_caution_copy_text_align'),
                paddingRight: this.get_theme_attribute('interact.ui.document_page_title_description_padding_right'),
                paddingBottom: this.get_theme_attribute('interact.ui.document_page_title_description_padding_bottom'),
                paddingLeft: this.get_theme_attribute('interact.ui.document_page_title_description_padding_left')
            }, {
                duration: 0,
                queue: false,
                complete: function () {

                }

            });

            $(class_elem_set[i]).animate({
                color: this.get_theme_attribute('interact.ui.document_page_title_description_color')
            }, {
                duration: 1000,
                queue: false,
                specialEasing: {
                    color: "swing"
                },
                complete: function () {

                }

            });

        }

    };

    CRNRSTN_JS.prototype.execution_delay_ui_sync_controller = function(action_init, action_id, delay_ttl = 0, scheduler_invoked = false){

        switch(action_init){
            case 'fire':

                this.update_thread_count(action_id, 1, scheduler_invoked);

                this.log_activity('[lnum 4608] UI sync controller set to fire [' + action_id + '].', this.CRNRSTN_DEBUG_CONTROLS);

                //
                // FIRE UI UPDATE THREAD
                this.execute_ui_sync(action_id);

                this.ui_sync_controller_thread_delay_ARRAY[action_id] = -1;

            break;
            case 'schedule':

                this.ui_sync_controller_thread_delay_ARRAY[action_id] = delay_ttl;

                this.log_activity('[lnum 4621] UI sync controller has scheduled [' + action_id + '] to fire in ' + delay_ttl + ' seconds.', this.CRNRSTN_DEBUG_CONTROLS);

            break;
            case 'stop':

                this.ui_sync_controller_thread_delay_ARRAY[action_id] = -1;

            break;
            case 'cancel':

                this.log_activity('[lnum 4631] UI sync controller has cancelled [' + action_id + '].', this.CRNRSTN_DEBUG_CONTROLS);

            break;
            case 'sleep':

                this.log_activity('[lnum 4636] UI sync controller has put [' + action_id + '] to sleep.', this.CRNRSTN_DEBUG_CONTROLS);

            break;
            case 'silence_is_golden':

                //this.update_thread_count(action_id, 1, scheduler_invoked);
                this.log_activity('[lnum 4642] UI sync controller has scheduled [' + action_id + '] to run silently in ' + delay_ttl + ' seconds.', this.CRNRSTN_DEBUG_CONTROLS);

            break;

        }

    };

    CRNRSTN_JS.prototype.initialize_jony5_lifestyle_banner_controller = function(){

        var self = this;

        //
        // SOURCE :: https://stackoverflow.com/questions/4735342/jquery-to-loop-through-elements-with-the-same-class
        // COMMENT :: https://stackoverflow.com/a/4735360
        // AUTHOR :: Kees C. Bakker :: https://stackoverflow.com/users/201482/kees-c-bakker
        $('.jony5_lifestyle_image').each(function(i, obj) {

            //self.log_activity(' ADDING LIFESTYLE BANNER IMAGE[' + i + '] TO ARRAY CONSTRUCT :: ' + obj.innerHTML);
            var image_uri = $('#crnrstn_xhr_root').val() + $('#jony5_lifestyle_image_path').html() + obj.innerHTML;

            if(!(image_uri in self.jony5_lifestyle_banner_index_ARRAY)){

                var tmp_str = self.extract_filename(image_uri);
                self.log_activity('[lnum 4666] STORING STATIC BANNER DOM DATA [' + tmp_str + '].', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                self.jony5_lifestyle_banner_index_ARRAY[image_uri] = 1;
                self.jony5_lifestyle_banner_images_ARRAY.push(image_uri);

            }

        });

        //
        // ACCOUNT FOR STATIC IMAGE IN HTML LOADED BY DOM FOR BACK BUTTON ACCESS TO START
        var tmp_index = 0;
        var tmp_next_image = this.jony5_lifestyle_banner_images_ARRAY[tmp_index];
        this.jony5_lifestyle_banner_sequence_control_ARRAY.push(tmp_index);
        this.jony5_lifestyle_banner_img_int_sequence_alpha.push(tmp_index);

        this.jony5_lifestyle_banner_sequence_position++;

        var tmp_str = this.extract_filename(tmp_next_image);
        var tmp_zindex_alpha = $("#jony5_banner_lifestyle_alpha").css('zIndex');
        this.log_activity('[lnum 4686] STATIC DOM LOAD [' + tmp_str + '] INTO ALPHA, where Z=' + tmp_zindex_alpha + ' OPACITY=' + $('#jony5_banner_lifestyle_alpha').css('opacity') + '.', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

        //
        // SELECT AN IMAGE AND LOAD IT INTO THE LOWEST Z-INDEX DOM ELEMENT
        tmp_index++;
        tmp_next_image = this.jony5_lifestyle_banner_images_ARRAY[tmp_index];

        this.jony5_lifestyle_banner_sequence_control_ARRAY.push(tmp_index);
        this.jony5_lifestyle_banner_img_int_sequence_beta.push(tmp_index);

        this.jony5_lifestyle_banner_sequence_position++;

        var tmp_str = this.extract_filename(tmp_next_image);
        var tmp_zindex_beta = $("#jony5_banner_lifestyle_beta").css('zIndex');
        $("#jony5_banner_lifestyle_beta").css('opacity', 0);

        this.log_activity('[lnum 4702] STATIC DOM LOAD [' + tmp_str + '] INTO BETA, where Z=' + tmp_zindex_beta + ' OPACITY=' + $('#jony5_banner_lifestyle_beta').css('opacity') + '.', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

        this.load_image_lowest_z_indice('jony5_banner_lifestyle_alpha', 'jony5_banner_lifestyle_beta', tmp_next_image);

        this.log_activity('[lnum 4706] INITIALIZE 7 SECOND TTL ON ELEMENT HOLD - BANNER IMAGE ROTATION.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
        this.execution_delay_ui_sync_controller('schedule', 'lifestyle_banner_image_rotation', 7);

        $('#banner_control_play_wrapper').html('<div class="banner_play_arrow"></div>');

        $( "#banner_control_play_wrapper").animate({
            opacity: 0.0
        }, {
            duration: 0,
            queue: false,
            specialEasing: {
                opacity: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

            }
        });

    };

    CRNRSTN_JS.prototype.initialize_delay_ui_sync_controllers = function(){

        tmp_id_len = this.transaction_thread_id_key_ARRAY.length;
        for(let i = 0; i < tmp_id_len; i++){

            //
            // INITIALIZE THREAD ID
            var tmp_i = this.transaction_thread_id_key_ARRAY[i];
            if(!(tmp_i in this.transaction_thread_count_ARRAY)){

                this.transaction_thread_count_ARRAY[this.transaction_thread_id_key_ARRAY[i]] = 0;
                this.ui_sync_controller_thread_delay_ARRAY[this.transaction_thread_id_key_ARRAY[i]] = -1;

            }

        }

    };

    CRNRSTN_JS.prototype.refresh_ui_state = function(request_serial, request_hash){

        //
        // START UI REFRESH TRANSACTION. HERE, ONLY ONE (1) AT ANY GIVEN TIME, PLEASE.
        if(this.authorize_transaction(request_serial, request_hash, 1)) {

            this.ttl_tunnel_monitor_seconds = 0;
            this.update_transaction_count();

            //
            // UI :: UPDATE PRIMARY SEQUENCE CONTROLLER
            this.execution_delay_ui_sync_controller('fire', 'crnrstn_interact_ui');
            //this.execution_delay_ui_sync_controller('fire', 'bassdrive_last_updated');
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_relay_access_by_bitrate', 3);
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_the_situation', 6);
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_title', 9);
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_locale_colors', 10);
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_social', 12);
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_locale_city_state_prov', 14);
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_connection_stats', 17);
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_history', 20);
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_reporting', 20);
            //this.execution_delay_ui_sync_controller('schedule', 'bassdrive_archives', 20);

            //this.execution_delay_ui_sync_controller('schedule', 'wethrbug_results');
            //this.execution_delay_ui_sync_controller('schedule', 'living_stream_podcast_selection');
            //this.execution_delay_ui_sync_controller('schedule', 'css_validator_featured_element');

        }

    };

    CRNRSTN_JS.prototype.size_element_y = function(dom_elem_id, force_execution = false){

        switch(dom_elem_id){
            case 'crnrstn_ui_element_load_indicator_shell':

                var self = this;

                self.$dom_elem_bg = $("#"+ dom_elem_id);

                setTimeout(function() {

                    // self.$dom_elem_bg
                    //     .height($(document).height());

                    self.$dom_elem_bg.animate({
                        height: parseInt($(document).height())
                    }, {
                        duration: 500,
                        queue: false,
                        specialEasing: {
                            height: "swing"
                        },
                        complete: function () {

                        }
                    });

                }, 0);

            break;
            case 'crnrstn_interact_ui_side_nav':

                var self = this;

                self.$dom_elem_side_nav = $("#"+ dom_elem_id);

                var tmp_curr = self.$dom_elem_side_nav.css('height');
                if(tmp_curr === undefined){

                    tmp_curr = '10';

                }
                tmp_curr = self.string_clean_css_px_int(tmp_curr);
                var tgt = parseInt($(window).height());
                var resize_elem = false;
                if(tgt > tmp_curr){

                    if(1 < (parseInt(tgt) - parseInt(tmp_curr)) ){

                        resize_elem = true;

                    }

                }else{

                    if(1 < (parseInt(tmp_curr) - parseInt(tgt))){

                        resize_elem = true;

                    }

                }

                if(resize_elem){

                    setTimeout(function() {

                        //self.$dom_elem_side_nav.css('max-height', parseInt($(window).height()));
                        //self.$dom_elem_side_nav.css('height', parseInt($(window).height()));

                        self.$dom_elem_side_nav.animate({
                            height: parseInt($(window).height())
                        }, {
                            duration: 500,
                            queue: false,
                            specialEasing: {
                                height: "swing"
                            },
                            complete: function () {

                            }
                        });

                    }, 0);

                }

            break;
            default:

                this.log_activity('[lnum 4870] Unknown DOM element id [' + dom_elem_id + '] received by size_element(). No action taken.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

            break;

        }

    };

    CRNRSTN_JS.prototype.size_element_x = function(dom_elem_id, force_execution = false){

        switch(dom_elem_id){
            case 'crnrstn_activity_log_output_wrapper':

                if($('#crnrstn_activity_log_output_wrapper').length){

                    tmp_nav_state = this.get_ui_component_state('crnrstn_interact_ui_side_nav');  // MIN, MAX

                    if(tmp_nav_state === 'MIN'){

                        tmp_window_width = $(window).width();
                        tmp_new_interact_ui_width = ((tmp_window_width - 40) * 0.98);

                        $( "#crnrstn_activity_log_output_wrapper").animate({
                            width: tmp_new_interact_ui_width
                        }, {
                            duration: 500,
                            queue: false,
                            specialEasing: {
                                width: "swing"
                            },
                            complete: function () {

                            }

                        });

                        return true;

                    }

                    tmp_window_width = $(window).width();
                    tmp_new_interact_ui_width = ((tmp_window_width - 280) * 0.98);

                    $( "#crnrstn_activity_log_output_wrapper").animate({
                        width: tmp_new_interact_ui_width
                    }, {
                        duration: 500,
                        queue: false,
                        specialEasing: {
                            width: "swing"
                        },
                        complete: function () {

                        }

                    });

                    return true;

                }

            break;
            case 'crnrstn_j5_wolf_pup_outter_wrap':

                tmp_nav_state = this.get_ui_component_state('crnrstn_interact_ui_side_nav');  // MIN, MAX

                if(tmp_nav_state === 'MIN'){

                    tmp_window_width = $(window).width();
                    tmp_new_interact_ui_width = ((tmp_window_width) * 0.98) - 20;
                    tmp_new_ui_width = ((tmp_window_width - 80) * 0.98);

                    if($('#crnrstn_interact_ui_documentation_j5_wolf_pup').length){

                        $('#crnrstn_interact_ui_documentation_j5_wolf_pup').animate({
                            paddingRight: 268
                        }, {
                            duration: 500,
                            queue: false,
                            specialEasing: {
                                paddingRight: "swing"
                            },
                            complete: function () {

                            }

                        });

                        $('#crnrstn_interact_ui_documentation_j5_wolf_pup_inner_wrap').animate({
                            width: tmp_new_interact_ui_width
                        }, {
                            duration: 500,
                            queue: false,
                            specialEasing: {
                                width: "swing"
                            },
                            complete: function () {

                            }

                        });

                    }

                    return true;

                }

                //
                // EXPAND NAVIGATION
                tmp_window_width = $(window).width();
                tmp_new_interact_ui_width = ((tmp_window_width) * 0.98) - 245;
                tmp_new_ui_width = ((tmp_window_width) * 0.98);

                if($('#crnrstn_interact_ui_documentation_j5_wolf_pup').length){

                    $('#crnrstn_interact_ui_documentation_j5_wolf_pup').animate({
                        paddingRight: 45
                    }, {
                        duration: 500,
                        queue: false,
                        specialEasing: {
                            paddingRight: "swing"
                        },
                        complete: function () {

                        }

                    });

                    $('#crnrstn_interact_ui_documentation_j5_wolf_pup_inner_wrap').animate({
                        width: tmp_new_interact_ui_width
                    }, {
                        duration: 500,
                        queue: false,
                        specialEasing: {
                            width: "swing"
                        },
                        complete: function () {

                        }

                    });

                }

            break;
            default:

                this.log_activity('[lnum 5019] Unknown DOM element id [' + dom_elem_id + '] received by size_element(). No action taken.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

            break;

        }

    };

    CRNRSTN_JS.prototype.size_element = function(dom_elem_id, transition_millisecs = 500){

        switch(dom_elem_id){
            case 'body':

                //
                // RUN IF DOCUMENTATION IS ACTIVE
                if($('#crnrstn_interact_ui_documentation_side_nav_src').length){

                    // SLEEPING, LISTENING
                    if(this.interact_ui_refresh_state_body === 'LISTENING'){

                        tmp_nav_state = this.get_ui_component_state('crnrstn_interact_ui_side_nav');  // MIN, MAX

                        if(tmp_nav_state === 'MIN'){

                            //this.interact_ui_refresh_state_body = 'SLEEPING';

                            tmp_document_width = $(document).width();
                            tmp_window_width = $(window).width();
                            tmp_new_interact_ui_width = ((tmp_window_width - 40) * 0.98);

                            if(tmp_window_width !== this.body_control_window_width) {
                            //if(tmp_document_width !== this.body_control_document_width){

                                this.body_control_window_width = tmp_window_width
                                this.body_control_document_width = tmp_document_width

                                $('body').animate({
                                    paddingLeft: 33,
                                    width: tmp_new_interact_ui_width
                                }, {
                                    duration: transition_millisecs,
                                    queue: false,
                                    specialEasing: {
                                        paddingLeft: "swing"
                                    },
                                    complete: function () {

                                    }

                                });

                                this.size_element_x('crnrstn_activity_log_output_wrapper');

                            }

                            return true;

                        }

                        if(tmp_nav_state === 'MAX'){

                            //this.interact_ui_refresh_state_body = 'SLEEPING';
                            tmp_document_width = $(document).width();
                            tmp_window_width = $(window).width();
                            tmp_new_interact_ui_width = ((tmp_window_width - 298) * 0.98);

                            //1320 = tmp_new_interact_ui_width
                            //1070

                            if(tmp_window_width !== this.body_control_window_width) {
                            //if(tmp_document_width !== this.body_control_document_width) {

                                this.body_control_window_width = tmp_window_width
                                this.body_control_document_width = tmp_document_width

                                $('body').animate({
                                    paddingLeft: 265,
                                    width: tmp_new_interact_ui_width
                                }, {
                                    duration: transition_millisecs,
                                    queue: false,
                                    specialEasing: {
                                        paddingLeft: "swing"
                                    },
                                    complete: function () {

                                        //self.body_control_document_width = tmp_document_width;

                                    }

                                });

                                this.size_element_x('crnrstn_activity_log_output_wrapper');

                            }

                            return true;

                        }

                    }

                }

                return true;

            break;
            case 'crnrstn_interact_ui_full_lightbox_overlay':

                var self = this;

                self.$dom_sys_overlay = $("#"+ dom_elem_id);

                /*
                We use a setTimeout 0 to pause JS execution and let the rendering catch-up.
                Why do this? If the `disableScrolling` option is set to true, a class is added to the body
                tag that disables scrolling and hides the scrollbar. We want to make sure the scrollbar is
                hidden before we measure the document width, as the presence of the scrollbar will affect the
                number.
                */

                setTimeout(function() {

                    // self.$dom_sys_overlay
                    //     .width($(document).width())
                    //     .height($(document).height());

                    self.$dom_sys_overlay.animate({
                        width: parseInt($(document).width()),
                        height: parseInt($(document).height())
                    }, {
                        duration: transition_millisecs,
                        queue: false,
                        specialEasing: {
                            width: "swing"
                        },
                        complete: function () {

                        }
                    });

                }, 0);

            break;
            case 'crnrstn_ui_system_footer':

                var self = this;

                self.$dom_sys_ftr = $("#"+ dom_elem_id);

                setTimeout(function() {

                    self.$dom_sys_ftr.animate({
                        width: parseInt($(window).width())
                    }, {
                        duration: transition_millisecs,
                        queue: false,
                        specialEasing: {
                            width: "swing"
                        },
                        complete: function () {

                        }
                    });

                }, 0);

            break;
            case 'crnrstn_documentation_dyn_shell_bg':

                var self = this;

                self.$dom_elem_bg = $("#"+ dom_elem_id);

                //0
                $('#crnrstn_documentation_dyn_shell_bg').animate({
                    left: 0,
                    top: -8
                }, {
                    duration: transition_millisecs,
                    queue: false,
                    complete: function () {

                    }

                });

                setTimeout(function() {

                    self.$dom_elem_bg
                        .width($(document).width())
                        .height($(document).height());

                }, 0);

            break;
            case 'crnrstn_documentation_dyn_shell':

                //
                // TO KEEP THE VERTICAL SCROLL BAR IN POSITION
                var self = this;

                self.$dom_elem = $("#" + dom_elem_id);
                var closed_delta = -18;
                var open_delta = -250;

                //
                // I LIKE THIS. SHOULD MOVE EVERYTHING THIS DIRECTION (IF THIS ATTEMPT WORKS...)
                // FOR COMPONENT UI/UX BEHAVIOR MANAGEMENT. THROW A HIGH-LEVEL FLAG (GLOBAL STATE MGMT),
                // THEN RUN GENERIC CSS ADJUSTMENT (e.g. resize()) METHODS OFF INTERNALLY TOGGLED
                // PARAMS (e.g. x_pos=250 vs x_pos=18).
                var width_delta = closed_delta;
                if(this.get_ui_component_state('crnrstn_interact_ui_side_nav') === 'MAX'){

                    width_delta = open_delta;

                }

                setTimeout(function() {

                    var height = $(window).height() + 12;

                    self.$dom_elem
                        .width($(window).width() + width_delta)
                        .height(height);

                }, 0);

                return true;

            break;
            case 'crnrstn_interact_ui_full_doc_close':

                // .crnrstn_interact_ui_full_doc_close                 { position: fixed; margin:10px 0 0 0; padding:0 30px 0 50px; /*z-index: 9999;*/ left:88.5%; top:0; font-family: Arial, Helvetica, sans-serif; font-size: 50px; line-height: 60px; font-weight: normal; color: #f6f6f6;}

                if($('#crnrstn_interact_ui_full_doc_close').length){

                    tmp_window_width = $(window).width();
                    tmp_new_doc_content_left = (tmp_window_width) * 0.885;

                    tmp_current_left = $('#crnrstn_interact_ui_full_doc_close').css('left');
                    tmp_current_left = this.string_clean_css_px_int(tmp_current_left);

                    if((parseInt(tmp_current_left) - parseInt(tmp_new_doc_content_left)) >= 0){

                        //
                        // THIS IS TO SEE IF A==B; NOTE THAT COMPARING AN INTEGER TO A FLOAT (DOUBLE). OR MAYBE
                        // IT WAS TWO (2) FLOATS...
                        if(1 > (parseInt(tmp_current_left) - parseInt(tmp_new_doc_content_left))){

                            return true;

                        }

                    }

                    if((parseInt(tmp_new_doc_content_left) - parseInt(tmp_current_left)) >= 0){

                        //
                        // THIS IS TO SEE IF A==B; NOTE THAT COMPARING AN INTEGER TO A FLOAT (DOUBLE). OR MAYBE
                        // IT WAS TWO (2) FLOATS...
                        if(1 > (parseInt(tmp_new_doc_content_left) - parseInt(tmp_current_left))){

                            return true;

                        }

                    }

                    $('#crnrstn_interact_ui_full_doc_close').animate({
                        left: tmp_new_doc_content_left
                    }, {
                        duration: transition_millisecs,
                        queue: false,
                        specialEasing: {
                            left: "swing"
                        },
                        complete: function () {

                        }

                    });

                }

                return true;

            break;
            case 'crnrstn_documentation_dyn_content_shell':

                tmp_window_width = $(window).width();
                tmp_new_doc_content_width = (tmp_window_width) * 0.64;

                if($('#crnrstn_documentation_dyn_content_shell').length && (tmp_new_doc_content_width > 400)){

                    tmp_current_width = $('#crnrstn_documentation_dyn_content_shell').css('width');
                    tmp_current_width = this.string_clean_css_px_int(tmp_current_width);
                    //alert('[lnum 3794] tmp_current_width[' + tmp_current_width + ']. [' + tmp_new_doc_content_width + '].');
                    //alert('[lnum 3795] tmp_current_width[' + parseInt(tmp_current_width) + ']. [' + parseInt(tmp_new_doc_content_width) + '].');

                    if((parseInt(tmp_current_width) - parseInt(tmp_new_doc_content_width)) >= 0){

                        //
                        // THIS IS TO SEE IF A==B; NOTE THAT COMPARING AN INTEGER TO A FLOAT (DOUBLE). OR MAYBE
                        // IT WAS TWO (2) FLOATS...
                        if(1 > (parseInt(tmp_current_width) - parseInt(tmp_new_doc_content_width))){

                            return true;

                        }

                    }

                    if((parseInt(tmp_new_doc_content_width) - parseInt(tmp_current_width)) >= 0){

                        //
                        // THIS IS TO SEE IF A==B; NOTE THAT COMPARING AN INTEGER TO A FLOAT (DOUBLE). OR MAYBE
                        // IT WAS TWO (2) FLOATS...
                        if(1 > (parseInt(tmp_new_doc_content_width) - parseInt(tmp_current_width))){

                            return true;

                        }

                    }

                    if(tmp_new_doc_content_width > this.content_stage_max_width){

                        tmp_new_doc_content_width = this.content_stage_max_width;

                        //
                        // IF MAX WIDTH ACHIEVED. JUST RETURN TRUE; DO NOT RESIZE.
                        if((parseInt(tmp_new_doc_content_width) - parseInt(tmp_current_width)) >= 0){

                            //
                            // THIS IS TO SEE IF A==B; NOTE THAT COMPARING AN INTEGER TO A FLOAT (DOUBLE). OR MAYBE
                            // IT WAS TWO (2) FLOATS...
                            if(1 > (parseInt(tmp_new_doc_content_width) - parseInt(tmp_current_width))){

                                return true;

                            }

                        }


                    }

                    //alert('[lnum 4128] new doc content width: ' + tmp_new_doc_content_width);

                    $('#crnrstn_documentation_dyn_content_shell').animate({
                        width: tmp_new_doc_content_width
                    }, {
                        duration: transition_millisecs,
                        queue: false,
                        specialEasing: {
                            width: "swing"
                        },
                        complete: function () {

                        }

                    });

                }

                return true;

            break;
            default:

                this.log_activity('[lnum 5390] Unknown DOM element id [' + dom_elem_id + '] received by size_element(). No action taken.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

            break;

        }

    };

    // CRNRSTN_JS.prototype.process_data_tunnel_response = function(oItemNode) {
    //
    //     var serial = $(oItemNode).find("serial").text();
    //     var request_id = $(oItemNode).find("request_id").text();
    //     var server_runtime = $(oItemNode).find("server_runtime").text();
    //
    //     this.log_activity("serial=[" + serial + "] request_id=[" + request_id + "] [" + server_runtime + "]" + this.client_rtime_pretty);
    //
    // }

    // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
    // that contain 'lightbox'. When these are clicked, start lightbox.
    CRNRSTN_JS.prototype.enable = function(){

        var self = this;

        $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {

            self.start($(event.currentTarget));
            return false;

        });

        // $('body').on('click', 'a[href-crnrstn_top_' + session_salt + ']', function(event) {
        //
        //     //alert('hello world');
        //     $("html, body").animate({ scrollTop: 0 }, "slow");
        //     return false;
        //
        // });

        $('body').on('click', 'a[data-crnrstn]', 'a[rel^=crnrstn_documentation_side_nav_' + this.session_salt + ']', function(event) {

            $('#crnrstn_ui_element_load_indicator').stop();
            //alert('currentTarget=' + this.attributes.item(1).value);
            //alert('text=' + this.text);
            //alert('innerHTML=' + this.innerHTML);
            self.interact_ui_refresh_state_docs_bg = 'ENABLED';
            self.link_text_click(this.text);

            return false;

        });

        //
        // CRNRSTN :: DEEP LINK SUPPORT
        $('body').on('click', 'a[rel^=crnrstn_module_share], area[rel^=crnrstn_signin], a[data-crnrstn_signin], area[data-crnrstn_signin]', function(event) {

            self.crnrstn_signin();
            return false;

        });

        //
        // CRNRSTN :: SIGN IN SUPPORT
        $('body').on('click', 'a[rel^=crnrstn_signin], area[rel^=crnrstn_signin], a[data-crnrstn_signin], area[data-crnrstn_signin]', function(event) {

            self.crnrstn_signin();
            return false;

        });

        //
        // CRNRSTN :: BASSDRIVE SUPPORT
        $('body').on('click', 'a[rel^=crnrstn_signin], area[rel^=crnrstn_signin], a[data-crnrstn_signin], area[data-crnrstn_signin]', function(event) {

            self.crnrstn_signin();
            return false;

        });

    };

    // Build html for the lightbox and the overlay.
    // Attach event handlers to the new DOM elements. click click click
    CRNRSTN_JS.prototype.build = function(){

        if ($('#lightbox').length > 0) {

            return;

        }

        var self = this;

        // The two root notes generated, #lightboxOverlay and #lightbox are given
        // tabindex attrs so they are focusable. We attach our keyboard event
        // listeners to these two elements, and not the document. Clicking anywhere
        // while Lightbox is opened will keep the focus on or inside one of these
        // two elements.
        //
        // We do this so we can prevent propagation of the Esc keypress when
        // Lightbox is open. This prevents it from interfering with other components
        // on the page below.
        //
        // Github issue: https://github.com/lokesh/lightbox2/issues/663
        $('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href=""></a><a class="lb-next" aria-label="Next image" href=""></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));

        // Cache jQuery objects
        this.$lightbox       = $('#lightbox');
        this.$overlay        = $('#lightboxOverlay');
        this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
        this.$container      = this.$lightbox.find('.lb-container');
        this.$image          = this.$lightbox.find('.lb-image');
        this.$nav            = this.$lightbox.find('.lb-nav');

        // Store css values for future lookup
        this.containerPadding = {
            top: parseInt(this.$container.css('padding-top'), 10),
            right: parseInt(this.$container.css('padding-right'), 10),
            bottom: parseInt(this.$container.css('padding-bottom'), 10),
            left: parseInt(this.$container.css('padding-left'), 10)
        };

        this.imageBorderWidth = {
            top: parseInt(this.$image.css('border-top-width'), 10),
            right: parseInt(this.$image.css('border-right-width'), 10),
            bottom: parseInt(this.$image.css('border-bottom-width'), 10),
            left: parseInt(this.$image.css('border-left-width'), 10)
        };

        // Attach event handlers to the newly minted DOM elements
        this.$overlay.hide().on('click', function() {

            self.end();
            return false;

        });

        this.$lightbox.hide().on('click', function(event) {

            if ($(event.target).attr('id') === 'lightbox') {
                self.end();
            }

        });

        this.$outerContainer.on('click', function(event) {

            if ($(event.target).attr('id') === 'lightbox') {

                self.end();

            }

            return false;

        });

        this.$lightbox.find('.lb-prev').on('click', function() {

            if (self.currentImageIndex === 0) {

                self.changeImage(self.album.length - 1);

            } else {

                self.changeImage(self.currentImageIndex - 1);

            }

            return false;

        });

        this.$lightbox.find('.lb-next').on('click', function() {

            if (self.currentImageIndex === self.album.length - 1) {

                self.changeImage(0);

            } else {

                self.changeImage(self.currentImageIndex + 1);

            }

            return false;

        });

        /*
          Show context menu for image on right-click

          There is a div containing the navigation that spans the entire image and lives above of it. If
          you right-click, you are right clicking this div and not the image. This prevents users from
          saving the image or using other context menu actions with the image.

          To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
          set pointer-events to none on the nav div. This is so that the upcoming right-click event on
          the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
          we set the pointer events back to auto for the nav div so it can capture hover and left-click
          events as usual.
         */
        this.$nav.on('mousedown', function(event) {

            if (event.which === 3) {

                self.$nav.css('pointer-events', 'none');

                self.$lightbox.one('contextmenu', function() {

                    setTimeout(function() {

                        this.$nav.css('pointer-events', 'auto');

                    }.bind(self), 0);

                });

            }

        });

        this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {

            self.end();
            return false;

        });

    };

    // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
    CRNRSTN_JS.prototype.start = function($link){

        var self    = this;
        var $window = $(window);

        $window.on('resize', $.proxy(this.sizeOverlay, this));

        this.sizeOverlay();

        this.album = [];
        var imageNumber = 0;

        function addToAlbum($link) {

            self.album.push({
                alt: $link.attr('data-alt'),
                link: $link.attr('href'),
                title: $link.attr('data-title') || $link.attr('title')
            });

        }

        // Support both data-lightbox attribute and rel attribute implementations
        var dataLightboxValue = $link.attr('data-lightbox');
        var $links;

        if (dataLightboxValue) {

            $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
            for(let i = 0; i < $links.length; i = ++i) {

                addToAlbum($($links[i]));
                if ($links[i] === $link[0]) {

                    imageNumber = i;

                }

            }

        } else {

            if ($link.attr('rel') === 'lightbox') {

                // If image is not part of a set
                addToAlbum($link);

            } else {

                // If image is part of a set
                $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');

                for(let j = 0; j < $links.length; j = ++j) {

                    addToAlbum($($links[j]));
                    if ($links[j] === $link[0]) {

                        imageNumber = j;

                    }

                }

            }

        }

        // Position Lightbox
        var top  = $window.scrollTop() + this.options.positionFromTop;
        var left = $window.scrollLeft();

        this.$lightbox.css({
            top: top + 'px',
            left: left + 'px'
        }).fadeIn(this.options.fadeDuration);

        // Disable scrolling of the page while open
        if(this.options.disableScrolling){

            $('body').addClass('lb-disable-scrolling');

        }

        this.changeImage(imageNumber);

    };

    // Hide most UI elements in preparation for the animated resizing of the lightbox.
    CRNRSTN_JS.prototype.changeImage = function(imageNumber){

        var self = this;
        var filename = this.album[imageNumber].link;
        var filetype = filename.split('.').slice(-1)[0];
        var $image = this.$lightbox.find('.lb-image');

        // Disable keyboard nav during transitions
        this.disableKeyboardNav();

        // Show loading state
        this.$overlay.fadeIn(this.options.fadeDuration);
        $('.lb-loader').fadeIn('slow');
        this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
        this.$outerContainer.addClass('animating');

        // When image to show is preloaded, we send the width and height to sizeContainer()
        var preloader = new Image();
        preloader.onload = function() {

            var $preloader;
            var imageHeight;
            var imageWidth;
            var maxImageHeight;
            var maxImageWidth;
            var windowHeight;
            var windowWidth;

            $image.attr({
                'alt': self.album[imageNumber].alt,
                'src': filename
            });

            $preloader = $(preloader);

            $image.width(preloader.width);
            $image.height(preloader.height);
            windowWidth = $(window).width();
            windowHeight = $(window).height();

            // Calculate the max image dimensions for the current viewport.
            // Take into account the border around the image and an additional 10px gutter on each side.
            maxImageWidth  = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
            maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - self.options.positionFromTop - 70;

            /*
            Since many SVGs have small intrinsic dimensions, but they support scaling
            up without quality loss because of their vector format, max out their
            size.
            */
            if (filetype === 'svg') {

                $image.width(maxImageWidth);
                $image.height(maxImageHeight);

            }

            // Fit image inside the viewport.
            if (self.options.fitImagesInViewport) {

                // Check if image size is larger then maxWidth|maxHeight in settings
                if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {

                    maxImageWidth = self.options.maxWidth;

                }

                if (self.options.maxHeight && self.options.maxHeight < maxImageHeight) {

                    maxImageHeight = self.options.maxHeight;

                }

            } else {

                maxImageWidth = self.options.maxWidth || preloader.width || maxImageWidth;
                maxImageHeight = self.options.maxHeight || preloader.height || maxImageHeight;

            }

            // Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
            // option than we need to size down while maintaining the aspect ratio.
            if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {

                if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {

                    imageWidth  = maxImageWidth;
                    imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
                    $image.width(imageWidth);
                    $image.height(imageHeight);

                } else {

                    imageHeight = maxImageHeight;
                    imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
                    $image.width(imageWidth);
                    $image.height(imageHeight);

                }

            }

            self.sizeContainer($image.width(), $image.height());

        };

        // Preload image before showing
        preloader.src = this.album[imageNumber].link;
        this.currentImageIndex = imageNumber;

    };

    // Stretch overlay to fit the viewport
    CRNRSTN_JS.prototype.sizeOverlay = function(){

        var self = this;
        /*
        We use a setTimeout 0 to pause JS execution and let the rendering catch-up.
        Why do this? If the `disableScrolling` option is set to true, a class is added to the body
        tag that disables scrolling and hides the scrollbar. We want to make sure the scrollbar is
        hidden before we measure the document width, as the presence of the scrollbar will affect the
        number.
        */

        setTimeout(function() {

            self.$overlay
                .width($(document).width())
                .height($(document).height());

        }, 0);

    };

    // Animate the size of the lightbox to fit the image we are showing
    // This method also shows the the image.
    CRNRSTN_JS.prototype.sizeContainer = function(imageWidth, imageHeight){

        var self = this;

        var oldWidth  = this.$outerContainer.outerWidth();
        var oldHeight = this.$outerContainer.outerHeight();
        var newWidth  = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
        var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

        function postResize() {

            self.$lightbox.find('.lb-dataContainer').width(newWidth);
            self.$lightbox.find('.lb-prevLink').height(newHeight);
            self.$lightbox.find('.lb-nextLink').height(newHeight);

            // Set focus on one of the two root nodes so keyboard events are captured.
            self.$overlay.focus();

            self.showImage();

        }

        if (oldWidth !== newWidth || oldHeight !== newHeight) {

            this.$outerContainer.animate({
                width: newWidth,
                height: newHeight
            }, this.options.resizeDuration, 'swing', function() {
                postResize();
            });

        } else {

            postResize();

        }

    };

    // Display the image and its details and begin preload neighboring images.
    CRNRSTN_JS.prototype.showImage = function(){

        this.$lightbox.find('.lb-loader').stop(true).hide();
        this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);

        this.updateNav();
        this.updateDetails();
        this.preloadNeighboringImages();
        this.enableKeyboardNav();

    };

    // Display previous and next navigation if appropriate.
    CRNRSTN_JS.prototype.updateNav = function(){
        // Check to see if the browser supports touch events. If so, we take the conservative approach
        // and assume that mouse hover events are not supported and always show prev/next navigation
        // arrows in image sets.
        var alwaysShowNav = false;

        try {

            document.createEvent('TouchEvent');
            alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;

        } catch (e) {}

        this.$lightbox.find('.lb-nav').show();

        if (this.album.length > 1) {

            if (this.options.wrapAround) {

                if (alwaysShowNav) {

                    this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');

                }

                this.$lightbox.find('.lb-prev, .lb-next').show();

            } else {

                if (this.currentImageIndex > 0) {

                    this.$lightbox.find('.lb-prev').show();

                    if (alwaysShowNav) {

                        this.$lightbox.find('.lb-prev').css('opacity', '1');

                    }

                }

                if (this.currentImageIndex < this.album.length - 1) {

                    this.$lightbox.find('.lb-next').show();

                    if (alwaysShowNav) {

                        this.$lightbox.find('.lb-next').css('opacity', '1');

                    }

                }

            }

        }

    };

    // Display caption, image number, and closing button.
    CRNRSTN_JS.prototype.updateDetails = function(){

        var self = this;

        // Enable anchor clicks in the injected caption html.
        // Thanks Nate Wright for the fix. @https://github.com/NateWr
        if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
            this.album[this.currentImageIndex].title !== '') {

            var $caption = this.$lightbox.find('.lb-caption');

            if (this.options.sanitizeTitle) {

                $caption.text(this.album[this.currentImageIndex].title);

            } else {

                $caption.html(this.album[this.currentImageIndex].title);

            }

            $caption.fadeIn('fast');

        }

        if (this.album.length > 1 && this.options.showImageNumberLabel) {

            var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');

        } else {

            this.$lightbox.find('.lb-number').hide();

        }

        this.$outerContainer.removeClass('animating');

        this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {

            return self.sizeOverlay();

        });

    };

    // Preload previous and next images in set.
    CRNRSTN_JS.prototype.preloadNeighboringImages = function(){

        if (this.album.length > this.currentImageIndex + 1) {

            var preloadNext = new Image();
            preloadNext.src = this.album[this.currentImageIndex + 1].link;

        }

        if (this.currentImageIndex > 0) {

            var preloadPrev = new Image();
            preloadPrev.src = this.album[this.currentImageIndex - 1].link;

        }

    };

    CRNRSTN_JS.prototype.enableKeyboardNav = function(){

        this.$lightbox.on('keyup.keyboard', $.proxy(this.keyboardAction, this));
        this.$overlay.on('keyup.keyboard', $.proxy(this.keyboardAction, this));

    };

    CRNRSTN_JS.prototype.disableKeyboardNav = function(){

        this.$lightbox.off('.keyboard');
        this.$overlay.off('.keyboard');

    };

    CRNRSTN_JS.prototype.keyboardAction = function(event){

        var KEYCODE_ESC        = 27;
        var KEYCODE_LEFTARROW  = 37;
        var KEYCODE_RIGHTARROW = 39;

        var keycode = event.keyCode;
        if (keycode === KEYCODE_ESC) {

            // Prevent bubbling so as to not affect other components on the page.
            event.stopPropagation();
            this.end();

        } else if (keycode === KEYCODE_LEFTARROW) {

            if (this.currentImageIndex !== 0) {

                this.changeImage(this.currentImageIndex - 1);

            } else if (this.options.wrapAround && this.album.length > 1) {

                this.changeImage(this.album.length - 1);

            }

        } else if (keycode === KEYCODE_RIGHTARROW) {

            if (this.currentImageIndex !== this.album.length - 1) {

                this.changeImage(this.currentImageIndex + 1);

            } else if (this.options.wrapAround && this.album.length > 1) {

                this.changeImage(0);

            }

        }

    };

    CRNRSTN_JS.prototype.transitions_ui_content_update = function(target_dom_elem_id, content, transition = null){

        if(transition === null){

            $('#' + target_dom_elem_id).html(content);

        }else{

            $('#' + target_dom_elem_id).toggle( transition );

            $( "#crnrstn_ui_transition_delay").animate({
                left: "0px"
            }, {
                duration: 700,
                queue: false,
                step: function( now, fx ) {

                },
                complete: function () {

                    $('#' + target_dom_elem_id).html(content);

                    $('#' + target_dom_elem_id).toggle( transition );

                }

            });

        }

    };

    //
    // SOURCE :: https://stackoverflow.com/questions/14129953/how-to-encode-a-string-in-javascript-for-displaying-in-html
    // COMMENT :: https://stackoverflow.com/a/14130005
    // AUTHOR :: j08691:: https://stackoverflow.com/users/616443/j08691
    CRNRSTN_JS.prototype.html_entities = function(str){

        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    };

    CRNRSTN_JS.prototype.log_out = function(str){

        var curr_date_obj = new Date();

        switch(this.CRNRSTN_LOGGING_OUTPUT){
            case 'DOM':

                var log_out = '[' + this.return_log_date_string(curr_date_obj, 'sys_ts') + '] [rtime' + this.return_log_date_string(curr_date_obj, 'sys_rtime') + '] ' + str;
                var oCRNRSTN_LOG_DOM_ELEM = document.createElement('div');

                oCRNRSTN_LOG_DOM_ELEM.setAttribute('class', 'crnrstn_log_entry');
                $("#crnrstn_activity_log_output").prepend(oCRNRSTN_LOG_DOM_ELEM);

                //
                // CLEAN STRING FOR HTML
                // &lt;profile&gt;
                str_clean = this.html_entities(log_out);

                oCRNRSTN_LOG_DOM_ELEM.innerHTML = str_clean;

            break;
            case 'ALERT':

                alert(str);

            break;
            default:
                //CONSOLE OUT
                console.log('[' + this.return_log_date_string(curr_date_obj, 'sys_ts') + '] [rtime' + this.return_log_date_string(curr_date_obj, 'sys_rtime') + '] ' + str);

            break;

        }

    };

    CRNRSTN_JS.prototype.log_activity = function(str, mode = this.CRNRSTN_DEBUG_BASIC){

        if(this.crnrstn_debug_mode === this.CRNRSTN_DEBUG_OFF){

        }else{

            switch(this.CRNRSTN_LOGGING_OUTPUT){
                case 'DOM':
                case 'CONSOLE':
                case 'ALERT':
                default:

                    if(mode === this.CRNRSTN_DEBUG_VERBOSE){

                        //
                        // VERBOSE IS SET LOCALLY
                        this.log_out(str);

                    }else{

                        switch (this.crnrstn_debug_mode) {
                            case this.CRNRSTN_DEBUG_VERBOSE:

                                //
                                // VERBOSE IS SET GLOBALLY
                                this.log_out(str);

                            break;
                            case this.CRNRSTN_DEBUG_BASSDRIVE:

                                if (mode === this.CRNRSTN_DEBUG_BASSDRIVE) {

                                    this.log_out(str);

                                }

                            break;
                            case this.CRNRSTN_DEBUG_LIFESTYLE_BANNER:

                                if (mode === this.CRNRSTN_DEBUG_LIFESTYLE_BANNER) {

                                    this.log_out(str);

                                }

                            break;
                            case this.CRNRSTN_DEBUG_BASIC:

                                if (mode === this.CRNRSTN_DEBUG_BASIC) {

                                    this.log_out(str);

                                } else {

                                    if (mode === this.CRNRSTN_DEBUG_LIFESTYLE_BANNER) {

                                        this.log_out(str);

                                    } else {

                                        if (mode === this.CRNRSTN_DEBUG_BASSDRIVE) {

                                            this.log_out(str);

                                        }

                                    }

                                }

                            break;
                            default:
                                // SILENCE IS GOLDEN.
                            break;

                        }

                    }

                break;

            }

        }

    };

    CRNRSTN_JS.prototype.return_log_date_string = function(date_obj, type, abbrev_type = 'short_str'){

        var output_str = '';

        switch(type){
            case 'sys_rtime':
                // 0.434234 secs
                // 1 min 5.434234 secs
                // 1 hr 3 mins 15.434234 secs

                var time_chunks = this.client_rtime.split(":");
                var year, month, week, day, hour, mins, secs;
                var year_copy = '';
                var month_copy = '';
                var week_copy = '';
                var day_copy = '';
                var hour_copy = '';
                var min_copy = '';
                var secs_copy = '';

                hour = Number(time_chunks[0]);
                mins = Number(time_chunks[1]);
                secs = Number(time_chunks[2]);

                this.client_rtime_hour = hour;
                this.client_rtime_mins = this.plz(mins);
                this.client_rtime_secs = this.plz(secs);

                // if(hour > 24){
                //
                //     this.client_rtime_day = hour;
                //     hour_copy = '';
                //
                // }

                if (hour > 0) {

                    hour_copy = " " + hour + " hr";

                    if (hour > 1) {

                        hour_copy = hour_copy + "s";

                    }

                    hour_copy = hour_copy;

                }

                if (mins > 0) {

                    min_copy = " " + mins + " min";

                    if (mins > 1) {

                        min_copy = min_copy + "s";

                    }

                }

                var temp_curr_date = new Date();
                this.client_millisecs = temp_curr_date.getMilliseconds();

                if (secs > 0) {

                    secs_copy = " " + secs + "." + this.client_millisecs + " secs";

                } else {

                    secs_copy = " 0." + this.client_millisecs + " secs";

                }

                output_str = hour_copy + min_copy + secs_copy;

            break;
            case 'timestamp':

                var day_mth = this.return_log_date_string(date_obj, 'day_mth', 'long_int');
                var month = this.return_log_date_string(date_obj, 'month');
                var day_wk = this.return_log_date_string(date_obj, 'day_wk', 'long_int');
                var hours = this.return_log_date_string(date_obj, 'hours');
                var minutes = this.return_log_date_string(date_obj, 'minutes');
                var seconds = this.return_log_date_string(date_obj, 'seconds', 'long_int');
                var year = this.return_log_date_string(date_obj, 'year');

                output_str = day_wk + ' ' + month + ' ' + day_mth + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + year;

            break;
            case 'sys_ts':
                //2021-11-20 08:48:42.179295
                // date_obj.getTimezoneOffset();

                var day_mth = this.return_log_date_string(date_obj, 'day_mth', 'long_int');
                var month = this.return_log_date_string(date_obj, 'month', 'long_int');  //date_obj.getMonth();
                //var day_wk = this.return_log_date_string(date_obj, 'day_wk', 'long_int');
                var hours = this.return_log_date_string(date_obj, 'hours');
                var minutes = this.return_log_date_string(date_obj, 'minutes');
                var seconds = this.return_log_date_string(date_obj, 'seconds', 'long_int');
                var year = this.return_log_date_string(date_obj, 'year');

                dtz_delta = this.return_utc_offset(date_obj);

                output_str = year + '-'+ month + '-' + day_mth + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + dtz_delta;

            break;
            case 'day_wk':
                // Mon
                // this.client_day_abbrev_ARRAY = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
                // this.client_day_ARRAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

                var day = date_obj.getDay();
                if(abbrev_type == 'short_str'){

                    output_str = this.client_day_abbrev_ARRAY[day];

                }else{

                    if(abbrev_type == 'long_str'){

                        output_str = this.client_day_ARRAY[day];

                    }else{

                        day++;

                        if (abbrev_type == 'long_int') {

                            if (day < 10) {

                                output_str = '0' + day;

                            }else{

                                output_str = day;

                            }

                        }

                    }

                }

            break;
            case 'day_mth':
                // 29
                // this.client_day_mth_en_ARRAY = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
                // 'eigth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirtenth', '', '', '', '', '', '', '', '',
                // '', '', '', '', '', '', '', '', '', '', '', '',
                // '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

                // this.client_day_mth_en_ARRAY = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th',
                // '8th', '9th', '10th', '11th', '12th', '13th', '', '', '', '', '', '', '', '',
                // '', '', '', '', '', '', '', '', '', '', '', '',
                // '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

                day = date_obj.getDate();

                if (abbrev_type == 'long_int') {

                    if (day < 10) {

                        output_str = '0' + day;

                    }else{

                        output_str = day;

                    }

                }

            break;
            case 'month':
                // long_int, long_str, short_str
                // this.client_month_abbrev_ARRAY = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
                // this.client_month_ARRAY = ['January','February','March','April','May','June','July','August','September','October','November','December'];

                var month = date_obj.getMonth();

                if(abbrev_type == 'short_str'){

                    output_str = this.client_month_abbrev_ARRAY[month];

                }else{

                    if(abbrev_type == 'long_str'){

                        output_str = this.client_month_ARRAY[month];

                    }else{

                        month++;

                        if (abbrev_type == 'long_int') {

                            if (month < 10) {

                                output_str = '0' + month;

                            }else{

                                output_str = month;

                            }

                        }

                    }

                }

            break;
            case 'year':

                output_str = date_obj.getFullYear();

            break;
            case 'hours':

                output_str = date_obj.getHours();
                output_str = this.plz(output_str);

            break;
            case 'minutes':

                output_str = date_obj.getMinutes();
                output_str = this.plz(output_str);

            break;
            case 'seconds':

                var temp_curr_date = new Date();
                this.client_millisecs = temp_curr_date.getMilliseconds();

                var secs = date_obj.getSeconds();

                if (abbrev_type == 'long_int') {

                    if (secs < 10) {

                        output_str = '0' + secs;

                    }else{

                        output_str = secs;

                    }

                }

                output_str = output_str + '.' + this.client_millisecs;

            break;

        }

        return output_str;

    };

    CRNRSTN_JS.prototype.return_utc_offset = function(date_obj){

        var dtz_delta = date_obj.getTimezoneOffset();

        dtz_delta_units_hr = dtz_delta / 60;
        dtz_delta_units_min = dtz_delta_units_hr % 1;

        if(dtz_delta_units_hr > 0){

            dtz_sign = '+';

        }else{

            dtz_sign = '-';
            dtz_delta_units_hr = dtz_delta_units_hr * -1;
            dtz_delta_units_min = dtz_delta_units_min * -1;

        }

        dtz_delta_hr = dtz_delta_units_hr - dtz_delta_units_min;
        dtz_delta_min = dtz_delta_units_min * 60;

        dtz_delta_hr = this.plz(dtz_delta_hr);
        dtz_delta_min = this.plz(dtz_delta_min);

        dtz_delta = 'UTC' + dtz_sign + dtz_delta_hr + dtz_delta_min;

        return dtz_delta;

    };

    //
    // SOURCE :: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    // COMMENT :: https://stackoverflow.com/a/2901298
    // AUTHOR :: Elias Zamaria :: https://stackoverflow.com/users/28324/elias-zamaria
    CRNRSTN_JS.prototype.pretty_format_number = function(num){

        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return parts.join(".");

    };

    //
    // SOURCE :: https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
    // COMMENT :: https://stackoverflow.com/a/18650828
    // AUTHOR :: StackOverflow's community
    CRNRSTN_JS.prototype.format_bytes = function(bytes, decimals = 2){

        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`

    };

    CRNRSTN_JS.prototype.short_format_data_size = function(data_format){

        var format = '';

        switch(data_format){
            case 'kilabit':

                format = 'KB';

            break;
            case 'megabit':

                format = 'MB';

            break;
            case 'gigabit':

                format = 'GB';

            break;
            default:

                format = '?B';

            break;

        }

        return format;

    };

    // CURRENTLY, THIS IS ONLY USED FOR DETERMINING IF A STRING IS INSIDE ANOTHER
    // STRING, AND IT FUNCTIONS NOT AT ALL LIKE THE NATIVE PHP METHODS RECEIVING HAT-TIP.
    // WOULD BE NICE IF THIS AT LEAST TRIED TO BE FAITHFUL...
    //
    // strpos(string $haystack, string $needle, int $offset = 0)
    CRNRSTN_JS.prototype.strpos = function(haystack, needle, offset){

        var tmp_str_split_ARRAY = haystack.toString().split(needle);

        if(tmp_str_split_ARRAY.length > 1){

            return true;

        }

        return false;

    };

    // CURRENTLY, THIS IS ONLY USED FOR DETERMINING IF A STRING IS INSIDE ANOTHER
    // STRING, AND IT FUNCTIONS NOT AT ALL LIKE THE NATIVE PHP METHODS RECEIVING HAT-TIP.
    // WOULD BE NICE IF THIS AT LEAST TRIED TO BE FAITHFUL...
    //
    // stripos(string $haystack, string $needle, int $offset = 0);
    CRNRSTN_JS.prototype.stripos = function(haystack, needle, offset){

        haystack = haystack.toUpperCase();
        needle = needle.toUpperCase();

        var tmp_str_split_ARRAY = haystack.toString().split(needle);

        if(tmp_str_split_ARRAY.length > 1){

            return true;

        }

        return false;

    };

    //
    // SOURCE :: http://www.myersdaily.org/joseph/javascript/md5.js
    // SOURCE :: https://stackoverflow.com/questions/1655769/fastest-md5-implementation-in-javascript
    // COMMENT :: https://stackoverflow.com/a/1655795
    // AUTHOR :: Matt Baker :: https://stackoverflow.com/users/190938/matt-baker
    // AUTHOR :: Joseph Myers :: https://www.myersdaily.org/joseph/
    CRNRSTN_JS.prototype.md5cycle = function(x, k){

        var a = x[0], b = x[1], c = x[2], d = x[3];

        a = this.ff(a, b, c, d, k[0], 7, -680876936);
        d = this.ff(d, a, b, c, k[1], 12, -389564586);
        c = this.ff(c, d, a, b, k[2], 17, 606105819);
        b = this.ff(b, c, d, a, k[3], 22, -1044525330);
        a = this.ff(a, b, c, d, k[4], 7, -176418897);
        d = this.ff(d, a, b, c, k[5], 12, 1200080426);
        c = this.ff(c, d, a, b, k[6], 17, -1473231341);
        b = this.ff(b, c, d, a, k[7], 22, -45705983);
        a = this.ff(a, b, c, d, k[8], 7, 1770035416);
        d = this.ff(d, a, b, c, k[9], 12, -1958414417);
        c = this.ff(c, d, a, b, k[10], 17, -42063);
        b = this.ff(b, c, d, a, k[11], 22, -1990404162);
        a = this.ff(a, b, c, d, k[12], 7, 1804603682);
        d = this.ff(d, a, b, c, k[13], 12, -40341101);
        c = this.ff(c, d, a, b, k[14], 17, -1502002290);
        b = this.ff(b, c, d, a, k[15], 22, 1236535329);

        a = this.gg(a, b, c, d, k[1], 5, -165796510);
        d = this.gg(d, a, b, c, k[6], 9, -1069501632);
        c = this.gg(c, d, a, b, k[11], 14, 643717713);
        b = this.gg(b, c, d, a, k[0], 20, -373897302);
        a = this.gg(a, b, c, d, k[5], 5, -701558691);
        d = this.gg(d, a, b, c, k[10], 9, 38016083);
        c = this.gg(c, d, a, b, k[15], 14, -660478335);
        b = this.gg(b, c, d, a, k[4], 20, -405537848);
        a = this.gg(a, b, c, d, k[9], 5, 568446438);
        d = this.gg(d, a, b, c, k[14], 9, -1019803690);
        c = this.gg(c, d, a, b, k[3], 14, -187363961);
        b = this.gg(b, c, d, a, k[8], 20, 1163531501);
        a = this.gg(a, b, c, d, k[13], 5, -1444681467);
        d = this.gg(d, a, b, c, k[2], 9, -51403784);
        c = this.gg(c, d, a, b, k[7], 14, 1735328473);
        b = this.gg(b, c, d, a, k[12], 20, -1926607734);

        a = this.hh(a, b, c, d, k[5], 4, -378558);
        d = this.hh(d, a, b, c, k[8], 11, -2022574463);
        c = this.hh(c, d, a, b, k[11], 16, 1839030562);
        b = this.hh(b, c, d, a, k[14], 23, -35309556);
        a = this.hh(a, b, c, d, k[1], 4, -1530992060);
        d = this.hh(d, a, b, c, k[4], 11, 1272893353);
        c = this.hh(c, d, a, b, k[7], 16, -155497632);
        b = this.hh(b, c, d, a, k[10], 23, -1094730640);
        a = this.hh(a, b, c, d, k[13], 4, 681279174);
        d = this.hh(d, a, b, c, k[0], 11, -358537222);
        c = this.hh(c, d, a, b, k[3], 16, -722521979);
        b = this.hh(b, c, d, a, k[6], 23, 76029189);
        a = this.hh(a, b, c, d, k[9], 4, -640364487);
        d = this.hh(d, a, b, c, k[12], 11, -421815835);
        c = this.hh(c, d, a, b, k[15], 16, 530742520);
        b = this.hh(b, c, d, a, k[2], 23, -995338651);

        a = this.ii(a, b, c, d, k[0], 6, -198630844);
        d = this.ii(d, a, b, c, k[7], 10, 1126891415);
        c = this.ii(c, d, a, b, k[14], 15, -1416354905);
        b = this.ii(b, c, d, a, k[5], 21, -57434055);
        a = this.ii(a, b, c, d, k[12], 6, 1700485571);
        d = this.ii(d, a, b, c, k[3], 10, -1894986606);
        c = this.ii(c, d, a, b, k[10], 15, -1051523);
        b = this.ii(b, c, d, a, k[1], 21, -2054922799);
        a = this.ii(a, b, c, d, k[8], 6, 1873313359);
        d = this.ii(d, a, b, c, k[15], 10, -30611744);
        c = this.ii(c, d, a, b, k[6], 15, -1560198380);
        b = this.ii(b, c, d, a, k[13], 21, 1309151649);
        a = this.ii(a, b, c, d, k[4], 6, -145523070);
        d = this.ii(d, a, b, c, k[11], 10, -1120210379);
        c = this.ii(c, d, a, b, k[2], 15, 718787259);
        b = this.ii(b, c, d, a, k[9], 21, -343485551);

        x[0] = this.add32(a, x[0]);
        x[1] = this.add32(b, x[1]);
        x[2] = this.add32(c, x[2]);
        x[3] = this.add32(d, x[3]);

    };

    CRNRSTN_JS.prototype.cmn = function(q, a, b, x, s, t){

        a = this.add32(this.add32(a, q), this.add32(x, t));

        return this.add32((a << s) | (a >>> (32 - s)), b);

    };

    CRNRSTN_JS.prototype.ff = function(a, b, c, d, x, s, t){

        return this.cmn((b & c) | ((~b) & d), a, b, x, s, t);

    };

    CRNRSTN_JS.prototype.gg = function(a, b, c, d, x, s, t){

        return this.cmn((b & d) | (c & (~d)), a, b, x, s, t);

    };

    CRNRSTN_JS.prototype.hh = function(a, b, c, d, x, s, t){

        return this.cmn(b ^ c ^ d, a, b, x, s, t);

    };

    CRNRSTN_JS.prototype.ii = function(a, b, c, d, x, s, t){

        return this.cmn(c ^ (b | (~d)), a, b, x, s, t);

    };

    CRNRSTN_JS.prototype.md51 = function(s){

        txt = '';
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878], i;

        for(i = 64; i <= s.length; i += 64){

            this.md5cycle(state, this.md5blk(s.substring(i - 64, i)));

        }

        s = s.substring(i - 64);
        var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];

        for(i = 0; i < s.length; i++)
            tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
        tail[i>>2] |= 0x80 << ((i%4) << 3);

        if(i > 55){
            this.md5cycle(state, tail);
            for(i = 0; i < 16; i++) tail[i] = 0;

        }

        tail[14] = n*8;
        this.md5cycle(state, tail);

        return state;

    };

    /* there needs to be support for Unicode here,
    * unless we pretend that we can redefine the MD-5
    * algorithm for multi-byte characters (perhaps
    * by adding every four 16-bit characters and
    * shortening the sum to 32 bits). Otherwise
    * I suggest performing MD-5 as if every character
    * was two bytes--e.g., 0040 0025 = @%--but then
    * how will an ordinary MD-5 sum be matched?
    * There is no way to standardize text to something
    * like UTF-8 before transformation; speed cost is
    * utterly prohibitive. The JavaScript standard
    * itself needs to look at this: it should start
    * providing access to strings as preformed UTF-8
    * 8-bit unsigned value arrays.

    */
    CRNRSTN_JS.prototype.md5blk = function(s){

        var md5blks = [], i; /* Andy King said do it this way. */

        for(i = 0; i < 64; i += 4) {

            md5blks[i>>2] = s.charCodeAt(i)
                + (s.charCodeAt(i+1) << 8)
                + (s.charCodeAt(i+2) << 16)
                + (s.charCodeAt(i+3) << 24);

        }

        return md5blks;

    };

    CRNRSTN_JS.prototype.rhex = function(n){

        var s = '', j = 0;

        for(; j<4; j++)
            s += this.hex_chr[(n >> (j * 8 + 4)) & 0x0F]
                + this.hex_chr[(n >> (j * 8)) & 0x0F];

        return s;

    };

    CRNRSTN_JS.prototype.hex = function(x){

        for (var i=0; i<x.length; i++)
            x[i] = this.rhex(x[i]);

        return x.join('');

    };

    CRNRSTN_JS.prototype.md5 = function(s){

        return this.hex(this.md51(s));

    };

    CRNRSTN_JS.prototype.add32 = function(x, y){

        if(this.md5_IE_32bit_shift_enabled){

            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);

            return (msw << 16) | (lsw & 0xFFFF);

        }

        /* this return is much faster,
        so if possible we use it. Some IEs
        are the only ones I know of that
        need the idiotic second function,
        generated by an if clause.

        */
        return (x + y) & 0xFFFFFFFF;

    };

    //
    // SOURCE :: https://stackoverflow.com/questions/16153479/jquery-checksum
    // COMMENT :: https://stackoverflow.com/a/16153781
    // AUTHOR :: Siva Charan :: https://stackoverflow.com/users/500725/siva-charan
    CRNRSTN_JS.prototype.return_checksum = function(str = null){

        var hash = 0, i, char;

        if(str.length == 0){

            tmp_timestamp = new Date();
            str = this.return_log_date_string(tmp_timestamp, 'sys_ts');

        }

        if (str.length == 0) return hash;

        for(let i = 0; i < str.length; i++) {
            char = str.charCodeAt(i);
            hash = ((hash<<5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }

        return hash;

    };

    CRNRSTN_JS.prototype.hash = function(data, algorithm = ''){

        var hash_return = '';
        //this.total_bytes_hashed += data.length;

        if(!(algorithm.length > 0)){

            algorithm = this.system_hash_algo;

        }

        switch(algorithm){
            case 'checksum':

                hash_return = this.return_checksum(data);

            break;
            default:

                // MD5
                hash_return = this.md5(data);

            break;

        }

        return hash_return;

    };

    //
    // SOURCE :: https://codepen.io/kachibito/pen/PjqrEE
    // AUTHOR :: kachibito :: https://codepen.io/kachibito
    CRNRSTN_JS.prototype.generate_new_key = function(length = 64, chars_selection = null){

        var chars = '';
        var text = '';

        if(chars_selection == null){

            chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            chars += 'abcdefghijklmnopqrstuvwxyz';
            chars += '0123456789';
            chars += '![]{}()%&*$#^<>~@|- ';

        }else{

            if(chars_selection.length < 1){

                chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                chars += 'abcdefghijklmnopqrstuvwxyz';
                chars += '0123456789';
                chars += '![]{}()%&*$#^<>~@|- ';

            }else{

                chars = chars_selection;

            }
        }

        for(let i = 0; i < length; i++) {

            text += chars.charAt(Math.floor(Math.random() * chars.length));

        }

        return text;

    };

    //
    // LINING UP TO RE-ARCH THIS INTO CRNRSTN ::
    CRNRSTN_JS.prototype.rotate_jony5_lifestyle_image = function(dom_element_alpha, dom_element_beta){

        var self = this;

        tmp_zindex_alpha = $('#' + dom_element_alpha).css( "zIndex" );
        tmp_zindex_beta = $('#' + dom_element_beta).css( "zIndex" );

        //
        // SHIFT TO HIGHER Z AND MAKE VISIBLE
        $('#' + dom_element_alpha).css('zIndex', tmp_zindex_beta);
        $('#' + dom_element_beta).css('zIndex', tmp_zindex_alpha);

        if(tmp_zindex_alpha < tmp_zindex_beta){

            var tmp_str = $('#' + dom_element_beta).html();
            tmp_str = this.extract_filename(tmp_str);
            this.log_activity('[lnum 6991] ALPHA Z-SHIFTED ' + tmp_zindex_alpha + '->' + tmp_zindex_beta + '. [' + tmp_str + '] NOW FIRING! OPACITY-TRANSITION ' + $('#' + dom_element_alpha).css( "opacity" ) + ' TO 1.0.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

            $('#' + dom_element_alpha).animate({
                opacity: 1.0
            }, {
                duration: 1000,
                queue: false,
                step: function( now, fx ) {

                },
                complete: function () {

                    $('#' + dom_element_beta).animate({
                        opacity: 0
                    }, {
                        duration: 0,
                        queue: false,
                        step: function( now, fx ) {

                        },
                        complete: function () {

                            var seq_adj_pos = self.back_press_cnt + self.jony5_lifestyle_banner_sequence_position;

                            if(self.jony5_lifestyle_banner_sequence_control_ARRAY.length > seq_adj_pos){

                                self.jony5_lifestyle_banner_sequence_position = self.jony5_lifestyle_banner_sequence_position + 1;

                                //
                                // MOVE TOP DOM ELEM CONTENT TO TEMP CONTAINER TO TEMP TOP CONTAINER
                                $('#jony5_banner_lifestyle_transition_tmp').html($('#' + self.top_lifestyle_banner_image_container).html());

                                //
                                // RESET ALPHA AND BETA CONTAINERS TO PREV/NEXT STATE
                                self.jony5_lifestyle_banner_state_revert();

                                //
                                // FIRE TRANSITION ("OPACITY OUT" TEMP CONTAINER)
                                self.jony5_lifestyle_banner_tmp_transition();

                                //
                                // HIDE/SHOW BUTTONS (FWD OR BACK) IF AT THRESHOLD
                                var result = self.jony5_lifestyle_banner_sequence_control_ARRAY.length - self.jony5_lifestyle_banner_sequence_position - self.back_press_cnt - 2;

                                if((result != 0) && (result < self.jony5_lifestyle_banner_sequence_control_ARRAY.length)){

                                    self.log_activity('[lnum 7037] VISIBILITY FWD BUTTON banner_sequence_position=[' + self.jony5_lifestyle_banner_sequence_position + ']', self.CRNRSTN_DEBUG_VERBOSE);

                                    self.set_ui_component_state('forward_btn_banner', 'ON');

                                }else{

                                    self.log_activity('[lnum 7043] VISIBILITY FWD BUTTON banner_sequence_position=[' + self.jony5_lifestyle_banner_sequence_position + ']', self.CRNRSTN_DEBUG_VERBOSE);

                                    self.set_ui_component_state('forward_btn_banner', 'OFF');

                                }

                                if(self.jony5_lifestyle_banner_sequence_position > 2){

                                    self.log_activity('[lnum 7051] VISIBILITY BACK BUTTON banner_sequence_position=[' + self.jony5_lifestyle_banner_sequence_position + ']', self.CRNRSTN_DEBUG_VERBOSE);

                                    self.set_ui_component_state('back_btn_banner', 'ON');

                                }else{

                                    self.log_activity('[lnum 7057] VISIBILITY BACK BUTTON banner_sequence_position=[' + self.jony5_lifestyle_banner_sequence_position + ']', self.CRNRSTN_DEBUG_VERBOSE);

                                    self.set_ui_component_state('back_btn_banner', 'OFF');

                                }

                            }else{

                                var tmp_index = self.return_random_index_int(self.jony5_lifestyle_banner_images_ARRAY);
                                var tmp_next_image = self.jony5_lifestyle_banner_images_ARRAY[tmp_index];

                                self.jony5_lifestyle_banner_sequence_control_ARRAY.push(tmp_index);
                                self.jony5_lifestyle_banner_img_int_sequence_alpha.push(tmp_index);

                                self.jony5_lifestyle_banner_sequence_position++;

                                var tmp_str = self.extract_filename(tmp_next_image);
                                self.log_activity('[lnum 7074] QUEUE RANDOM IMAGE ' + tmp_index + ' (OUT OF ' + self.jony5_lifestyle_banner_images_ARRAY.length + '). [' + tmp_str + '].', self.CRNRSTN_DEBUG_VERBOSE);

                                if(self.jony5_lifestyle_banner_sequence_position > 0){

                                    self.set_ui_component_state('back_btn_banner', 'ON');

                                }else{

                                    self.set_ui_component_state('back_btn_banner', 'OFF');

                                }

                                self.back_press_cnt = self.back_press_cnt * 1;
                                var result = self.jony5_lifestyle_banner_sequence_control_ARRAY.length - self.jony5_lifestyle_banner_sequence_position - self.back_press_cnt;

                                self.log_activity('[lnum 7089] FWD BUTTON ON IF [' + self.back_press_cnt + '][' + self.jony5_lifestyle_banner_sequence_position + '][' + result + '] < [' + self.jony5_lifestyle_banner_sequence_control_ARRAY.length + ']', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                                if((result != 0) && (result < self.jony5_lifestyle_banner_sequence_control_ARRAY.length)){

                                    self.set_ui_component_state('forward_btn_banner', 'ON');

                                }else{

                                    self.set_ui_component_state('forward_btn_banner', 'OFF');

                                }

                                self.load_image_lowest_z_indice('jony5_banner_lifestyle_alpha', 'jony5_banner_lifestyle_beta', tmp_next_image);

                                self.log_activity('[lnum 7103] INITIALIZE 7 SECOND TTL ON ELEMENT HOLD - BANNER IMAGE ROTATION.', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
                                self.execution_delay_ui_sync_controller('schedule', 'lifestyle_banner_image_rotation', 7);

                            }

                            if(self.back_press_cnt > 0){

                                self.back_press_cnt = self.back_press_cnt - 1;

                            }

                        }

                    });

                }

            });

            return dom_element_alpha;

        }else{

            var tmp_str = $('#' + dom_element_beta).html();
            tmp_str = this.extract_filename(tmp_str);
            this.log_activity('[lnum 7128] BETA Z-SHIFTED ' + tmp_zindex_beta + '->' + tmp_zindex_alpha + ' [' + tmp_str + '] NOW FIRING! OPACITY-TRANSITION ' + $('#' + dom_element_beta).css( "opacity" ) + ' TO 1.0.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

            $('#' + dom_element_beta).animate({
                opacity: 1.0
            }, {
                duration: 1000,
                queue: false,
                step: function( now, fx ) {

                },
                complete: function () {

                    $('#' + dom_element_alpha).animate({
                        opacity: 0
                    }, {
                        duration: 0,
                        queue: false,
                        step: function( now, fx ) {

                        },
                        complete: function () {

                            var seq_adj_pos = self.back_press_cnt + self.jony5_lifestyle_banner_sequence_position;

                            if(self.jony5_lifestyle_banner_sequence_control_ARRAY.length > seq_adj_pos){

                                self.jony5_lifestyle_banner_sequence_position = self.jony5_lifestyle_banner_sequence_position + 1;

                                //
                                // MOVE TOP DOM ELEM CONTENT TO TEMP CONTAINER TO TEMP TOP CONTAINER
                                $('#jony5_banner_lifestyle_transition_tmp').html($('#' + self.top_lifestyle_banner_image_container).html());

                                //
                                // RESET ALPHA AND BETA CONTAINERS TO PREV/NEXT STATE
                                self.jony5_lifestyle_banner_state_revert();

                                //
                                // FIRE TRANSITION ("OPACITY OUT" TEMP CONTAINER)
                                self.jony5_lifestyle_banner_tmp_transition();

                                //
                                // HIDE/SHOW BUTTONS (FWD OR BACK) IF AT THRESHOLD
                                var result = self.jony5_lifestyle_banner_sequence_control_ARRAY.length - self.jony5_lifestyle_banner_sequence_position - self.back_press_cnt - 2;

                                if((result != 0) && (result < self.jony5_lifestyle_banner_sequence_control_ARRAY.length)){

                                    self.log_activity('[lnum 7174] VISIBILITY FWD BUTTON banner_sequence_position=[' + self.jony5_lifestyle_banner_sequence_position + ']', self.CRNRSTN_DEBUG_VERBOSE);

                                    self.set_ui_component_state('forward_btn_banner', 'ON');

                                }else{

                                    self.log_activity('[lnum 7180] VISIBILITY FWD BUTTON banner_sequence_position=[' + self.jony5_lifestyle_banner_sequence_position + ']', self.CRNRSTN_DEBUG_VERBOSE);

                                    self.set_ui_component_state('forward_btn_banner', 'OFF');

                                }

                                if(self.jony5_lifestyle_banner_sequence_position > 2){

                                    self.log_activity('[lnum 7188] VISIBILITY BACK BUTTON banner_sequence_position=[' + self.jony5_lifestyle_banner_sequence_position + ']', self.CRNRSTN_DEBUG_VERBOSE);

                                    self.set_ui_component_state('back_btn_banner', 'ON');

                                }else{

                                    self.log_activity('[lnum 7194] VISIBILITY BACK BUTTON banner_sequence_position=[' + self.jony5_lifestyle_banner_sequence_position + ']', self.CRNRSTN_DEBUG_VERBOSE);

                                    self.set_ui_component_state('back_btn_banner', 'OFF');

                                }

                            }else{

                                var tmp_index = self.return_random_index_int(self.jony5_lifestyle_banner_images_ARRAY);
                                var tmp_next_image = self.jony5_lifestyle_banner_images_ARRAY[tmp_index];

                                self.jony5_lifestyle_banner_sequence_control_ARRAY.push(tmp_index);
                                self.jony5_lifestyle_banner_img_int_sequence_beta.push(tmp_index);

                                self.jony5_lifestyle_banner_sequence_position++;

                                var tmp_str = self.extract_filename(tmp_next_image);
                                self.log_activity('[lnum 7211] QUEUE RANDOM IMAGE ' + tmp_index + ' (OUT OF ' + self.jony5_lifestyle_banner_images_ARRAY.length + '). [' + tmp_str + '].', self.CRNRSTN_DEBUG_VERBOSE);

                                if(self.jony5_lifestyle_banner_sequence_position > 0){

                                    self.set_ui_component_state('back_btn_banner', 'ON');

                                }else{

                                    self.set_ui_component_state('back_btn_banner', 'OFF');

                                }

                                self.back_press_cnt = self.back_press_cnt * 1;
                                var result = self.jony5_lifestyle_banner_sequence_control_ARRAY.length - self.jony5_lifestyle_banner_sequence_position - self.back_press_cnt;
                                self.log_activity('[lnum 7225] FWD BUTTON ON IF [' + self.back_press_cnt + '][' + self.jony5_lifestyle_banner_sequence_position + '][' + result + '] < [' + self.jony5_lifestyle_banner_sequence_control_ARRAY.length + ']', self.CRNRSTN_DEBUG_VERBOSE);
                                if((result != 0) && (result < self.jony5_lifestyle_banner_sequence_control_ARRAY.length)){

                                    self.set_ui_component_state('forward_btn_banner', 'ON');

                                }else{

                                    self.set_ui_component_state('forward_btn_banner', 'OFF');

                                }

                                self.load_image_lowest_z_indice('jony5_banner_lifestyle_alpha', 'jony5_banner_lifestyle_beta', tmp_next_image);

                                self.log_activity('[lnum 7238] INITIALIZE 7 SECOND TTL ON ELEMENT HOLD - BANNER IMAGE ROTATION.', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                                self.execution_delay_ui_sync_controller('schedule', 'lifestyle_banner_image_rotation', 7);

                            }

                            if(self.back_press_cnt > 0){

                                self.back_press_cnt = self.back_press_cnt - 1;

                            }

                        }

                    });

                }

            });

            return dom_element_beta;

        }

    };

    //
    // LINING UP TO RE-ARCH THIS INTO CRNRSTN ::
    CRNRSTN_JS.prototype.extract_filename = function(str_path){

        //
        // TODO :: GET SITE WWW ROOT INFO FROM THE PSSDTLP, THE CRNRSTN :: MULTI-CHANNEL
        //         DECOUPLED DATA OBJECT (MC-DDO) UI TUNNEL RESPONSE PACKET.
        // var str_array = str_path.split(this.get_resource('ROOT_PATH_CLIENT_HTTP') + this.get_resource('ROOT_PATH_CLIENT_HTTP_DIR') + 'common/imgs/lifestyle_banner/desktop/');
        var str_array = str_path.c('http://172.16.225.128/jony5/common/imgs/lifestyle_banner/desktop/');
        var tmp_str = str_array[1];

        if(tmp_str !== undefined){

            var str_array = tmp_str.split('" width="1180" height="250" alt="Jonathan \'J5\' Harris">');

            return str_array[0];

        }else{

            var str_array = str_path.split('http://172.16.225.139/alpha.jony5.com/common/imgs/lifestyle_banner/desktop/');
            var tmp_str = str_array[1];

            var str_array = tmp_str.split('" width="1180" height="250" alt="Jonathan \'J5\' Harris">');

            return str_array[0];

        }

    };

    CRNRSTN_JS.prototype.transition_lifestyle_banner_elem = function(dom_element_alpha, dom_element_beta){

        var self = this;

        tmp_zindex_alpha = $('#' + dom_element_alpha).css( "zIndex" );
        tmp_zindex_beta = $('#' + dom_element_beta).css( "zIndex" );

        var tmp_alpha_img = this.extract_filename($('#' + dom_element_alpha).html());
        var tmp_beta_img = this.extract_filename($('#' + dom_element_beta).html());
        this.log_activity('[lnum 7303] TRANSITION AFTER BUTTON PRESS. ALPHA-Z[' + tmp_zindex_alpha + '][' + tmp_alpha_img + '] *** BETA-Z[' + tmp_zindex_beta + '][' + tmp_beta_img + '].', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

        $('#' + dom_element_alpha).css('zIndex', tmp_zindex_beta);
        $('#' + dom_element_beta).css('zIndex', tmp_zindex_alpha);

        tmp_zindex_alpha_new = $('#' + dom_element_alpha).css( "zIndex" );
        tmp_zindex_beta_new = $('#' + dom_element_beta).css( "zIndex" );
        this.log_activity('[lnum 7310] NEW ALPHA-Z[' + tmp_zindex_alpha_new + '][' + tmp_alpha_img + '] *** BETA-Z[' + tmp_zindex_beta_new + '][' + tmp_beta_img + '].', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

        if(tmp_zindex_alpha < tmp_zindex_beta){

            $('#' + dom_element_alpha).animate({
                opacity: 1.0
            }, {
                duration: 1000,
                queue: false,
                step: function( now, fx ) {

                },
                complete: function () {

                    $('#' + dom_element_beta).animate({
                        opacity: 0
                    }, {
                        duration: 0,
                        queue: false,
                        step: function( now, fx ) {

                        },
                        complete: function () {

                            self.log_activity('[lnum 7334] INITIALIZE 7 SECOND TTL ON ELEMENT HOLD - BANNER IMAGE ROTATION.', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
                            self.execution_delay_ui_sync_controller('schedule', 'lifestyle_banner_image_rotation', 7);

                        }

                    });

                }

            });

        }else{

            $('#' + dom_element_beta).animate({
                opacity: 1.0
            }, {
                duration: 1000,
                queue: false,
                step: function( now, fx ) {

                },
                complete: function () {

                    $('#' + dom_element_alpha).animate({
                        opacity: 0
                    }, {
                        duration: 0,
                        queue: false,
                        step: function( now, fx ) {

                        },
                        complete: function () {

                            self.log_activity('[lnum 7367] INITIALIZE 7 SECOND TTL ON ELEMENT HOLD - BANNER IMAGE ROTATION.', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
                            self.execution_delay_ui_sync_controller('schedule', 'lifestyle_banner_image_rotation', 7);

                        }

                    });

                }

            });

        }

    };

    CRNRSTN_JS.prototype.load_image_lowest_z_indice = function(dom_element_alpha, dom_element_beta, image_uri){

        var self = this;

        var image_html = '<img src="' + image_uri + '" width="1180" height="250" alt="Jonathan \'J5\' Harris">';
        var tmp_fname = this.extract_filename(image_uri);

        tmp_zindex_alpha = $('#' + dom_element_alpha).css( "zIndex" );
        tmp_zindex_beta = $('#' + dom_element_beta).css( "zIndex" );

        if(tmp_zindex_alpha < tmp_zindex_beta){

            $('#' + dom_element_alpha).animate({
                opacity: 0
            }, {
                duration: 0,
                queue: false,
                step: function( now, fx ) {

                },
                complete: function () {

                    $('#' + dom_element_alpha).html(image_html);

                    self.log_activity('[lnum 7406] LOAD [' + tmp_fname + '] INTO ALPHA, where Z=' + tmp_zindex_alpha + ' OPACITY=' + $('#' + dom_element_alpha).css('opacity') + '.', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                }

            });

        }else{

            $('#' + dom_element_beta).animate({
                opacity: 0
            }, {
                duration: 0,
                queue: false,
                step: function( now, fx ) {

                },
                complete: function () {

                    $('#' + dom_element_beta).html(image_html);
                    self.log_activity('[lnum 7425] LOAD [' + tmp_fname + '] INTO BETA, where Z=' + tmp_zindex_beta + ' OPACITY=' + $('#' + dom_element_beta).css('opacity') + '.', self.CRNRSTN_DEBUG_LIFESTYLE_BANNER);

                }

            });

        }

    };

    CRNRSTN_JS.prototype.rotate_lifestyle_banner_image = function(){

        //
        // SHIFT LOWER DOM ELEMENT TO HIGHER POSITION AND TRANSITION TO VISIBLE
        this.top_lifestyle_banner_image_container = this.rotate_jony5_lifestyle_image('jony5_banner_lifestyle_alpha', 'jony5_banner_lifestyle_beta');

        //
        // TRACK (SNAP SHOT) STATE FOR BANNER CONTROL REVERSION +/- 1
        // this.jony5_lifestyle_banner_images_ARRAY = [];
        // this.jony5_lifestyle_banner_index_ARRAY = [];
        // this.jony5_lifestyle_banner_sequence_control_ARRAY = [];
        // this.jony5_lifestyle_banner_sequence_position = 0;

        // this.jony5_lifestyle_banner_img_int_sequence_alpha = [];
        // this.jony5_lifestyle_banner_img_int_sequence_beta = [];

    };

    CRNRSTN_JS.prototype.toggle_banner_mode = function(mode = 'pause_play'){

        switch(mode){
            case 'pause_play':

                if(this.jony5_banner_mode == 'PLAY'){

                    this.jony5_banner_mode = 'PAUSE';
                    this.log_activity('[lnum 7461] STOP BANNER IMAGE ROTATION.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
                    this.execution_delay_ui_sync_controller('stop', 'lifestyle_banner_image_rotation');

                }else{

                    this.jony5_banner_mode = 'PLAY';
                    this.log_activity('[lnum 7467] INITIALIZE 7 SECOND TTL ON ELEMENT HOLD - BANNER IMAGE ROTATION.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
                    this.execution_delay_ui_sync_controller('schedule', 'lifestyle_banner_image_rotation', 7);

                }

                this.jony5_lifestyle_play_button_mode();

            break;
            case 'forward':

                this.log_activity('[lnum 7477] ADVANCE ONE (1) BANNER IMAGE.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
                this.jony5_lifestyle_advance_button('forward');

            break;
            case 'back':

                this.log_activity('[lnum 7483] REVERSE ONE (1) BANNER IMAGE.', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
                this.jony5_lifestyle_advance_button('back');

            break;

        }

    };

    CRNRSTN_JS.prototype.jony5_lifestyle_advance_button = function(mode){

        switch(mode){
            case 'forward':

                this.jony5_lifestyle_advance(mode);

            break;
            case 'back':

                this.jony5_lifestyle_advance(mode, -1);

            break;

        }

    };

    CRNRSTN_JS.prototype.jony5_lifestyle_banner_tmp_transition = function(){

        var self = this;

        tmp_zindex_alpha = $('#jony5_banner_lifestyle_alpha').css( "zIndex" );
        tmp_zindex_beta = $('#jony5_banner_lifestyle_beta').css( "zIndex" );
        tmp_zindex_trans = $('#jony5_banner_lifestyle_transition_tmp').css( "zIndex" );

        this.log_activity('[lnum 7518] PRE-TRANSITION Z-INDICES tmp_zindex_trans=[' + tmp_zindex_trans + '] tmp_zindex_alpha=[' + tmp_zindex_alpha + '] tmp_zindex_beta=[' + tmp_zindex_beta + ']', this.CRNRSTN_DEBUG_VERBOSE);

        if(tmp_zindex_alpha < tmp_zindex_beta){

            //
            // OPACITY 0 THE TOP ELEM (ALPHA OR BETA)
            $( "#jony5_banner_lifestyle_beta").animate({
                opacity: 0.0
            }, {
                duration: 0,
                queue: false,
                specialEasing: {
                    opacity: "swing"
                },
                step: function( now, fx ) {

                },
                complete: function () {

                    //
                    // SWAP POSITIONS WITH THE TOP ELEM AND THE TMP TRANS ELEM
                    $('#jony5_banner_lifestyle_transition_tmp').css('zIndex', tmp_zindex_beta);
                    $('#jony5_banner_lifestyle_beta').css('zIndex', tmp_zindex_trans);

                    tmp_zindex_alpha = $('#jony5_banner_lifestyle_alpha').css( "zIndex" );
                    tmp_zindex_beta = $('#jony5_banner_lifestyle_beta').css( "zIndex" );
                    tmp_zindex_trans = $('#jony5_banner_lifestyle_transition_tmp').css( "zIndex" );

                    self.log_activity('[lnum 7546] MID-TRANSITION Z-INDICES tmp_zindex_trans=[' + tmp_zindex_trans + '] tmp_zindex_alpha=[' + tmp_zindex_alpha + '] tmp_zindex_beta=[' + tmp_zindex_beta + ']', self.CRNRSTN_DEBUG_VERBOSE);

                    //
                    // OPACITY TO 1.0 THE TOP ELEM
                    $('#jony5_banner_lifestyle_beta').animate({
                        opacity: 1.0
                    }, {
                        duration: 1000,
                        queue: false,
                        step: function( now, fx ) {

                        },
                        complete: function () {

                            //
                            // EMPTY THE TMP TRANS ELEM
                            $('#jony5_banner_lifestyle_transition_tmp').html('');

                            //
                            // TRANSITION THE TMP BACK TO TOP (WILL THIS BLOCK BUTTON CONTROL ACCESS?)
                            $('#jony5_banner_lifestyle_transition_tmp').css('zIndex', tmp_zindex_beta);
                            $('#jony5_banner_lifestyle_beta').css('zIndex', tmp_zindex_trans);

                            $('#jony5_banner_lifestyle_alpha').animate({
                                opacity: 0
                            }, {
                                duration: 0,
                                queue: false,
                                step: function( now, fx ) {

                                },
                                complete: function () {


                                }

                            });

                        }

                    });

                }
            });

        }else{

            //
            // OPACITY 0 THE TOP ELEM (ALPHA OR BETA)
            $( "#jony5_banner_lifestyle_alpha").animate({
                opacity: 0.0
            }, {
                duration: 0,
                queue: false,
                specialEasing: {
                    opacity: "swing"
                },
                step: function( now, fx ) {

                },
                complete: function () {

                    //
                    // SWAP POSITIONS WITH THE TOP ELEM AND THE TMP TRANS ELEM
                    $('#jony5_banner_lifestyle_transition_tmp').css('zIndex', tmp_zindex_alpha);
                    $('#jony5_banner_lifestyle_alpha').css('zIndex', tmp_zindex_trans);

                    tmp_zindex_alpha = $('#jony5_banner_lifestyle_alpha').css( "zIndex" );
                    tmp_zindex_beta = $('#jony5_banner_lifestyle_beta').css( "zIndex" );
                    tmp_zindex_trans = $('#jony5_banner_lifestyle_transition_tmp').css( "zIndex" );

                    self.log_activity('[lnum 7617] MID-TRANSITION Z-INDICES tmp_zindex_trans=[' + tmp_zindex_trans + '] tmp_zindex_alpha=[' + tmp_zindex_alpha + '] tmp_zindex_beta=[' + tmp_zindex_beta + ']', self.CRNRSTN_DEBUG_VERBOSE);

                    //
                    // OPACITY TO 1.0 THE TOP ELEM
                    $('#jony5_banner_lifestyle_alpha').animate({
                        opacity: 1.0
                    }, {
                        duration: 1000,
                        queue: false,
                        step: function( now, fx ) {

                        },
                        complete: function () {

                            //
                            // EMPTY THE TMP TRANS ELEM
                            $('#jony5_banner_lifestyle_transition_tmp').html('');

                            //
                            // TRANSITION THE TMP BACK TO TOP (WILL THIS BLOCK BUTTON CONTROL ACCESS?)
                            $('#jony5_banner_lifestyle_transition_tmp').css('zIndex', tmp_zindex_alpha);
                            $('#jony5_banner_lifestyle_alpha').css('zIndex', tmp_zindex_trans);

                            $('#jony5_banner_lifestyle_beta').animate({
                                opacity: 0
                            }, {
                                duration: 0,
                                queue: false,
                                step: function( now, fx ) {

                                },
                                complete: function () {


                                }

                            });

                        }

                    });

                }

            });

        }

        tmp_zindex_alpha = $('#jony5_banner_lifestyle_alpha').css( "zIndex" );
        tmp_zindex_beta = $('#jony5_banner_lifestyle_beta').css( "zIndex" );
        tmp_zindex_trans = $('#jony5_banner_lifestyle_transition_tmp').css( "zIndex" );

        this.log_activity('[lnum 7669] POST-TRANSITION Z-INDICES tmp_zindex_trans=[' + tmp_zindex_trans + '] tmp_zindex_alpha=[' + tmp_zindex_alpha + '] tmp_zindex_beta=[' + tmp_zindex_beta + ']', this.CRNRSTN_DEBUG_VERBOSE);

    };

    CRNRSTN_JS.prototype.jony5_lifestyle_advance = function(mode, delta = 1){

        switch(mode){
            case 'forward':

            break;
            case 'back':

                this.back_press_cnt = this.back_press_cnt + 1;
                //this.jony5_lifestyle_banner_sequence_position--;

                // this.execution_delay_ui_sync_controller('stop', 'lifestyle_banner_image_rotation');
                //
                // this.back_press_cnt = self.back_press_cnt + 3;
                //
                // this.jony5_lifestyle_banner_sequence_position = this.jony5_lifestyle_banner_sequence_position - 3;
                //
                // if(this.jony5_lifestyle_banner_sequence_position > 0){
                //
                //     this.set_ui_component_state('back_btn_banner', 'ON');
                //
                // }else{
                //
                //     this.set_ui_component_state('back_btn_banner', 'OFF');
                //
                // }
                //
                // if(this.jony5_lifestyle_banner_sequence_position < this.jony5_lifestyle_banner_sequence_control_ARRAY.length){
                //
                //     this.set_ui_component_state('forward_btn_banner', 'ON');
                //
                // }else{
                //
                //     this.set_ui_component_state('forward_btn_banner', 'OFF');
                //
                // }
                //
                // var tmp_str = this.extract_filename(this.jony5_lifestyle_banner_sequence_control_ARRAY[this.jony5_lifestyle_banner_sequence_position]);
                // this.log_activity('[lnum 5743] BACK CLICKED. NEW (-3) SEQ POS=[' + this.jony5_lifestyle_banner_sequence_position + '] IMAGE AT SEQ POS[' + tmp_str + '] SEQ-IMAGE-CNT[' + this.jony5_lifestyle_banner_sequence_control_ARRAY.length + ']', this.CRNRSTN_DEBUG_LIFESTYLE_BANNER);
                //
                // this.load_image_lowest_z_indice('jony5_banner_lifestyle_alpha', 'jony5_banner_lifestyle_beta', this.jony5_lifestyle_banner_sequence_control_ARRAY[this.jony5_lifestyle_banner_sequence_position]);
                //
                // this.transition_lifestyle_banner_elem('jony5_banner_lifestyle_alpha', 'jony5_banner_lifestyle_beta');
                //

                ////this.execution_delay_ui_sync_controller('fire', 'lifestyle_banner_image_rotation');

                break;

        }

        //
        // MOVE TOP DOM ELEM CONTENT TO TEMP CONTAINER TO TEMP TOP CONTAINER
        $('#jony5_banner_lifestyle_transition_tmp').html($('#' + this.top_lifestyle_banner_image_container).html());

        //
        // RESET ALPHA AND BETA CONTAINERS TO PREV/NEXT STATE
        this.jony5_lifestyle_banner_state_revert(delta);

        //
        // FIRE TRANSITION ("OPACITY OUT" TEMP CONTAINER)
        this.jony5_lifestyle_banner_tmp_transition();

        //
        // HIDE/SHOW BUTTONS (FWD OR BACK) IF AT THRESHOLD
        var result = this.jony5_lifestyle_banner_sequence_control_ARRAY.length - this.jony5_lifestyle_banner_sequence_position - this.back_press_cnt - 2;

        if((result != 0) && (result < this.jony5_lifestyle_banner_sequence_control_ARRAY.length)){

            this.log_activity('[lnum 7742] VISIBILITY FWD BUTTON banner_sequence_position=[' + this.jony5_lifestyle_banner_sequence_position + ']', this.CRNRSTN_DEBUG_VERBOSE);

            this.set_ui_component_state('forward_btn_banner', 'ON');

        }else{

            this.log_activity('[lnum 7748] VISIBILITY FWD BUTTON banner_sequence_position=[' + this.jony5_lifestyle_banner_sequence_position + ']', this.CRNRSTN_DEBUG_VERBOSE);

            this.set_ui_component_state('forward_btn_banner', 'OFF');

        }

        if(this.jony5_lifestyle_banner_sequence_position > 2){

            this.log_activity('[lnum 7756] VISIBILITY BACK BUTTON banner_sequence_position=[' + this.jony5_lifestyle_banner_sequence_position + ']', this.CRNRSTN_DEBUG_VERBOSE);

            this.set_ui_component_state('back_btn_banner', 'ON');

        }else{

            this.log_activity('[lnum 7762] VISIBILITY BACK BUTTON banner_sequence_position=[' + this.jony5_lifestyle_banner_sequence_position + ']', this.CRNRSTN_DEBUG_VERBOSE);

            this.set_ui_component_state('back_btn_banner', 'OFF');

        }

    };

    CRNRSTN_JS.prototype.jony5_lifestyle_banner_state_revert = function(delta){

        this.jony5_lifestyle_banner_sequence_position = this.jony5_lifestyle_banner_sequence_position + delta;

        //
        // SET ALPHA AND BETA Z-INDEX - JUST FLIP MODE SQUAD
        tmp_zindex_alpha = $('#jony5_banner_lifestyle_alpha').css( "zIndex" );
        tmp_zindex_beta = $('#jony5_banner_lifestyle_beta').css( "zIndex" );
        $('#jony5_banner_lifestyle_alpha').css('zIndex', tmp_zindex_beta);
        $('#jony5_banner_lifestyle_beta').css('zIndex', tmp_zindex_alpha);

        //
        // SET ALPHA AND BETA CONTENT TO THE STATE INDICATED BY THE "NOW" CURRENT POSITION
        var index_img_seq_int_alpha = this.jony5_lifestyle_banner_img_int_sequence_alpha[this.jony5_lifestyle_banner_sequence_position - 2]
        var index_img_seq_int_beta = this.jony5_lifestyle_banner_img_int_sequence_beta[this.jony5_lifestyle_banner_sequence_position - 2]

        var image_uri_alpha = this.jony5_lifestyle_banner_images_ARRAY[index_img_seq_int_alpha];
        var image_uri_beta = this.jony5_lifestyle_banner_images_ARRAY[index_img_seq_int_beta];

        this.log_activity('[lnum 7789] BANNER STATE REVERSION DELTA[' + delta + '] index/img alpha=[' + index_img_seq_int_alpha + '/' + image_uri_alpha + '] index/img beta=[' + index_img_seq_int_beta + '/' + image_uri_beta + ']', this.CRNRSTN_DEBUG_VERBOSE);

        var image_html_alpha = '<img src="' + image_uri_alpha + '" width="1180" height="250" alt="Jonathan \'J5\' Harris">';
        var image_html_beta = '<img src="' + image_uri_beta + '" width="1180" height="250" alt="Jonathan \'J5\' Harris">';

        $('#jony5_banner_lifestyle_alpha').html(image_html_alpha);
        $('#jony5_banner_lifestyle_beta').html(image_html_beta);

    };

    CRNRSTN_JS.prototype.jony5_lifestyle_play_button_mode = function(){

        switch(this.jony5_banner_mode){
            case 'PAUSE':

                $( "#banner_control_pause_wrapper").animate({
                    opacity: 0.0
                }, {
                    duration: 0,
                    queue: false,
                    specialEasing: {
                        opacity: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }
                });

                $( "#banner_control_play_wrapper").animate({
                    opacity: 1.0
                }, {
                    duration: 0,
                    queue: false,
                    specialEasing: {
                        opacity: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }
                });

            break;
            default:
               // PAUSE
                $( "#banner_control_play_wrapper").animate({
                    opacity: 0.0
                }, {
                    duration: 0,
                    queue: false,
                    specialEasing: {
                        opacity: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }
                });

                $( "#banner_control_pause_wrapper").animate({
                    opacity: 1.0
                }, {
                    duration: 0,
                    queue: false,
                    specialEasing: {
                        opacity: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }
                });

            break;

        }

    };

    CRNRSTN_JS.prototype.sign_in_form_submit_via_micro_expansion = function(){

        // crnrstn_interact_ui_wrapper
        // [current=bottom:5px; width: 100px; left: 84%; height: 80px;]
        // [target=1085wx756h]

        // crnrstn_interact_ui_bg_border
        // [current=width:260px; height: 305px;]
        // [target=1085wx756h]

        // crnrstn_interact_ui_bg_solid
        // [current=width: 85px; height:46px; margin: 8px; padding: 11px 0 0 2px; cursor: pointer;]
        // [target=260wx305h]

        $( "#crnrstn_interact_ui_content_wrapper").toggle();
        $( "#crnrstn_interact_ui_bg_solid").html('');

        $( "#crnrstn_interact_ui_wrapper").animate({
            height: 756,
            width: 1085,
            bottom: 20,
            left: '20%'
        }, {
            duration: 250,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

            }
        });

        $( "#crnrstn_interact_ui_bg_border").animate({
            height: 756,
            width: 1085
        }, {
            duration: 250,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {


            }

        });

        $( "#crnrstn_interact_ui_bg_solid").animate({
            height: 736,
            width: 1060
        }, {
            duration: 250,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

                $( "#crnrstn_interact_ui_wrapper").animate({
                    height: 756,
                    width: 1085,
                    bottom: 20,
                    left: '20%'
                }, {
                    duration: 250,
                    queue: false,
                    specialEasing: {
                        height: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }
                });

                $( "#crnrstn_interact_ui_bg_border").animate({
                    height: 756,
                    width: 1085
                }, {
                    duration: 150,
                    queue: false,
                    specialEasing: {
                        height: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }
                });

            }
        });

    };

    CRNRSTN_JS.prototype.sign_in_transition_via_micro_expansion = function(){

        this.log_activity('[lnum 7989] [MOUSE CLICK] CRNRSTN :: INTERACT UI MODULE BEGIN SIGN IN FORM EXPANSION', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

        // crnrstn_interact_ui_wrapper
        // [current=bottom:5px; width: 100px; left: 84%; height: 80px;]
        // [target=260wx305h]

        // crnrstn_interact_ui_bg_border
        // [current=width:100px; height: 70px;]
        // [target=260wx305h]

        // crnrstn_interact_ui_bg_solid
        // [current=width: 85px; height:46px; margin: 8px; padding: 11px 0 0 2px; cursor: pointer;]
        // [target=260wx305h]

        $( "#crnrstn_interact_ui_wrapper").animate({
            height: 315,
            width: 270,
            bottom: 20,
            left: '70%'
        }, {
            duration: 250,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

            }
        });

        $( "#crnrstn_interact_ui_bg_border").animate({
            height: 315,
            width: 270
        }, {
            duration: 250,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

            }
        });

        $( "#crnrstn_interact_ui_bg_solid").animate({
            height: 291,
            width: 255
        }, {
            duration: 250,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

            }
        });

        $( "#crnrstn_messenger_message_bubbles_thumb").animate({
            height: 116,
            width: 182,
            paddingTop:170,
            paddingLeft:38
        }, {
            duration: 250,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

                $( "#crnrstn_interact_ui_wrapper").animate({
                    height: 305,
                    width: 260,
                    bottom: 15,
                    left: '71%'
                }, {
                    duration: 150,
                    queue: false,
                    specialEasing: {
                        height: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }
                });

                $( "#crnrstn_interact_ui_bg_border").animate({
                    height: 305,
                    width: 260
                }, {
                    duration: 150,
                    queue: false,
                    specialEasing: {
                        height: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }
                });

                $( "#crnrstn_interact_ui_bg_solid").animate({
                    height: 281,
                    width: 245
                }, {
                    duration: 150,
                    queue: false,
                    specialEasing: {
                        height: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                    }
                });

                $( "#crnrstn_messenger_message_bubbles_thumb").animate({
                    height: 106,
                    width: 172,
                    paddingTop:164,
                    paddingLeft:41
                }, {
                    duration: 150,
                    queue: false,
                    specialEasing: {
                        height: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {


                    }
                });

                //
                // INJECT SIGN IN FORM ELEMENTS
                $( "#crnrstn_interact_ui_content_wrapper").toggle();

                $('#crnrstn_interact_ui_bg_solid').css('cursor', 'auto');

            }

        });

    };

    CRNRSTN_JS.prototype.primary_ui_interact_nav_state_shift = function(dom_handle_root, dom_handle_variant_element, dom_handle_postfix, element_exclude = ''){

        /*
        Z INDEX OF 66 ASSIGNED TO PARENT CONTAINER...BUT MAY BE LOWER THAN MESSAGING ICON BUTTON...JUST SAYING...

        SET TRANSITION-TO-VISIBLE SCOPE TO 68
        SET STAGE SCOPE TO 67
        SET ALL HIDDEN Z-INDEX TO 66.

                                dom_handle_root             dom_handle_variant_element     dom_handle_postfix
        Z-INDEX = auto = <div id="crnrstn_interact_ui_primary_nav_img_shell_ menu _inactive">
        Z-INDEX = auto = <div id="crnrstn_interact_ui_primary_nav_img_shell_ menu _hvr">
        Z-INDEX = auto = <div id="crnrstn_interact_ui_primary_nav_img_shell_ menu _click">
        Z-INDEX = 68 = <div id="crnrstn_interact_ui_primary_nav_img_shell_ menu ">

        */

        var system_nav_state_ARRAY = ['_inactive', '_hvr', '_click', ''];
        var current_z_index_state_ARRAY = [];
        var tmp_z_index = 0;
        var skip_transition = false;

        //
        // TRANSITION TO HIGHEST Z INDEX THEN OPACITY 1 target_dom_handle

        //
        // CLEAR HIGHEST Z-INDEX FOR TRANSITION
        tmp_state_cnt = system_nav_state_ARRAY.length;
        this.log_activity('[lnum 8185] zIndex shift for all ' + dom_handle_root + dom_handle_variant_element + '.', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

        for(let i = 0; i < tmp_state_cnt; i++){

            tmp_z_index = $('#' + dom_handle_root + dom_handle_variant_element + system_nav_state_ARRAY[i]).css('zIndex');
            tmp_tgt_z = parseInt(this.baseline_z_index) + 7;
            if(tmp_z_index > tmp_tgt_z){

                tmp_str = system_nav_state_ARRAY[i];

                if(tmp_str.length > 0 || (element_exclude != dom_handle_root + dom_handle_variant_element)){

                    //
                    // SET TO 67 Z INDEX FOR STAGING IN 68
                    $('#' + dom_handle_root + dom_handle_variant_element + system_nav_state_ARRAY[i]).css('zIndex', tmp_tgt_z);
                    this.log_activity('[lnum 8200] zIndex shift for HIGHEST AT 68 [' + dom_handle_root + dom_handle_variant_element + system_nav_state_ARRAY[i] + '].', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

                }else{

                    //
                    // DEFAULT IMAGERY IS ON TOP. LEAVE IT.
                    skip_transition = true;

                }

            }else{

                //$tmp_str = dom_handle_root + dom_handle_variant_element + dom_handle_postfix;

                //if($tmp_str != ){
                tmp_tgt_z = parseInt(this.baseline_z_index) + 6;
                $('#' + dom_handle_root + dom_handle_variant_element + system_nav_state_ARRAY[i]).css('zIndex', tmp_tgt_z);
                this.log_activity('[lnum 8217] zIndex shift TO 66 FOR OTHERS [' + dom_handle_root + dom_handle_variant_element + system_nav_state_ARRAY[i] + '].', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

                //}

            }

            //current_z_index_state_ARRAY[dom_handle_root + dom_handle_variant_element + system_nav_state_ARRAY[i]] =
            this.log_activity('[lnum 8224] current_z_index_state_ARRAY[' + dom_handle_root + dom_handle_variant_element + system_nav_state_ARRAY[i] + '] = ' + $('#' + dom_handle_root + dom_handle_variant_element + system_nav_state_ARRAY[i]).css('zIndex') + '.', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

        }

        if(!skip_transition){

            //
            // CALL TRANSITION.
            this.primary_ui_interact_transition_nav_state(dom_handle_root, dom_handle_variant_element, dom_handle_postfix);

        }

    };

    CRNRSTN_JS.prototype.primary_ui_interact_transition_nav_state = function(dom_handle_root, dom_handle_variant_element, dom_handle_postfix){

        var self = this;

        //
        //  SET OPACITY TO O
        $('#' + dom_handle_root + dom_handle_variant_element + dom_handle_postfix).animate({
            opacity: 0
        }, {
            duration: 0,
            queue: false,
            step: function( now, fx ) {

            },
            complete: function () {

                tmp_tgt_z = parseInt(this.baseline_z_index) + 8;
                $('#' + dom_handle_root + dom_handle_variant_element + dom_handle_postfix).css('zIndex', tmp_tgt_z);

                self.log_activity('[lnum 8257] SHOW ' + '#' + dom_handle_root + dom_handle_variant_element + dom_handle_postfix, oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

                $('#' + dom_handle_root + dom_handle_variant_element + dom_handle_postfix).animate({
                    opacity: 1.0
                }, {
                    duration: 250,
                    queue: false,
                    specialEasing: {
                        opacity: "swing"
                    },
                    step: function( now, fx ) {

                    },
                    complete: function () {

                        self.dom_element_mouse_state_lock_ARRAY[dom_handle_root + dom_handle_variant_element] = 'OFF';

                        self.log_activity('[lnum 8274] REMOVE dom_element_mouse_state_lock_ARRAY LOCK ON [' + '#' + dom_handle_root + dom_handle_variant_element + ']', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

                    }

                });

            }

        });

    };

    CRNRSTN_JS.prototype.launch_overlay_mit = function(element_id){

        this.log_activity('[lnum 8288] Launch MIT license programme.', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

        this.crnrstn_overlay_mode = 'MIT';

        this.toggle_full_overlay(element_id);

        //
        // SET THE LINK
        $('#crnrstn_interact_ui_link_text_click').val('mit_license');

        //alert('[8076] mit launch C.');
        this.fire_dom_state_controller();

    };

    CRNRSTN_JS.prototype.launch_framework_resources_integration_report = function(string_constant){

        this.log_activity('[lnum 8305] Launch view source for ' + string_constant + '.', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

        //
        // SET THE LINK
        // string_constant SHOULD HAVE IT'S OWN FORM FIELD. THIS (SSDTLA) IS GONNA BE KINDA DUCT TAPE ATM
        // BECAUSE CRNRSTN :: FORM HANDLING IS NOT 100% ONTO LIGHTSABER, YET.
        $('#crnrstn_interact_ui_link_text_click').val('framework_view_source|' + string_constant);

        this.fire_dom_state_controller();

    };

    CRNRSTN_JS.prototype.close_overlay_mit = function(element_id){

        //alert('[lnum 8098] close? mit? ' + element_id);
        this.toggle_full_overlay(element_id);

    };

    CRNRSTN_JS.prototype.toggle_full_overlay = function(element_id = 'standard_issue'){

        var self = this;

        //
        // ON OR OFF?
        if(this.get_ui_component_state('fullscreen_overlay') === 'ON'){

            //////
            // TURN OVERLAY OFF.
            //////
            this.set_ui_component_state('fullscreen_overlay', 'OFF');

            /*
            crnrstn_interact_ui_full_lightbox_overlay
            crnrstn_interact_ui_full_lightbox
            this.b_width_nav_expand = parseInt($(window).width())...
            this.b_width_nav_min = parseInt($(window).width())...

            */

            $('#crnrstn_interact_ui_full_lightbox').animate({
                opacity: 0
            }, {
                duration: 250,
                queue: false,
                complete: function (){

                    //if(self.crnrstn_overlay_mode === 'MIT'){
                    // $('#crnrstn_interact_ui_full_lightbox').css('width', 1);
                    // $('#crnrstn_interact_ui_full_lightbox').css('height', 1);

                    $('#crnrstn_interact_ui_full_lightbox').animate({
                        width: 0,
                        height: 0
                    }, {
                        duration: 0,
                        queue: false,
                        complete: function (){

                            $('#crnrstn_interact_ui_full_lightbox').html('');

                        }

                    });

                    self.crnrstn_overlay_mode = 'OFF';

                    //}

                }

            });

            $('#crnrstn_interact_ui_full_lightbox_overlay').animate({
                opacity: 0
            }, {
                duration: 250,
                queue: false,
                complete: function () {

                    $('#crnrstn_interact_ui_full_lightbox_overlay').animate({
                        width: 0,
                        height: 0
                    }, {
                        duration: 0,
                        queue: false,
                        complete: function () {



                        }

                    });

                }

            });

            $('#crnrstn_interact_ui_full_lightbox_overlay').animate({
                width: 0,
                height: 0
            }, {
                duration: 500,
                queue: false,
                complete: function () {

                    //alert('[lnum 8220] overlay all done!');
                    // $('#crnrstn_interact_ui_full_lightbox_overlay').css('width', 1);
                    // $('#crnrstn_interact_ui_full_lightbox_overlay').css('height', 1);
                    //self.end();
                    self.scroll_on();

                }

            });

            //alert('[lnum 8215] lightbox overlay closed!');

        }else{

            //////
            // TURN OVERLAY ON.
            //////

            //alert('[lnum 8276] ' + $(window).width());
            this.set_ui_component_state('fullscreen_overlay');

            //
            // SET UP TO LOAD OVERLAY.
            var $window = $(window);
            this.docs_page_css_top = -8;
            this.docs_page_css_left = $window.scrollLeft();

            this.scroll_off();

            this.size_element('crnrstn_interact_ui_full_lightbox_overlay', 0);

            // STALL FOR A (.25) SEC.
            $('#crnrstn_interact_ui_full_lightbox_overlay').animate({
                opacity: 0,
                zIndex: 9999
            }, {
                duration: 250,
                queue: false,
                complete: function(){

                    //
                    // DISPLAY OVERLAY.
                    $('#crnrstn_interact_ui_full_lightbox_overlay').animate({
                        top: self.docs_page_css_top + 'px',
                        left: self.docs_page_css_left + 'px',
                        opacity: 0.5
                    }, {
                        duration: 250,
                        queue: false,
                        complete: function(){

                            if(self.get_ui_component_state('lightbox_overlay_onclick') !== 'ON'){

                                self.set_ui_component_state('lightbox_overlay_onclick');

                                // $('#crnrstn_interact_ui_full_lightbox_overlay').on('click', function(event) {
                                //
                                //     // IF OPACITY IS LIT.
                                //     if($('#crnrstn_interact_ui_full_lightbox_overlay').css('opacity') > 0){
                                //
                                //         alert('[lnum 8260] EVENT HANDLER :: TOGGLE MIT OFF? \'#crnrstn_interact_ui_full_lightbox_overlay\'.');
                                //         self.toggle_full_overlay('#crnrstn_interact_ui_full_lightbox_overlay');
                                //
                                //     }
                                //
                                //     return false;
                                //
                                // });
                                //
                                // $('#crnrstn_interact_ui_full_lightbox').on('click', function(event) {
                                //
                                //     // IF OPACITY IS LIT.
                                //     if($('#crnrstn_interact_ui_full_lightbox').css('opacity') > 0){
                                //
                                //         alert('[lnum 8274] EVENT HANDLER :: TOGGLE MIT OFF? \'#crnrstn_interact_ui_full_lightbox_overlay\'.');
                                //         self.toggle_full_overlay('#crnrstn_interact_ui_full_lightbox_overlay');
                                //
                                //     }
                                //
                                //     return false;
                                //
                                // });

                            }

                        }

                    });

                }

            });

        }

    };

    CRNRSTN_JS.prototype.scroll_off = function(){

        //$('body').addClass('lb-disable-scrolling');
        $('body').css('overflow', 'hidden');
        $('#crnrstn_interact_ui_full_document').addClass('lb-disable-scrolling');
        $('#crnrstn_interact_ui_full_lightbox').addClass('lb-disable-scrolling');
        //$('#crnrstn_interact_ui_full_lightbox_overlay').addClass('lb-disable-scrolling');
        $('#crnrstn_interact_ui_full_lightbox_overlay').css('height', $(document).height());

        return true;

    };

    CRNRSTN_JS.prototype.scroll_on = function(){

        //$('body').removeClass('lb-disable-scrolling');
        $('body').css('overflow', 'scroll');
        $('#crnrstn_interact_ui_full_document').removeClass('lb-disable-scrolling');
        $('#crnrstn_interact_ui_full_lightbox').removeClass('lb-disable-scrolling');
        //$('#crnrstn_interact_ui_full_lightbox_overlay').removeClass('lb-disable-scrolling');

        return true;

    };

    CRNRSTN_JS.prototype.crnrstn_interact_ui_ux_sticky_link = function(ux_action, url, target, elem){

        switch(ux_action){
            case 'onmouseover':

            break;
            case 'onmouseout':

            break;
            case 'onmousedown':

            break;
            case 'onmouseup':

            break;
            case 'onclick':

                if(url !== '#'){

                    window.open(url, target);

                }

            break;

        }

        return false;

    };

    CRNRSTN_JS.prototype.get_resource = function(data_type_key){

        switch(data_type_key){
            case 'share_module_click':

                if(this.share_component_resource_container_ARRAY !== undefined){

                    return this.share_component_resource_index_ARRAY;

                }

            break;
            case 'crnrstn_share_module_inactivity_close_ttl':
            default:

                return this.interact_ui_ttl_monitor_ARRAY[data_type_key];

            break;

        }

    };

    CRNRSTN_JS.prototype.add_resource = function(data_type_key, data_value){

        switch(data_type_key){
            case 'share_module_click':

                if(this.share_component_resource_container_ARRAY[data_value] === undefined){

                    this.share_component_resource_index_ARRAY[data_value] = 1;

                }

            break;
            case 'crnrstn_share_module_inactivity_close_ttl':
            default:

                this.interact_ui_ttl_monitor_ARRAY[data_type_key] = data_value;

            break;

        }

    };

    CRNRSTN_JS.prototype.crnrstn_interact_ui_ux = function(ux_action, elem){

        //
        // MIT LICENSE MODAL
        if(ux_action === 'mit_license_modal'){

            this.launch_overlay_mit(elem.id);

            return false;

        }

        //
        // DOCUMENTATION VIEW SOURCE RESOURCES :: FOOTER INTEGRATION
        if(ux_action === 'resource_constant_view_source'){

            //
            // WHERE elem = STRING_CONSTANT OF THE RESOURCE INTEGER CONSTANT.
            this.launch_framework_resources_integration_report(elem);

            return false;

        }

        if(ux_action === 'scrolltop'){

            if($('#crnrstn_documentation_dyn_shell').length){

                $('#crnrstn_documentation_dyn_shell').animate({
                    scrollTop: 0
                }, {
                    duration: 300,
                    queue: false,
                    specialEasing: {
                        scrollTop: "swing"
                    }
                });

                return false;

            }

            if($('#crnrstn_interact_ui_full_doc_header_wrapper_rel').length){

                //
                // SOURCE :: https://stackoverflow.com/questions/5846595/how-to-scroll-an-item-inside-a-scrollable-div-to-the-top
                // COMMENT :: https://stackoverflow.com/a/5847226
                // AUTHOR :: Richard :: https://stackoverflow.com/users/269537/richard
                $('#crnrstn_interact_ui_full_doc_header_wrapper_rel').animate({
                    scrollTop: 0
                }, {
                    duration: 500,
                    queue: false,
                    specialEasing: {
                        scrollTop: "swing"
                    }
                });

                return false;

            }

            return false;

        }

        if(ux_action === 'share_module_link_select'){

            //
            // SOURCE :: https://stackoverflow.com/questions/1173194/select-all-div-text-with-single-mouse-click
            // COMMENT :: https://stackoverflow.com/a/1173319
            // AUTHOR :: Denis Sadowski :: https://stackoverflow.com/users/136482/denis-sadowski
            if(document.selection){ // IE

                var range = document.body.createTextRange();
                range.moveToElementText(document.getElementById("crnrstn_module_share_component_input_" + elem));
                range.select();

            }else if(window.getSelection){

                var range = document.createRange();
                range.selectNode(document.getElementById("crnrstn_module_share_component_input_" + elem));
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);

            }

            //
            // SOURCE :: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
            /* Copy the text inside the text field */
            document.execCommand('copy');

            /* Alert the copied text */
            //alert("Copied the text: " + document.getElementById("crnrstn_print_r_source_' . $tmp_hash . '").innerHTML);
            document.getElementById("crnrstn_module_share_component_input_" + elem).style.backgroundColor = "#95a3ff";
            document.getElementById("crnrstn_module_share_component_copy_status_" + elem).innerHTML = "Copied!";

        }

        //
        // SHARE COMPONENT SUPPORT
        if(ux_action === 'share_module_click'){

            tmp_state = this.get_ui_component_state(ux_action + '_' + elem);
            if(this.dom_element_mouse_state_ARRAY['share_module_click'] !== 'OPEN' || tmp_state !== 'ON'){

                this.set_ui_component_state(ux_action + '_' + elem, 'OFF');

            }

            var tgt_width = 102;
            var tgt_height = 55;
            var tgt_wrapper_height = parseInt(tgt_height) + parseInt(20);
            var tgt_wrapper_width = parseInt(tgt_width) + parseInt(25);
            this.dom_element_mouse_state_ARRAY['share_module_click'] = 'OPEN';

            this.add_resource(ux_action, elem);
            this.add_resource('crnrstn_share_module_inactivity_close_ttl', 2);

            if(this.get_ui_component_state(ux_action + '_' + elem) !== 'ON'){

                //
                // FIRE TO TURN OFF ACTION. SET TO "ON".
                this.set_ui_component_state(ux_action + '_' + elem)

                $('#crnrstn_module_share_component_wrapper_rel_' + elem).animate({
                    width: 0,
                    height: 0
                }, {
                    duration: 0,
                    queue: false,
                    complete: function () {

                    }

                });

                $('#crnrstn_module_share_component_' + elem).animate({
                    height: 0
                }, {
                    duration: 0,
                    queue: false,
                    complete: function () {

                        $('#crnrstn_module_share_component_wrapper_rel_' + elem).animate({
                            height: parseInt(tgt_wrapper_height),
                            width: parseInt(tgt_wrapper_width)
                        }, {
                            duration: 50,
                            queue: false,
                            specialEasing: {
                                height: "swing"
                            },
                            complete: function (){

                                $('#crnrstn_module_share_component_' + elem).animate({
                                    opacity: 1.0,
                                    width: parseInt(tgt_width),
                                    left: -22
                                }, {
                                    duration: 0,
                                    queue: false,
                                    complete: function () {

                                        $('#crnrstn_module_share_component_' + elem).animate({
                                            height: parseInt(tgt_height)
                                        }, {
                                            duration: 100,
                                            queue: false,
                                            specialEasing: {
                                                height: "swing"
                                            },
                                            complete: function () {

                                            }

                                        });

                                        $('#crnrstn_module_share_component_' + elem).animate({
                                            paddingTop: parseInt(8),
                                            paddingRight: parseInt(10),
                                            paddingLeft: parseInt(10)
                                        }, {
                                            duration: 0,
                                            queue: false,
                                            complete: function () {

                                            }

                                        });

                                    }

                                });

                            }

                        });

                    }

                });

            }

            return false;

        }

        this.source_action_ux_element_id = elem.id;

        switch(elem.id){
            case 'crnrstn_interact_ui_full_lightbox':
            case 'crnrstn_interact_ui_full_lightbox_overlay':

                //
                // CLOSE OVERLAY
                switch(ux_action){
                    case 'onmousedown':

                    break;
                    case 'onmouseup':

                    break;
                    case 'onclick':

                        if(this.crnrstn_overlay_mode === 'MIT'){

                            this.close_overlay_mit(elem.id);

                        }

                    break;

                }

                return false;

            break;
            case 'crnrstn_general_mit_lnk':
            case 'crnrstn_ui_system_footer_mit_lnk':
            case 'crnrstn_txt_lnk_mit':

                //
                // MIT OVERLAY
                switch(ux_action){
                    case 'onmouseover':

                    break;
                    case 'onmouseout':

                    break;
                    case 'onmousedown':

                    break;
                    case 'onmouseup':

                    break;
                    case 'onclick':

                        this.launch_overlay_mit(elem.id);

                    break;

                }

            break;
            case 'crnrstn_interact_ui_full_doc_close':

                //onclick
                //this.toggle_documentation_side_navigation();

                switch(ux_action){
                    case 'onmouseover':

                        //this.log_activity('[lnum 6447] ' + ux_action + ' FIRED ON [' + '#' + elem.id + '].', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

                        // ACTIVE MOUSEOVER (HOVER STATE)
                        $('#' + elem.id).css('color', '#F90000');

                    break;
                    case 'onmouseout':

                        //this.log_activity('[lnum 6455] ' + ux_action + ' FIRED ON [' + '#' + elem.id + '].', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

                        // ACTIVE MOUSEOUT (BACK TO NORMAL)
                        $('#' + elem.id).css('color', '#F6F6F6');

                    break;
                    case 'onmousedown':

                    break;
                    case 'onmouseup':

                    break;
                    case 'onclick':

                        this.close_full_screen_documentation();

                    break;

                }

            break;
            case 'crnrstn_interact_ui_primary_nav_img_shell_menu_glass_case':

                //dom_handle_variant_element = 'menu';

            break;
            case 'crnrstn_interact_ui_primary_nav_img_shell_close_x_glass_case':

                //dom_handle_variant_element = 'close_x';

            break;
            case 'crnrstn_interact_ui_primary_nav_img_shell_fs_expand_glass_case':

                //dom_handle_variant_element = 'fs_expand';

            break;
            case 'crnrstn_interact_ui_primary_nav_img_shell_minimize_glass_case':

                //dom_handle_variant_element = 'minimize';

            break;
            case 'crnrstn_interact_ui_side_nav_search':

                switch(ux_action){
                    case 'onmouseover':

                        if(this.dom_element_mouse_state_ARRAY[elem.id] != 'MOUSEOVER' && this.dom_element_mouse_state_ARRAY[elem.id] != 'TRANSITIONING'){

                            this.dom_element_mouse_state_ARRAY[elem.id] = 'TRANSITIONING';

                            //
                            // ACTIVE MOUSEOVER (HOVER STATE)
                            $('#crnrstn_interact_ui_side_nav_search_bar').css('width', parseInt('4'));
                            $('#crnrstn_interact_ui_side_nav_search_bar').css('backgroundColor', '#F90000');
                            $('#crnrstn_interact_ui_side_nav_search').css('borderColor', '#F90000');

                            $('#crnrstn_interact_ui_side_nav_search_img_bg').animate({
                                opacity: 1.0
                            }, {
                                duration: 100,
                                queue: false,
                                specialEasing: {
                                    opacity: "swing"
                                },
                                complete: function () {

                                }

                            });

                            this.search_glass_mouseover();

                        }

                    break;
                    case 'onmouseout':

                        this.search_glass_mouseout();

                    break;
                    case 'onmousedown':

                    break;
                    case 'onmouseup':

                    break;
                    case 'onclick':

                        //this.toggle_documentation_side_navigation();

                    break;

                }

            break;
            case 'crnrstn_interact_ui_side_nav_logo':

                switch(ux_action){
                    case 'onmouseover':

                        //
                        // ACTIVE MOUSEOVER (HOVER STATE)
                        //$('#crnrstn_interact_ui_side_nav_logo_img_bg').css('backgroundColor', '#b4b4b4');  // f8f8f8
                        $('#crnrstn_interact_ui_side_nav_logo_bar').css('width', parseInt('4'));
                        $('#crnrstn_interact_ui_side_nav_logo_bar').css('backgroundColor', '#F90000');
                        $('#crnrstn_interact_ui_side_nav_logo').css('borderColor', '#F90000');

                        $('#crnrstn_interact_ui_side_nav_logo_img_bg').animate({
                            opacity: 1.0
                        }, {
                            duration: 100,
                            queue: false,
                            specialEasing: {
                                opacity: "swing"
                            },
                            complete: function () {

                            }

                        });

                        //$('#crnrstn_interact_ui_side_nav_logo').css('backgroundColor', '#FFF');

                    break;
                    case 'onmouseout':

                        //
                        // ACTIVE MOUSEOUT (BACK TO NORMAL)
                        //$('#crnrstn_interact_ui_side_nav_logo_img_bg').css('backgroundColor', '#FFF');
                        $('#crnrstn_interact_ui_side_nav_logo_bar').css('width', parseInt('2'));
                        $('#crnrstn_interact_ui_side_nav_logo_bar').css('backgroundColor', '#A5B9D8');
                        $('#crnrstn_interact_ui_side_nav_logo').css('borderColor', '#A5B9D8');

                        $('#crnrstn_interact_ui_side_nav_logo_img_bg').animate({
                            opacity: 0.2
                        }, {
                            duration: 100,
                            queue: false,
                            specialEasing: {
                                opacity: "swing"
                            },
                            complete: function () {

                            }

                        });

                        //$('#crnrstn_interact_ui_side_nav_logo').css('backgroundColor', 'transparent');

                    break;
                    case 'onmousedown':

                    break;
                    case 'onmouseup':

                    break;
                    case 'onclick':

                        this.toggle_documentation_side_navigation();

                    break;

                }

            break;
            default:

                this.log_activity('[lnum 9060] [ACTION=' + ux_action + '] CRNRSTN :: INTERACT UI UNKNOWN ELEMENT ID [' + elem.id + ']', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

            break;

        }

        switch(ux_action){
            case 'onmouseover':

            break;
            case 'onmouseout':

            break;
            case 'onmousedown':

            break;
            case 'onmouseup':

            break;

        }

        return false;

    };

    CRNRSTN_JS.prototype.search_glass_mouseover = function(){

        /*
        crnrstn_interact_ui_side_nav_search
        crnrstn_interact_ui_side_nav_search_img
        crnrstn_interact_ui_side_nav_search_bar

        */

        var self = this;

        $('#crnrstn_interact_ui_side_nav_search_bar').css('backgroundColor', '#F90000');
        $('#crnrstn_interact_ui_side_nav_search').css('borderColor', '#F90000');

        $('#crnrstn_interact_ui_side_nav_search_img_bg').animate({
            opacity: 1
        }, {
            duration: 100,
            queue: false,
            specialEasing: {
                opacity: "swing"
            },
            complete: function () {

            }

        });

        var tmp_width = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search').css('width'));
        var tmp_height = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search').css('height'));

        tmp_width = (tmp_width * 1) + 25;
        tmp_height = (tmp_height * 1) + 30;

        $('#crnrstn_interact_ui_side_nav_search').animate({
            height: tmp_height,
            width: tmp_width
        }, {
            duration: 100,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            complete: function () {

            }

        });

        var tmp_width = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search_img img').css('width'));
        var tmp_height = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search_img img').css('height'));

        tmp_width = (tmp_width * 1) + 25;
        tmp_height = (tmp_height * 1) + 25;

        $('#crnrstn_interact_ui_side_nav_search_img img').animate({
            height: tmp_height,
            width: tmp_width
        }, {
            duration: 100,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            complete: function () {

            }

        });

        $('#crnrstn_interact_ui_side_nav_search_img').animate({
            paddingTop: 5
        }, {
            duration: 100,
            queue: false,
            specialEasing: {
                paddingTop: "swing"
            },
            complete: function () {

                self.dom_element_mouse_state_ARRAY['crnrstn_interact_ui_side_nav_search'] = 'MOUSEOVER';

            }

        });

        var tmp_height = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search_bar').css('height'));

        tmp_height = (tmp_height * 1) + 30;

        $('#crnrstn_interact_ui_side_nav_search_bar').animate({
            height: tmp_height
        }, {
            duration: 100,
            queue: false,
            specialEasing: {
                height: "swing"
            },
            complete: function () {

            }

        });

    };

    CRNRSTN_JS.prototype.search_glass_mouseout = function(){

        /*
        *** crnrstn_interact_ui_side_nav_search
        crnrstn_interact_ui_side_nav_search_img
        crnrstn_interact_ui_side_nav_search_bar

        */

        var mouse_state_index = 'crnrstn_interact_ui_side_nav_search';

        if(this.dom_element_mouse_state_ARRAY[mouse_state_index] == 'MOUSEOVER') {

            this.dom_element_mouse_state_ARRAY[mouse_state_index] = 'TRANSITIONING';

            var self = this;

            //
            // INACTIVE MOUSEOUT
            $('#crnrstn_interact_ui_side_nav_search_bar').css('width', parseInt('2'));
            $('#crnrstn_interact_ui_side_nav_search_bar').css('backgroundColor', '#A5B9D8');
            $('#crnrstn_interact_ui_side_nav_search').css('borderColor', '#A5B9D8');

            $('#crnrstn_interact_ui_side_nav_search_img_bg').animate({
                opacity: 0.2
            }, {
                duration: 100,
                queue: false,
                specialEasing: {
                    opacity: "swing"
                },
                complete: function () {

                }

            });

            $('#crnrstn_interact_ui_side_nav_search_bar').css('backgroundColor', '#A5B9D8');
            $('#crnrstn_interact_ui_side_nav_search').css('borderColor', '#A5B9D8');

            $('#crnrstn_interact_ui_side_nav_search_img_bg').animate({
                opacity: 0.2
            }, {
                duration: 100,
                queue: false,
                specialEasing: {
                    opacity: "swing"
                },
                complete: function () {

                }

            });

            var tmp_width = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search').css('width'));
            var tmp_height = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search').css('height'));

            tmp_width = (tmp_width * 1) - 25;
            tmp_height = (tmp_height * 1) - 30;

            $('#crnrstn_interact_ui_side_nav_search').animate({
                height: tmp_height,
                width: tmp_width
            }, {
                duration: 100,
                queue: false,
                specialEasing: {
                    height: "swing"
                },
                complete: function () {

                }

            });

            var tmp_width = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search_img img').css('width'));
            var tmp_height = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search_img img').css('height'));

            tmp_width = (tmp_width * 1) - 25;
            tmp_height = (tmp_height * 1) - 25;

            $('#crnrstn_interact_ui_side_nav_search_img img').animate({
                height: tmp_height,
                width: tmp_width
            }, {
                duration: 100,
                queue: false,
                specialEasing: {
                    height: "swing"
                },
                complete: function () {

                }

            });

            $('#crnrstn_interact_ui_side_nav_search_img').animate({
                paddingTop: 3
            }, {
                duration: 100,
                queue: false,
                specialEasing: {
                    paddingTop: "swing"
                },
                complete: function () {

                }

            });

            var tmp_height = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav_search_bar').css('height'));

            tmp_height = (tmp_height * 1) - 30;

            $('#crnrstn_interact_ui_side_nav_search_bar').animate({
                height: tmp_height
            }, {
                duration: 100,
                queue: false,
                specialEasing: {
                    height: "swing"
                },
                complete: function () {

                    self.dom_element_mouse_state_ARRAY[mouse_state_index] = 'MOUSEOUT';

                }

            });

        }

    };

    CRNRSTN_JS.prototype.string_clean_css_px_int = function(css_pixel_int_string){

        var tmp_css_pixel_ARRAY = css_pixel_int_string.split('px');
        css_pixel = tmp_css_pixel_ARRAY[0];

        return css_pixel;

    };

    CRNRSTN_JS.prototype.close_full_screen_documentation = function(){

        //
        // crnrstn_interact_ui_full_doc_close
        // crnrstn_interact_ui_full_doc_header_wrapper
        // crnrstn_documentation_dyn_shell
        var self = this;

        this.interact_ui_refresh_state_docs_bg = 'SLEEPING';

        //$('#crnrstn_interact_ui_full_doc_header_wrapper').html('');
        $('#crnrstn_interact_ui_full_doc_close').html('');

        $('#crnrstn_documentation_dyn_shell_bg').animate({
            backgroundColor: 'transparent',
            opacity: 0
        }, {
            duration: 500,
            queue: false,
            specialEasing: {
                opacity: "swing"
            },
            complete: function () {

                // UNDO this.size_element('crnrstn_documentation_dyn_shell_bg');
                $('#crnrstn_documentation_dyn_shell_bg').animate({
                    width: 0,
                    height: 0
                }, {
                    duration: 0,
                    queue: false,
                    complete: function () {

                    }

                });

            }

        });

        $('#crnrstn_documentation_dyn_shell').animate({
            opacity: 0
        }, {
            duration: 500,
            queue: false,
            specialEasing: {
                opacity: "swing"
            },
            complete: function () {

                // UNDO this.size_element('crnrstn_documentation_dyn_shell');
                $('#crnrstn_documentation_dyn_shell').animate({
                    width: 0,
                    height: 0
                }, {
                    duration: 0,
                    queue: false,
                    complete: function () {

                        self.end();

                    }

                });

            }

        });

    };

    CRNRSTN_JS.prototype.toggle_documentation_side_navigation = function(){

        var self = this;
        var css_int = this.string_clean_css_px_int($('#crnrstn_interact_ui_side_nav').css('width'));

        this.b_width_nav_expand = parseInt($(window).width()) - parseInt(this.side_navigation_toggle_max_width) - 35;
        this.b_width_nav_min = parseInt($(window).width()) - parseInt(this.side_navigation_toggle_min_width) - 35;

        if(css_int > this.side_navigation_toggle_min_width + 35){

            //
            // STATE MANAGEMENT TOUCH POINT
            this.set_ui_component_state('crnrstn_interact_ui_side_nav', 'MIN');

            //
            // RESET WINDOW WIDTH TO FORCE BODY WIDTH ADJUSTMENT
            this.body_control_window_width = 0;
            this.interact_ui_refresh_state_body = 'LISTENING';
            this.size_element('body');
            this.size_element_x('crnrstn_activity_log_output_wrapper');

            //
            // CLOSE SIDE NAVIGATION :: HIDE FOOTER
            $('#crnrstn_ui_system_footer_wrapper').animate({
                bottom: 0
            }, {
                duration: 1000,
                queue: false,
                specialEasing: {
                    bottom: "swing"
                },
                complete: function () {

                    self.interact_ui_refresh_state_system_footer = 'SLEEPING';

                    //
                    // RESET WINDOW WIDTH TO FORCE BODY WIDTH ADJUSTMENT
                    //self.body_control_window_width = 0;

                }

            });

            //
            // CLOSE SIDE NAVIGATION :: NAV WIDTH TO MIN
            $('#crnrstn_interact_ui_side_nav').animate({
                width: parseInt(this.side_navigation_toggle_min_width)
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    width: "swing"
                },
                complete: function () {

                }

            });

            //
            // CLOSE SIDE NAVIGATION :: MOVE CRNRSTN :: LOGO TO MIN POSITION
            $('#crnrstn_interact_ui_side_nav_logo').animate({
                left: 18
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    left: "swing"
                },
                complete: function () {

                }

            });

            //
            // CLOSE SIDE NAVIGATION :: MOVE SEARCH ICON TO MIN POSITION
            $('#crnrstn_interact_ui_side_nav_search').animate({
                left: 18
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    left: "swing"
                },
                complete: function () {

                }

            });

            //
            // CLOSE SIDE NAVIGATION :: MOVE PAGE LOAD INDICATOR TO MIN POSITION
            $('#crnrstn_ui_element_load_indicator_shell').animate({
                marginLeft: parseInt(this.side_navigation_toggle_min_width)
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    marginLeft: "swing"
                },
                complete: function () {

                }

            });

            //
            // CLOSE SIDE NAVIGATION :: MOVE THE PAGE CONTENT CONTAINER TO MIN POSITION
            $('#crnrstn_documentation_dyn_shell_rel').animate({
                marginLeft: parseInt(this.side_navigation_toggle_min_width)
            }, {
                duration: 500,
                queue: false,
                specialEasing: {
                    marginLeft: "swing"
                },
                complete: function () {

                }

            });

            // //
            // // CLOSE SIDE NAVIGATION :: MOVE THE BODY CONTENT TO MAX POSITION
            // $('body').animate({
            //     marginLeft: parseInt(this.side_navigation_toggle_min_width),
            //     paddingLeft: parseInt(this.side_navigation_toggle_min_width),
            //     width: parseInt(this.b_width_nav_min)
            // }, {
            //     duration: 500,
            //     queue: false,
            //     specialEasing: {
            //         marginLeft: "swing"
            //     },
            //     complete: function () {
            //
            //     }
            //
            // });

            //this.size_element('body');

            //
            // DELAY
            $('#crnrstn_j5_wolf_pup_outter_wrap').animate({
                listStyleType: 'square'
            }, {
                duration: 500,
                queue: false,
                complete: function () {

                    //self.size_element_x('crnrstn_activity_log_output_wrapper');
                    //self.interact_ui_refresh_state_body = 'LISTENING';

                }

            });

            //
            // CLOSE SIDE NAVIGATION :: MOVE THE WOLF PUP TO MIN POSITION
            self.size_element_x('crnrstn_j5_wolf_pup_outter_wrap');

            return true;

        }

        //
        // EXPAND SIDE NAVIGATION
        this.set_ui_component_state('crnrstn_interact_ui_side_nav', 'MAX');
        this.interact_ui_refresh_state_system_footer = 'ENABLED';

        //
        // RESET WINDOW WIDTH TO FORCE BODY WIDTH ADJUSTMENT
        this.body_control_window_width = 0;
        this.interact_ui_refresh_state_body = 'LISTENING';
        this.size_element('body');
        this.size_element_x('crnrstn_activity_log_output_wrapper');

        //
        // EXPAND SIDE NAVIGATION :: SET WIDTH TO MAX WIDTH
        $('#crnrstn_interact_ui_side_nav').animate({
            width: parseInt(this.side_navigation_toggle_max_width)
        }, {
            duration: 100,
            queue: false,
            specialEasing: {
                width: "swing"
            },
            step: function( now, fx ) {

            },
            complete: function () {

            }

        });

        //
        // EXPAND SIDE NAVIGATION :: MOVE CRNRSTN :: LOGO TO MAX POSITION
        $('#crnrstn_interact_ui_side_nav_logo').animate({
            left: parseInt(this.side_navigation_toggle_max_width)
        }, {
            duration: 100,
            queue: false,
            specialEasing: {
                left: "swing"
            },
            complete: function () {

            }

        });

        //
        // EXPAND SIDE NAVIGATION :: MOVE SEARCH ICON TO MAX POSITION
        $('#crnrstn_interact_ui_side_nav_search').animate({
            left: parseInt(this.side_navigation_toggle_max_width)
        }, {
            duration: 100,
            queue: false,
            specialEasing: {
                left: "swing"
            },
            complete: function () {

            }

        });

        //
        // EXPAND SIDE NAVIGATION :: MOVE PAGE LOAD INDICATOR TO MAX POSITION
        $('#crnrstn_ui_element_load_indicator_shell').animate({
            marginLeft: parseInt(this.side_navigation_toggle_max_width)
        }, {
            duration: 100,
            queue: false,
            specialEasing: {
                marginLeft: "swing"
            },
            complete: function () {

            }

        });

        //
        // EXPAND SIDE NAVIGATION :: MOVE THE PAGE CONTENT CONTAINER TO MAX POSITION
        $('#crnrstn_documentation_dyn_shell_rel').animate({
            marginLeft: parseInt(this.side_navigation_toggle_max_width)
        }, {
            duration: 500,
            queue: false,
            specialEasing: {
                marginLeft: "swing"
            },
            complete: function () {

            }

        });

        // //
        // // EXPAND SIDE NAVIGATION :: MOVE THE BODY CONTENT TO MAX POSITION
        // $('body').animate({
        //     marginLeft: parseInt(this.side_navigation_toggle_max_width),
        //     paddingLeft: parseInt(this.side_navigation_toggle_min_width),
        //     width: parseInt(this.b_width_nav_expand)
        // }, {
        //     duration: 100,
        //     queue: false,
        //     specialEasing: {
        //         marginLeft: "swing"
        //     },
        //     complete: function () {
        //
        //     }
        //
        // });

        //this.size_element('body');

        //
        // EXPAND SIDE NAVIGATION :: MOVE THE SYSTEM FOOTER TO MAX POSITION
        $('#crnrstn_ui_system_footer_wrapper').animate({
            bottom: 57
        }, {
            duration: 1000,
            queue: false,
            specialEasing: {
                bottom: "swing"
            },
            complete: function () {

                //self.interact_ui_refresh_state_body = 'LISTENING';

                //
                // RESET WINDOW WIDTH TO FORCE BODY WIDTH ADJUSTMENT
                //self.body_control_window_width = 0;

            }

        });

        //
        // DELAY
        $('#crnrstn_j5_wolf_pup_outter_wrap').animate({
            listStyleType: 'square'
        }, {
            duration: 500,
            queue: false,
            complete: function () {

                self.size_element_x('crnrstn_j5_wolf_pup_outter_wrap');
                self.size_element_x('crnrstn_activity_log_output_wrapper');

            }

        });

        return true;

    };

    CRNRSTN_JS.prototype.copy_to_clipboard = function(elem_hash){

        //
        // SOURCE :: https://stackoverflow.com/questions/1173194/select-all-div-text-with-single-mouse-click
        // COMMENT :: https://stackoverflow.com/a/1173319
        // AUTHOR :: Denis Sadowski :: https://stackoverflow.com/users/136482/denis-sadowski
        if(document.selection){ // IE

            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById('crnrstn_print_r_source_' + elem_hash));
            range.select();

        }else if (window.getSelection){

            var range = document.createRange();
            range.selectNode(document.getElementById('crnrstn_print_r_source_' + elem_hash));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

        }

        //
        // SOURCE :: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
        /* Copy the text inside the text field */
        document.execCommand('copy');

        //
        // ONLY HTTPS
        // navigator.clipboard.writeText($('#crnrstn_print_r_source_' + elem_hash).html()).then(
        //     () => {
        //         /* clipboard successfully set */
        //         //alert("Copied the text: " + document.getElementById("crnrstn_print_r_source_" + elem_hash).innerHTML);
        //
        //     },
        //     () => {
        //         /* clipboard write failed */
        //         //alert("FAIL::Copied the text: " + document.getElementById("crnrstn_print_r_source_" + elem_hash).innerHTML);
        //
        //     }
        // );

        /* Alert the copied text */
        //alert("Copied the text: " + document.getElementById("crnrstn_print_r_source_" + elem_hash).innerHTML);
        //alert("Highlight Color: " + $('#crnrstn_print_r_highlight_color_' + elem_hash).html());
        document.getElementById('crnrstn_print_r_source_' + elem_hash).style.backgroundColor = $('#crnrstn_print_r_highlight_color_' + elem_hash).html();
        //$('#crnrstn_print_r_source_' + elem_hash).css('backgroundColor', $('#crnrstn_print_r_highlight_color_' + elem_hash).html());

        // $('#crnrstn_print_r_source_' + elem_hash).animate({
        //     backgroundColor: $('#crnrstn_print_r_highlight_color_' + elem_hash).html()
        // }, {
        //     duration: 500,
        //     queue: false,
        //     specialEasing: {
        //         backgroundColor: "swing"
        //     },
        //     complete: function () {
        //
        //     }
        //
        // });

    };

    CRNRSTN_JS.prototype.____crnrstn_interact_ui_ux = function(ux_action, elem){

        var dom_handle_postfix = '';
        var dom_handle_variant_element = '';

        var element_id = elem.id;

        switch(element_id){
            case 'crnrstn_interact_ui_primary_nav_img_shell_menu_glass_case':

                dom_handle_variant_element = 'menu';

            break;
            case 'crnrstn_interact_ui_primary_nav_img_shell_close_x_glass_case':

                dom_handle_variant_element = 'close_x';

            break;
            case 'crnrstn_interact_ui_primary_nav_img_shell_fs_expand_glass_case':

                dom_handle_variant_element = 'fs_expand';

            break;
            case 'crnrstn_interact_ui_primary_nav_img_shell_minimize_glass_case':

                dom_handle_variant_element = 'minimize';

            break;
            default:

                this.log_activity('[lnum 9824] [ACTION=' + ux_action + '] CRNRSTN :: INTERACT UI UNKNOWN ELEMENT ID [' + elem.id + ']', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

            break;

        }

        //
        // TODO :: GET THIS INFO THROUGH THE SSDTLA XHR XML RESPONSE
        var element_id_split_ARRAY = element_id.split("crnrstn_interact_ui_primary_nav_img_shell_");
        //dom_handle_variant_element = element_id_split_ARRAY[1];

        var dom_handle_root = 'crnrstn_interact_ui_primary_nav_img_shell_';

        var dom_handle_element = dom_handle_root + dom_handle_variant_element;

        this.log_activity('[lnum 9839] element_id_split_ARRAY[0]=' + element_id_split_ARRAY[0] + '] element_id_split_ARRAY[1]=' + element_id_split_ARRAY[1] + ']', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

        if(this.dom_element_mouse_state_lock_ARRAY[dom_handle_element] === 'undefined'){

            alert('[lnum 9843] dom_element_mouse_state_lock_ARRAY is undefined at ' + dom_handle_element + ' for ' + element_id + '.');

        }else{

            if(this.dom_element_mouse_state_lock_ARRAY[dom_handle_element] !== 'ON'){

                switch(ux_action){
                    case 'onmouseover':

                        this.dom_element_mouse_state_tracker_ARRAY[dom_handle_variant_element] = '_hvr';
                        this.dom_element_mouse_state_lock_ARRAY[dom_handle_element] = 'ON';
                        this.log_activity('[lnum 9854] [ACTION=onmouseover on ' + element_id + ']', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);
                        this.log_activity('[lnum 9855] LOCK ON FOR [' + element_id + ']', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

                        dom_handle_postfix = '_hvr';

                        /*
                        <div id="crnrstn_interact_ui_primary_nav_img_shell_menu_inactive" class="crnrstn_interact_ui_primary_nav_img_shell"><img src="../../../_crnrstn/ui/imgs/png/primary_nav_seriesblue00_120x120_menu_inactive.png" width="40" height="40" alt="Menu" title="Navigation to Menu"></div>
                        <div id="crnrstn_interact_ui_primary_nav_img_shell_menu_hvr" class="crnrstn_interact_ui_primary_nav_img_shell"><img src="../../../_crnrstn/ui/imgs/png/primary_nav_seriesblue00_120x120_menu_hvr.png" width="40" height="40" alt="Menu" title="Navigation to Menu"></div>
                        <div id="crnrstn_interact_ui_primary_nav_img_shell_menu_click" class="crnrstn_interact_ui_primary_nav_img_shell"><img src="../../../_crnrstn/ui/imgs/png/primary_nav_seriesblue00_120x120_menu_click.png" width="40" height="40" alt="Menu" title="Navigation to Menu"></div>
                        <div id="crnrstn_interact_ui_primary_nav_img_shell_menu" class="crnrstn_interact_ui_primary_nav_img_shell crnrstn_interact_ui_active"><img src="../../../_crnrstn/ui/imgs/png/primary_nav_seriesblue00_120x120_menu.png" width="40" height="40" alt="Menu" title="Navigation to Menu"></div>

                        */

                        //crnrstn_interact_ui_primary_nav_img_shell_menu_hvr
                        //var ui_interact_primary_nav_dom_ARRAY = ['crnrstn_interact_ui_primary_nav_img_shell_menu', 'crnrstn_interact_ui_primary_nav_img_shell_close_x', 'crnrstn_interact_ui_primary_nav_img_shell_fs_expand'];

                        //tmp_nav_cnt = ui_interact_primary_nav_dom_ARRAY.length;

                        //
                        // TURN OFF ALL OTHER HOVER NAV STATES
                        // for(var i = 0; i < tmp_nav_cnt; i++){
                        //
                        //     if(dom_handle_element != ui_interact_primary_nav_dom_ARRAY[i]){
                        //         var tmp_elem = ui_interact_primary_nav_dom_ARRAY[i];
                        //         element_id_split_ARRAY = tmp_elem.split("crnrstn_interact_ui_primary_nav_img_shell_");
                        //         tmp_element_dom_handle = element_id_split_ARRAY[1];
                        //
                        //         if(this.dom_element_mouse_state_tracker_ARRAY[tmp_element_dom_handle] === '_hvr'){
                        //
                        //             this.primary_ui_interact_nav_state_shift(dom_handle_root, tmp_element_dom_handle, '', dom_handle_element);
                        //
                        //         }
                        //
                        //     }
                        //
                        // }

                        this.primary_ui_interact_nav_state_shift(dom_handle_root, dom_handle_variant_element, dom_handle_postfix);

                    break;
                    case 'onmouseout':

                        dom_handle_postfix = '';
                        this.dom_element_mouse_state_tracker_ARRAY[dom_handle_variant_element] = '';
                        this.dom_element_mouse_state_ARRAY[dom_handle_element] = 'ON';

                        this.log_activity('[lnum 9900] [ACTION=onmouseout on ' + element_id + ']', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

                        this.primary_ui_interact_nav_state_shift(dom_handle_root, dom_handle_variant_element, dom_handle_postfix);

                    break;
                    case 'onmousedown':

                        dom_handle_postfix = '_click';
                        this.dom_element_mouse_state_tracker_ARRAY[dom_handle_variant_element] = '_click';
                        this.dom_element_mouse_state_lock_ARRAY[dom_handle_element] = 'ON';

                        this.primary_ui_interact_nav_state_shift(dom_handle_root, dom_handle_variant_element, dom_handle_postfix);

                    break;
                    case 'onmouseup':

                        dom_handle_postfix = '';
                        this.dom_element_mouse_state_lock_ARRAY[dom_handle_element] = 'ON';

                        if(this.dom_element_mouse_state_ARRAY[dom_handle_element] === 'MOUSEOVER'){

                            this.dom_element_mouse_state_tracker_ARRAY[dom_handle_variant_element] = '_hvr';
                            this.primary_ui_interact_nav_state_shift(dom_handle_root, dom_handle_variant_element, '_hvr');

                        }else{

                            this.dom_element_mouse_state_tracker_ARRAY[dom_handle_variant_element] = '';
                            this.primary_ui_interact_nav_state_shift(dom_handle_root, dom_handle_variant_element, dom_handle_postfix);

                        }

                    break;

                }

                //
                // FIRE TRANSITION TO TARGET IMAGE WITHIN ACTIVE ELEMENT
                var target_dom_handle = dom_handle_root + dom_handle_variant_element + dom_handle_postfix;
                this.log_activity('[lnum 9938] [ACTION=' + ux_action + '] [target_dom_handle=' + target_dom_handle + '] CRNRSTN :: INTERACT UI (UX) ELEMENT ID [' + elem.id + ']', oCRNRSTN_JS.CRNRSTN_DEBUG_VERBOSE);

            }

        }

        return true;

    };

    CRNRSTN_JS.prototype.return_random_index_int = function(content_ARRAY, type = 'LIFESTYLE_IMG'){

        //
        // NOTE :: IF THIS METHOD IS USED FOR ANY OTHER TYPE OF ARRAY-INDEX-FORCE-UNIQUE-RETURN...UP
        // TO AND INCLUDING ARRAY RESET..., NEED TO IMPLEMENT SERIALIZATION BASED OFF OF THE ADDITIONAL
        // INPUT PARAM, "type" TO AVOID CANNIBALISM OF SINGLE-DIMENSION INDEX SPOILER ARRAY.
        var rand_int = 0;
        var index_cnt = content_ARRAY.length;
        var rand_success = false;

        for(let i = 0; i < index_cnt; i++){

            rand_int = Math.floor(Math.random() * index_cnt);

            //
            // SOURCE :: https://stackoverflow.com/questions/2613192/check-if-an-array-item-is-set-in-js
            // COMMENT :: https://stackoverflow.com/a/2613199
            // AUTHOR :: Stefan :: https://stackoverflow.com/users/108009/stefan
            if (!(rand_int in this.rand_index_spoiler_ARRAY)){

                rand_success = true;
                this.rand_index_spoiler_ARRAY[rand_int] = 1;
                i = index_cnt + 1;

            }

        }

        if(rand_success){

            return rand_int;

        }else{

            //
            // LOOP THROUGH ARRAY FOR FIRST VIRGIN.
            for(let i = 0; i < index_cnt; i++){

                rand_int = i;

                if (!(rand_int in this.rand_index_spoiler_ARRAY)){

                    rand_success = true;
                    this.rand_index_spoiler_ARRAY[rand_int] = 1;
                    i = index_cnt + 1;

                }

            }

            if(rand_success){

                return rand_int;

            }else{

                //
                // ALL INDICES HAVE BEEN USED. RESET AND CONTINUE.
                this.rand_index_spoiler_ARRAY = [];
                rand_int = Math.floor(Math.random() * index_cnt);
                this.rand_index_spoiler_ARRAY[rand_int] = 1;

                return rand_int;

            }

        }

    };

    CRNRSTN_JS.prototype.plz = function(digit){

        var zpad = digit + '';

        if (digit < 10) {

            zpad = "0" + zpad;

        }

        return zpad;

    };

    // Closing time. :-(
    CRNRSTN_JS.prototype.end = function(){

        this.disableKeyboardNav();
        $(window).off('resize', this.sizeOverlay);
        this.$lightbox.fadeOut(this.options.fadeDuration);
        this.$overlay.fadeOut(this.options.fadeDuration);

        if(this.options.disableScrolling){

            $('body').removeClass('lb-disable-scrolling');

        }

    };

    return new CRNRSTN_JS();

}));

//
// SOURCE :: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
var __nativeST__ = window.setTimeout, __nativeSI__ = window.setInterval;

window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
        vCallback.apply(oThis, aArgs);
    } : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(vCallback instanceof Function ? function () {
        vCallback.apply(oThis, aArgs);
    } : vCallback, nDelay);
};

//
// SOURCE :: https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
// COMMENT :: https://stackoverflow.com/a/7790764
// AUTHOR :: T.J. Crowder :: https://stackoverflow.com/users/157247/t-j-crowder
(function() {

    var self = this;
    document.onmousemove = crnrstn_interact_ui_mouse_input;

    function crnrstn_interact_ui_mouse_input(event){
        var eventDoc, doc, body;
        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0 );
        }

        self.oCRNRSTN_JS.CRNRSTN_INTERACT_UI_MOUSE = {
            X: event.pageX,
            Y: event.pageY
        };

    }

})();

(function crnrstn_rtime_timer_interval(){
    setInterval(function() {
        this.oCRNRSTN_JS.crnrstn_rtime_timer_cycle();
        }, 1000);
})();