// The DigitalClock //

   
   public type TDigClock = class (TCustomLabel)
private
	FTimer: TTimer;
	function GetActive: Boolean;
	procedure SetActive (Value: Boolean);
protected
	procedure UpdateClock (Sender: TObject);
public
	constructor Create (AOwner: TComponent); override;
	destructor Destroy; override;
published
	property Align;
	property Alignment;
	property Color;
	property Font;
	property ParentColor;
	property ParentFont;
	property ParentShowHint;
	property PopupMenu;
	property ShowHint;
	property Transparent;
	property Visible;
	property Active: Boolean
		read GetActive write SetActive;
	end;
/**
 * 
 */