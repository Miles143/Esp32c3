// Update Analog Clock //

import "TheAnalogClock.js";
import "TheAnalaogTimer.js";
import "TheAnalogClock-Paint.js";
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

procedure TAnalogTimer.UpdateClock (Sender: TObject);
var
    HSec: Word; {temporary value, not used}
    begin
    	OldMinute := Minute;
    	DecodeTime (Time, Hour, Minute, HSec, MSec);
    	if FSeconds or not (Minute = OldMinute) then
    	    Invalidate;
    	end;
pause
/**
 * 
 */