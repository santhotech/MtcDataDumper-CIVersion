<?php 

class Dumper extends CI_Controller
{
	private $user_id;
	function __construct()
	{
		parent::__construct();				
		if (!$this->tank_auth->is_logged_in()) {
			redirect('/auth/login/');
		}
		$this->user_id = $this->tank_auth->get_user_id();;
	}

	function index()
	{
		$data["agents"] = $this->db->get_where("agents",array("added_by" => $this->user_id));
		$this->template->write_view('header', 'agents/include/header');
		$this->template->write_view('content', 'agents/agents',$data);
		$this->template->render();
	}
	
	function agents() 
	{
		
	}
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */