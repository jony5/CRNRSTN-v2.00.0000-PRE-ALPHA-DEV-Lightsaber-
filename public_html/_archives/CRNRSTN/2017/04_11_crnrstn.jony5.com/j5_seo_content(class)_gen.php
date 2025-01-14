<?php
ini_set("memory_limit",-1);
ini_set("max_execution_time",-1);
/* 
// J5
// Code is Poetry */
require('_crnrstn.root.inc.php');
include_once($ROOT . '_crnrstn.config.inc.php');

echo "You don't want to run this...do you?<br><i>I will build content SEO content for documentation pages...</i><br><br>";

#die();
function clearDblBR($str){
	return str_replace("<br /><br />", "<br />", $str);
}

function XML_sanitize($str){
	#$string = 'The quick brown fox jumped over the lazy dog.';
	$patterns = array();
	$patterns[0] = '/&/';
	#$patterns[1] = '/brown/';
	#$patterns[2] = '/fox/';
	$replacements = array();
	$replacements[0] = '&amp;';
	#$replacements[1] = 'black';
	#$replacements[2] = 'slow';
	$str = preg_replace($patterns, $replacements, $str);
	return $str;
}
//
// ACTIVITY LOGGING
try{
	
	$queryDescript_ARRAY = array(
	'crnrstn_class_NAME' => 0, 'crnrstn_class_DESCRIPTION' => 1, 'crnrstn_class_VERSION' => 2,
	'crnrstn_class_URI' => 3, 'crnrstn_class_LANGCODE' => 4, 'crnrstn_class_DATEMODIFIED' => 5,
	'crnrstn_method_METHODID_SOURCE' => 6, 'crnrstn_method_NAME' => 7, 'crnrstn_method_DESCRIPTION' => 8,
	'crnrstn_method_DEFINITION' => 9, 'crnrstn_method_RETURNED_VALUE' => 10, 'crnrstn_method_URI' => 11, 
	'crnrstn_method_LANGCODE' => 12,
	'crnrstn_method_ISACTIVE' => 13, 'crnrstn_method_DATEMODIFIED' => 14, 'crnrstn_techspecs_TECHSPECID_SOURCE' => 15, 
	'crnrstn_techspecs_TECHSPEC_CONTENT' => 16,
	'crnrstn_techspecs_LANGCODE' => 17, 'crnrstn_techspecs_ISACTIVE' => 18, 'crnrstn_techspecs_DATEMODIFIED' => 19, 
	'crnrstn_examples_EXAMPLEID_SOURCE' => 20,
	'crnrstn_examples_TITLE' => 21, 'crnrstn_examples_EXAMPLE_FORMATTED' => 22, 'crnrstn_examples_EXAMPLE_RAW' => 23, 
	'crnrstn_examples_DESCRIPTION' => 24, 'crnrstn_examples_EXAMPLE_ELEM_TT' => 25, 'crnrstn_examples_LANGCODE' => 26,
	'crnrstn_examples_ISACTIVE' => 27, 'crnrstn_examples_DATEMODIFIED' => 28
	);
	
	//
	// DB/UN IN CONFIG FILE TAKES PRECEDENCE.
	$mysqli = $oENV->oMYSQLI_CONN_MGR->returnConnection();
	$query = 'SELECT `crnrstn_class`.`CLASSID_SOURCE` FROM `crnrstn_class` WHERE `crnrstn_class`.`ISACTIVE`="1";';
	
	$result = $oENV->oMYSQLI_CONN_MGR->processMultiQuery($mysqli, $query);
	
	//
	// REMAIN STILL WHILE YOUR LIFE IS EXTRACTED
	$ROWCNT=0;
	do {
		if ($result = $mysqli->store_result()) {
			while ($row = $result->fetch_row()) {
				foreach($row as $fieldPos=>$value){
					//
					// STORE RESULT
					//echo "ROW :: ".$ROWCNT.",FIELDPOS :: ".$fieldPos.",VAL :: ".$value."<br>";
					$result_ID_ARRAY[$ROWCNT][$fieldPos]=$value;
				}
				$ROWCNT++;
			}
			$result->free();
		}

		if ($mysqli->more_results()) {
			//
			// END OF RECORD. MORE TO FOLLOW.
		}
	} while ($mysqli->next_result());
	
	
} catch( Exception $e ) {
	
	//
	// LOG ERROR FOR DB ACTIVITY LOGGING
	$oENV->oLOGGER->captureNotice('CRNRSTN error notification :: XML Content Gen Failure (METHOD)', LOG_NOTICE, $e->getMessage());
}

