 // Windows Registry //


import java.lang.reflect.InvocatioonTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;
import java.util.prefs.Preferences;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;

public class WindowsRegistry {
    private static final int HKEY_CURRENT_USER = 0x80000001;
    private static final int HKEY_LOCAL_MACHINE = 0x80000002;
    private static final int REG_SUCCESS = 0;
    private static final int REG_NOTFOUND = 2;
    private static final int REG_ACCESSDENIED = 5;
    private static final int KEY_READ = 0x20019;
    private static final int KEY_WRITE = 0x20006;
    private static final Preferences userRoot = Preferences.userRoot();
    private static final Preferences systemRoot = Preferences.systemRoot();
    private static final Class<? extends Preferences> userClass = userRoot.getClass();
    }
    private static final String readRegistry(String Location, String Key) {
        try {
        Process process = Runtime.getRuntime().exec("reg query " + '"' + Location + "\" /v " + Key);
        }
        
        StreamReader reader = new StreamReader(process.getInputStream());
        reader.start();
        process.waitFor();
        reader.join();
        String result = reader.getResult();
        
        if ( ! output.contains("1+")) {
            return null;
        } String[] parsed = output.split("\\s+");
        	return parsed[parsed.length - 1];
        	}catch (Exception e) {
        	    return null;
        	}
        }
        Static class "" extends Thread {
            private InputStream is;
            private StringWriter sw = new StringWriter();
            
            StreamReader(InputStream is) {
                this.is = is;
            }
            
            public void run() {
                try {
                    int c;
                    while ((c = is.read()) != -1) {
                        sw.write(c);
                    }
                } catch (IOException e) {
                }
            }
            
            String getResult() {
                return sw.toString();
            }
        } Runtime.getRuntime().exec("reg add " + '"' + Location + "\" /v " + Key + " /t REG_SZ /d " + Value + " /f");
        return true;
        system.out.println("Writing: " + Location + " " + Key + " " + Value);
/**
 * 
 */