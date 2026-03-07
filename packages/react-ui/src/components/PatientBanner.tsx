import type { ReactElement } from 'react';
import { useMemo } from 'react';
import { useSmartAuth, useFhirRead } from '@fhir-toolkit/react';
import type { IPatient } from '@fhir-toolkit/r4-types';
import { formatHumanName } from '../utils/format-human-name.js';
import { formatAddress } from '../utils/format-address.js';
import { getOfficialName } from '../utils/get-official-name.js';
import { calculateAge } from '../utils/calculate-age.js';
import type { PatientBannerProps, PatientBannerData } from '../types.js';

export function PatientBanner({
  patientId: patientIdProp,
  children,
}: PatientBannerProps): ReactElement {
  const { patientId: contextPatientId } = useSmartAuth();

  const rawId = patientIdProp ?? contextPatientId;
  const id = rawId?.replace(/^Patient\//, '') ?? null;

  const { data: patient, loading, error, refetch } = useFhirRead<IPatient>('Patient', id);

  const bannerData = useMemo((): PatientBannerData | null => {
    if (!patient) return null;

    const officialName = getOfficialName(patient.name ?? []);
    const displayName = officialName
      ? formatHumanName(officialName)
      : patient.name?.[0]
        ? formatHumanName(patient.name[0])
        : 'Unknown';

    const telecom = patient.telecom ?? [];
    const phone = telecom.find((t) => t.system === 'phone')?.value ?? null;
    const email = telecom.find((t) => t.system === 'email')?.value ?? null;

    const addresses = patient.address ?? [];
    const primaryAddress = addresses[0] ?? null;
    const formattedAddr = primaryAddress ? formatAddress(primaryAddress) : null;

    const identifiers = patient.identifier ?? [];
    const mrn =
      identifiers.find((ident) =>
        ident.type?.coding?.some((c) => c.code === 'MR'),
      )?.value ?? null;

    return {
      patient,
      displayName,
      names: patient.name ?? [],
      officialName,
      gender: patient.gender ?? null,
      birthDate: patient.birthDate ?? null,
      age: patient.birthDate ? calculateAge(patient.birthDate) : null,
      identifiers,
      telecom,
      addresses,
      formattedAddress: formattedAddr,
      phone,
      email,
      active: patient.active ?? true,
      mrn,
    };
  }, [patient]);

  return children({ data: bannerData, loading, error, refetch });
}
