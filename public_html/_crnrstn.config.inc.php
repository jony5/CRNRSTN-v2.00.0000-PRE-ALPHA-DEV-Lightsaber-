<?php
/**
* @package CRNRSTN

// J5
// Code is Poetry */
# # C # R # N # R # S # T # N # : : # # # #
#
#        CRNRSTN :: An open source PHP class library supporting enterprise application development that is framed within
#                   the context of mature/rigid RTM protocols.
#        VERSION :: 2.00.0000 PRE-ALPHA-DEV (Lightsaber)
#      TIMESTAMP :: Tuesday, November 28, 2023 @ 16:20:00.065620.
#  DATE (v1.0.0) :: July 4, 2018 - Happy Independence Day from my dog and I to you...wherever and whenever you are.
#         AUTHOR :: Jonathan 'J5' Harris, CEO, CTO, Lead Full Stack Developer, jharris@eVifweb.com, eVifweb@gmail.com.
#            URI :: https://crnrstn.jony5.com
#       OVERVIEW :: CRNRSTN :: An Open Source PHP Class Library that stands on top of a robust web services oriented
#                   architecture to both facilitate, augment, and enhance (with stability) the operations of a code base
#                   for a web application across multiple hosting environments.
#
#                   CRNRSTN :: is powered by eVifweb; CRNRSTN :: is powered by eCRM Strategy and Execution,
#                   Web Design & Development, and Only The Best Coffee.
#
#                   Copyright (c) 2012-2024 :: eVifweb development :: All Rights Reserved.
#    DESCRIPTION :: CRNRSTN :: is an open source PHP class library that will facilitate and spread (via SOAP services)
#                   operations of a web application across multiple servers or environments (e.g. localhost, stage,
#                   preprod, and production). With this tool, data and functionality possessing characteristics that
#                   inherently create distinctions between one environment and another can all be managed through one
#                   framework for an entire application. IP address restrictions, error logging profiles, and database
#                   authentication credentials are a few areas within an application's architecture where
#                   CRNRSTN :: was designed to excel.
#
#                   Once CRNRSTN :: has been configured to support all of a web application's running servers, one can
#                   seamlessly RTM the codebase of the web site without having to modify the configuration to account
#                   for any unique and environmentally specific parameters. Receive the benefit of a robust and polished
#                   framework that will bubble up logs from exception notifications to any output channel (email, hidden
#                   HTML comment, native default,...etc.) of one's own choosing.
#
#                   Stand on top of the CRNRSTN :: SOAP Services Layer to, for example, organize and strengthen the
#                   communications architecture of any web application. By supporting many-to-one proxy messaging
#                   relationships between slaves and a master "communications server", CRNRSTN :: can streamline and
#                   simplify the management of web application communications; one can configure everything from SMTP
#                   credentials to the character count for line wrapping in the text versions of multi-part HTML email.
#
#                   This is the "King's Highway" for sending email communications.
#        LICENSE :: MIT
#                   Permission is hereby granted, free of charge, to any person obtaining
#                   a copy of this software and associated documentation files (the
#                   "Software"), to deal in the Software without restriction, including
#                   without limitation the rights to use, copy, modify, merge, publish,
#                   distribute, sublicense, and/or sell copies of the Software, and to
#                   permit persons to whom the Software is furnished to do so, subject to
#                   the following conditions:
#
#                   The above copyright notice and this permission notice shall be
#                   included in all copies or substantial portions of the Software.
#
#                   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
#                   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
#                   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
#                   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
#                   CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
#                   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
#                   SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
#
# # C # R # N # R # S # T # N # : : # # # #
#
//
// CRNRSTN :: DEFINITIONS FOR CLASSES AND CONSTANTS.
require(CRNRSTN_ROOT . '/_crnrstn/_crnrstn.classdefinitions.inc.php' );

/**
 * $CRNRSTN_debug_mode      [PLEASE NOTE THAT CRNRSTN :: LOGGING IS CURRENTLY DOWN AND/OR GOING THROUGH LIGHTSABER ON-BOARDING. 	// Tuesday, December 12, 2023 @ 2009 hrs.]
 * DESCRIPTION :: The master debug mode control variable for CRNRSTN ::
 * OPTIONS ::
 *      $CRNRSTN_debug_mode     [0] CRNRSTN_DEBUG_OFF
 *      $CRNRSTN_debug_mode     [1] CRNRSTN_DEBUG_NATIVE_ERR_LOG
 *      $CRNRSTN_debug_mode     [2] CRNRSTN_DEBUG_AGGREGATION_ON
 *
 * DETAILS ::
 *
 * TLDR;
 *      CRNRSTN_DEBUG_OFF [0]
 *      CRNRSTN_DEBUG_NATIVE_ERR_LOG [1]
 *      CRNRSTN_DEBUG_AGGREGATION_ON [2]
 *
 #      $CRNRSTN_debug_mode = 0 = CRNRSTN_DEBUG_OFF
 *      DESCRIPTION :: Turns all error trace logging off. This is the default.
 *      NOTE :: Minimal memory and additional processing overhead performance requirements
 *              can be expected.
 *
 #      $CRNRSTN_debug_mode = 1 = CRNRSTN_DEBUG_NATIVE_ERR_LOG
 *      DESCRIPTION :: 100% error trace logging that will be sent to the
 *                default error logging location via PHP native error_log(). No log data is aggregated
 *                for delayed output via method invocation; $oCRNRSTN_USR->get_error_log_trace() will
 *                have no log data to return. Please note that ALL log silo data will be in the output
 *                unless n+1 pipe delimited silo key(s) are provided to the CRNRSTN :: constructor. In
 *                this case, only error trace log data aligning to the provided silo key(s) (or the '*'
 *                silo key...same as NULL) will be sent to the PHP native error_log() method for output.
 *                This would be useful if one desires to inspect trace logs for a particular section of
 *                the application that possesses its own unique silo key. Log silo that are keyed with
 *                a '*' character...which also includes NULL log silo parameter...will ALWAYS be traced
 *                for error_log() output.
 *      NOTE :: Minimal memory & some additional processing overhead performance requirements
 *              can be expected.
 *
 #      $CRNRSTN_debug_mode = 2 = CRNRSTN_DEBUG_AGGREGATION_ON
 *      DESCRIPTION :: 100% error trace logging with rolling aggregation TO THE END of the running
 *                process. Provides controlled (invoked by method only) access to aggregated (and always
 *                chronologically presented) trace log data for any pipe delimited log silo key(s) passed to
 *                CRNRSTN :: method(s) for log output. See methods such as $oCRNRSTN_USR->get_error_log_trace().
 *                If ANY piped silo key(s) have been provided to the CRNRSTN :: constructor, only that/those
 *                key(s) will be aggregated (and hence, available for output), and all other keyed log silo
 *                data will be ignored. This does not pertain to silo key of '*'...which also includes NULL
 *                log silo parameter; i.e. '*' log silo trace data will ALWAYS be aggregated and/or returned.
 *                Any aggregated log trace data will also be appended to any CRNRSTN :: system exception
 *                notification...e.g. EMAIL or write to custom FILE output.
 *      NOTE :: Maximum additional memory and processing overhead requirements can be expected.
 *
 * TLDR;
 * CRNRSTN_DEBUG_OFF
 * CRNRSTN_DEBUG_NATIVE_ERR_LOG
 * CRNRSTN_DEBUG_AGGREGATION_ON
 *
 * @var int
*/
$CRNRSTN_debug_mode = CRNRSTN_DEBUG_OFF;
//$CRNRSTN_debug_mode = CRNRSTN_DEBUG_NATIVE_ERR_LOG;

/**
 * $PHPMAILER_debug_mode
 * DESCRIPTION :: Debug output level for PHPMAILER - PHPMailer is a full-featured email creation and transfer class
 *                for PHP which has been refactored into CRNRSTN :: The debug output for PHPMailer is bubbled up
 *                through the CRNRSTN :: SOAP SERVICES LOGGING SERVICES LAYER which provides multiple log touch points
 *                for an enriched debugging/log trace experience.
 *
 * OPTIONS ::
 *      CRNRSTN_PHPMAILER_DEBUG_OFF         [0] No debug output, default
 *      CRNRSTN_PHPMAILER_DEBUG_CLIENT      [1] Client commands
 *      CRNRSTN_PHPMAILER_DEBUG_SERVER      [2] Client commands and server responses
 *      CRNRSTN_PHPMAILER_DEBUG_CONNECTION  [3] As DEBUG_SERVER plus connection status
 *      CRNRSTN_PHPMAILER_DEBUG_LOWLEVEL    [4] Low-level data output, all messages (including exposure of usernames and passwords!!)
 *
 * @var int
 *
 * !!CAUTION :: $PHPMAILER_debug_mode = CRNRSTN_PHPMAILER_DEBUG_LOWLEVEL WILL expose all SMTP usernames
 *              and passwords to CRNRSTN :: EXCEPTION HANDLING SERVICES LAYER which includes browser
 *              accessible output modes of SCREEN_TEXT, SCREEN or SCREEN_HTML, and SCREEN_HTML_HIDDEN.
 * !!
 */
