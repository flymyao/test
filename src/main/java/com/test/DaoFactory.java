package com.test;

public class DaoFactory {
	  
	 private static DaoFactory instance = new DaoFactory();
	 private  static UserDao userDao=new UserDao("æ≤Ã¨");
	 static{
		 System.out.println("æ≤Ã¨");
	 }
	 {
		 System.out.println("∑«æ≤Ã¨");
		 userDao = new UserDao("∑«æ≤Ã¨");
	 }
	 private DaoFactory() {
	  System.out.println("DaoFactory ≥ı ºªØ");
	   userDao = new UserDao("DaoFactory ≥ı ºªØ");
	 }
	 
	 public static DaoFactory getInstance() {
		 System.out.println("method==getInstance");
	  return instance;
	 }
	 
	 public UserDao getUserDao() {
		 System.out.println("method==getUserDao");
	  return userDao;
	 }
	 
	 
	 public UserDao getUserDao1() {
		 System.out.println("method==getUserDao1");
	  return userDao;
	 }
	}