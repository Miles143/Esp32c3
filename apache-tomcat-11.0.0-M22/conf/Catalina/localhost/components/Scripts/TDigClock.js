// TDigClock //


constructor Create (AOwner);
begin 
    inherited Create(AOwner);
    FTimer := TTimer.Create(Self);
    FTimer.OnTimer := @UpdateClock;
    FTimer.Enabled := True;
    end;
// destructor TDigClock.Destroy;
begin
    FTimer.Free;
    inherited Destroy;
end; //
/**
 * 
 */