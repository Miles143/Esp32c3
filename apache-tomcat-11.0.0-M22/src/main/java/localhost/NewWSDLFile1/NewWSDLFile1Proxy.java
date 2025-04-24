package localhost.NewWSDLFile1;

public class NewWSDLFile1Proxy implements localhost.NewWSDLFile1.NewWSDLFile1_PortType {
  private String _endpoint = null;
  private localhost.NewWSDLFile1.NewWSDLFile1_PortType newWSDLFile1_PortType = null;
  
  public NewWSDLFile1Proxy() {
    _initNewWSDLFile1Proxy();
  }
  
  public NewWSDLFile1Proxy(String endpoint) {
    _endpoint = endpoint;
    _initNewWSDLFile1Proxy();
  }
  
  private void _initNewWSDLFile1Proxy() {
    try {
      newWSDLFile1_PortType = (new localhost.NewWSDLFile1.NewWSDLFile1_ServiceLocator()).getNewWSDLFile1SOAP();
      if (newWSDLFile1_PortType != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)newWSDLFile1_PortType)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)newWSDLFile1_PortType)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (newWSDLFile1_PortType != null)
      ((javax.xml.rpc.Stub)newWSDLFile1_PortType)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public localhost.NewWSDLFile1.NewWSDLFile1_PortType getNewWSDLFile1_PortType() {
    if (newWSDLFile1_PortType == null)
      _initNewWSDLFile1Proxy();
    return newWSDLFile1_PortType;
  }
  
  public java.lang.String newOperation(java.lang.String in) throws java.rmi.RemoteException{
    if (newWSDLFile1_PortType == null)
      _initNewWSDLFile1Proxy();
    return newWSDLFile1_PortType.newOperation(in);
  }
  
  
}