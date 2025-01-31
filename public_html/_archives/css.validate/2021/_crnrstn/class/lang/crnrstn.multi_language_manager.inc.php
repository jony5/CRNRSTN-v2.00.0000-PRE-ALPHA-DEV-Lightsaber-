<?php
/*
// J5
// Code is Poetry */
#
#  CRNRSTN ::
#  VERSION :: 2.00.0000 PRE-ALPHA-DEV
#  DATE (v1.0.0) :: July 4, 2018 - Happy Independence Day from my dog and I to you...wherever and whenever you are.
#  AUTHOR :: Jonathan 'J5' Harris, Lead Full Stack Developer
#  URI :: http://crnrstn.evifweb.com/
#  DESCRIPTION :: CRNRSTN :: An Open Source PHP Class Library providing a robust services interface layer to both
#       facilitate, augment, and enhance the operations of code base for an application across multiple hosting
#       environments. Copyright (C) 2012-2021 eVifweb development.
#  OVERVIEW :: CRNRSTN :: is an open source PHP class library that facilitates the operation of an application within
#       multiple server environments (e.g. localhost, stage, preprod, and production). With this tool, data and
#       functionality with characteristics that inherently create distinctions from one environment to the next...such
#       as IP address restrictions, error logging profiles, and database authentication credentials...can all be
#       managed through one framework for an entire application. Once CRNRSTN :: has been configured for your different
#       hosting environments, seamlessly release a web application from one environment to the next without having to
#       change your code-base to account for environmentally specific parameters. Receive the benefit of a robust and
#       polished framework for bubbling up exception notifications through any output of your choosing. Take advantage
#       of the CRNRSTN :: SOAP Services layer supporting many to 1 proxy messaging relationships between slave and
#       master servers; regarding server communications i.e. notifications, some architectures will depend on one
#       master to support the communications needs of many slaves with respect their roles and responsibilities in
#       regards to sending an email. With CRNRSTN ::, slaves configured to log exceptions via EMAIL_PROXY will send
#       all of their internal system notifications to one master server (proxy) which server would posses the (if
#       necessary) SMTP credentials for authorization to access and execute more restricted communications
#       protocols of the network.
#  LICENSE :: MIT
#		Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
#		documentation files (the "Software"), to deal in the Software without restriction, including without limitation
#       the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
#       and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
#
#		The above copyright notice and this permission notice shall be included in all copies or substantial portions
#		of the Software.
#
#		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
#       TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
#       THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
#       CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
#       DEALINGS IN THE SOFTWARE.
#
# # C # R # N # R # S # T # N # : : # # ##
#
#  CLASS :: crnrstn_multi_language_manager
#  VERSION :: 1.00.0000
#  DATE :: Friday May 14, 2021 @ 0611hrs
#  AUTHOR :: Jonathan 'J5' Harris, jharris@eVifweb.com
#  URI :: 
#  DESCRIPTION :: Multi-language management.
#  LICENSE :: MIT | http://crnrstn.evifweb.com/licensing/
#
class crnrstn_multi_language_manager {

	protected $oLogger;
    protected $oCRNRSTN_USR;

    protected $country_iso_code = 'en';

	public function __construct(){



	}

	public function initialize_oCRNRSTN_USR($oCRNRSTN_USR){

        $this->oCRNRSTN_USR = $oCRNRSTN_USR;

        $this->country_iso_code = $this->oCRNRSTN_USR->country_iso_code;

        //
        // INSTANTIATE LOGGER
        $this->oLogger = new crnrstn_logging($this->oCRNRSTN_USR->CRNRSTN_debugMode, __CLASS__, $this->oCRNRSTN_USR->log_silo_profile, $this->oCRNRSTN_USR);

    }

	public function get_lang_copy($message_key){

        //
        // WORRY NOT. THIS WILL BE DATABASE DRIVEN.
        switch($message_key) {
            case 'CRNRSTN_SESSION_INACTIVE_EXPIRE':

                switch($this->country_iso_code) {
                    case 'es':

                        break;
                    default:
                        //case 'en':

                        return 'The session has expired due to inactvity exceeding x seconds.';

                    break;

                }

            break;
            case 'EMAIL_REQUIRED':

                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'Email is required.';

                    break;

                }

            break;
            case 'PASSWORD_REQUIRED':

                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'Password is required.';

                    break;

                }

            break;
            case 'INPUT_LABEL_PASSWORD':
                switch($this->country_iso_code) {
                    case 'es':

                        break;
                    default:
                        //case 'en':

                        return 'password';

                        break;

                }

            break;
            case 'INPUT_LABEL_EMAIL':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'email';

                    break;

                }

            break;
            case 'BTN_TEXT_SIGN_IN':
                switch($this->country_iso_code) {
                    case 'es':

                        break;
                    default:
                        //case 'en':

                        return 'SIGN IN';

                        break;

                }

            break;
            case 'COPY_PART1_NEED_TO':
                switch($this->country_iso_code) {
                    case 'es':

                        break;
                    default:
                        //case 'en':

                        return 'Need to';

                        break;

                }

            break;
            case 'COPY_PART2_CREATE_ACCOUNT':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'create an account';

                    break;

                }

            break;
            case 'COPY_PART_x_OR':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'or';

                    break;

                }

            break;
            case 'COPY_PART3_FORGET_PWD':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'forget your password';

                break;

                }

            break;
            case 'COPY_YOUR_IP':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'Your IP';

                    break;

                }

            break;
            case 'COPY_LOGIN_ATTEMPTS':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'Login attempts';

                    break;

                }

            break;
            case 'COPY_ATTEMPTS_REMAINING':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'Attempts remaining';

                    break;

                }

            break;
            case 'COPY_ALL_RIGHTS_PART1':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'All Rights Reserved in accordance with';

                    break;

                }

            break;
            case 'COPY_ALL_RIGHTS_PART2':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'the latest version of the';

                    break;

                }

            break;
            case 'COPY_ALL_RIGHTS_PART_MIT':
                switch($this->country_iso_code) {
                    case 'es':

                    break;
                    default:
                        //case 'en':

                        return 'MIT License';

                    break;

                }

            break;

        }

        return NULL;

    }



    public function __destruct() {

	}

}