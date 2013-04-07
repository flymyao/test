package com.test;

public class Child {
	private static Child c = new Child();
	 	{
	        System.out.println("�����Ǿ�̬��ʼ����");
	    }
	    static
	    {
	        System.out.println("���ྲ̬��ʼ����");
	    }
	    public Child()
	    {
	        System.out.println("�����Ĺ��췽��");
	    }
	    public static int childStaticMethod()
	    {
	        System.out.println("�����ľ�̬����");
	        return 1000;
	        //服务器添加的
	    }
	    @Override
	    protected void finalize() throws Throwable
	    {
	        // TODO Auto-generated method stub
	        super.finalize();
	        System.out.println("��������");
	    }
}
