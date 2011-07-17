<?php

class User extends CI_Model 
{
	var $loginName = "";
	var $loginPwd = "";
	
	function authenticate($uMail,$pwd)
	{
		$this->db->from('registered_users');
		$this->db->where('email',$uMail);
		$this->db->where('password',$pwd);
		$count = $this->db->count_all_results();
		if($count == 1) { return true; }
		else { return false; }
	}
	
	function get_user_id($uMail)
	{
		$this->db->from('registered_users');
		$this->db->where('email',$uMail);
		$query = $this->db->get();
		$uid = $query->row('id');
		return $uid;
	}
	
}

?>