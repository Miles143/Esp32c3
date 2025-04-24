// FTimer //

import "TheDigitalClock.js";
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

function TDigClock.GetActive: Boolean;
	begin
	     Result := FTimer.Enabled;
    end;
    
    procedure TDigClock.SetActive (Value: Boolean);
    begin
        FTimer.Enabled := Value;
    end;
/**
 * 
 */