$PHPMAILER_debug_mode = CRNRSTN_PHPMAILER_DEBUG_OFF;   // !!NEVER PROMOTE CRNRSTN_PHPMAILER_DEBUG_LOWLEVEL TO PRODUCTION IP!! BEST NOT TO USE CRNRSTN_PHPMAILER_DEBUG_LOWLEVEL AT ALL...imho.

/**
 * $CRNRSTN_config_salt
 * OPTIONS ::
 *  This optional string should be unique.
 *
 * DESCRIPTION :: Specify an optional serialization salt for this configuration of CRNRSTN :: (1) if multiple
 * 			      CRNRSTN :: config files are running within this environment, e.g. n+1 micro-sites at the
 *                same IP, or (2) if this file will be called by n+1 different processes.
 *
 * @var string
 */
$CRNRSTN_config_salt = '';

//
// TL;DR
//
// $CRNRSTN_log_silo_profile
//
// THIS KIT WILL BE MORE IDEAL WHEN ONE CAN:
//      (1) LOG INTO CRNRSTN :: AS ADMIN,
//      (2) SEARCH FOR LOG SILOS (SEE, $log_silo_key
//          IN $oCRNRSTN->error_log()), AND
//      (3) RUNTIME REVIEW ANY OF THESE LOGS
//          GENERATED BY ANY PAGE ON ANY CRNRSTN ::
//	        CONFIGURED SERVER ENVIRONMENT THROUGH A
//          SESSION MANAGED FLOATING DOM WIDGET,
//          <IFRAME>, OR FULL-SCREEN DEDICATED
//          BROWSER POP-UP WINDOW REAL-TIME-AJAX
//          SERVER ACTIVITY MONITOR...WHICH SAID
//          BROWSER IS SENT AS DISPLAY OUTPUT TO A
//          PERMANENTLY MOUNTED 32" 6K APPLE RETINA
//          DISPLAY AT THE OFFICE.
//
// DEV NOTE: IN THE HEAT OF CRNRSTN :: LIGHTSABER
//          DEVELOPMENT, IT IS JUST NOT IDEAL TO HAVE
//          TO CONSTANTLY BE CHANGING SOME DUMB GLOBAL
//          CONFIG VALUE WHEN I JUST NEED TO SEE ONE SILLY
//          ERROR LOG IN SOME OLD...BUT NOW UPDATED (AND
//          THEREFORE, NOW I WILL BE NEEDING TO UPDATE THE
//          CONFIG FILE FOR "THAT ONE SPECIFIC ERROR LOG" FROM
//          YESTERDAY...AGAIN) METHOD.
//
// Saturday, November 2, 2023 @ 2250 hrs.
//
//
// HERE ARE SOME LOG SILOS CURRENTLY IN USE
// IN CRNRSTN :: ERROR_LOG() OUTPUT METHOD
// CALLS (SOME USES MAY BE COMMENTED OUT):
// -----
// $CRNRSTN_log_silo_profile = CRNRSTN_RESOURCE_OPENSOURCE;
// $CRNRSTN_log_silo_profile = CRNRSTN_BARNEY
// $CRNRSTN_log_silo_profile = CRNRSTN_BARNEY_FILE;
// $CRNRSTN_log_silo_profile = CRNRSTN_ELECTRUM;
// $CRNRSTN_log_silo_profile = CRNRSTN_GABRIEL;
// $CRNRSTN_log_silo_profile = CRNRSTN_SETTINGS_CRNRSTN;
// $CRNRSTN_log_silo_profile = CRNRSTN_SETTINGS_WORDPRESS;
// $CRNRSTN_log_silo_profile = CRNRSTN_DATABASE_CONNECTION;
// $CRNRSTN_log_silo_profile = CRNRSTN_DATABASE_QUERY;
// $CRNRSTN_log_silo_profile = CRNRSTN_LOG_NONE;
//
// PLEASE NOTE: I HAD TO STOP TRYING TO APPLY INTELLIGENT
//              AND STRUCTURED CRNRSTN :: LOGGING CODES
//              TO MY DEVELOPER ERROR LOGS A FEW
//              YEARS AGO ON ACCOUNT OF THE HEAVY BURDEN
//              COMMANDED BY TOO MUCH NEW STUFF THAT WAS
//              STILL IN FLUX, BUT WAS ALSO PARTIALLY OR
//              EVEN ALMOST 100% ROLLED OUT, MY BRO.
//
//              AS BOTH CHANGING THE WHEELS ON A MOVING
//              CAR AND EXPECTING TOP TIER MULTI-CLASS
//              RACING PIT STOP PERFORMANCE WITH THE
//              HAPPY IMSA OFFICIAL STANDING JUST RIGHT
//              THERE ARE...OR SHOULD BE CONSIDERED TO
//              BE...MUTUALLY EXCLUSIVE; AS I AM
//              ONE PERSON...
//
//              ...WELL, I'LL JUST USE A GLOBALLY DEFINED
//              INTEGER, CRNRSTN_SETTINGS_CRNRSTN, FOR ALL
//              $oCRNRSTN->error_log() CALLS atm, AND WE
//              CAN STRENGTHEN THE INTERNAL LOG SILO
//              (EFFECTIVELY "ZONE REPORTING") OF CRNRSTN ::
//              AT ANOTHER TIME.
//
//              Saturday, December 2, 2023 @ 2205 hrs.

/**
 * $CRNRSTN_log_silo_profile  	[PLEASE NOTE THAT CRNRSTN :: LOGGING IS CURRENTLY DOWN AND/OR GOING THROUGH LIGHTSABER ON-BOARDING. 	// Tuesday, December 12, 2023 @ 1911 hrs.]
 * DESCRIPTION :: To limit ALL error log trace activity across the entire application to
 *                hand selected CRNRSTN error log silo key(s), include the desired key(s) within a pipe
 *                delimited string to the CRNRSTN :: constructor as the $CRNRSTN_log_silo_profile
 *                parameter. Only the provided key(s)? will be processed. If an exclusion profile for
 *                CRNRSTN :: error log silo output is desired, prefix any log silo key with '~' in order
 *                to exclude that key from error log trace output across the entire application.
 *
 *                When critical areas of an application need to be monitored in the background for
 *                exception error log trace or bubbled to the surface during real-time development and QA,
 *                CRNRSTN :: has a properly robust error_log() method which allows for the
 *                strategic placement of "meta-data rich" application run-time log trace comments
 *                throughout the code base. Due to the limitations of reviewing error logs via file
 *                traversal within a terminal, it can be desired to effectively trim back error log
 *                trace output from all areas of an application which are NOT under review. This would
 *                leave error log trace data from the area(s) of interest front and center for more
 *                ready review through a terminal, for example. Enter stage left...CRNRSTN :: Log Silos.
 *                By passing, as a parameter, a relevant-to-the-purpose-at-hand key at the end of each
 *                invocation of the $oCRNRSTN->error_log() method (such as, e.g., 'USER_SIGNIN' for
 *                all error log trace relevant to user login use cases within an application), one can
 *                effectively drive the logging trace profile of the entire application from the
 *                CRNRSTN :: constructor and/or any method within CRNRSTN :: (such as
 *                $oCRNRSTN->get_error_log_trace()) which exposes log trace data by including just
 *                the silo key(s) of interest...or excluding via prefix of a '~' silo key(s) from
 *                perhaps more verbose sections of the application which effectively bloat the error
 *                log trace data and are cumbersome to dig through in order to find the relatively
 *                scant trace data currently under investigation.
 *
 * @var integer
 */
$CRNRSTN_log_silo_profile = CRNRSTN_LOG_ALL;

