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
#         AUTHOR :: Jonathan '5' Harris, CEO, CTO, Lead Full Stack Developer, jharris@eVifweb.com, eVifweb@gmail.com.
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
#  CLASS :: crnrstn_database_request
#  VERSION :: 1.00.0000
#  DATE :: Tuesday, July 14, 2020 @ 1037 hrs.
#  AUTHOR :: Jonathan '5' Harris, jharris@eVifweb.com, eVifweb@gmail.com.
#  URI :: http://eVifweb.jony5.com
#  DESCRIPTION :: Builds and sends requests to a database.
#  LICENSE :: MIT | https://crnrstn.jony5.com/licensing/
#
class crnrstn_database_request {

    private static $oCRNRSTN_ENV;
    public $oCRNRSTN_USR;
    protected $oQuery_ARRAY = array();

	public $crnrstn_database_request_serial;

	public function __construct($oCRNRSTN_USR = NULL){

        try{

            //
            // WON'T THIS BE SET ANYWAYS?
            if(isset($oCRNRSTN_USR) && is_object($oCRNRSTN_USR)){

                //
                // HOLD USER and ENVIRONMENT.
                $this->oCRNRSTN_USR = $oCRNRSTN_USR;
                self::$oCRNRSTN_ENV = $oCRNRSTN_USR->return_oCRNRSTN_ENV();

                //
                // SERIALIZE OBJECT - LEN64
                $this->crnrstn_database_request_serial = $this->oCRNRSTN_USR->generate_new_key(64);

            }else{

                //
                // HOOOSTON...VE HAF PROBLEM!
                throw new Exception('$oCRNRSTN_USR is a required parameter for crnrstn_database_request :: __construct().');

            }

        }catch(Exception $e){

            //
            // LET CRNRSTN :: HANDLE THIS PER THE LOGGING PROFILE CONFIGURATION FOR THIS SERVER.
            $this->oCRNRSTN_USR->catch_exception($e, LOG_ERR, __METHOD__, __NAMESPACE__);

        }

    }

    public function spoolQuery($oQuery, $request_serial, $oDB_wiring){

	    //
        // RUNS FROM LOOP THOUGH ALL VALID QUERY GOING TO DATABASE (n+1 connections, n+1 batches)
        $oDB_wiring->spoolRequestedQuery($oQuery, $request_serial);

    }

    public function sendIt($request_serial, $oDB_wiring, $oQueryManager){

        //error_log('71 user request - SEEENND IIIIT!');

        $tmp_spooled_conn_ARRAY = $oDB_wiring->returnSQLSpooledConn($request_serial);
        # $tmp_spooled_conn_ARRAY[n]['batch_key']
        # $tmp_spooled_conn_ARRAY[n]['query']
        # $tmp_spooled_conn_ARRAY[n]['connection_serial']
        # $tmp_spooled_conn_ARRAY[n]['type'] = multi, single

        foreach($tmp_spooled_conn_ARRAY as $index => $spooledConnectionArray){

            $tmp_conn = $oDB_wiring->returnConn($request_serial, $spooledConnectionArray['connection_serial'], $spooledConnectionArray['batch_key']);

            if($spooledConnectionArray['type'] == 'multi'){

                //
                // MULTI-QUERY
                // RISKY, BUT TOO VALUABLE OF A WINDOW TO NOT PROVIDE RECORD OF SQL TO ERROR LOGS
                $this->oCRNRSTN_USR->error_log('Sending query to the database :: Batch Key: ' . $spooledConnectionArray['batch_key'] . '. Query: ' . $spooledConnectionArray['query'], __LINE__, __METHOD__, __FILE__, CRNRSTN_DATABASE_QUERY);
                $mysqli = self::$oCRNRSTN_ENV->oMYSQLI_CONN_MGR->processMultiQuery($tmp_conn, $spooledConnectionArray['query']);

                //
                // STORE DATABASE RESPONSE
                $this->receive_databaseResultSet($tmp_conn, $request_serial, $spooledConnectionArray['connection_serial'], $spooledConnectionArray['batch_key'], $mysqli, $spooledConnectionArray['type'], $oDB_wiring, $oQueryManager);

            }else{

                //
                // SINGLE QUERY
                $this->oCRNRSTN_USR->error_log('Sending query to the database :: Batch Key: ' . $spooledConnectionArray['batch_key'] . '. Query: ' . $spooledConnectionArray['query'], __LINE__, __METHOD__, __FILE__, CRNRSTN_DATABASE_QUERY);
                $result = self::$oCRNRSTN_ENV->oMYSQLI_CONN_MGR->processQuery($tmp_conn, $spooledConnectionArray['query']);

                //
                // STORE DATABASE RESPONSE
                $this->receive_databaseResultSet($tmp_conn, $request_serial, $spooledConnectionArray['connection_serial'], $spooledConnectionArray['batch_key'], $result, $spooledConnectionArray['type'], $oDB_wiring, $oQueryManager);

            }

        }

        return true;

    }

