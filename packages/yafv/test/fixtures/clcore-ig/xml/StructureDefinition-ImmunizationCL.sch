<?xml version="1.0" encoding="UTF-8"?>
<sch:schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <sch:ns prefix="f" uri="http://hl7.org/fhir"/>
  <sch:ns prefix="h" uri="http://www.w3.org/1999/xhtml"/>
  <!-- 
    This file contains just the constraints for the profile Immunization
    It includes the base constraints for the resource as well.
    Because of the way that schematrons and containment work, 
    you may need to use this schematron fragment to build a, 
    single schematron that validates contained resources (if you have any) 
  -->
  <sch:pattern>
    <sch:title>f:Immunization</sch:title>
    <sch:rule context="f:Immunization">
      <sch:assert test="count(f:extension[@url = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/NombreCampana']) &gt;= 1">extension with URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/NombreCampana': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/NombreCampana']) &lt;= 1">extension with URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/NombreCampana': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:location) &gt;= 1">location: minimum cardinality of 'location' is 1</sch:assert>
      <sch:assert test="count(f:expirationDate) &gt;= 1">expirationDate: minimum cardinality of 'expirationDate' is 1</sch:assert>
      <sch:assert test="count(f:performer) &gt;= 1">performer: minimum cardinality of 'performer' is 1</sch:assert>
      <sch:assert test="count(f:performer) &lt;= 1">performer: maximum cardinality of 'performer' is 1</sch:assert>
      <sch:assert test="count(f:protocolApplied) &lt;= 1">protocolApplied: maximum cardinality of 'protocolApplied' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
  <sch:pattern>
    <sch:title>f:Immunization/f:statusReason</sch:title>
    <sch:rule context="f:Immunization/f:statusReason">
      <sch:assert test="count(f:id) &lt;= 1">id: maximum cardinality of 'id' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/RazonNOrealizarseInm']) &gt;= 1">extension with URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/RazonNOrealizarseInm': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/RazonNOrealizarseInm']) &lt;= 1">extension with URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/RazonNOrealizarseInm': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:text) &lt;= 1">text: maximum cardinality of 'text' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
  <sch:pattern>
    <sch:title>f:Immunization/f:vaccineCode</sch:title>
    <sch:rule context="f:Immunization/f:vaccineCode">
      <sch:assert test="count(f:id) &lt;= 1">id: maximum cardinality of 'id' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI']) &gt;= 1">extension with URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI']) &lt;= 1">extension with URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:text) &lt;= 1">text: maximum cardinality of 'text' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
  <sch:pattern>
    <sch:title>f:Immunization/f:location</sch:title>
    <sch:rule context="f:Immunization/f:location">
      <sch:assert test="count(f:id) &lt;= 1">id: maximum cardinality of 'id' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud']) &gt;= 1">extension with URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud']) &lt;= 1">extension with URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:reference) &lt;= 1">reference: maximum cardinality of 'reference' is 1</sch:assert>
      <sch:assert test="count(f:type) &lt;= 1">type: maximum cardinality of 'type' is 1</sch:assert>
      <sch:assert test="count(f:identifier) &lt;= 1">identifier: maximum cardinality of 'identifier' is 1</sch:assert>
      <sch:assert test="count(f:display) &lt;= 1">display: maximum cardinality of 'display' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
</sch:schema>