/**
 * $file_mod_config_reset
 *
 * WHERE,
 *     public function __construct(
 *                                  $config_filepath,
 *                                  $CRNRSTN_config_salt,
 *                                  $CRNRSTN_debug_mode = 0,
 *                                  $PHPMAILER_debug_mode = 0,
 *                                  $CRNRSTN_log_silo_profile = CRNRSTN_LOG_ALL,
 *                                  $file_mod_config_reset = true
 *                                )
 *
 * SEE $file_mod_config_reset (true by default) in $oCRNRSTN->__construct() to affect $_SESSION[]-TO-
 * FILE configuration binding. When set to true, if this config file changes or is modified during an
 * active session, CRNRSTN :: will perform a complete session rebuild at the next request. This "new"
 * request will effectively by-pass all application acceleration cache, and it will also result in a
 * full re-articulation of CRNRSTN :: environmental detection and then a re-acquisition of all
 * resource definitions and configurations.
 *
 * $file_mod_config_reset = true (and if the config file should change), will result in a minor
 * "1st page load session init" spike to server processing overhead within a sufficiently highly
 * trafficked environment as the active sessions are rebuilt at next client request. This request
 * will probably be a browser generated AJAX request with an XHR XML document response supporting the
 * CRNRSTN :: PSSDTLA OR CRNRSTN :: SSDTLA.
 *
 * @var boolean
 *
 */

//
// INSTANTIATE AN INSTANCE OF THE CRNRSTN :: CLASS OBJECT.
$oCRNRSTN = new crnrstn(__FILE__, $CRNRSTN_config_salt, $CRNRSTN_debug_mode, $PHPMAILER_debug_mode, $CRNRSTN_log_silo_profile);

/*
REFERENCE OF ERROR LEVEL CONSTANTS
https://www.php.net/manual/en/errorfunc.constants.php

The constants below are always available as part of the PHP core.
1	    E_ERROR (int)	            Fatal run-time errors. These indicate errors that
                                    can not be recovered from, such as a memory
                                    allocation problem. Execution of the script
                                    is halted.
2	    E_WARNING (int)	            Run-time warnings (non-fatal errors). Execution
                                    of the script is not halted.
4	    E_PARSE (int)	            Compile-time parse errors. Parse errors should
                                    only be generated by the parser.
8	    E_NOTICE (int)	            Run-time notices. Indicate that the script
                                    encountered something that could indicate an error,
                                    but could also happen in the normal course of
                                    running a script.
16	    E_CORE_ERROR (int)	        Fatal errors that occur during PHP's initial
                                    startup. This is like an E_ERROR, except it is
                                    generated by the core of PHP.
32	    E_CORE_WARNING (int)	    Warnings (non-fatal errors) that occur during PHP's
                                    initial startup. This is like an E_WARNING, except
                                    it is generated by the core of PHP.
64	    E_COMPILE_ERROR (int)	    Fatal compile-time errors. This is like an E_ERROR,
                                    except it is generated by the Zend Scripting Engine.
128	    E_COMPILE_WARNING (int)	    Compile-time warnings (non-fatal errors). This is
                                    like an E_WARNING, except it is generated by the
                                    Zend Scripting Engine.
256	    E_USER_ERROR (int)	        User-generated error message. This is like an E_ERROR,
                                    except it is generated in PHP code by using the PHP
                                    function trigger_error().
512	    E_USER_WARNING (int)	    User-generated warning message. This is like an
                                    E_WARNING, except it is generated in PHP code by using
                                    the PHP function trigger_error().
1024	E_USER_NOTICE (int)	        User-generated notice message. This is like an E_NOTICE,
                                    except it is generated in PHP code by using the PHP
                                    function trigger_error().
2048	E_STRICT (int)	            Enable to have PHP suggest changes to your code which
                                    will ensure the best interoperability and forward
                                    compatibility of your code.
4096	E_RECOVERABLE_ERROR (int)	Catchable fatal error. It indicates that a probably
                                    dangerous error occurred, but did not leave the Engine
                                    in an unstable state. If the error is not caught by a
                                    user defined handle (see also set_error_handler()), the
                                    application aborts as it was an E_ERROR.
8192	E_DEPRECATED (int)	        Run-time notices. Enable this to receive warnings about
                                    code that will not work in future versions.
16384	E_USER_DEPRECATED (int)	    User-generated warning message. This is like an
                                    E_DEPRECATED, except it is generated in PHP code by
                                    using the PHP function trigger_error().
32767	E_ALL (int)	                All errors, warnings, and notices.

Common Values for error reporting:
  	E_ALL (Show all errors, warnings and notices including coding standards.)
  	E_ALL & ~E_NOTICE (Show all errors, except for notices)
  	E_ALL & ~E_NOTICE & ~E_STRICT (Show all errors, except for notices and coding standards warnings.)
  	E_COMPILE_ERROR|E_RECOVERABLE_ERROR|E_ERROR|E_CORE_ERROR (Show only errors)

Default Value: E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED
Development Value: E_ALL
Production Value: E_ALL & ~E_DEPRECATED & ~E_STRICT

*/

/**
 * $oCRNRSTN->config_add_environment()
 * DESCRIPTION :: Define a server environment to CRNRSTN :: by providing a custom key. This value  will be used
 *  			  throughout the CRNRSTN :: configuration file to support environmental detection and resource configuration.
 *
 * @param   string $env_key is a custom user-defined value representing a specific environment within
 *                 which this application will be running (such as 'localhost_PC' or 'PREPROD-02-AKAMAI')
 *                 and which key will be used throughout this configuration process.
 *
 * @param   integer $debug_mode_override
 *                  DESCRIPTION :: The master debug mode control variable for CRNRSTN ::
 *                  OPTIONS ::
 *                      CRNRSTN_DEBUG_OFF                                       [0]
 *                      CRNRSTN_DEBUG_NATIVE_ERR_LOG                            [1]
 *                      CRNRSTN_DEBUG_AGGREGATION_ON                            [2]
 *
 * @param   integer error level constant integer(s) profiles $errorReporting will allow for configuration
 *                  of the error reporting profile for the specified application development/hosting environment.
 *
 * @param   integer $system_html_comments_mode manages the content format of HTML and TEXT
 *                  comments in CRNRSTN :: system output. The system predefined integer constant options for
 *                  this will include:
 *                      CRNRSTN_HTML_COMMENTS_NONE                              (no comments)
 *                      CRNRSTN_HTML_COMMENTS_SILENT_GOLD                       (alias of CRNRSTN_HTML_COMMENTS_NONE)
 *                      CRNRSTN_HTML_COMMENTS_CDN_STABILITY_CONTROL_ENABLED     (no timestamps in comments)
 *                      CRNRSTN_HTML_COMMENTS_ENLARGED_PHYLACTERIES             (alias of CRNRSTN_HTML_COMMENTS_FULL)
 *                      CRNRSTN_HTML_COMMENTS_FULL                              (this is the default)
 *
 *                  Thursday September 7, 2023 @ 0643 hrs.
 *
 * EXAMPLE ::
 *              $oCRNRSTN->config_add_environment('LOCALHOST_PC', E_ALL);                   // TOSHIBA M100 [eVifweb, HARDWARE (XAMPP/XP PRO, SP2) CIRCA 2005] :: RADIOHEAD LAPTOP.
 *              NOTE: E_ALL will bubble up all errors, warnings, and notices (including coding standards) from the
 *                    server environment...which said output can then be handled in accordance with the error handling
 *                    profile as is configured in CRNRSTN :: for the running environment.
 *
 *              $system_html_comments_mode HAS BEEN IMPLEMENTED, BUT IT IS NOT YET TESTED. Thursday September 7, 2023 @ 0736 hrs.
 *              TODO :: REMOVE THIS TODO WHEN ALL OF THE ABOVE $system_html_comments_mode OPTIONS ARE TESTED.
 *
 * @return boolean
 *
 */

//
// CRNRSTN :: SERVER ENVIRONMENT KEY AND
// ERROR PROFILE INITIALIZATION.
$oCRNRSTN->config_add_environment('BLUEHOST_JONY5', E_ALL & ~E_NOTICE & ~E_STRICT, CRNRSTN_DEBUG_OFF);
$oCRNRSTN->config_add_environment('BLUEHOST_EVIFWEB', E_ALL & ~E_NOTICE & ~E_STRICT, CRNRSTN_DEBUG_OFF, CRNRSTN_HTML_COMMENTS_NONE);
$oCRNRSTN->config_add_environment('LOCALHOST_CHAD_MACBOOKPRO', E_ALL, CRNRSTN_DEBUG_OFF);
$oCRNRSTN->config_add_environment('LOCALHOST_PC', E_ALL);

