import { describe, it, expect } from 'vitest';
import { Location } from '../../../src/models/resources/Location.js';
import { LocationBuilder } from '../../../src/builders/resources/LocationBuilder.js';
import type { ILocation } from '@fhir-toolkit/r4-types';

describe('Location', () => {
  // ============================================================
  // Helper Functions
  // ============================================================

  /**
   * Helper to verify serialization round-trip
   */
  function expectSerializationRoundtrip(location: Location): void {
    const json = location.toJSON();
    const deserialized = Location.fromJSON(json);
    expect(deserialized.toJSON()).toEqual(json);
  }

  /**
   * Helper to verify deep clone
   */
  function expectDeepClone(location: Location): void {
    const cloned = location.clone();
    expect(cloned).not.toBe(location);
    expect(cloned.toJSON()).toEqual(location.toJSON());
  }

  /**
   * Helper to verify no undefined values in JSON
   */
  function expectNoUndefinedInJSON(json: ILocation): void {
    Object.entries(json).forEach(([key, value]) => {
      expect(value).not.toBeUndefined();
    });
  }

  // ============================================================
  // Constructor Tests
  // ============================================================

  describe('Constructor', () => {
    it('should create Location with minimal properties', () => {
      const location = new Location({
        resourceType: 'Location',
      });

      expect(location.resourceType).toBe('Location');
    });

    it('should create Location with all properties', () => {
      const location = new Location({
        resourceType: 'Location',
        id: 'location-1',
        identifier: [{ system: 'http://hospital.org/locations', value: 'LOC-001' }],
        status: 'active',
        operationalStatus: { code: 'H', display: 'Housekeeping' },
        name: 'Main Hospital Building',
        alias: ['Old General Hospital', 'City Hospital'],
        description: 'Main building of the hospital complex',
        mode: 'instance',
        type: [{ coding: [{ code: 'HOSP', display: 'Hospital' }] }],
        telecom: [{ system: 'phone', value: '555-1234' }],
        address: {
          line: ['123 Main St'],
          city: 'Springfield',
          state: 'IL',
          postalCode: '62701',
        },
        physicalType: { coding: [{ code: 'bu', display: 'Building' }] },
        position: {
          longitude: -89.6501,
          latitude: 39.7817,
        },
        managingOrganization: { reference: 'Organization/hospital-main' },
        hoursOfOperation: [
          {
            daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
            allDay: true,
          },
        ],
      });

      expect(location.resourceType).toBe('Location');
      expect(location.id).toBe('location-1');
      expect(location.status).toBe('active');
      expect(location.name).toBe('Main Hospital Building');
      expectSerializationRoundtrip(location);
    });

    it('should handle empty constructor', () => {
      const location = new Location();
      expect(location.resourceType).toBe('Location');
    });
  });

  // ============================================================
  // Serialization Tests
  // ============================================================

  describe('Serialization', () => {
    it('should serialize to JSON correctly', () => {
      const location = new Location({
        resourceType: 'Location',
        status: 'active',
        name: 'Emergency Room',
      });

      const json = location.toJSON();
      expect(json.resourceType).toBe('Location');
      expect(json.status).toBe('active');
      expect(json.name).toBe('Emergency Room');
      expectNoUndefinedInJSON(json);
    });

    it('should serialize with all properties', () => {
      const location = new Location({
        resourceType: 'Location',
        id: 'location-1',
        meta: { versionId: '1' },
        status: 'active',
        name: 'ICU Ward',
        address: {
          line: ['100 Medical Plaza'],
          city: 'Boston',
        },
      });

      const json = location.toJSON();
      expect(json.meta?.versionId).toBe('1');
      expect(json.address?.city).toBe('Boston');
      expectNoUndefinedInJSON(json);
    });
  });

  // ============================================================
  // fromJSON Tests
  // ============================================================

  describe('fromJSON', () => {
    it('should create Location from JSON', () => {
      const json: ILocation = {
        resourceType: 'Location',
        status: 'active',
        name: 'Operating Room 1',
      };

      const location = Location.fromJSON(json);
      expect(location.status).toBe('active');
      expect(location.name).toBe('Operating Room 1');
    });

    it('should handle complex JSON structure', () => {
      const json: ILocation = {
        resourceType: 'Location',
        status: 'active',
        name: 'Radiology Department',
        position: {
          longitude: -122.4194,
          latitude: 37.7749,
          altitude: 10.5,
        },
        hoursOfOperation: [
          {
            daysOfWeek: ['mon', 'tue', 'wed'],
            openingTime: '08:00:00',
            closingTime: '17:00:00',
          },
        ],
      };

      const location = Location.fromJSON(json);
      expect(location.position?.latitude).toBe(37.7749);
      expect(location.hoursOfOperation?.[0]?.openingTime).toBe('08:00:00');
      expectSerializationRoundtrip(location);
    });
  });

  // ============================================================
  // Immutability Tests (with, applyTransform)
  // ============================================================

  describe('Immutability', () => {
    it('should create new instance with "with" method', () => {
      const original = new Location({
        resourceType: 'Location',
        status: 'active',
        name: 'Original Name',
      });

      const modified = original.with({ status: 'suspended' });

      expect(original.status).toBe('active');
      expect(modified.status).toBe('suspended');
      expect(modified).not.toBe(original);
    });

    it('should apply transformation function', () => {
      const location = new Location({
        resourceType: 'Location',
        status: 'active',
        name: 'Room 101',
      });

      const transformed = location.applyTransform((data) => ({
        ...data,
        status: 'inactive',
        description: 'Room closed for renovation',
      }));

      expect(transformed.status).toBe('inactive');
      expect(transformed.description).toContain('renovation');
      expect(location.status).toBe('active');
    });
  });

  // ============================================================
  // Clone Tests
  // ============================================================

  describe('Clone', () => {
    it('should create deep clone', () => {
      const location = new Location({
        resourceType: 'Location',
        status: 'active',
        name: 'Pharmacy',
        address: {
          line: ['123 Medical Dr'],
          city: 'New York',
        },
      });

      expectDeepClone(location);
    });

    it('should clone with all properties', () => {
      const location = new Location({
        resourceType: 'Location',
        id: 'location-1',
        status: 'active',
        name: 'Laboratory',
        position: {
          longitude: -74.006,
          latitude: 40.7128,
        },
      });

      const cloned = location.clone();
      expect(cloned.toJSON()).toEqual(location.toJSON());
      expect(cloned.position?.latitude).toBe(40.7128);
    });
  });

  // ============================================================
  // toString Tests
  // ============================================================

  describe('toString', () => {
    it('should return string representation without id', () => {
      const location = new Location({
        resourceType: 'Location',
        status: 'active',
      });

      expect(location.toString()).toBe('Location');
    });

    it('should return string representation with id', () => {
      const location = new Location({
        resourceType: 'Location',
        id: 'location-123',
        status: 'active',
      });

      expect(location.toString()).toBe('Location, id=location-123');
    });
  });

  // ============================================================
  // Status Tests
  // ============================================================

  describe('Status', () => {
    const validStatuses = ['active', 'suspended', 'inactive'];

    validStatuses.forEach((status) => {
      it(`should accept status: ${status}`, () => {
        const location = new Location({
          resourceType: 'Location',
          status: status as any,
        });

        expect(location.status).toBe(status);
      });
    });
  });

  // ============================================================
  // Mode Tests
  // ============================================================

  describe('Mode', () => {
    const validModes = ['instance', 'kind'];

    validModes.forEach((mode) => {
      it(`should accept mode: ${mode}`, () => {
        const location = new Location({
          resourceType: 'Location',
          mode: mode as any,
        });

        expect(location.mode).toBe(mode);
      });
    });
  });

  // ============================================================
  // LocationBuilder Tests
  // ============================================================

  describe('LocationBuilder', () => {
    describe('Basic Builder Methods', () => {
      it('should build Location with basic fields', () => {
        const location = new LocationBuilder()
          .setStatus('active')
          .setName('Emergency Department')
          .build();

        expect(location.status).toBe('active');
        expect(location.name).toBe('Emergency Department');
      });

      it('should build Location with all scalar fields', () => {
        const location = new LocationBuilder()
          .setId('location-1')
          .setStatus('active')
          .setOperationalStatus({ code: 'O', display: 'Occupied' })
          .setName('Patient Room 305')
          .setDescription('Private room on third floor')
          .setMode('instance')
          .setAddress({
            line: ['789 Hospital Way'],
            city: 'Chicago',
            state: 'IL',
            postalCode: '60601',
          })
          .setPhysicalType({ coding: [{ code: 'ro', display: 'Room' }] })
          .setPosition({ longitude: -87.6298, latitude: 41.8781 })
          .setManagingOrganization({ reference: 'Organization/hospital-1' })
          .setPartOf({ reference: 'Location/floor-3' })
          .setAvailabilityExceptions('Closed for maintenance on first Sunday of each month')
          .build();

        expect(location.id).toBe('location-1');
        expect(location.name).toBe('Patient Room 305');
        expect(location.mode).toBe('instance');
        expect(location.position?.latitude).toBe(41.8781);
      });
    });

    describe('Array Methods', () => {
      it('should add identifiers', () => {
        const location = new LocationBuilder()
          .addIdentifier({ system: 'http://hospital.org', value: 'LOC-001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'LOC-002' })
          .build();

        expect(location.identifier).toHaveLength(2);
      });

      it('should add aliases', () => {
        const location = new LocationBuilder()
          .setName('St. Mary Hospital')
          .addAlias('Old City Hospital')
          .addAlias('General Hospital')
          .build();

        expect(location.alias).toHaveLength(2);
      });

      it('should add types', () => {
        const location = new LocationBuilder()
          .addType({ coding: [{ code: 'HOSP', display: 'Hospital' }] })
          .addType({ coding: [{ code: 'ER', display: 'Emergency Room' }] })
          .build();

        expect(location.type).toHaveLength(2);
      });

      it('should add telecom', () => {
        const location = new LocationBuilder()
          .addTelecom({ system: 'phone', value: '555-1234' })
          .addTelecom({ system: 'email', value: 'info@hospital.org' })
          .build();

        expect(location.telecom).toHaveLength(2);
      });

      it('should add hours of operation', () => {
        const location = new LocationBuilder()
          .addHoursOfOperation({
            daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
            openingTime: '08:00:00',
            closingTime: '17:00:00',
          })
          .addHoursOfOperation({
            daysOfWeek: ['sat'],
            openingTime: '09:00:00',
            closingTime: '12:00:00',
          })
          .build();

        expect(location.hoursOfOperation).toHaveLength(2);
      });

      it('should add endpoints', () => {
        const location = new LocationBuilder()
          .addEndpoint({ reference: 'Endpoint/hl7-endpoint' })
          .addEndpoint({ reference: 'Endpoint/fhir-endpoint' })
          .build();

        expect(location.endpoint).toHaveLength(2);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const location = new LocationBuilder()
          .setId('location-chain')
          .setStatus('active')
          .setName('Imaging Center')
          .addType({ coding: [{ code: 'RADIOLOGY' }] })
          .addTelecom({ system: 'phone', value: '555-XRAY' })
          .setAddress({ city: 'Boston' })
          .build();

        expect(location.id).toBe('location-chain');
        expect(location.type).toHaveLength(1);
        expect(location.telecom).toHaveLength(1);
      });
    });
  });

  // ============================================================
  // Integration Tests (Clinical Scenarios)
  // ============================================================

  describe('Integration Tests', () => {
    it('should create hospital building location', () => {
      const location = new LocationBuilder()
        .setId('main-hospital')
        .setStatus('active')
        .addIdentifier({
          system: 'http://hospital-system.org/locations',
          value: 'BUILDING-MAIN',
        })
        .setName('Main Hospital Building')
        .addAlias('General Hospital')
        .addAlias('City Medical Center')
        .setDescription('Primary hospital building housing emergency services, surgery, and inpatient wards')
        .setMode('instance')
        .addType({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'HOSP',
              display: 'Hospital',
            },
          ],
        })
        .addTelecom({ system: 'phone', value: '555-HOSPITAL', use: 'work' })
        .addTelecom({ system: 'fax', value: '555-FAX-1234', use: 'work' })
        .addTelecom({ system: 'email', value: 'info@hospital.org' })
        .setAddress({
          use: 'work',
          type: 'physical',
          line: ['123 Medical Center Drive'],
          city: 'Springfield',
          state: 'IL',
          postalCode: '62701',
          country: 'USA',
        })
        .setPhysicalType({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
              code: 'bu',
              display: 'Building',
            },
          ],
        })
        .setPosition({
          longitude: -89.6501,
          latitude: 39.7817,
        })
        .setManagingOrganization({ reference: 'Organization/hospital-org', display: 'Springfield Hospital System' })
        .addHoursOfOperation({
          daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          allDay: true,
        })
        .build();

      expect(location.status).toBe('active');
      expect(location.name).toBe('Main Hospital Building');
      expect(location.physicalType?.coding?.[0]?.code).toBe('bu');
      expect(location.hoursOfOperation?.[0]?.allDay).toBe(true);
      expectSerializationRoundtrip(location);
    });

    it('should create operating room location', () => {
      const location = new LocationBuilder()
        .setId('or-1')
        .setStatus('active')
        .setOperationalStatus({
          system: 'http://terminology.hl7.org/CodeSystem/v2-0116',
          code: 'O',
          display: 'Occupied',
        })
        .setName('Operating Room 1')
        .setDescription('Equipped for general surgery procedures')
        .setMode('instance')
        .addType({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'OR',
              display: 'Operating Room',
            },
          ],
        })
        .setPhysicalType({ coding: [{ code: 'ro', display: 'Room' }] })
        .setPartOf({ reference: 'Location/surgical-wing' })
        .setManagingOrganization({ reference: 'Organization/hospital-1' })
        .build();

      expect(location.operationalStatus?.code).toBe('O');
      expect(location.partOf?.reference).toBe('Location/surgical-wing');
      expectSerializationRoundtrip(location);
    });

    it('should create clinic location with hours', () => {
      const location = new LocationBuilder()
        .setStatus('active')
        .setName('Family Medicine Clinic')
        .addType({ coding: [{ code: 'COMM', display: 'Community Clinic' }] })
        .setAddress({
          line: ['456 Health Street'],
          city: 'Springfield',
          postalCode: '62702',
        })
        .addTelecom({ system: 'phone', value: '555-CLINIC' })
        .addHoursOfOperation({
          daysOfWeek: ['mon', 'wed', 'fri'],
          openingTime: '08:00:00',
          closingTime: '17:00:00',
        })
        .addHoursOfOperation({
          daysOfWeek: ['tue', 'thu'],
          openingTime: '10:00:00',
          closingTime: '19:00:00',
        })
        .setAvailabilityExceptions('Closed on public holidays')
        .build();

      expect(location.hoursOfOperation).toHaveLength(2);
      expect(location.hoursOfOperation?.[0]?.openingTime).toBe('08:00:00');
      expect(location.availabilityExceptions).toContain('holidays');
      expectSerializationRoundtrip(location);
    });

    it('should create emergency department location', () => {
      const location = new LocationBuilder()
        .setStatus('active')
        .setName('Emergency Department')
        .setDescription('24/7 emergency medical services')
        .addType({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
              code: 'ER',
              display: 'Emergency Room',
            },
          ],
        })
        .setPhysicalType({ coding: [{ code: 'wi', display: 'Wing' }] })
        .addTelecom({ system: 'phone', value: '911' })
        .setPartOf({ reference: 'Location/main-hospital' })
        .addHoursOfOperation({
          daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          allDay: true,
        })
        .build();

      expect(location.hoursOfOperation?.[0]?.allDay).toBe(true);
      expect(location.type?.[0]?.coding?.[0]?.code).toBe('ER');
      expectSerializationRoundtrip(location);
    });

    it('should create patient room with bed location', () => {
      const location = new LocationBuilder()
        .setStatus('active')
        .setOperationalStatus({ code: 'U', display: 'Unoccupied' })
        .setName('Room 305-A')
        .setDescription('Semi-private room, bed A')
        .setMode('instance')
        .addType({ coding: [{ code: 'patient-room' }] })
        .setPhysicalType({ coding: [{ code: 'bd', display: 'Bed' }] })
        .setPartOf({ reference: 'Location/room-305', display: 'Room 305' })
        .setManagingOrganization({ reference: 'Organization/hospital-1' })
        .build();

      expect(location.operationalStatus?.code).toBe('U');
      expect(location.physicalType?.coding?.[0]?.code).toBe('bd');
      expectSerializationRoundtrip(location);
    });

    it('should create pharmacy location', () => {
      const location = new LocationBuilder()
        .setStatus('active')
        .setName('Main Pharmacy')
        .addType({ coding: [{ code: 'PHARM', display: 'Pharmacy' }] })
        .setPhysicalType({ coding: [{ code: 'ro', display: 'Room' }] })
        .addTelecom({ system: 'phone', value: '555-MEDS', use: 'work' })
        .addHoursOfOperation({
          daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri'],
          openingTime: '07:00:00',
          closingTime: '21:00:00',
        })
        .addHoursOfOperation({
          daysOfWeek: ['sat', 'sun'],
          openingTime: '09:00:00',
          closingTime: '17:00:00',
        })
        .setPartOf({ reference: 'Location/main-hospital' })
        .build();

      expect(location.type?.[0]?.coding?.[0]?.code).toBe('PHARM');
      expect(location.hoursOfOperation).toHaveLength(2);
      expectSerializationRoundtrip(location);
    });

    it('should create ambulance location (vehicle)', () => {
      const location = new LocationBuilder()
        .setStatus('active')
        .setName('Ambulance Unit 5')
        .setMode('kind')
        .addType({ coding: [{ code: 'AMB', display: 'Ambulance' }] })
        .setPhysicalType({ coding: [{ code: 've', display: 'Vehicle' }] })
        .setManagingOrganization({ reference: 'Organization/ems-service' })
        .addIdentifier({ system: 'http://ems.org/vehicles', value: 'AMB-005' })
        .build();

      expect(location.mode).toBe('kind');
      expect(location.physicalType?.coding?.[0]?.code).toBe('ve');
      expectSerializationRoundtrip(location);
    });

    it('should create radiology department with position', () => {
      const location = new LocationBuilder()
        .setStatus('active')
        .setName('Radiology Department')
        .setDescription('Imaging services including X-ray, CT, MRI')
        .addType({ coding: [{ code: 'RADIOLOGY', display: 'Radiology' }] })
        .setPhysicalType({ coding: [{ code: 'wi', display: 'Wing' }] })
        .setPosition({
          longitude: -122.4194,
          latitude: 37.7749,
          altitude: 12.5,
        })
        .addTelecom({ system: 'phone', value: '555-XRAY' })
        .setPartOf({ reference: 'Location/main-hospital' })
        .addEndpoint({ reference: 'Endpoint/pacs-system' })
        .build();

      expect(location.position?.altitude).toBe(12.5);
      expect(location.endpoint).toHaveLength(1);
      expectSerializationRoundtrip(location);
    });
  });
});
