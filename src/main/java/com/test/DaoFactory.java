package com.test;

public class DaoFactory {
	  
	 private static DaoFactory instance = new DaoFactory();
	 private  static UserDao userDao=new UserDao("��̬");
	 static{
		 System.out.println("��̬");
	 }
	 {
		 System.out.println("�Ǿ�̬");
		 userDao = new UserDao("�Ǿ�̬");
	 }
	 private DaoFactory() {
	  System.out.println("DaoFactory ��ʼ��");
	   userDao = new UserDao("DaoFactory ��ʼ��");
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