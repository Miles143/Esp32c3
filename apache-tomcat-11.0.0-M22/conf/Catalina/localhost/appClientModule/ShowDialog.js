 // Showing a dialog from a simple script //
// using JOptionPane in our example //


import "HelloApp2.js";
import "HelloWorld.js";
import "ClassVariables.js";
import "LocalVariables.js";
import "InitializingVariables.js";
import "InitializingStrings.js";
import "StringToPrimitives.js";
import "WrappedObject.js";
import "ScopeApp.js";
import java.util.Scanner;
import javax.swing.JOptionPane;

public static class DialogApp
{
	public static void main(String[] args)
	{
		String s;
		s = JOptionPane.showinputDialog
			("Enter an integer: ");
		int x = Integer.parseInt(s);
		System.out.printIn("You entered " + x + ".");
	}
}
/**
 * 
 */