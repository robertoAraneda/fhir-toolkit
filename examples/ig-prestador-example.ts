/**
 * Ejemplo: Validación de CorePrestadorCl (Practitioner)
 *
 * Este ejemplo demuestra la validación de un recurso Practitioner
 * contra el perfil CorePrestadorCl de la guía CL Core Chile.
 *
 * Perfil: https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePrestadorCl
 */

import { FhirValidator } from '@fhir-toolkit/yafv';
import { resolve } from 'path';

const IG_PATH = resolve(import.meta.dirname, 'ig-test/package');
const CORE_PRESTADOR_CL_PROFILE =
  'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePrestadorCl';

async function main() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('  Ejemplo: Validación de CorePrestadorCl (Practitioner)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // 1. Inicializar validador
  console.log('1. Inicializando validador...');
  const validator = new FhirValidator();
  await validator.initialize();
  console.log('   ✓ Validador inicializado\n');

  // 2. Cargar IG CL Core
  console.log('2. Cargando Guía de Implementación CL Core...');
  const result = await validator.loadIGWithMetadata(IG_PATH);
  console.log(`   ✓ Cargados ${result.count} recursos`);
  console.log(`   ✓ Paquete: ${result.packageName}@${result.packageVersion}\n`);

  // ═══════════════════════════════════════════════════════════════
  // CASO 1: Prestador VÁLIDO
  // ═══════════════════════════════════════════════════════════════
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('CASO 1: Prestador VÁLIDO según CorePrestadorCl');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const prestadorValido = {
    resourceType: 'Practitioner',
    meta: {
      profile: [CORE_PRESTADOR_CL_PROFILE],
    },
    // identifier es requerido (1..*)
    // Slices disponibles: run, rnpi, pasaporte, otro
    identifier: [
      {
        use: 'official', // requerido en slice run
        type: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSIdentificadores',
              code: '1', // RUN
              display: 'RUN',
            },
          ],
        },
        system: 'http://registrocivil.cl/run',
        value: '15.666.378-2',
      },
    ],
    active: true,
    // name con family requerido (1..1) y given requerido (1..*)
    name: [
      {
        use: 'official',
        family: 'Gonzalez',
        // Extensión segundoApellido es opcional pero mustSupport
        _family: {
          extension: [
            {
              url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SegundoApellido',
              valueString: 'Martinez',
            },
          ],
        },
        given: ['Juan', 'Pablo'],
      },
    ],
    telecom: [
      {
        system: 'phone',
        value: '+56912345678',
        use: 'mobile',
      },
      {
        system: 'email',
        value: 'juan.gonzalez@hospital.cl',
        use: 'work',
      },
    ],
    gender: 'male',
    birthDate: '1980-05-15',
    // qualification con slices: Cert, Esp, SubEsp
    qualification: [
      {
        // Slice Cert - Certificación/Título
        identifier: [
          {
            value: 'cert-12345',
          },
        ],
        code: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSTituloProfesional',
              code: '1', // Médico Cirujano
              display: 'Médico Cirujano',
            },
          ],
          text: 'Médico Cirujano - Universidad de Chile',
        },
        issuer: {
          display: 'Universidad de Chile',
        },
      },
      {
        // Slice Esp - Especialidad
        identifier: [
          {
            value: 'esp-67890',
          },
        ],
        code: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSEspecialidadMedCl',
              code: '1', // Anatomía Patológica
              display: 'Anatomía Patológica',
            },
          ],
          text: 'Especialista en Anatomía Patológica',
        },
        issuer: {
          display: 'CONACEM',
        },
      },
    ],
  };

  console.log('Recurso:');
  console.log(JSON.stringify(prestadorValido, null, 2));
  console.log('\nValidando...\n');

  const resultado1 = await validator.validate(prestadorValido, { includeWarnings: true });
  imprimirResultado(resultado1);

  // ═══════════════════════════════════════════════════════════════
  // CASO 2: Prestador INVÁLIDO - falta identifier
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 2: Prestador INVÁLIDO - falta identifier');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const prestadorSinIdentifier = {
    resourceType: 'Practitioner',
    meta: {
      profile: [CORE_PRESTADOR_CL_PROFILE],
    },
    name: [
      {
        family: 'Perez',
        given: ['Maria'],
      },
    ],
  };

  console.log('Recurso (sin identifier):');
  console.log(JSON.stringify(prestadorSinIdentifier, null, 2));
  console.log('\nValidando...\n');

  const resultado2 = await validator.validate(prestadorSinIdentifier, { includeWarnings: true });
  imprimirResultado(resultado2);

  // ═══════════════════════════════════════════════════════════════
  // CASO 3: Prestador INVÁLIDO - falta given en name
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 3: Prestador INVÁLIDO - falta given en name');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const prestadorSinGiven = {
    resourceType: 'Practitioner',
    meta: {
      profile: [CORE_PRESTADOR_CL_PROFILE],
    },
    identifier: [
      {
        use: 'official',
        system: 'http://registrocivil.cl/run',
        value: '12.345.678-9',
      },
    ],
    name: [
      {
        family: 'Rodriguez',
        // Falta given que es requerido (1..*)
      },
    ],
  };

  console.log('Recurso (sin given):');
  console.log(JSON.stringify(prestadorSinGiven, null, 2));
  console.log('\nValidando...\n');

  const resultado3 = await validator.validate(prestadorSinGiven, { includeWarnings: true });
  imprimirResultado(resultado3);

  // ═══════════════════════════════════════════════════════════════
  // CASO 4: Prestador con múltiples identificadores (slices)
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 4: Prestador con múltiples identificadores (slices)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const prestadorMultipleId = {
    resourceType: 'Practitioner',
    meta: {
      profile: [CORE_PRESTADOR_CL_PROFILE],
    },
    identifier: [
      {
        // Slice: run
        use: 'official',
        type: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSIdentificadores',
              code: '1', // RUN
              display: 'RUN',
            },
          ],
        },
        system: 'http://registrocivil.cl/run',
        value: '15.666.378-2',
      },
      {
        // Slice: rnpi (Registro Nacional de Prestadores Individuales)
        use: 'secondary',
        type: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSIdentificadores',
              code: '2', // RNPI
              display: 'RNPI',
            },
          ],
        },
        system: 'https://rnpi.superdesalud.gob.cl/',
        value: '123456',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'Silva',
        given: ['Ana', 'Maria'],
      },
    ],
    gender: 'female',
  };

  console.log('Recurso (con RUN y RNPI):');
  console.log(JSON.stringify(prestadorMultipleId, null, 2));
  console.log('\nValidando...\n');

  const resultado4 = await validator.validate(prestadorMultipleId, { includeWarnings: true });
  imprimirResultado(resultado4);

  // ═══════════════════════════════════════════════════════════════
  // CASO 5: Prestador con extensiones de género
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 5: Prestador con extensiones de género');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const prestadorConExtensiones = {
    resourceType: 'Practitioner',
    meta: {
      profile: [CORE_PRESTADOR_CL_PROFILE],
    },
    // Extensiones de género (mustSupport)
    extension: [
      {
        url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/IdentidadDeGenero',
        valueCodeableConcept: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSIdentidaddeGenero',
              code: '1',
              display: 'Masculino',
            },
          ],
        },
      },
      {
        url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SexoBiologico',
        valueCodeableConcept: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSSexoBiologico',
              code: '1',
              display: 'Hombre',
            },
          ],
        },
      },
    ],
    identifier: [
      {
        use: 'official',
        system: 'http://registrocivil.cl/run',
        value: '18.765.432-1',
      },
    ],
    name: [
      {
        family: 'Torres',
        given: ['Carlos'],
      },
    ],
    gender: 'male',
  };

  console.log('Recurso (con extensiones IdentidadDeGenero y SexoBiologico):');
  console.log(JSON.stringify(prestadorConExtensiones, null, 2));
  console.log('\nValidando...\n');

  const resultado5 = await validator.validate(prestadorConExtensiones, { includeWarnings: true });
  imprimirResultado(resultado5);

  // ═══════════════════════════════════════════════════════════════
  // REFERENCIA: Estructura de CorePrestadorCl
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('REFERENCIA: Estructura de CorePrestadorCl');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('Elementos requeridos:\n');
  console.log('  Elemento                    | Card  | Descripción');
  console.log('  ----------------------------|-------|---------------------------');
  console.log('  identifier                  | 1..*  | Al menos un identificador');
  console.log('  name.family                 | 1..1  | Apellido paterno');
  console.log('  name.given                  | 1..*  | Nombre(s)');
  console.log();
  console.log('Slices de identifier:');
  console.log('  - run:      RUN chileno (0..1)');
  console.log('  - rnpi:     Registro Nacional de Prestadores (0..1)');
  console.log('  - pasaporte: Pasaporte (0..1)');
  console.log('  - otro:     Otro identificador (0..1)');
  console.log();
  console.log('Slices de qualification:');
  console.log('  - Cert:    Certificación/Título profesional (0..*)');
  console.log('  - Esp:     Especialidad médica (0..*)');
  console.log('  - SubEsp:  Sub-especialidad (0..*)');
  console.log();
  console.log('Extensiones (mustSupport):');
  console.log('  - IdentidadDeGenero: Identidad de género (0..1)');
  console.log('  - SexoBiologico:     Sexo biológico (0..1)');
  console.log('  - SegundoApellido:   Segundo apellido en name.family (0..1)\n');

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('  Fin del ejemplo');
  console.log('═══════════════════════════════════════════════════════════════\n');
}