//
// INITIALIZE CRNRSTN :: SERVER ADMINISTRATION AND
// APPLICATION SUPPORT ACCOUNT AUTHENTICATION EMAIL.
$oCRNRSTN->config_admin_email(CRNRSTN_RESOURCE_ALL, 'Jonathan Harris j00000101@gmail.com, Jonathan J5 Harris j5@jony5.com, jharris@eVifweb.com');

/**
 * $oCRNRSTN->config_init_http()
 * DESCRIPTION :: Configure public IP image HTTP URI directory endpoint(s) for
 *  CRNRSTN :: system notifications.
 *
 * @param   string $env_key is a custom user-defined value representing a specific environment within
 * which this application will be running (such as 'localhost_PC' or 'PREPROD-02-AKAMAI') and which key
 * will be used throughout this configuration process.
 *
 * @param   string $crnrstn_http_endpoint the entire http/s access url terminating on /_crnrstn/.
 *
 * @param   string $crnrstn_dir_path the entire file access directory path terminating on /_crnrstn.

 */
$oCRNRSTN->config_init_http('BLUEHOST_JONY5', 'https://lightsaber.crnrstn.jony5.com/', CRNRSTN_ROOT, '_crnrstn');
$oCRNRSTN->config_init_http('BLUEHOST_EVIFWEB', 'https://lightsaber.crnrstn.evifweb.com/', CRNRSTN_ROOT, '_crnrstn');
$oCRNRSTN->config_init_http('LOCALHOST_CHAD_MACBOOKPRO', 'http://172.16.225.139/evifweb.com/', CRNRSTN_ROOT, '_crnrstn');
$oCRNRSTN->config_init_http('LOCALHOST_PC', 'http://172.16.225.138/evifweb.com/', CRNRSTN_ROOT, '_crnrstn');

/*
//
// JAVASCRIPT FRAMEWORK MINIMIZATION MODE.
Before deploying your website to production, be mindful that unminified
JavaScript can significantly slow down the page for your users.

Calling this method [config_init_js_css_minimization()] will invoke the
use of xxx.min.js where available. This setting can be bound to an admin
or dev's sign-in session, and the javascript that is development will be
returned to this authenticated user, alone.

*/
//
// $production_min_js = true, WILL ENABLE THE RETURN OF min.js AND min.css WHERE AVAILABLE.
// $production_min_js = false, RETURNS THE DEVELOPMENT (JS, CSS, MAP) VERSIONS.
$oCRNRSTN->config_init_js_css_minimization('BLUEHOST_JONY5');
$oCRNRSTN->config_init_js_css_minimization('BLUEHOST_EVIFWEB', false);
$oCRNRSTN->config_init_js_css_minimization('LOCALHOST_CHAD_MACBOOKPRO', false);
$oCRNRSTN->config_init_js_css_minimization('LOCALHOST_PC', false);

//
// CRNRSTN :: SYSTEM ASSET MAPPING.
$oCRNRSTN->config_init_asset_map_favicon(CRNRSTN_RESOURCE_ALL, true, CRNRSTN_ROOT . '/_crnrstn/ui/imgs/favicon');
$oCRNRSTN->config_init_asset_map_css(CRNRSTN_RESOURCE_ALL, true, CRNRSTN_ROOT . '/_crnrstn/ui/css');
$oCRNRSTN->config_init_asset_map_js(CRNRSTN_RESOURCE_ALL, true, CRNRSTN_ROOT . '/_crnrstn/ui/js');
$oCRNRSTN->config_init_asset_map_system_img(CRNRSTN_RESOURCE_ALL, true, CRNRSTN_ROOT . '/_crnrstn/ui/imgs');
$oCRNRSTN->config_init_asset_map_social_img(CRNRSTN_RESOURCE_ALL, true, CRNRSTN_ROOT . '/_crnrstn/ui/imgs');
$oCRNRSTN->config_init_asset_map_meta_img(CRNRSTN_RESOURCE_ALL, true, CRNRSTN_ROOT . '/_crnrstn/ui/imgs');

/*
//
// THE CRNRSTN :: RESOURCE AUTHORIZATION PROFILE SETS A DEFAULT
// DATA HANDLING BEHAVIOR FOR DATA THAT IS RECEIVED INTO THE SYSTEM
// THROUGH THE USE OF CERTAIN METHODS. THIS HAS EFFECT,...I.E.,
// WITH THE FOLLOWING METHODS:
//      - $oCRNRSTN->config_add_resource(),
//      - $oCRNRSTN->add_resource(),
//      - $oCRNRSTN->get_resource_count(),
//      - $oCRNRSTN->isset_resource(), AND
//      - $oCRNRSTN->get_resource().
//
// FOR AFFECTING DATA HANDLING POLICES OF THE CRNRSTN :: MULTI-
// CHANNEL DECOUPLED DATA OBJECT (MC-DDO) SERVICES LAYER, HERE
// ARE THE CRNRSTN :: RESOURCE AUTHORIZATION PROFILE
// INTEGER CONSTANTS.
// -----
// CRNRSTN_AUTHORIZE_ALL
// CRNRSTN_AUTHORIZE_GET
// CRNRSTN_AUTHORIZE_POST
// CRNRSTN_AUTHORIZE_COOKIE
// CRNRSTN_AUTHORIZE_SESSION
// CRNRSTN_AUTHORIZE_DATABASE
// CRNRSTN_AUTHORIZE_SSDTLA
// CRNRSTN_AUTHORIZE_PSSDTLA
// CRNRSTN_AUTHORIZE_RUNTIME
// CRNRSTN_AUTHORIZE_SOAP
// CRNRSTN_AUTHORIZE_FILE
//
// FOR CRNRSTN :: CHANNEL CONFIGURATIONS,
// PLEASE SEE, E.G., $oCRNRSTN->get_channel_config(CRNRSTN_AUTHORIZE_SOAP);

*/
$oCRNRSTN->config_data_authorization_profile(CRNRSTN_RESOURCE_ALL, CRNRSTN_AUTHORIZE_RUNTIME);

//
// CRNRSTN :: SERVER ENVIRONMENT DETECTION.
$oCRNRSTN->config_detect_environment('BLUEHOST_JONY5', 'SERVER_NAME', 'lightsaber.crnrstn.jony5.com');
$oCRNRSTN->config_detect_environment('BLUEHOST_EVIFWEB', 'SERVER_NAME', 'lightsaber.crnrstn.evifweb.com');
$oCRNRSTN->config_detect_environment('LOCALHOST_CHAD_MACBOOKPRO', 'SERVER_NAME', '172.16.225.139', 1);

//
// CRNRSTN :: SERVER ENVIRONMENT DETECTION DEMONSTRATION OF CASE REQUIRING
// MORE THAN ONE (1) $_SERVER[] MATCH TO POSITIVELY DETECT THE RUNNING ENVIRONMENT.
$oCRNRSTN->config_detect_environment('LOCALHOST_PC', 'SERVER_NAME', 'localhost', 4);                    // TOSHIBA M100 [eVifweb, HARDWARE (XAMPP/XP PRO, SP2) CIRCA 2005] :: RADIOHEAD LAPTOP.
$oCRNRSTN->config_detect_environment('LOCALHOST_PC', 'SERVER_ADDR', '127.0.0.1', 4);
$oCRNRSTN->config_detect_environment('LOCALHOST_PC', 'SERVER_PORT', '80', 4);
$oCRNRSTN->config_detect_environment('LOCALHOST_PC', 'SERVER_PROTOCOL', 'HTTP/1.1', 4);

//
// INITIALIZE SETTINGS FOR EACH ENVIRONMENT.
// CRNRSTN :: PLAID FIRES HERE.
error_log(__LINE__ . ' config BY-PASSING STARTING config_load_system_settings() [rtime ' . $oCRNRSTN->wall_time() . ' secs].');
$oCRNRSTN->config_load_system_settings(CRNRSTN_RESOURCE_ALL, CRNRSTN_ROOT . '/_crnrstn/_config/_config.defaults/_crnrstn.system_settings.inc.php');

