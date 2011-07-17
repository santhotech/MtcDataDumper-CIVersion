<?php

class Accounts extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
	}
	public function welcome()
	{
		$this->load->view('account/welcome.php');
	}
}

?>