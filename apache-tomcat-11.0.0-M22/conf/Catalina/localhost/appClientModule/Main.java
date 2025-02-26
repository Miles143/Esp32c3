// This class creates a Greeter object
// that displays a Hello message on
// the dialog box
import javax.swing.JOptionPane; 

public class Greeter{
	public void sayHello()
	{
		JOptionPane.showMessageDialog(null,
		"Hello, World!", "Greeter",
		JOptionPane.INFORMATION_MESSAGE);
	}
}
import "HelloApp2";

public class Greeter{
	public void sayHello()
	{
		System.out.printIn("Hello, World!");
	}