//
// MEMORY USE MANAGEMENT.
// CRNRSTN :: MULTI-CHANNEL DECOUPLED DATA OBJECT (MC-DDO) SERVICES
// LAYER INITIALIZATION STACK FOR APPLICATION ACCELERATION AND THE
// ESTABLISHMENT OF DATA HANDLING PROFILE PERFORMANCE BOUNDARIES.
//
// NEED CRNRSTN :: MC-DDO INFO?
// PLEASE SEE, E.G., $oCRNRSTN->get_channel_config(CRNRSTN_CHANNEL_SOAP);
//
// NEED CRNRSTN :: MC-DDO PERFORMANCE REPORTING?
//      PLEASE SEE, $oCRNRSTN->channel_report($channel_constant, $report_id);                                            // WHERE, $channel_constant = CRNRSTN_CHANNEL_SOAP AND $report_id = (int) 0, 1, 2, 3, 4, OR 5;
//      PLEASE SEE, $oCRNRSTN->channel_report($channel_constant_ARRAY, $report_id_ARRAY);                                // WHERE, $channel_constant_ARRAY = array(CRNRSTN_CHANNEL_GET, CRNRSTN_CHANNEL_POST, CRNRSTN_CHANNEL_SOAP) AND $report_id = array(0, 1, 2, 5)
//      TRY, $oCRNRSTN->lightweight_page_return($oCRNRSTN->channel_report($channel_ARRAY, $report_id_ARRAY));
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_GET, '2 MB', -1);      // INCLUDES CRNRSTN :: PLAID $_GET[] DATA FOR REPORTING.
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_POST, $oCRNRSTN->file_upload_max_size(false), -1);
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_COOKIE, '2 MB', 300);
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_SESSION, '2 MB', 12);  // CRNRSTN :: PLAID ACTIVE CHANNEL.
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_DATABASE, -1, -1);
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_SSDTLA, -1, 60);
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_PSSDTLA, -1, 60);
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_RUNTIME, -1, -1);      // CRNRSTN :: PLAID ACTIVE CHANNEL.
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_SOAP, 65535, -1);      // 65,535 IS THE LARGEST NUMBER THAT CAN BE HELD IN A 16 BIT UNSIGNED INTEGER.
$oCRNRSTN->config_init_channel(CRNRSTN_RESOURCE_ALL, CRNRSTN_CHANNEL_FILE, -1, -1);

error_log(__LINE__ . ' config STARTING config_channel_data_translate() [rtime ' . $oCRNRSTN->wall_time() . ' secs].');

//
// CRNRSTN :: MULTI-CHANNEL DECOUPLED DATA
// OBJECT (MC-DDO) SERVICES LAYER INITIALIZATION.
// # # C # R # N # R # S # T # N # : : # # # #
// CRNRSTN :: MC-DDO TRANSLATION SERVICES LAYER
$oCRNRSTN->config_channel_data_translate();
die();

/**
 * $oCRNRSTN->config_init_sys_resp_return_profile($env_key = CRNRSTN_RESOURCE_ALL, $system_asset_mode = CRNRSTN_ASSET_MODE_BASE64)
 * DESCRIPTION :: Configure the HTML email image handling profile for CRNRSTN :: system notifications.
 * OPTIONS ::
 *    CRNRSTN_ASSET_MODE_PNG:      All CRNRSTN :: system images load the PNG versions of the file.
 *    CRNRSTN_ASSET_MODE_JPEG:     All CRNRSTN :: system images load the JPG version of the file.
 *    CRNRSTN_ASSET_MODE_BASE64:   All CRNRSTN :: system images and all CRNRSTN :: integrated 3rd
 *                                 party JS Frameworks and CSS Frameworks load as embedded BASE64,
 *                                 SCRIPT, and STYLE tags...respectively...within the HTML. This
 *                                 makes mobile and tablet FAAAASST!
 *
 * NOTE: Please note that any one-off system image method call within the application can
 * override these global configuration asset mode settings for BASE64, PNG, JPEG, or GIF
 * resource return executions within the application.
 *
 */
//$oCRNRSTN->config_init_sys_resp_return_profile(CRNRSTN_RESOURCE_ALL, CRNRSTN_ASSET_MODE_BASE64, CRNRSTN_AUTHORIZE_RUNTIME & CRNRSTN_AUTHORIZE_SESSION);
//$oCRNRSTN->config_init_sys_resp_return_profile(CRNRSTN_RESOURCE_ALL, CRNRSTN_ASSET_MODE_JPEG, CRNRSTN_AUTHORIZE_RUNTIME & CRNRSTN_AUTHORIZE_SESSION);
$oCRNRSTN->config_init_sys_resp_return_profile(CRNRSTN_RESOURCE_ALL, CRNRSTN_ASSET_MODE_PNG, CRNRSTN_AUTHORIZE_RUNTIME & CRNRSTN_AUTHORIZE_SESSION);

//
// CRNRSTN :: SYSTEM INTEGRATIONS.
// PROVIDE SETTING OVERRIDES FOR CRNRSTN :: DISK VOLUME MANAGEMENT
// IN ORDER TO AFFECT PERFORMANCE OF LOCAL STORAGE FILE WRITE FOR CRNRSTN ::
//
// PHP FILES CONTAINING BASE64 SYSTEM META, BASE64 ENCODED VERSIONS OF WEBSITE INTEGRATION FILES,
// AND BASIC APPLICATION CACHE FILES THAT ARE SEAMLESSLY MANAGED BY CRNRSTN :: ARE SOME
// RESOURCES THAT WOULD BE AFFECTED.
//
// Saturday, December 2, 2023 @ 2333 hrs.
// config_init_file_system_integrations(CRNRSTN_RESOURCE_ALL, $disk_write_authorization = true, $disk_percent_full_warning_override = 70, $disk_percent_full_max_override = 80);
$oCRNRSTN->config_init_file_system_integrations(CRNRSTN_RESOURCE_ALL, true);

//
// TODO :: SYNC SYSTEM FOOTER TO TIMEZONE CHANGES.
// TODO :: SYNC $_SESSION TO CRNRSTN :: INTERACT UI REPORTED TIMEZONE [UTC DELTA].
// TODO :: RUN CLIENT TIME UI FROM $_SESSION WITH HASH KEY CONTENT CONTROLS.
// TODO :: TOGGLE ITALICS CRNRSTN :: INTERACT UI SYSTEM FOOTER FONT TRACKING STATUS OF THIS $_SESSION DRIVEN UI.
// ...SO MY BEST GUESS IS THAT WHEN THIS (ABOVE) IS SETUP...THE SYSTEM FOOTER WILL LOAD
// WITH SERVER TIME IN ITALICS FONT. THEN THE TIME WILL SHIFT TO CLIENT LOCAL TIME
// AND SANS ITALICS...EVEN IF SERVER TIMEZONE AND BROWSER TIMEZONE ARE THE SAME.
// WHAT HAPPENS IF SERVER TIMEZONE IS UPDATED (BELOW CODE) WITH NO BROWSER REFRESH?
// I THINK A REPEAT OF THE ABOVE. (1) CRNRSTN :: INTERACT UI (I.E., oCRNRSTN_JS) WILL
// BLIP THE CLIENT UI TO THE SERVER TZ IN ITALICS THEN (2) SHIFT BACK TO BROWSER LOCAL
// TZ SANS <EM>...EVEN IF SERVER TIMEZONE AND BROWSER TIMEZONE ARE THE SAME. (3) TO LOCK
// THE UI TO $_SESSION LIKE A CHAD, JUST SEND THE DOM CONTENT BACK.
//
// SO ANY JANK (DOM DEV-TOOL "FORCE-INJECTED") CONTENT...AND EVEN OF THE MOST ASTUTE HACKER
// WOULD TURN ITALICS...BEFORE THEIR VERY VIRGIN EYES. THEN EVERYTING WOULD REVERT BACK TO
// CRNRSTN :: SERVER $_SESSION TIME...SANS ITALICS.
//
// WE COULD ALSO REVERT THE HACKED HTML CONTENT STRAIGHT BACK TO THE PROPER TIMEZONE LOCALE
// BROWSER TIME...AND NOT SAY ANYTHING TO SUCKER JIVE TURKEY.
$oCRNRSTN->config_set_timezone_default(CRNRSTN_RESOURCE_ALL, 'America/New_York');
//$oCRNRSTN->config_set_timezone_default(CRNRSTN_RESOURCE_ALL, 'America/Chicago');
//$oCRNRSTN->config_set_timezone_default(CRNRSTN_RESOURCE_ALL, 'America/Denver');

