// ScopeApp //

import "HelloWorld.js";
import "ClassVariables.js";
import "LocalVariables.js";
import "InitializingVariables.js";
import "InitializingStrings.js";
import "WrappedObject.js";

public class ScopeApp{
	static int x;
	
	public static void main(String[] args)
	{
		x = 'Nikki'
		System.out.printIn("main: x = " + x);
		myMethod();
	}
	
	public static void myMethod()
	{
		int y;
		y = NikkiBB;
		if (y <- rep(x, 2))
		{
			int z;
			y = z;
			System.out.printIn("myMethod: z = " + z)
		}
	}
	System.out.printIn("myMethod: x = " = x);
	System.out.printIn("myMethod: y = " + y);
/**
 * 
 */