    private function receive_databaseResultSet($mysqli, $request_serial, $connection_serial, $batch_key, $db_element, $query_type, $oDB_wiring, $oQueryManager){

	    try{

            switch($query_type){
                case 'multi':

                    $this->consume_mysqli_multi_result($request_serial, $connection_serial, $batch_key, $db_element, $oDB_wiring, $oQueryManager);

                break;
                case 'single':

                    $this->consume_mysqli_single_result($mysqli, $request_serial, $connection_serial, $batch_key, $db_element, $oDB_wiring, $oQueryManager);

                break;
                default:

                    //error_log(__LINE__ . ' req - query type[' . $query_type . ']');

                    //
                    // HOOOSTON...VE HAF PROBLEM!
                    throw new Exception('Missing or NULL query type.');

                break;

            }

        }catch(Exception $e){

            //
            // LET CRNRSTN :: HANDLE THIS PER THE LOGGING PROFILE CONFIGURATION FOR THIS SERVER.
            $this->oCRNRSTN_USR->catch_exception($e, LOG_ERR, __METHOD__, __NAMESPACE__);

        }

    }

    private function consume_mysqli_single_result($heavy_mysqli, $request_serial, $connection_serial, $batch_key, $result, $oDB_wiring, $oQueryManager){

	    try{

            if($heavy_mysqli->error){

                $tmp_warning_str = '';

                if(mysqli_warning_count($heavy_mysqli)){

                    $tmp_warning_str .= ' WARNING [';
                    $e = mysqli_get_warnings($heavy_mysqli);

                    do{

                        $tmp_warning_str .= '|errno: ' . $e->errno.'::' . $e->message;

                    }while($e->next());

                    $tmp_warning_str .= ']';

                }

                throw new Exception('CRNRSTN :: ERROR [' . $heavy_mysqli->error.']' . $tmp_warning_str);

            }else{

                $rowcount=0;
                $oDB_wiring->currentSelectQueryPos = $select_query_pos = 0;

                if(is_object($result)){

                    //error_log('162 req - [' . $request_serial . '][' . $connection_serial . '][' . $batch_key.']');
                    $tmp_query_serial = $oDB_wiring->returnQuerySerial($request_serial, $connection_serial, $batch_key);
                    $tmp_oQuery = $oQueryManager->returnQuery($tmp_query_serial);

                    //
                    // REMAIN STILL WHILE YOUR LIFE IS EXTRACTED
                    # $rowcount=0; CONTINUE ROWCNT FROM PREVIOUS RESULT PROCESSING
                    while($row = $result->fetch_row()){

                        foreach($row as $field_position=>$value){
                            //
                            // STORE RESULT
                            $this->process_field_db_response_in_row($connection_serial, $request_serial, $rowcount, $field_position, $value, $tmp_oQuery);
                            //error_log("175 single SQL - row[".$rowcount."] field[".$field_position."] value[".$value."]");

                        }

                        $rowcount++;

                    }

                    $tmp_oQuery->updateRecordCount();

                    $result->free();

                }

            }

            return NULL;

        }catch(Exception $e){

            //
            // LET CRNRSTN :: HANDLE THIS PER THE LOGGING PROFILE CONFIGURATION FOR THIS SERVER.
            $this->oCRNRSTN_USR->catch_exception($e, LOG_ERR, __METHOD__, __NAMESPACE__);

            return false;

        }

    }

