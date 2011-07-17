<?php

class Sessions extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();		
	}
	
	public function login()
	{
		$this->load->helper('form');
		$this->load->view('sessions/login');
	}
	
	public function authenticate()
	{
		$this->load->model('user');
		$loginMail = $this->input->post('email');
		$loginPwd = $this->input->post('pwd');
		if($this->user->authenticate($loginMail,$loginPwd))
		{
			$this->session->set_userdata('loggedIn',true);
			$loggedUserId = $this->user->get_user_id($loginMail);
			$this->session->set_userdata('member_id',$loggedUserId);
			header('Location: /');
		}
		else
		{
			$this->login();
		}
	}
	public function logout()
	{
		$this->session->unset_userdata('loggedIn');
		header('Location: /');
	}
}

?>