import { describe, it, expect } from 'vitest';
import { Device } from '../../../src/models/resources/Device.js';
import { DeviceBuilder } from '../../../src/builders/resources/DeviceBuilder.js';
import type { IDevice } from '@fhir-toolkit/r4-types';

describe('Device', () => {
  // ============================================================
  // Helper Functions
  // ============================================================

  /**
   * Helper to verify serialization round-trip
   */
  function expectSerializationRoundtrip(device: Device): void {
    const json = device.toJSON();
    const deserialized = Device.fromJSON(json);
    expect(deserialized.toJSON()).toEqual(json);
  }

  /**
   * Helper to verify deep clone
   */
  function expectDeepClone(device: Device): void {
    const cloned = device.clone();
    expect(cloned).not.toBe(device);
    expect(cloned.toJSON()).toEqual(device.toJSON());
  }

  /**
   * Helper to verify no undefined values in JSON
   */
  function expectNoUndefinedInJSON(json: IDevice): void {
    Object.entries(json).forEach(([key, value]) => {
      expect(value).not.toBeUndefined();
    });
  }

  // ============================================================
  // Constructor Tests
  // ============================================================

  describe('Constructor', () => {
    it('should create Device with minimal properties', () => {
      const device = new Device({
        resourceType: 'Device',
      });

      expect(device.resourceType).toBe('Device');
    });

    it('should create Device with all properties', () => {
      const device = new Device({
        resourceType: 'Device',
        id: 'device-1',
        identifier: [{ system: 'http://hospital.org/devices', value: 'DEV-001' }],
        definition: { reference: 'DeviceDefinition/pacemaker-model-x' },
        udiCarrier: [
          {
            deviceIdentifier: '(01)00000000000001',
            carrierHRF: '(01)00000000000001(17)250101(10)LOT123',
          },
        ],
        status: 'active',
        manufacturer: 'Acme Medical Devices',
        manufactureDate: '2024-01-15',
        expirationDate: '2029-01-15',
        lotNumber: 'LOT-2024-001',
        serialNumber: 'SN-12345',
        deviceName: [
          {
            name: 'Acme Pacemaker Model X',
            type: 'manufacturer-name',
          },
        ],
        modelNumber: 'PM-X-2024',
        type: {
          coding: [{ code: 'pacemaker', display: 'Cardiac Pacemaker' }],
        },
        patient: { reference: 'Patient/123' },
        owner: { reference: 'Organization/hospital-1' },
        location: { reference: 'Location/cardiology' },
      });

      expect(device.resourceType).toBe('Device');
      expect(device.id).toBe('device-1');
      expect(device.status).toBe('active');
      expect(device.manufacturer).toBe('Acme Medical Devices');
      expectSerializationRoundtrip(device);
    });

    it('should handle empty constructor', () => {
      const device = new Device();
      expect(device.resourceType).toBe('Device');
    });
  });

  // ============================================================
  // Serialization Tests
  // ============================================================

  describe('Serialization', () => {
    it('should serialize to JSON correctly', () => {
      const device = new Device({
        resourceType: 'Device',
        status: 'active',
        manufacturer: 'Acme Corp',
      });

      const json = device.toJSON();
      expect(json.resourceType).toBe('Device');
      expect(json.status).toBe('active');
      expect(json.manufacturer).toBe('Acme Corp');
      expectNoUndefinedInJSON(json);
    });

    it('should serialize with all properties', () => {
      const device = new Device({
        resourceType: 'Device',
        id: 'device-1',
        meta: { versionId: '1' },
        status: 'active',
        serialNumber: 'SN-001',
        modelNumber: 'MODEL-X',
      });

      const json = device.toJSON();
      expect(json.meta?.versionId).toBe('1');
      expect(json.serialNumber).toBe('SN-001');
      expectNoUndefinedInJSON(json);
    });
  });

  // ============================================================
  // fromJSON Tests
  // ============================================================

  describe('fromJSON', () => {
    it('should create Device from JSON', () => {
      const json: IDevice = {
        resourceType: 'Device',
        status: 'active',
        manufacturer: 'Medical Devices Inc',
      };

      const device = Device.fromJSON(json);
      expect(device.status).toBe('active');
      expect(device.manufacturer).toBe('Medical Devices Inc');
    });

    it('should handle complex JSON structure', () => {
      const json: IDevice = {
        resourceType: 'Device',
        status: 'active',
        udiCarrier: [
          {
            deviceIdentifier: '12345',
            carrierHRF: 'UDI-12345',
          },
        ],
        version: [
          {
            type: { coding: [{ code: 'software' }] },
            value: '2.0.1',
          },
        ],
      };

      const device = Device.fromJSON(json);
      expect(device.udiCarrier?.[0]?.deviceIdentifier).toBe('12345');
      expect(device.version?.[0]?.value).toBe('2.0.1');
      expectSerializationRoundtrip(device);
    });
  });

  // ============================================================
  // Immutability Tests (with, applyTransform)
  // ============================================================

  describe('Immutability', () => {
    it('should create new instance with "with" method', () => {
      const original = new Device({
        resourceType: 'Device',
        status: 'active',
      });

      const modified = original.with({ status: 'inactive' });

      expect(original.status).toBe('active');
      expect(modified.status).toBe('inactive');
      expect(modified).not.toBe(original);
    });

    it('should apply transformation function', () => {
      const device = new Device({
        resourceType: 'Device',
        status: 'active',
        manufacturer: 'Acme',
      });

      const transformed = device.applyTransform((data) => ({
        ...data,
        status: 'inactive',
        note: [{ text: 'Device retired from service' }],
      }));

      expect(transformed.status).toBe('inactive');
      expect(transformed.note?.[0]?.text).toContain('retired');
      expect(device.status).toBe('active');
    });
  });

  // ============================================================
  // Clone Tests
  // ============================================================

  describe('Clone', () => {
    it('should create deep clone', () => {
      const device = new Device({
        resourceType: 'Device',
        status: 'active',
        manufacturer: 'Acme',
        deviceName: [{ name: 'Device X', type: 'user-friendly-name' }],
      });

      expectDeepClone(device);
    });

    it('should clone with all properties', () => {
      const device = new Device({
        resourceType: 'Device',
        id: 'device-1',
        status: 'active',
        serialNumber: 'SN-001',
        note: [{ text: 'Good condition' }],
      });

      const cloned = device.clone();
      expect(cloned.toJSON()).toEqual(device.toJSON());
      expect(cloned.note?.[0]?.text).toBe('Good condition');
    });
  });

  // ============================================================
  // toString Tests
  // ============================================================

  describe('toString', () => {
    it('should return string representation without id', () => {
      const device = new Device({
        resourceType: 'Device',
        status: 'active',
      });

      expect(device.toString()).toBe('Device');
    });

    it('should return string representation with id', () => {
      const device = new Device({
        resourceType: 'Device',
        id: 'device-123',
        status: 'active',
      });

      expect(device.toString()).toBe('Device, id=device-123');
    });
  });

  // ============================================================
  // Status Tests
  // ============================================================

  describe('Status', () => {
    const validStatuses = ['active', 'inactive', 'entered-in-error', 'unknown'];

    validStatuses.forEach((status) => {
      it(`should accept status: ${status}`, () => {
        const device = new Device({
          resourceType: 'Device',
          status: status as any,
        });

        expect(device.status).toBe(status);
      });
    });
  });

  // ============================================================
  // DeviceBuilder Tests
  // ============================================================

  describe('DeviceBuilder', () => {
    describe('Basic Builder Methods', () => {
      it('should build Device with basic fields', () => {
        const device = new DeviceBuilder()
          .setStatus('active')
          .setManufacturer('Acme Medical')
          .build();

        expect(device.status).toBe('active');
        expect(device.manufacturer).toBe('Acme Medical');
      });

      it('should build Device with all scalar fields', () => {
        const device = new DeviceBuilder()
          .setId('device-1')
          .setDefinition({ reference: 'DeviceDefinition/1' })
          .setStatus('active')
          .setDistinctIdentifier('DISTINCT-001')
          .setManufacturer('Acme Medical Devices Inc')
          .setManufactureDate('2024-01-15')
          .setExpirationDate('2029-01-15')
          .setLotNumber('LOT-2024-001')
          .setSerialNumber('SN-12345')
          .setModelNumber('MODEL-X-2024')
          .setPartNumber('PART-001')
          .setType({ coding: [{ code: 'ventilator', display: 'Mechanical Ventilator' }] })
          .setPatient({ reference: 'Patient/123' })
          .setOwner({ reference: 'Organization/hospital-1' })
          .setLocation({ reference: 'Location/icu' })
          .setUrl('http://devices.hospital.org/ventilator-1')
          .build();

        expect(device.id).toBe('device-1');
        expect(device.manufacturer).toBe('Acme Medical Devices Inc');
        expect(device.serialNumber).toBe('SN-12345');
        expect(device.modelNumber).toBe('MODEL-X-2024');
      });
    });

    describe('Array Methods', () => {
      it('should add identifiers', () => {
        const device = new DeviceBuilder()
          .addIdentifier({ system: 'http://hospital.org', value: 'DEV-001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'DEV-002' })
          .build();

        expect(device.identifier).toHaveLength(2);
      });

      it('should add UDI carriers', () => {
        const device = new DeviceBuilder()
          .addUdiCarrier({
            deviceIdentifier: '(01)00000000000001',
            carrierHRF: '(01)00000000000001(17)250101',
          })
          .build();

        expect(device.udiCarrier).toHaveLength(1);
        expect(device.udiCarrier?.[0]?.deviceIdentifier).toBe('(01)00000000000001');
      });

      it('should add status reasons', () => {
        const device = new DeviceBuilder()
          .addStatusReason({ coding: [{ code: 'offline', display: 'Device is offline' }] })
          .build();

        expect(device.statusReason).toHaveLength(1);
      });

      it('should add device names', () => {
        const device = new DeviceBuilder()
          .addDeviceName({ name: 'Acme Pacemaker', type: 'manufacturer-name' })
          .addDeviceName({ name: 'Cardiac Pacemaker', type: 'user-friendly-name' })
          .build();

        expect(device.deviceName).toHaveLength(2);
      });

      it('should add specializations', () => {
        const device = new DeviceBuilder()
          .addSpecialization({
            systemType: { coding: [{ code: 'hl7-v2', display: 'HL7 V2' }] },
          })
          .build();

        expect(device.specialization).toHaveLength(1);
      });

      it('should add versions', () => {
        const device = new DeviceBuilder()
          .addVersion({
            type: { coding: [{ code: 'software', display: 'Software Version' }] },
            value: '2.0.1',
          })
          .addVersion({
            type: { coding: [{ code: 'firmware', display: 'Firmware Version' }] },
            value: '1.5.0',
          })
          .build();

        expect(device.version).toHaveLength(2);
      });

      it('should add properties', () => {
        const device = new DeviceBuilder()
          .addProperty({
            type: { coding: [{ code: 'battery-level' }] },
            valueQuantity: [{ value: 85, unit: '%' }],
          })
          .build();

        expect(device.property).toHaveLength(1);
      });

      it('should add contacts', () => {
        const device = new DeviceBuilder()
          .addContact({ system: 'phone', value: '555-SUPPORT' })
          .addContact({ system: 'email', value: 'support@acme.com' })
          .build();

        expect(device.contact).toHaveLength(2);
      });

      it('should add notes', () => {
        const device = new DeviceBuilder()
          .addNote({ text: 'Device calibrated on 2024-01-15' })
          .addNote({ text: 'Last maintenance: 2024-01-01' })
          .build();

        expect(device.note).toHaveLength(2);
      });

      it('should add safety characteristics', () => {
        const device = new DeviceBuilder()
          .addSafety({ coding: [{ code: 'MR-safe', display: 'MR Safe' }] })
          .build();

        expect(device.safety).toHaveLength(1);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const device = new DeviceBuilder()
          .setId('device-chain')
          .setStatus('active')
          .setManufacturer('Acme')
          .addIdentifier({ value: 'ID-001' })
          .addDeviceName({ name: 'Device X', type: 'user-friendly-name' })
          .addNote({ text: 'Test note' })
          .build();

        expect(device.id).toBe('device-chain');
        expect(device.identifier).toHaveLength(1);
        expect(device.deviceName).toHaveLength(1);
        expect(device.note).toHaveLength(1);
      });
    });
  });

  // ============================================================
  // Integration Tests (Clinical Scenarios)
  // ============================================================

  describe('Integration Tests', () => {
    it('should create cardiac pacemaker device', () => {
      const device = new DeviceBuilder()
        .setId('pacemaker-1')
        .addIdentifier({
          system: 'http://hospital.org/medical-devices',
          value: 'PACE-2024-001',
        })
        .addUdiCarrier({
          deviceIdentifier: '(01)00643169001763',
          issuer: 'http://hl7.org/fhir/NamingSystem/gs1-di',
          jurisdiction: 'http://hl7.org/fhir/NamingSystem/fda-udi',
          carrierHRF: '(01)00643169001763(17)250115(10)LOT2024001(21)SN12345',
        })
        .setStatus('active')
        .setManufacturer('Cardiac Devices Inc')
        .setManufactureDate('2024-01-15')
        .setExpirationDate('2034-01-15')
        .setLotNumber('LOT2024001')
        .setSerialNumber('SN12345')
        .addDeviceName({
          name: 'CardioTech Pacemaker Model P100',
          type: 'manufacturer-name',
        })
        .addDeviceName({
          name: 'Dual Chamber Pacemaker',
          type: 'user-friendly-name',
        })
        .setModelNumber('P100-DC')
        .setType({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '14106009',
              display: 'Cardiac pacemaker',
            },
          ],
        })
        .setPatient({ reference: 'Patient/patient-123', display: 'John Doe' })
        .setOwner({ reference: 'Organization/cardiology-dept' })
        .setLocation({ reference: 'Location/patient-room-305' })
        .addVersion({
          type: { coding: [{ code: 'firmware', display: 'Firmware Version' }] },
          value: '3.2.1',
        })
        .addSafety({
          coding: [
            {
              system: 'urn:oid:2.16.840.1.113883.3.26.1.1',
              code: 'mr-conditional',
              display: 'MR Conditional',
            },
          ],
        })
        .addNote({ text: 'Implanted on 2024-01-20, programmed for DDD mode at 60-120 bpm' })
        .build();

      expect(device.status).toBe('active');
      expect(device.manufacturer).toBe('Cardiac Devices Inc');
      expect(device.deviceName).toHaveLength(2);
      expect(device.udiCarrier?.[0]?.carrierHRF).toContain('LOT2024001');
      expectSerializationRoundtrip(device);
    });

    it('should create insulin pump device', () => {
      const device = new DeviceBuilder()
        .setStatus('active')
        .setManufacturer('Diabetes Care Systems')
        .setSerialNumber('PUMP-SN-98765')
        .setModelNumber('InsulinPump-X300')
        .addDeviceName({ name: 'InsulinPump X300', type: 'manufacturer-name' })
        .setType({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '63653004',
              display: 'Insulin pump',
            },
          ],
        })
        .setPatient({ reference: 'Patient/123' })
        .addVersion({
          type: { coding: [{ code: 'software' }] },
          value: '5.1.2',
        })
        .addProperty({
          type: { coding: [{ code: 'reservoir-capacity' }] },
          valueQuantity: [{ value: 300, unit: 'units' }],
        })
        .addProperty({
          type: { coding: [{ code: 'battery-level' }] },
          valueQuantity: [{ value: 75, unit: '%' }],
        })
        .addContact({ system: 'phone', value: '1-800-DIABETES' })
        .addNote({ text: 'Basal rate: 0.8 units/hour, Carb ratio: 1:12' })
        .build();

      expect(device.property).toHaveLength(2);
      expect(device.type?.coding?.[0]?.code).toBe('63653004');
      expectSerializationRoundtrip(device);
    });

    it('should create ventilator device in ICU', () => {
      const device = new DeviceBuilder()
        .setStatus('active')
        .setManufacturer('Respiratory Systems Inc')
        .setSerialNumber('VENT-SN-54321')
        .setModelNumber('VentMax-2000')
        .addDeviceName({ name: 'VentMax 2000', type: 'user-friendly-name' })
        .setType({
          coding: [{ code: 'ventilator', display: 'Mechanical Ventilator' }],
        })
        .setPatient({ reference: 'Patient/icu-patient-42' })
        .setLocation({ reference: 'Location/icu-bed-5' })
        .setOwner({ reference: 'Organization/hospital-main' })
        .addProperty({
          type: { coding: [{ code: 'tidal-volume' }] },
          valueQuantity: [{ value: 450, unit: 'mL' }],
        })
        .addProperty({
          type: { coding: [{ code: 'respiratory-rate' }] },
          valueQuantity: [{ value: 14, unit: 'breaths/min' }],
        })
        .addProperty({
          type: { coding: [{ code: 'fio2' }] },
          valueQuantity: [{ value: 40, unit: '%' }],
        })
        .addNote({ text: 'Patient on volume control mode, monitoring oxygen saturation' })
        .build();

      const deviceWithStatusReason = device.with({
        statusReason: [
          { coding: [{ code: 'online', display: 'Device is online and operational' }] },
        ],
      });

      expect(deviceWithStatusReason.property).toHaveLength(3);
      expect(deviceWithStatusReason.statusReason?.[0]?.coding?.[0]?.code).toBe('online');
      expectSerializationRoundtrip(deviceWithStatusReason);
    });

    it('should create wheelchair device', () => {
      const device = new DeviceBuilder()
        .setStatus('active')
        .setManufacturer('Mobility Solutions Inc')
        .setSerialNumber('WC-2024-001')
        .setModelNumber('PowerChair-500')
        .addDeviceName({ name: 'PowerChair 500', type: 'manufacturer-name' })
        .setType({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '58938008',
              display: 'Wheelchair device',
            },
          ],
        })
        .setPatient({ reference: 'Patient/123' })
        .setOwner({ reference: 'Organization/dme-supplier' })
        .addProperty({
          type: { coding: [{ code: 'weight-capacity' }] },
          valueQuantity: [{ value: 300, unit: 'lbs' }],
        })
        .addNote({ text: 'Electric wheelchair with tilt-in-space feature' })
        .build();

      expect(device.type?.coding?.[0]?.code).toBe('58938008');
      expectSerializationRoundtrip(device);
    });

    it('should create blood pressure monitor', () => {
      const device = new DeviceBuilder()
        .setStatus('active')
        .setManufacturer('VitalSigns Corp')
        .setSerialNumber('BP-MON-7890')
        .setModelNumber('BP-Auto-200')
        .addDeviceName({ name: 'Automatic Blood Pressure Monitor', type: 'user-friendly-name' })
        .setType({
          coding: [{ code: 'bp-monitor', display: 'Blood Pressure Monitor' }],
        })
        .setLocation({ reference: 'Location/exam-room-3' })
        .setOwner({ reference: 'Organization/clinic-1' })
        .addVersion({
          type: { coding: [{ code: 'software' }] },
          value: '1.3.5',
        })
        .addNote({ text: 'Last calibration: 2024-01-10' })
        .build();

      expect(device.version?.[0]?.value).toBe('1.3.5');
      expectSerializationRoundtrip(device);
    });

    it('should create implantable cardioverter defibrillator (ICD)', () => {
      const device = new DeviceBuilder()
        .setStatus('active')
        .setManufacturer('CardioTech Medical')
        .setSerialNumber('ICD-2024-XYZ123')
        .setModelNumber('ICD-Pro-400')
        .addDeviceName({
          name: 'CardioTech ICD-Pro 400',
          type: 'manufacturer-name',
        })
        .setType({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '72506001',
              display: 'Implantable cardioverter/defibrillator',
            },
          ],
        })
        .setPatient({ reference: 'Patient/cardiac-patient-456' })
        .setManufactureDate('2024-02-01')
        .addVersion({
          type: { coding: [{ code: 'firmware' }] },
          value: '2.8.1',
        })
        .addSafety({
          coding: [{ code: 'MR-unsafe', display: 'MR Unsafe' }],
        })
        .addNote({ text: 'Single chamber ICD, programmed with VF detection at 200 bpm' })
        .build();

      expect(device.safety?.[0]?.coding?.[0]?.code).toBe('MR-unsafe');
      expectSerializationRoundtrip(device);
    });

    it('should create inactive surgical instrument', () => {
      const device = new DeviceBuilder()
        .setStatus('inactive')
        .setManufacturer('Surgical Instruments Ltd')
        .setSerialNumber('SCALPEL-001')
        .setType({ coding: [{ code: 'surgical-scalpel' }] })
        .setLocation({ reference: 'Location/storage-room' })
        .addNote({ text: 'Device retired - blade dulled beyond acceptable sharpness' })
        .build();

      const deviceWithStatusReason = device.with({
        statusReason: [{ coding: [{ code: 'not-ready', display: 'Not ready for use' }] }],
      });

      expect(deviceWithStatusReason.status).toBe('inactive');
      expect(deviceWithStatusReason.statusReason?.[0]?.coding?.[0]?.code).toBe('not-ready');
      expectSerializationRoundtrip(deviceWithStatusReason);
    });

    it('should create device with parent reference', () => {
      const parentDevice = new DeviceBuilder()
        .setId('ventilator-system')
        .setStatus('active')
        .setManufacturer('Respiratory Systems')
        .setModelNumber('VENT-SYSTEM-1000')
        .build();

      const childDevice = new DeviceBuilder()
        .setStatus('active')
        .setManufacturer('Respiratory Systems')
        .setModelNumber('VENT-MODULE-O2')
        .addDeviceName({ name: 'Oxygen Module', type: 'user-friendly-name' })
        .setParent({ reference: 'Device/ventilator-system', display: 'Ventilator System' })
        .build();

      expect(childDevice.parent?.reference).toBe('Device/ventilator-system');
      expectSerializationRoundtrip(parentDevice);
      expectSerializationRoundtrip(childDevice);
    });
  });
});
