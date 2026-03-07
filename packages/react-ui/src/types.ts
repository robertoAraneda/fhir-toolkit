import type { ReactNode, ReactElement } from 'react';
import type {
  AuthorizeOptions,
  SmartAuthError,
  TokenResponse,
  FhirClientError,
} from '@fhir-toolkit/react';
import type {
  IPatient,
  IHumanName,
  IAddress,
  IContactPoint,
  IIdentifier,
  IBundle,
  IResource,
} from '@fhir-toolkit/r4-types';

// ─── LoginButton ──────────────────────────────────────────────────────────

export interface LoginButtonRenderProps {
  login: () => void;
  isLoading: boolean;
  status: 'unauthorized' | 'authorizing' | 'authorized' | 'error';
  isAuthenticated: boolean;
}

export interface LoginButtonProps {
  authorizeOptions?: AuthorizeOptions;
  children?: (props: LoginButtonRenderProps) => ReactElement;
  onLogin?: () => void;
  'aria-label'?: string;
  disabled?: boolean;
  label?: string;
}

// ─── LogoutButton ─────────────────────────────────────────────────────────

export interface LogoutButtonRenderProps {
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface LogoutButtonProps {
  children?: (props: LogoutButtonRenderProps) => ReactElement;
  onLogout?: () => void;
  'aria-label'?: string;
  disabled?: boolean;
  label?: string;
}

// ─── AuthGuard ────────────────────────────────────────────────────────────

export interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
  loading?: ReactNode;
  error?: (error: SmartAuthError) => ReactElement;
  requirePatient?: boolean;
}

// ─── AuthStatus ───────────────────────────────────────────────────────────

export interface AuthStatusRenderProps {
  status: 'unauthorized' | 'authorizing' | 'authorized' | 'error';
  isAuthenticated: boolean;
  error: SmartAuthError | null;
  patientId: string | null;
  encounterId: string | null;
  fhirUser: string | null;
  tokenResponse: TokenResponse | null;
}

export interface AuthStatusProps {
  children: (props: AuthStatusRenderProps) => ReactElement;
}

// ─── PatientBanner ────────────────────────────────────────────────────────

export interface PatientBannerData {
  patient: IPatient;
  displayName: string;
  names: IHumanName[];
  officialName: IHumanName | null;
  gender: string | null;
  birthDate: string | null;
  age: number | null;
  identifiers: IIdentifier[];
  telecom: IContactPoint[];
  addresses: IAddress[];
  formattedAddress: string | null;
  phone: string | null;
  email: string | null;
  active: boolean;
  mrn: string | null;
}

export interface PatientBannerRenderProps {
  data: PatientBannerData | null;
  loading: boolean;
  error: FhirClientError | null;
  refetch: () => void;
}

export interface PatientBannerProps {
  patientId?: string;
  children: (props: PatientBannerRenderProps) => ReactElement;
}

// ─── FhirValue ─────────────────────────────────────────────────────────────

export interface FhirValueRenderProps {
  formatted: string;
  raw: unknown;
  type: string;
}

export interface FhirValueProps {
  value: unknown;
  type: string;
  children?: (props: FhirValueRenderProps) => ReactElement;
}

// ─── ResourceTable ─────────────────────────────────────────────────────────

export interface ColumnDef<T = IResource> {
  header: string;
  accessor: (resource: T) => unknown;
  type?: string;
}

export interface Cell {
  value: unknown;
  formatted: string;
}

export interface Row<T = IResource> {
  resource: T;
  cells: Cell[];
}

export interface ResourceTableRenderProps<T = IResource> {
  rows: Row<T>[];
  columns: ColumnDef<T>[];
  total: number | undefined;
  resources: T[];
}

export interface ResourceTableProps<T = IResource> {
  bundle: IBundle;
  columns: ColumnDef<T>[];
  children: (props: ResourceTableRenderProps<T>) => ReactElement;
}

// ─── ResourceDetail ────────────────────────────────────────────────────────

export interface FieldDef<T = IResource> {
  label: string;
  accessor: (resource: T) => unknown;
  type?: string;
}

export interface RenderedField {
  label: string;
  value: unknown;
  formatted: string;
}

export interface ResourceDetailRenderProps {
  fields: RenderedField[];
}

export interface ResourceDetailProps<T = IResource> {
  resource: T;
  fields: FieldDef<T>[];
  children: (props: ResourceDetailRenderProps) => ReactElement;
}

// ─── SearchForm ────────────────────────────────────────────────────────────

export type SearchParams = Record<string, string>;

export interface SearchFormRenderProps {
  params: SearchParams;
  setParam: (key: string, value: string) => void;
  submit: (e?: { preventDefault?: () => void }) => void;
  reset: () => void;
  isDirty: boolean;
}

export interface SearchFormProps {
  initialParams: SearchParams;
  onSearch: (params: SearchParams) => void;
  children: (props: SearchFormRenderProps) => ReactElement;
}