function imprimirResultado(outcome: any) {
  const errors = outcome.issue.filter((i: any) => i.severity === 'error');
  const warnings = outcome.issue.filter((i: any) => i.severity === 'warning');
  const info = outcome.issue.filter((i: any) => i.severity === 'information');

  if (errors.length === 0) {
    console.log('✓ VÁLIDO');
  } else {
    console.log('✗ INVÁLIDO');
  }

  console.log(`   Errores: ${errors.length}, Warnings: ${warnings.length}, Info: ${info.length}`);

  if (errors.length > 0) {
    console.log('\n   Errores encontrados:');
    for (const error of errors.slice(0, 10)) {
      console.log(`   - [${error.code}] ${error.diagnostics}`);
      if (error.expression) {
        console.log(`     Path: ${error.expression.join(', ')}`);
      }
    }
    if (errors.length > 10) {
      console.log(`   ... y ${errors.length - 10} errores más`);
    }
  }

  if (warnings.length > 0) {
    console.log('\n   Warnings:');
    for (const warning of warnings.slice(0, 5)) {
      console.log(`   - [${warning.code}] ${warning.diagnostics}`);
      if (warning.expression) {
        console.log(`     Path: ${warning.expression.join(', ')}`);
      }
    }
    if (warnings.length > 5) {
      console.log(`   ... y ${warnings.length - 5} warnings más`);
    }
  }
}

main().catch(console.error);
