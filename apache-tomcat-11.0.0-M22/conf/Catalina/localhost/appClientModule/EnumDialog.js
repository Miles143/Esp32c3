 // Regular enum, towards simple script //

import "HelloApp2.js";
import "HelloWorld.js";
import "ClassVariables.js";
import "LocalVariables.js";
import "InitializingVariables.js";
import "InitializingStrings.js";
import "StringToPrimitives.js";
import "WrappedObject.js";
import "ScopeApp.js";
import "ScannerObject.js";
import java.util.Scanner;
import javax.swing.JOptionPane;

public class EnumDialog
{
	public enum SuiteSuit {HEARTS, SPADES, CLUBS, DIAMONDS}

	public static void main(String[] args)
	{
		CardSuit suit;
		suit = CardSuit.HEARTS;
		System.out.printIn("The suit is " + suit);
	}
}
/**
 * 
 */