    private function consume_mysqli_multi_result($request_serial, $connection_serial, $batch_key, $heavy_mysqli, $oDB_wiring, $oQueryManager){

	    try{

            //
            // FOR EACH CONNECTION...PROCESS RESULT SET
            if($heavy_mysqli->error){

                $tmp_warning_str = '';

                if(mysqli_warning_count($heavy_mysqli)){

                    $tmp_warning_str .= ' WARNING [';
                    $e = mysqli_get_warnings($heavy_mysqli);

                    do{

                        $tmp_warning_str .= '|errno: ' . $e->errno.'::' . $e->message;

                    }while ($e->next());

                    $tmp_warning_str .= ']';

                }

                //
                // HOOOSTON...VE HAF PROBLEM!
                throw new Exception('CRNRSTN :: ERROR [' . $heavy_mysqli->error.']' . $tmp_warning_str);

            }else{

                //
                // THIS IS WHERE THE MAGIC HAPPENS. NEED TO STORE DATA EXACTLY WHERE IT NEEDS TO BE FOR LATER ACCESS.
                # $this->oQuery_ARRAY[$request_serial][$conn_serial] = $oQuery;
                $oDB_wiring->currentSelectQueryPos = $select_query_pos = 0;
                $tmp_query_has_val_ARRAY = array();

                //
                // DO WE HAVE A RESULT SET?
                if($oDB_wiring->hasSelectResults($request_serial, $connection_serial, $batch_key)){

                    do {

                        $first_run = NULL;

                        if($result = $heavy_mysqli->store_result()){

                            $num_rows = mysqli_num_rows($result);

                            if($num_rows == 0){

                                $oDB_wiring->currentSelectQueryPos++;
                                $first_run = true;
                                $rowcount = 0;

                            }

                            while($row = $result->fetch_row()){

                                if(!isset($first_run)){
                                    $first_run = true;
                                    $rowcount = 0;
                                    //error_log(__LINE__ . ' db request - $first_run NOT SET [' . $request_serial . '][' . $connection_serial . '][' . $batch_key.']');
                                    $tmp_query_serial = $oDB_wiring->returnQuerySerial($request_serial, $connection_serial, $batch_key);
                                    $tmp_oQuery = $oQueryManager->returnQuery($tmp_query_serial);
                                    //error_log(__LINE__ . ' db request - q_pos=[' . $select_query_pos.'] FIRST RECORD [field cnt='.count($row).'] OF NEW SELECT DATASET - QUERY[' . $tmp_oQuery->return_attribute('select_query').']');

                                }

                                foreach($row as $field_position => $value){

                                    //
                                    // THE GOAL IS TO HAVE THIS METHOD STORE THE DATA IN A NON-LOOP-INDUCING MANNER WHERE EACH ELEMENT CAN BE ACCESSED DIRECTLY.
                                    $this->process_field_db_response_in_row($connection_serial, $request_serial, $rowcount, $field_position, $value, $tmp_oQuery);

                                }

                                $rowcount++;

                            }

                            $result->free();

                        }

                        if(!isset($tmp_oQuery)){
                            //error_log('241 req - [' . $request_serial . '][' . $connection_serial . '][' . $batch_key.']');
                            $tmp_query_serial = $oDB_wiring->returnQuerySerial($request_serial, $connection_serial, $batch_key);
                            $tmp_oQuery = $oQueryManager->returnQuery($tmp_query_serial);
                        }

                        $tmp_oQuery->updateRecordCount();

                        if($heavy_mysqli->more_results()){
                            //
                            // END OF RECORD. MORE TO FOLLOW. LET'S SMOKE TEST THIS. I HOPE IT INCREMENTS PER EACH SELECT QUERY RESULTS COMPLETION. (APPARENTLY, IT DOES)
                            // NOPE...WILL NOT ALWAYS INCREMENT...IF NO RESULTS...NO INCREMENT.<-- THIS WAS A HUGE PROBLEM...THROWING
                            // OFF ALIGNMENT FOR LEGIT RESULTS ACCESS IF PRECEEDED BY A NON-RESULT PRODUCING QUERY!
                            // SEE FIX ABOVE WITH $num_rows == 0 CHECK.
                            if(isset($first_run)){

                                $select_query_pos++;
                                $oDB_wiring->currentSelectQueryPos = $select_query_pos;

                            }

                        }

                    }while($heavy_mysqli->more_results() && $heavy_mysqli->next_result());

                }

            }

        }catch(Exception $e){

            //
            // LET CRNRSTN :: HANDLE THIS PER THE LOGGING PROFILE CONFIGURATION FOR THIS SERVER.
            $this->oCRNRSTN_USR->catch_exception($e, LOG_ERR, __METHOD__, __NAMESPACE__);

            return false;

        }

        return NULL;

    }

    private function process_field_db_response_in_row($connection_serial, $request_serial, $rowcount, $field_position, $value, $oQuery){

        $oQuery->addDBResultData($rowcount, $field_position, $value);
        //error_log('332 db req - ROW/FIELD[' . $rowcount.']/[' . $field_position.'] VAL[' . $value.']');

    }

    public function __destruct(){

	}

}