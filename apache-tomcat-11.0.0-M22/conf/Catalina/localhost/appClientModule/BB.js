 // BB script // 


class BB {
Pubic static void main(String[] args) {
// create anonymous object
		new thread(new Runnable() {
			@Overridepublic void run() {
				System.out.println("New thread created");
				}.start();
			} 
/**
 * 
 */