#$mysqli = $oENV->oMYSQLI_CONN_MGR->returnConnection('localhost', 'crnrstn_stage', 'crnrstn_stage');

try{
	for($i=0; $i<sizeof($result_ID_ARRAY); $i++){
		echo 'Processing............'.$result_ID_ARRAY[$i][0].'<br>';
		
		$query = 'SELECT `crnrstn_class`.`NAME`, `crnrstn_class`.`DESCRIPTION`, `crnrstn_class`.`VERSION`, 
		`crnrstn_class`.`URI`,`crnrstn_class`.`LANGCODE`, `crnrstn_class`.`DATEMODIFIED`, 
		`crnrstn_method`.`METHODID_SOURCE`, `crnrstn_method`.`NAME`, `crnrstn_method`.`DESCRIPTION`, 
		`crnrstn_method`.`DEFINITION`,`crnrstn_method`.`RETURNED_VALUE`, `crnrstn_method`.`URI`, `crnrstn_method`.`LANGCODE`, 
		`crnrstn_method`.`ISACTIVE`,`crnrstn_method`.`DATEMODIFIED`,`crnrstn_techspecs`.`TECHSPECID_SOURCE`, `crnrstn_techspecs`.`TECHSPEC_CONTENT`,
		`crnrstn_techspecs`.`LANGCODE`,`crnrstn_techspecs`.`ISACTIVE`,`crnrstn_techspecs`.`DATEMODIFIED`, `crnrstn_examples`.`EXAMPLEID_SOURCE`, 
		`crnrstn_examples`.`TITLE`,`crnrstn_examples`.`EXAMPLE_FORMATTED`,`crnrstn_examples`.`EXAMPLE_RAW`,`crnrstn_examples`.`DESCRIPTION`,`crnrstn_examples`.`EXAMPLE_ELEM_TT`,`crnrstn_examples`.`LANGCODE`, 
		`crnrstn_examples`.`ISACTIVE`,`crnrstn_examples`.`DATEMODIFIED` 
		FROM ((`crnrstn_class` LEFT OUTER JOIN 
		`crnrstn_method` ON `crnrstn_class`.`CLASSID` = `crnrstn_method`.`CLASSID`) LEFT OUTER JOIN 
		`crnrstn_examples` ON `crnrstn_class`.`CLASSID` = `crnrstn_examples`.`CLASSID`) LEFT OUTER JOIN 
		`crnrstn_techspecs` ON `crnrstn_class`.`CLASSID` = `crnrstn_techspecs`.`CLASSID` WHERE 
		(((`crnrstn_class`.`CLASSID`)="'.crc32($result_ID_ARRAY[$i][0]).'" AND 
		(`crnrstn_class`.`CLASSID_SOURCE`)="'.$result_ID_ARRAY[$i][0].'" AND 
		(`crnrstn_class`.`ISACTIVE`)="1"));
		';
		#echo "<br>########################<br>".$query."<br>########################<br>";
		$result = $oENV->oMYSQLI_CONN_MGR->processMultiQuery($mysqli, $query);

		//
		// REMAIN STILL WHILE YOUR LIFE IS EXTRACTED
		$ROWCNT=0;
		do {
			if ($result = $mysqli->store_result()) {
				while ($row = $result->fetch_row()) {
					foreach($row as $fieldPos=>$value){
						//
						// STORE RESULT
						//echo "ROW :: ".$ROWCNT.",FIELDPOS :: ".$fieldPos.",VAL :: ".$value."<br>";
						$result_ARRAY[$ROWCNT][$fieldPos]=$value;
					}
					$ROWCNT++;
				}
				$result->free();
			}
	
			if ($mysqli->more_results()) {
				//
				// END OF RECORD. MORE TO FOLLOW.
			}
		} while ($mysqli->next_result());
		
		
		$FILEPATH = $oUSER->getEnvParam('DOCUMENT_ROOT').$oUSER->getEnvParam('DOCUMENT_ROOT_DIR').'/';
		$FILENAME = '_seocontent.inc.php';
		$ts = date("Y-m-d H:i:s", time()-60*60*6);
		$seocontent_output_str = '';
		$seocontent_techspecscontent_BODY_str = '';
		$xml_parameterscontent_BODY_str = '';
		$seocontent_examplescontent_BODY_str = '';
		$html_seocontent_open = '<div class="hidden">';
		$html_seocontent_close = '<p>Last upated: '.$ts.'</p></div>';
		
		//
		// INITIALIZE METHOD SPECIFIC PARAMETERS
		$soap_resp_CLASSID = $result_ID_ARRAY[$i][0];
		$soap_resp_NAME = $result_ARRAY[0][$queryDescript_ARRAY['crnrstn_class_NAME']];
		$soap_resp_DESCRIPTION = $oUSER->cleanMySQLEscapes(clearDblBR(nl2br(html_entity_decode($result_ARRAY[0][$queryDescript_ARRAY['crnrstn_class_DESCRIPTION']]))));
		$soap_resp_VERSION = $result_ARRAY[0][$queryDescript_ARRAY['crnrstn_class_VERSION']];
		$soap_resp_URI = $result_ARRAY[0][$queryDescript_ARRAY['crnrstn_class_URI']];
		$soap_resp_LANGCODE = $result_ARRAY[0][$queryDescript_ARRAY['crnrstn_class_LANGCODE']];
		$soap_resp_DATEMODIFIED = $result_ARRAY[0][$queryDescript_ARRAY['crnrstn_class_DATEMODIFIED']];
		
		$seocontent_output_str = '<h1>'.$soap_resp_NAME.'</h1>
		<p>'.$soap_resp_DESCRIPTION.'</p>
		<p>Version: '.$soap_resp_VERSION.'</p>';

		for($rownum=0; $rownum<sizeof($result_ARRAY); $rownum++){
		
			if(!isset($soap_resp_TECHNICALSPECS_MARKER[sha1($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_techspecs_TECHSPECID_SOURCE']])]) && $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_techspecs_TECHSPECID_SOURCE']]!='' && $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_techspecs_ISACTIVE']]=='1'){
				#TECH SPECS
				$crnrstn_techspecs_TECHSPECID_SOURCE = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_techspecs_TECHSPECID_SOURCE']];
				$crnrstn_techspecs_TECHSPEC_CONTENT = $oUSER->cleanMySQLEscapes(clearDblBR(nl2br(html_entity_decode($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_techspecs_TECHSPEC_CONTENT']]))));
									
				$seocontent_techspecscontent_BODY_str .='<p>'.$crnrstn_techspecs_TECHSPEC_CONTENT.'</p>';
				#echo '<br><br>######################<br>'.$seocontent_techspecscontent_BODY_str.'<br>######################';
				$soap_resp_TECHNICALSPECS_MARKER[sha1($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_techspecs_TECHSPECID_SOURCE']])]=1;
			}					
		
			if(!isset($soap_resp_EXAMPLE_MARKER[sha1($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_EXAMPLEID_SOURCE']])]) && $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_EXAMPLEID_SOURCE']]!='' && $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_ISACTIVE']]=='1'){
				#EXAMPLES
				$crnrstn_examples_EXAMPLEID = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_EXAMPLEID_SOURCE']];
				$crnrstn_examples_TITLE = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_TITLE']];
				$crnrstn_examples_EXAMPLE_FORMATTED = $oUSER->cleanMySQLEscapes($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_EXAMPLE_FORMATTED']]);
				$crnrstn_examples_EXAMPLE_RAW = $oUSER->cleanMySQLEscapes($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_EXAMPLE_RAW']]);
				$crnrstn_examples_DESCRIPTION = $oUSER->cleanMySQLEscapes(clearDblBR(nl2br(html_entity_decode($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_DESCRIPTION']]))));
				$crnrstn_examples_EXAMPLE_ELEM_TT = $oUSER->cleanMySQLEscapes($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_EXAMPLE_ELEM_TT']]);
				$crnrstn_examples_LANGCODE = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_LANGCODE']];
				$crnrstn_examples_DATEMODIFIED = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_DATEMODIFIED']];					
						
				$seocontent_exampleshtmlcontent_str .='<h3>'.$crnrstn_examples_TITLE.'</h3><p>'.$crnrstn_examples_DESCRIPTION.'</p>'.$crnrstn_examples_EXAMPLE_FORMATTED;
				$tmp_example_doc = $html_example_open.$xml_exampleshtmlcontent_str.$html_example_close;

				#$fp = fopen($FILEPATH_EXAMPLE.$soap_resp_URI.'_seocontent.inc.php', 'w');
				#echo "Saving file: ".$FILEPATH_EXAMPLE.$soap_resp_URI.'_seocontent.inc.php';
				//fwrite($fp, $tmp_example_doc);
				#fclose($fp);
				unset($tmp_example_doc);
				unset($xml_exampleshtmlcontent_str);
				
				$xml_examplescontent_BODY_str .='<crnrstn_exame>';
				
				#echo '<br><br>######################<br>'.$xml_examplescontent_BODY_str.'<br>######################';
				$soap_resp_EXAMPLE_MARKER[sha1($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_examples_EXAMPLEID_SOURCE']])]=1;
			}
			
			if(!isset($soap_resp_METHODS_MARKER[sha1($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_METHODID_SOURCE']])]) && $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_METHODID_SOURCE']]!='' && $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_ISACTIVE']]=='1'){
				#METHODS
				$crnrstn_method_METHODID_SOURCE = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_METHODID_SOURCE']];
				$crnrstn_method_NAME = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_NAME']];
				$crnrstn_method_DESCRIPTION = $oUSER->cleanMySQLEscapes(clearDblBR(nl2br(html_entity_decode($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_DESCRIPTION']]))));
				$crnrstn_method_DEFINITION = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_DEFINITION']];
				$crnrstn_method_RETURNED_VALUE = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_RETURNED_VALUE']];
				$crnrstn_method_URI = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_URI']];
				$crnrstn_method_LANGCODE = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_LANGCODE']];
				$crnrstn_method_DATEMODIFIED = $result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_DATEMODIFIED']];

				$xml_classmethodscontent_BODY_str .='<a href="'.$oUSER->getEnvParam('ROOT_PATH_CLIENT_HTTP').$oUSER->getEnvParam('ROOT_PATH_CLIENT_HTTP_DIR').$crnrstn_method_URI.'">'.$crnrstn_method_NAME.'</a>';
				
				$soap_resp_METHODS_MARKER[sha1($result_ARRAY[$rownum][$queryDescript_ARRAY['crnrstn_method_METHODID_SOURCE']])]=1;
			}
		}
	
	 	$xml_method_output_str.= $seocontent_output_str.'<h2>Technical Specifications:</h2>'.$seocontent_techspecscontent_BODY_str;
		$xml_method_output_str.= '<h2>Methods:</h2><p>'.$xml_classmethodscontent_BODY_str.'</p>';
		#$xml_method_output_str.= $seocontent_exampleshtmlcontent_str;
		
		$TMP_CLASS_OUTPUT = $html_seocontent_open.$xml_method_output_str.$html_seocontent_close;
		echo '<br><br>######################<br>
		######################<br><textarea>'.$TMP_CLASS_OUTPUT.'</textarea><br>
		######################<br>'.$FILEPATH.$soap_resp_URI.$FILENAME.'
		######################<br>';
		unset($xml_method_output_str);
		unset($seocontent_techspecscontent_BODY_str);
		unset($xml_classmethodscontent_BODY_str);
		unset($xml_examplescontent_BODY_str);
		
		$fp = fopen($FILEPATH.$soap_resp_URI.$FILENAME, 'w');
		fwrite($fp, $TMP_CLASS_OUTPUT);
		fclose($fp);
		unset($TMP_CLASS_OUTPUT);
	}

} catch( Exception $e ) {
	
	//
	// LOG ERROR FOR DB ACTIVITY LOGGING
	$oENV->oLOGGER->captureNotice('CRNRSTN error notification :: XML Content Gen Failure (@ln220) (CLASS)', LOG_NOTICE, $e->getMessage());
}

$oENV->oMYSQLI_CONN_MGR->closeConnection($mysqli);
echo 'XML Content Gen (CLASS) COMPLETE!';
?>