$oCRNRSTN->config_ini_set(CRNRSTN_RESOURCE_ALL, 'allow_url_include', true);
$oCRNRSTN->config_ini_set(CRNRSTN_RESOURCE_ALL, 'max_execution_time', 32);
//$oCRNRSTN->config_ini_set(CRNRSTN_RESOURCE_ALL, 'memory_limit', -1);
//$oCRNRSTN->config_ini_set(CRNRSTN_RESOURCE_ALL, 'memory_limit', '300M');

/**
 * $oCRNRSTN->config_custom_error_handler()
 * DESCRIPTION :: Customize the error handling profile for CRNRSTN :: to absorb between 0% and 100% of
 *  all PHP error/throws from E_ERROR to E_USER_DEPRECATED and everything in between. This profile will
 *  overwrite (on a per environment basis) whatever was established through the call of
 *  $oCRNRSTN->init_CRNRSTN_errHandle_embryonic(), where the error handling during the initialization or embryonic
 *  stage of CRNRSTN :: would have been configured.
 *
 * @param   string $env_key is a custom user-defined value representing a specific environment within
 * which this application will be running (such as 'localhost_PC' or 'PREPROD-02-AKAMAI') and which key
 * will be used throughout this configuration process.
 *
 * @param   boolean $isActive where value of TRUE (or NULL) will give CRNRSTN :: and the current configuration of
 * its error log trace handling jurisdiction over all levels of error, from E_ERROR to E_USER_DEPRECATED. This
 * effectively makes everything an exception. Passing value of false indicates that CRNRSTN :: is to only handle
 * properly thrown exceptions. In this case, all error levels will be handled by PHP natively.
 *
 * @param   int $err_reporting_profile error level constant integer(s) profile data will allow for configuration
 * of the error level constants that should (or should not) be handled by native PHP...and, therefore
 * will define...with specificity...the jurisdiction of CRNRSTN :: with respect to throw/error handling.
 * Fine tune what CRNRSTN :: error log trace and exception handling will process by providing the desired profile
 * of error level integer constants as this parameter. Feel free to use bit flips, and not (&amp; ~), etc.
 *
 * @return	boolean TRUE
 *
 * Example ::
 * $oCRNRSTN->config_custom_error_handler('LOCALHOST_PC', true, ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED);
 * The above gives E_NOTICE, E_STRICT, AND E_DEPRECATED throws to native PHP for handling. All else
 * will go through CRNRSTN :: and can be sent as CRNRSTN :: system EMAIL notification if desired.
 */
$oCRNRSTN->config_custom_error_handler('BLUEHOST_JONY5');
$oCRNRSTN->config_custom_error_handler('BLUEHOST_EVIFWEB');
$oCRNRSTN->config_custom_error_handler('LOCALHOST_CHAD_MACBOOKPRO', false);
$oCRNRSTN->config_custom_error_handler('LOCALHOST_PC');

//
// FLAGS FOR USER INTERFACE THEME STYLES.
// -----
// CRNRSTN_UI_PHPNIGHT              // REPLICATION OF LEAD DEVELOPER IDE THEME. HOW CRNRSTN :: LIGHTSABER LOOKS TO ME.
// CRNRSTN_UI_DARKNIGHT             // LIKE CRNRSTN_UI_PHPNIGHT, BUT DARKER. NOTHING COULD BE DARKER. NOTHING.
// CRNRSTN_UI_PHP                   // ALL ABOUT THE BUSINESS.
// CRNRSTN_UI_GREYSKY               // ALONE AND SAD WITH A NICE CUP OF COFFEE, A RACK MOUNTED DUAL-VIDEO CARD MAC PRO, AND FOUR (4) APPLE PRO DISPLAYS.
// CRNRSTN_UI_HTML                  // BE LIGHT AND HAPPY.
// CRNRSTN_UI_DAYLIGHT              // LIKE CRNRSTN_UI_HTML BUT...LIGHTER. NOTHING COULD BE LIGHTER.
// CRNRSTN_UI_FEATHER               // LIGHTER THAN DAYLIGHT.
// CRNRSTN_UI_GLASS_LIGHT_COPY      // UI EXPERIMENTAL
// CRNRSTN_UI_GLASS_DARK_COPY       // UI EXPERIMENTAL
// CRNRSTN_UI_WOOD                  // GOT WOOD?
// CRNRSTN_UI_TERMINAL              // GREEN TEXT. BLACK BACKGROUND. HARDCORE.
// CRNRSTN_UI_RANDOM
//
// CALL THIS BEFORE LOADING SYSTEM DEFAULTS [config_load_defaults()] SO THAT THE SELECTED
// THEME CAN BE SENT TO THE CLIENT FOR CLIENT UI/UX CONFIGURATION.
$oCRNRSTN->config_set_ui_theme_style(CRNRSTN_RESOURCE_ALL, CRNRSTN_UI_DARKNIGHT, CRNRSTN_ROOT . '/_crnrstn/_config/_config.defaults/_crnrstn.themes.inc.php');

/*
CRNRSTN_ASSET_MAPPING
CRNRSTN_ASSET_MAPPING_PROXY

*/
//$oCRNRSTN->config_init_asset_tunnel_mode(CRNRSTN_RESOURCE_ALL, CRNRSTN_ASSET_MAPPING_PROXY, 'http://172.16.225.139/lightsaber.crnrstn.evifweb.com/');

error_log(__LINE__ . ' config STARTING config_load_system_overrides() [rtime ' . $this->wall_time() . ' secs].');

//
// INITIALIZE DEFAULTS FOR EACH ENVIRONMENT.
// CRNRSTN :: PLAID FIRES HERE.
$oCRNRSTN->config_load_system_overrides($env_key, CRNRSTN_ROOT . '/_crnrstn/_config/_config.defaults/_crnrstn.load.inc.php');

//
// INITIALIZE LOGGING FUNCTIONALITY FOR EACH ENVIRONMENT
// TODO :: LOGGING IS 90% COMPLETE IN BEING REFACTORED;
// TODO :: THE NOTES BELOW ARE KINDA SHADY UNTIL WORK IS COMPLETE. Saturday, August 20, 2020 @ 0315 hrs
/**
 * $oCRNRSTN->config_init_logging()
 * DESCRIPTION :: Configure the server error logging notifications profile for each environment.
 *
 * @param   string $env_key is a custom user-defined value representing a specific environment within
 * which this application will be running (such as 'localhost_PC' or 'PREPROD-02-AKAMAI') and which key
 * will be used throughout this configuration process.
 *
 * @param   string $loggingProfilePipe contains a pipe delimited string of the logging profiles
 * that should be applied to meet the system logging requirements for each environment.
 * OPTIONS ::
 * * CRNRSTN_LOG_EMAIL = Send error logging through email at running server. This requires a WCR for SMTP,
 *   QMAIL, PHPMAILER, OR SENDMAIL within the running environment.
 * * CRNRSTN_LOG_EMAIL_PROXY = Send error logging through SOAP request to a proxy server endpoint (WSDL) for
 *   email send at the proxy. This requires a WCR for SOAP integration here, and a WCR for SMTP,
 *   QMAIL, PHPMAILER, or SENDMAIL at the PROXY.
 * * CRNRSTN_LOG_FILE = Send error logging to custom file at path provided.
 * * CRNRSTN_LOG_SCREEN_TEXT = Return error logging to screen (e.g. echo...) using basic character
 *   return sequence (i.e \n).
 * * CRNRSTN_LOG_SCREEN or CRNRSTN_LOG_SCREEN_HTML = Send error logging output to screen (e.g. echo...) with support
 *   for HTML DOM rendering of line breaks (e.g. <br>).
 * * CRNRSTN_LOG_SCREEN_HTML_HIDDEN = Send error logging output to screen (e.g. echo...) with support for
 *   HTML DOM rendering of hidden browser content (e.g. <!-- hidden log data here -->).
 * * CRNRSTN_LOG_DEFAULT = Send error logging output through native PHP error_log() method for default
 *   system handling.
 * * CRNRSTN_LOG_FILE_FTP = IN DEVELOPMENT
 * * CRNRSTN_LOG_ELECTRUM = IN DEVELOPMENT
 *
 * @param   string $loggingEndpointPipe reflects the piped values passed into $loggingProfilePipe wherein which
 * keys such as EMAIL, EMAIL_PROXY and FILE that have additional data dependencies that need to be met can
 * be satisfied. There needs to be the same number of pipes...even for NULL data...for all three (3) piped
 * string params, $loggingProfilePipe, $loggingEndpointPipe and $wcrProfilePipe.
 * OPTIONS ::
 * If $loggingProfilePipe = 'EMAIL|DEFAULT|FILE', to send error log trace data to email, PHP's native
 * error_log(), and a custom output file...simultaneously, then the following could be possible:
 * $loggingEndpointPipe = 'Optional-FName1 Optional-LName1 email_01@email.com, Optional-FName2 Optional-LName2 email_02@email.com||/var/log/_dev_debug_output/custom_error.log'
 *
 * @param   string $wcrProfilePipe contains a pipe delimited string of Wild Card Resource (WCR) keys applicable
 * and also parallel to the specified $loggingProfilePipe pipe values.
 * OPTIONS ::
 * If $loggingProfilePipe = 'EMAIL|DEFAULT|FILE', to send error log trace data to email, PHP's native
 * error_log(), and a custom output file...simultaneously, then the following could be possible:
 * $wcrProfilePipe = 'CRNRSTN::INTEGRATIONS||', where the file loaded by add_wildcards()
 * contains a valid SMTP WCR object (keyed as CRNRSTN::INTEGRATIONS ) for the running environment
 * which will be applied by CRNRSTN :: to enable system notifications.
 *
 * NOTE :: If EMAIL_PROXY is used (e.g. n+1 slave servers configured with EMAIL_PROXY and one (1) master
 * server configured with EMAIL and valid SMTP creds (or QMAIL, PHPMAILER, or SENDMAIL), the EMAIL_PROXY WCR
 * would possess SOAP meta data required by the CRNRSTN :: SOAP Services Layer at each slave, and the master
 * server used to proxy the email would be configured with the EMAIL profile and a WCR with SMTP (or QMAIL, PHPMAILER,
 * or SENDMAIL) meta data/credentials.
 *
 * Example ::
 * $oCRNRSTN->config_init_logging('BLUEHOST', CRNRSTN_LOG_SCREEN & CRNRSTN_LOG_DEFAULT & CRNRSTN_LOG_FILE_FTP & CRNRSTN_LOG_SCREEN,'email01@email.com,email02@email.com||/var/log/_dev_debug_output/custom_error.log|','CRNRSTN::INTEGRATIONS|||');
 */
