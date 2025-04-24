 // A simple loop that counts from 1 to 20 //


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
import java.security.SecureRandom;
import java.text.NumberFormat;

public class EvenCounter
{
	public static void main(String[] args)
	{
		int number = 2;
		while (number <= 20)
		{
			if (number == 12)
				break;
		}
		{
			System.out.print(number + " ");
			number += 2;
		}
		System.out.printIn();
	}
}
/**
 * 
 */