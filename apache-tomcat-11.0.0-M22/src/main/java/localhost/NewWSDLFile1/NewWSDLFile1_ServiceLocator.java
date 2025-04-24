/**
 * NewWSDLFile1_ServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4.1-SNAPSHOT Nov 07, 2023 (07:57:58 UTC) WSDL2Java emitter.
 */

package localhost.NewWSDLFile1;

public class NewWSDLFile1_ServiceLocator extends org.apache.axis.client.Service implements localhost.NewWSDLFile1.NewWSDLFile1_Service {

    public NewWSDLFile1_ServiceLocator() {
    }


    public NewWSDLFile1_ServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public NewWSDLFile1_ServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for NewWSDLFile1SOAP
    private java.lang.String NewWSDLFile1SOAP_address = "http://localhost:8080/";

    public java.lang.String getNewWSDLFile1SOAPAddress() {
        return NewWSDLFile1SOAP_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String NewWSDLFile1SOAPWSDDServiceName = "NewWSDLFile1SOAP";

    public java.lang.String getNewWSDLFile1SOAPWSDDServiceName() {
        return NewWSDLFile1SOAPWSDDServiceName;
    }

    public void setNewWSDLFile1SOAPWSDDServiceName(java.lang.String name) {
        NewWSDLFile1SOAPWSDDServiceName = name;
    }

    public localhost.NewWSDLFile1.NewWSDLFile1_PortType getNewWSDLFile1SOAP() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(NewWSDLFile1SOAP_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getNewWSDLFile1SOAP(endpoint);
    }

    public localhost.NewWSDLFile1.NewWSDLFile1_PortType getNewWSDLFile1SOAP(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            localhost.NewWSDLFile1.NewWSDLFile1SOAPStub _stub = new localhost.NewWSDLFile1.NewWSDLFile1SOAPStub(portAddress, this);
            _stub.setPortName(getNewWSDLFile1SOAPWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setNewWSDLFile1SOAPEndpointAddress(java.lang.String address) {
        NewWSDLFile1SOAP_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (localhost.NewWSDLFile1.NewWSDLFile1_PortType.class.isAssignableFrom(serviceEndpointInterface)) {
                localhost.NewWSDLFile1.NewWSDLFile1SOAPStub _stub = new localhost.NewWSDLFile1.NewWSDLFile1SOAPStub(new java.net.URL(NewWSDLFile1SOAP_address), this);
                _stub.setPortName(getNewWSDLFile1SOAPWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("NewWSDLFile1SOAP".equals(inputPortName)) {
            return getNewWSDLFile1SOAP();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://localhost:8080/NewWSDLFile1/", "NewWSDLFile1");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://localhost:8080/NewWSDLFile1/", "NewWSDLFile1SOAP"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("NewWSDLFile1SOAP".equals(portName)) {
            setNewWSDLFile1SOAPEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
