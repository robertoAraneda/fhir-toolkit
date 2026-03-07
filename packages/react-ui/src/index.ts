// Components — Auth
export { LoginButton } from './components/LoginButton.js';
export { LogoutButton } from './components/LogoutButton.js';
export { AuthGuard } from './components/AuthGuard.js';
export { AuthStatus } from './components/AuthStatus.js';
export { PatientBanner } from './components/PatientBanner.js';

// Components — Data Display
export { FhirValue } from './components/FhirValue.js';
export { ResourceTable } from './components/ResourceTable.js';
export { ResourceDetail } from './components/ResourceDetail.js';
export { SearchForm } from './components/SearchForm.js';

// Component types
export type {
  // Auth
  LoginButtonProps,
  LoginButtonRenderProps,
  LogoutButtonProps,
  LogoutButtonRenderProps,
  AuthGuardProps,
  AuthStatusProps,
  AuthStatusRenderProps,
  PatientBannerProps,
  PatientBannerRenderProps,
  PatientBannerData,
  // Data Display
  FhirValueProps,
  FhirValueRenderProps,
  ColumnDef,
  Cell,
  Row,
  ResourceTableProps,
  ResourceTableRenderProps,
  FieldDef,
  RenderedField,
  ResourceDetailProps,
  ResourceDetailRenderProps,
  SearchParams,
  SearchFormProps,
  SearchFormRenderProps,
} from './types.js';

// Utilities
export { formatHumanName } from './utils/format-human-name.js';
export type { FormatHumanNameOptions } from './utils/format-human-name.js';
export { formatAddress } from './utils/format-address.js';
export type { FormatAddressOptions } from './utils/format-address.js';
export { formatContactPoint } from './utils/format-contact-point.js';
export { getOfficialName } from './utils/get-official-name.js';
export { calculateAge } from './utils/calculate-age.js';
export { formatCoding } from './utils/format-coding.js';
export { formatCodeableConcept } from './utils/format-codeable-concept.js';
export { formatQuantity } from './utils/format-quantity.js';
export { formatPeriod } from './utils/format-period.js';
export { formatReference } from './utils/format-reference.js';
export { formatRange } from './utils/format-range.js';
export { formatRatio } from './utils/format-ratio.js';
export { formatMoney } from './utils/format-money.js';
export { formatAnnotation } from './utils/format-annotation.js';
export { formatFhirValue } from './utils/format-fhir-value.js';
