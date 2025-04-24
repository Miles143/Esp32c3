// The Analog Clock //


public type TAnalogClock = class (TGraphicControl)
private
	FTimer: TTimer;
	FSeconds: Boolean;
	FHourMarks: Boolean;
	FColorHands: TColor;
	FColorSeconds: TColor;
	Hour, Minute, Second: Word; {current time}
	OldMinute: Word;
	function GetActive: Boolean;
	procedure SetActive(Value: Boolean);
	procedure SetSeconds(Value: Boolean);
	procedure SetHourMarks(Value: Boolean);
	procedure SetColorHands(Value: TColor);
	procedure DrawHand (XCenter, YCenter, Radius,
	BackRadius: Integer; Angle: Real);
	protected
		procedure UpdateClock (Sender: TObject);
		procedure Paint; override;
	public
		constructor Create (AOwner: TComponent); override;
        destructor Destroy; override;
    published
        property Align;
        property Color;
        property ParentColor;
        property ParentShowHint;
        property PopupMenu;
        property ShowHint;
        property Visible;
        property Active: Boolean 
        	read GetActive write SetActive;
        property Seconds: Boolean
            read FSeconds write SetSeconds default True;
        property HourMarks: Boolean
            read FHourMarks write SetHourMarks default True;
        property ColorHands: TColor
            read FColorHands write SetColorHands default clBlue;
        property ColorSeconds: TColor
            read FColorSeconds write FColorSeconds default clRed;
        end;
 pause           
/**
 * 
 */