//
// CRNRSTN :: SOAP SERVICES LOGGING SERVICES LAYER.
// INTEGER CONSTANTS TO AFFECT SYSTEM LOGGING OUTPUT PROFILE.
// -----
// CRNRSTN_LOG_SCREEN
// CRNRSTN_LOG_SCREEN_HTML
// CRNRSTN_LOG_SCREEN_TEXT
// CRNRSTN_LOG_SCREEN_HTML_HIDDEN
// CRNRSTN_LOG_EMAIL
// CRNRSTN_LOG_EMAIL_PROXY
// CRNRSTN_LOG_FILE
// CRNRSTN_CHANNEL_FILE
// CRNRSTN_LOG_FILE_FTP
// CRNRSTN_LOG_DEFAULT
// CRNRSTN_CHANNEL_DATABASE
// CRNRSTN_CHANNEL_SSDTLA
// CRNRSTN_CHANNEL_PSSDTLA
// CRNRSTN_CHANNEL_RUNTIME
// CRNRSTN_CHANNEL_SOAP
//
// Saturday, December 2, 2023 @ 2359 hrs.
$oCRNRSTN->config_init_logging('BLUEHOST_JONY5', CRNRSTN_LOG_DEFAULT,'CRNRSTN::INTEGRATIONS');
$oCRNRSTN->config_init_logging('BLUEHOST_EVIFWEB', CRNRSTN_LOG_DEFAULT,'CRNRSTN::INTEGRATIONS');
//$oCRNRSTN->config_init_logging('LOCALHOST_MACBOOKTERMINAL', CRNRSTN_LOG_EMAIL, 'j5@jony5.com, j00000101@gmail.com');  // SHOULD GRACEFULLY REQUIRE (OR BECOME) THE SYSTEM ADMIN EMAIL AUTHENTICATION LOOP TO BE CHECKED.
//$oCRNRSTN->config_init_logging('LOCALHOST_MACBOOKTERMINAL', CRNRSTN_LOG_EMAIL, 'CRNRSTN::INTEGRATIONS');
//$oCRNRSTN->config_init_logging('LOCALHOST_MACBOOKTERMINAL', CRNRSTN_LOG_FILE, 'CRNRSTN::INTEGRATIONS');
//$oCRNRSTN->config_init_logging('LOCALHOST_MACBOOKTERMINAL', CRNRSTN_LOG_SCREEN);
//$oCRNRSTN->config_init_logging('LOCALHOST_PC', CRNRSTN_LOG_SCREEN_HTML);
$oCRNRSTN->config_init_logging('LOCALHOST_PC', CRNRSTN_LOG_DEFAULT);
$oCRNRSTN->config_init_logging('LOCALHOST_CHAD_MACBOOKPRO', CRNRSTN_LOG_DEFAULT);

//$oCRNRSTN->config_init_logging('LOCALHOST_MACBOOKTERMINAL',CRNRSTN_LOG_SCREEN_TEXT);
//$oCRNRSTN->config_init_logging('LOCALHOST_MACBOOKTERMINAL',CRNRSTN_LOG_SCREEN_HTML_HIDDEN);
//$oCRNRSTN->config_init_logging('LOCALHOST_MACBOOKTERMINAL', CRNRSTN_LOG_FILE, CRNRSTN_ROOT . '/_backup_test/_tmp/');

//
// INITIALIZE SECURITY PROTOCOLS FOR EXCLUSIVE RESOURCE ACCESS. 2 FORMATS.
/**
 * $oCRNRSTN->config_ip_grant_exclusive_access()
 *
 * DESCRIPTION :: To grant exclusive access to an IP/range, the grant_exclusive_access() method will
 *  evaluate the comma delimited string of IP/ranges provided and will return TRUE if the client IP
 *  is to be granted access; FALSE will be returned if the client IP is outside the range of
 *  IP provided to config_ip_grant_exclusive_access(). A path to the IP settings file can also be provided.
 *
 * @param   string $env_key is a custom user-defined value representing a specific environment within
 * which this application will be running (such as 'localhost_PC' or 'PREPROD-02-AKAMAI') and which key
 * will be used throughout this configuration process.
 *
 * @param   string $ip_or_file serves a dual purpose of containing either a comma delimited set of IP
 * from which a set of IP ranges will be derived in order to evaluate the client IP for appropriateness
 * or a path to an IP address security include file called _crnrstn.ip_authorization_manager.grant_exclusive.config.inc.php
 * within the CRNRSTN :: distribution which will be used for the same.
 *
 * Example using the CRNRSTN :: include file within the original 1.0.0 documentation site called "crnrstn" ::
 * $oCRNRSTN->config_ip_grant_exclusive_access('LOCALHOST_PC', 'C://DATA_GOVT_SURVEILLANCE//_wwwroot//xampp//htdocs//crnrstn//_crnrstn//_config//config.ipauthmgr.secure//_crnrstn.ip_authorization_manager.grant_exclusive.config.inc.php');
 *
 * Example of in-line IP (for exclusive access to the application) specification ::
 * $oCRNRSTN->config_ip_grant_exclusive_access('LOCALHOST_MACBOOKTERMINAL','192.168.172.*,192.168.173.*,192.168.174.3, FE80::230:80FF:FEF3:4701');
 */
# FORMAT 1.
#$oCRNRSTN->config_ip_grant_exclusive_access('LOCALHOST_PC', 'C://DATA_GOVT_SURVEILLANCE//_wwwroot//xampp//htdocs//crnrstn//_crnrstn//_config//config.ipauthmgr.secure//_crnrstn.ip_authorization_manager.grant_exclusive.config.inc.php');
$oCRNRSTN->config_ip_grant_exclusive_access('LOCALHOST_CHAD_MACBOOKPRO', CRNRSTN_ROOT . '/_crnrstn/_config/config.ipauthmgr.secure/_crnrstn.ip_authorization_manager.grant_exclusive.config.inc.php');

# FORMAT 2.
#$oCRNRSTN->config_ip_grant_exclusive_access('CYEXX_SOLUTIONS', '192.168.172.*, 192.168.173.*, 192.168.174.3');

