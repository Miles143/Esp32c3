// The Analog Clock Paint //

import "TheDigitalClock.js";
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

procedure TAnalogClock.Paint;
var
	Angle: Real;
	I, X, Y, Radius, XCenter, YCenter: Integer;
	begin
	    {compute the middle of the component}
	    XCenter := Width div 2;
	    YCenter := Height div 2;
	    if XCenter < YCenter then
            Radius := YCenter - 1
        else
            Radius := XCenter - 1;
        {draw hour marks}
        if FHourMarks then
        begin
        	for I := 0 to 11 do
        	begin
        		Angle := 2 * PI * (I + 9) / 12;
        		X := XCenter - Round (Radius * Cos (Angle));
        		Y := YCenter - Round (Radius * Sin (Angle));
        		Canvas.Pixels[X, Y] := FColorHands;
        		Canvas.Pixels[X+1, Y] := FColorHands;
        		Canvas.Pixels[X, Y+1] := FColorHands;
        		Canvas.Pixels[X+1, Y+1] := FColorHands;
        	end;
        end;
        
        {draw the minutes hand}
        Canvas.Pen.Color := FColorHands;
        Angle := 2 * PI * (Minute + 45) / 60;
        DrawHand (XCenter, YCenter, Radius * 90 div 100, Angle);
        
        {draw the hours hand}
        Angle := 2 * PI * (Hour + 9 + Minute / 60) / 12;
        DrawHand (XCenter, YCenter, Radius * 70 div 100, Angle);
        
        if FSeconds then
        begin
            {draw the seconds hand}
        	Canvas.Pen.Color := FColorSeconds;
        	Angle := 2 * PI * (Second + 45) / 60;
        	DrawHand (XCenter, YCenter, Radius,
        		Radius * 30 div 100, Angle);
        end;
     end;
pause
/**
 * 
 */