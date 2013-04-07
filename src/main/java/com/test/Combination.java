package com.test;

/**
 * ÅÅÁĞ×éºÏ
 * @author Tang
 *
 */
public class Combination {

	public static void combination(Integer[] src){
		int length = src.length;
		for(int i1 =0;i1<length;i1++){
			for(int i2 =0;i2<length;i2++){
				for(int i3 =0;i3<length;i3++){
					if(src[i1]!=src[i3]&&src[i1]!=src[i2]&&src[i2]!=src[i3]){
						System.out.println(src[i1]+","+src[i2]+","+src[i3]);
					}
				}
			}
		}
	}
	public static void main(String[] args) {
		Integer[] src = {1,2,3};
		combination(src);
	}
	
}
