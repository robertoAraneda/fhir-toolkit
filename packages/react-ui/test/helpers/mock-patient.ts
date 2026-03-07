import type { IPatient } from '@fhir-toolkit/r4-types';

export const MOCK_PATIENT: IPatient = {
  resourceType: 'Patient',
  id: '789',
  active: true,
  name: [
    {
      use: 'official',
      family: 'Smith',
      given: ['John', 'Michael'],
      prefix: ['Mr.'],
    },
    {
      use: 'nickname',
      given: ['Johnny'],
    },
  ],
  gender: 'male',
  birthDate: '1990-05-15',
  identifier: [
    {
      type: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
            code: 'MR',
          },
        ],
      },
      system: 'http://hospital.example.com',
      value: 'MRN-12345',
    },
  ],
  telecom: [
    { system: 'phone', value: '555-123-4567', use: 'home' },
    { system: 'email', value: 'john.smith@example.com', use: 'home' },
  ],
  address: [
    {
      use: 'home',
      line: ['123 Main St', 'Apt 4B'],
      city: 'Springfield',
      state: 'IL',
      postalCode: '62701',
      country: 'US',
    },
  ],
};