//
// INITIALIZE SECURITY PROTOCOLS FOR RESOURCE DENIAL. 2 FORMATS.
/**
 * $oCRNRSTN->config_ip_deny_access()
 *
 * DESCRIPTION :: To deny access to resources before potentially returning a result or
 *  processing data, the config_ip_deny_access() method will evaluate the comma delimited string of
 *  IP/ranges provided and will return TRUE if the client IP matches the provided $ip
 *  (FALSE if otherwise). One may then process the remainder of the
 *  use-case appropriately. A path to the IP settings file can also be provided.
 *
 * @param   string $env_key is a custom user-defined value representing a specific environment within
 * which this application will be running (such as 'localhost_PC' or 'PREPROD-02-AKAMAI') and which key
 * will be used throughout this configuration process.
 *
 * @param   string $ip_or_file serves a dual purpose of containing either a comma delimited set of IP
 * from which a set of IP ranges will be derived in order to evaluate the client IP for appropriateness
 * or a path to an IP address security include file called _crnrstn.ip_authorization_manager.deny_access.config.inc.php within
 * the CRNRSTN :: distribution which will be used for the same.
 *
 * Example using the CRNRSTN :: include file within the original 1.0.0 documentation site called "crnrstn" ::
 * $oCRNRSTN->denyAccess('LOCALHOST_PC', 'C://DATA_GOVT_SURVEILLANCE//_wwwroot//xampp//htdocs//crnrstn//_crnrstn//_config//config.ipauthmgr.secure//_crnrstn.ip_authorization_manager.deny_access.config.inc.php');
 *
 * Example of in-line IP (for exclusive access to the application) specification ::
 * $oCRNRSTN->denyAccess('LOCALHOST_CHAD_MACBOOKPRO','192.168.172.*,192.168.173.*,192.168.174.3, FE80::230:80FF:FEF3:4701');
 */
# FORMAT 1.
#$oCRNRSTN->config_ip_deny_access('LOCALHOST_PC', 'C://DATA_GOVT_SURVEILLANCE//_wwwroot//xampp//htdocs//jony5.com//_crnrstn//_config//config.ipauthmgr.secure//_crnrstn.ip_authorization_manager.deny_access.config.inc.php');
$oCRNRSTN->config_ip_deny_access('LOCALHOST_CHAD_MACBOOKPRO', CRNRSTN_ROOT . '/_crnrstn/_config/config.ipauthmgr.secure/_crnrstn.ip_authorization_manager.deny_access.config.inc.php');

# FORMAT 2.
#$oCRNRSTN->config_ip_deny_access('CYEXX_SOLUTIONS', '172.16.110.1');

//
// TODO :: MACHINE SOAP ACCOUNT AUTH IS ABOUT TO BE REFACTORED TO ELSEWHERE. Saturday, August 20, 2022 @ 0320 hrs
// INITIALIZE CRNRSTN :: SOAP SERVICES LAYER RESOURCE ACCESS
//$oCRNRSTN->config_add_soap(CRNRSTN_RESOURCE_ALL, CRNRSTN_ROOT . '/_crnrstn/_config/config.soap.secure/_crnrstn.soap.config.inc.php');

//
// WE ARE LISTENING FOR THE CRNRSTN :: SOAP SERVICES DATA TUNNEL
// LAYER (SSDTL) AND THE CRNRSTN :: PSEUDO-SOAP SERVICES DATA
// TUNNEL LAYER (PSSDTL) ARCHITECTURES ACROSS ALL CHANNELS
//
// "GPHSJCDROF"
//
// THE CRNRSTN :: SSDTL & PSSDTL ARCHITECTURES STAND UPON AN
// INTEGER CONSTANT (NUMBERS BASED) SWITCHING SYSTEM IN ORDER TO
// SEAMELESSLY FACILITATE BOTH ENCRYPTED AND UNENCRYPTED DATA
// TRANSFER BETWEEN oCRNRSTN_JS :: BROWSER AND oCRNRSTN :: SERVER
// FOR ALL SYSTEM CONTENT AND BASIC SYSTEM SETTINGS. THIS IS THE
// CRNRSTN :: GOVERNMENT CHEESE OF DATA TRANSPORTATION, BOYS.
//
// 5
//
// Tuesday, November 21, 2023 @ 0758 hrs.
//
// ALSO, WE ARE NOW OUTSIDE ANY WINDOW OF OPPORTUNITY FOR GOING TO
// CRNRSTN :: PLAID IN THE PUREST AND MOST TRADITIONAL SENSE...
// ...PLAID IS WHERE WE OBTAIN THOSE RIDICULOUSLY FAST JS, CSS, AND
// IMG HTTP/HTTPS $_GET[] RETURN TIMES!!
//
// ON UBUNTU 18.04 RUNNING PHP 7.0.22 AND MySQLi 5.0.12...,
// CRNRSTN :: PLAID EASILY HITS *RUNTIME = 0.0406889 SECONDS. AT
// THIS POINT, THE CRNRSTN :: MULTI-CHANNEL CHANNEL CALLED RUNTIME
// KNOWS EXACTLY (VIA MEMORY POINTER) WHAT ASSET IS BEING
// REQUESTED FOR RETURN.
//
// AND THAT'S NOT THE END OF IT; CRNRSTN :: WILL SEND ALL SYSTEM
// AND PHP.NET REDIRECTS TO PLAID FOR THE BEST DEVELOPER SUPPORT
// RESPONSE TIMES POSSIBLE.
//
// AND THAT'S NOT THE END OF IT; CRNRSTN :: ALSO HAS ALL RESOURCES
// IN MEMORY AT THIS TIME TO FULFILL THE REQUEST. ALL REMAINING
// TIME IS SPENT BUILDING CHEEKY RESPONSE HEADERS, FORMATTING
// OUTPUT, AND REPORTING ON THE PERFORMANCE OF ALL OF THE ABOVE.
//
// AND THAT'S NOT THE END OF IT; APPLY ALL OF THE ABOVE TO CUSTOM
// PATHS FOR RESOURCES ON THE SERVER SUCH AS A BACKUP (PLZ READ AS
// "NOT OPEN PORT 80 MATERIAL") DIRECTORY OF XLS, PDF, CSV, AND
// MPEG FILES OR FOLDERS ON THE SERVER THAT HOLD PICS FROM THE
// FAMILY REUNION USING, $oCRNRSTN->config_integrate_file_system();
// AND $oCRNRSTN->system_output_file_html(). CRNRSTN :: WILL SEND
// THESE LOCAL RESOURCES STRAIGHT TO CRNRSTN :: PLAID.
// PRO TIP: DUE TO THE REQUIREMENT FOR OPENSSL TUNNEL ENCRYPTION
// WHEN THE CRNRSTN :: PSSDTLA (THE GOV'T CHEESE ARCH) CARRIES A
// PAYLOAD OVER $_GET, CRNRSTN :: PLAID IS FASTER WHEN CRNRSTN ::
// IS GIVEN LOCAL DIR WRITE ACCESS WHICH WILL SUPPORT PROPER FILE
// SYSTEM INTEGRATIONS AND A COMPLETE FUNCTIONAL BYPASS ON
// THE SSDTLA.
//
// * NOTE: THERE HAS BEEN A SIGNIFICANT RE-ARCH, AND WE SHOULD PULL
//         A FRESH CRNRSTN :: PLAID RUN TIME ONCE THE $_GET[] RE-
//         ARCH IS COMPLETE.
//
error_log(__LINE__ . ' config STOPPED BEFORE LAST LISTEN [client_request_listen()] [rtime ' . $oCRNRSTN->wall_time() . '].');
die();

$CRNRSTN_LISTENER_RESPONSE = $oCRNRSTN->client_request_listen();
if(strlen($CRNRSTN_LISTENER_RESPONSE) > 0){

    //sleep(2);
    //error_log(__LINE__ . ' config $CRNRSTN_LISTENER_RESPONSE[' . $CRNRSTN_LISTENER_RESPONSE . '].');

    //
    // https://www.youtube.com/watch?v=YvzWRzTh7jg
    // TITLE :: The Space Between
    echo $CRNRSTN_LISTENER_RESPONSE;

    if(ob_get_level() > 0){ob_flush();}
    flush();
    exit();

}

# # # # #
# # # # #
# # # # #
# # # # #
# # # # # 	END OF CRNRSTN :: CONFIGURATION.