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
#  CLASS :: crnrstn_ux_manager
#  VERSION :: 1.00.0000
#  DATE :: May 3, 2021 @ 0436hrs
#  AUTHOR :: Jonathan 'J5' Harris, jharris@eVifweb.com
#  URI :: 
#  DESCRIPTION ::
#  LICENSE :: MIT | http://crnrstn.evifweb.com/licensing/
#
class crnrstn_ux_manager {

	protected $oLogger;
    protected $oCRNRSTN_USR;

	public function __construct($oCRNRSTN_USR){

	    $this->oCRNRSTN_USR = $oCRNRSTN_USR;

	}

    public function sync_back_link_state(){

	    $tmp_array = array();

        //
        // TAKE THE LINK STORED IN CURRENT POSITION AND MOVE TO BACK LINK.
        if(!$this->oCRNRSTN_USR->isset_session_param('CRNRSTN_UI_STATE_SNAPSHOT')){

            $oCRNRSTN_UI_SNAPSHOT = new crnrstn_ui_resource_state_snapshot($this->oCRNRSTN_USR);

            $tmp_array[] = serialize($oCRNRSTN_UI_SNAPSHOT);
            //$oCRNRSTN_UI_SNAPSHOT->add_uri();

            $this->oCRNRSTN_USR->set_session_param('CRNRSTN_UI_STATE_SNAPSHOT', $tmp_array);

        }else{

            $tmp_array = $this->oCRNRSTN_USR->get_session_param('CRNRSTN_UI_STATE_SNAPSHOT');

            $oCRNRSTN_UI_SNAPSHOT = new crnrstn_ui_resource_state_snapshot($this->oCRNRSTN_USR);

            $tmp_array[] = serialize($oCRNRSTN_UI_SNAPSHOT);

            $this->oCRNRSTN_USR->set_session_param('CRNRSTN_UI_STATE_SNAPSHOT', $tmp_array);

        }

    }

	public function return_back_link(){

	    $tmp_link_acquired = false;
	    $tmp_new_array = array();
        $tmp_array = $this->oCRNRSTN_USR->get_session_param('CRNRSTN_UI_STATE_SNAPSHOT');
        $tmp_back_uri = '#';

        $tmp_cnt = count($tmp_array);

        $tmp_array = array_reverse($tmp_array);

        for($i = 1; $i < $tmp_cnt; $i++){

            if(!$tmp_link_acquired){

                //
                // STRIP ALL LINKS UNTIL FIND GOOD BACK LINK
                $tmp_oCRNRSTN_UI_SNAPSHOT = unserialize($tmp_array[$i]);
                $tmp_back_uri = $tmp_oCRNRSTN_UI_SNAPSHOT->return_current_state('URI');

                if(strlen($tmp_back_uri) > 1){

                    $tmp_link_acquired = true;

                }

            }else{

                //
                // PERSIST THIS DATA POINT IN SESSION
                $tmp_new_array[] = $tmp_array[$i];

            }

        }

        $tmp_array = array_reverse($tmp_new_array);

        $this->oCRNRSTN_USR->set_session_param('CRNRSTN_UI_STATE_SNAPSHOT', $tmp_array);

        return $tmp_back_uri;

    }

    public function __destruct() {

	}

}