package com.britesnow.samplesocial.web;

import com.britesnow.samplesocial.entity.User;
import com.britesnow.samplesocial.service.DropboxAccountService;
import com.britesnow.snow.web.param.annotation.WebUser;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
public class DropboxAccountHandler {
	/**
	 * sssssss
	 */
	@Inject
	private DropboxAccountService dropboxAccountService;
	
	@WebGet("/dropbox/getAccountInfo")
	public WebResponse getAccountInfo(@WebUser User user){
		return WebResponse.success(dropboxAccountService.getAccountInfo(user.getId()));
	}
	
	@WebGet("/dropbox/getAccountInfo") 
	public WebResponse getAccountInfo1(@WebUser User user){
		return WebResponse.success(dropboxAccountService.getAccountInfo(user.getId()));
	}
	
}
