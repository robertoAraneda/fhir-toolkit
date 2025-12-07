/**
 * Ejemplo: Validación con Guía de Implementación CL Core (Chile)
 *
 * Este ejemplo demuestra cómo cargar una Guía de Implementación externa
 * y validar recursos contra perfiles personalizados.
 *
 * Guía: https://hl7chile.cl/fhir/ig/clcore/1.8.5/
 *
 * Opciones de carga de IG soportadas:
 * - Directorio local: './path/to/package'
 * - Archivo .tgz: './hl7.fhir.cl.clcore-1.8.5.tgz'
 * - URL HTTP: 'https://packages.fhir.org/hl7.fhir.cl.clcore/1.8.5'
 * - Registro FHIR: 'hl7.fhir.cl.clcore@1.8.5' o 'hl7.fhir.cl.clcore#1.8.5'
 * - Última versión: 'hl7.fhir.cl.clcore' (sin versión)
 */

import { IPatient } from '@fhir-toolkit/r4-models';
import { FhirValidator } from '@fhir-toolkit/yafv';
import { resolve } from 'path';

// ═══════════════════════════════════════════════════════════════
// CONFIGURACIÓN: Elige el método de carga del IG
// ═══════════════════════════════════════════════════════════════

// Opción 1: Desde directorio local (descomprimido)
const IG_PATH = resolve(import.meta.dirname, 'ig-test/package');

// Opción 2: Desde archivo .tgz (descargado localmente)
// const IG_PATH = resolve(import.meta.dirname, 'hl7.fhir.cl.clcore-1.8.5.tgz');

// Opción 3: Desde URL directa (descarga automática)
// const IG_PATH = 'https://packages.fhir.org/hl7.fhir.cl.clcore/1.8.5';

// Opción 4: Desde registro FHIR (packages.fhir.org)
// const IG_PATH = 'hl7.fhir.cl.clcore@1.8.5';  // Con versión específica
// const IG_PATH = 'hl7.fhir.cl.clcore#1.8.5';  // Formato alternativo
// const IG_PATH = 'hl7.fhir.cl.clcore';         // Última versión disponible

// URL del perfil CorePacienteCl
const CORE_PACIENTE_CL_PROFILE =
  'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePacienteCl';

async function main() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('  Ejemplo: Validación con CL Core (Guía de Implementación Chile)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // 1. Crear validador e inicializar
  console.log('1. Inicializando validador...');
  const validator = new FhirValidator();
  await validator.initialize();
  console.log('   ✓ Validador inicializado con specs R4 base\n');

  // 2. Cargar la Guía de Implementación CL Core
  console.log('2. Cargando Guía de Implementación CL Core...');
  console.log(`   Fuente: ${IG_PATH}\n`);

  // Puedes usar loadIG (retorna solo el conteo) o loadIGWithMetadata (retorna más info)
  const result = await validator.loadIGWithMetadata(IG_PATH);
  console.log(`   ✓ Cargados ${result.count} recursos`);
  if (result.packageName) {
    console.log(`   ✓ Paquete: ${result.packageName}@${result.packageVersion || 'unknown'}`);
  }
  console.log();

  // Ejemplo: listar versiones disponibles de un paquete (requiere conexión a internet)
  // const versions = await validator.listPackageVersions('hl7.fhir.cl.clcore');
  // console.log('   Versiones disponibles:', versions.slice(0, 5).join(', '), '...');
  //
  // const latest = await validator.getLatestPackageVersion('hl7.fhir.cl.clcore');
  // console.log('   Última versión:', latest);

  // ═══════════════════════════════════════════════════════════════
  // CASO 1: Paciente válido según CL Core
  // ═══════════════════════════════════════════════════════════════
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('CASO 1: Paciente VÁLIDO según CorePacienteCl');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const pacienteValido: IPatient = {
    resourceType: 'Patient',
    meta: {
      profile: [CORE_PACIENTE_CL_PROFILE],
    },
    text: {
      status: 'generated',
      div: '<div xmlns="http://www.w3.org/1999/xhtml">Paciente válido según CL Core</div>',
    },
    // identifier es requerido (1..*) en CorePacienteCl
    identifier: [
      {
        use: 'official',
        type: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSTipoIdentificador',
              code: '01', // Valid code for RUN (códigos válidos: 01-09)
              display: 'Run', // Display correcto según el CodeSystem
            },
          ],
        },
        system: 'http://registrocivil.cl/run',
        value: '12345678-9',
      },
    ],
    name: [
      {
        use: 'official', // Invalid code to test error message format
        family: 'González',
        given: ['María', 'José'],
      },
    ],
    gender: 'female',
    birthDate: '1990-05-15',
    contact: [
      {
        extension: [
          {
            url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/IdContacto',
            extension: [
              {
                url: 'tutId',
                valueIdentifier:{

                },
              },
            ],
          },
        ],
        name: {
          family: '',
          _family: {
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/humanname-own-prefix',
                valueString: 'Sra.',
              },
            ],
          },
        },
        relationship: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                code: 'E', // 'E' = Emergency
                display: 'Employer',
              },
            ],
          },
        ],
      },
    ],
  };

  console.log('Recurso:');
  console.log(JSON.stringify(pacienteValido, null, 2));
  console.log('\nValidando...\n');

  const resultado1 = await validator.validate(pacienteValido);
  console.log("Resultado de la validación:", JSON.stringify(resultado1, null, 2), '\n');
  imprimirResultado(resultado1);

  // ═══════════════════════════════════════════════════════════════
  // CASO 2: Paciente INVÁLIDO - falta identifier (requerido en CL Core)
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 2: Paciente INVÁLIDO - falta identifier');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const pacienteSinIdentifier = {
    resourceType: 'Patient',
    meta: {
      profile: [CORE_PACIENTE_CL_PROFILE],
    },
    // SIN identifier - esto viola el perfil CL Core que requiere 1..*
    name: [
      {
        use: 'official',
        family: 'Pérez',
        given: ['Juan'],
      },
    ],
    gender: 'male',
  };

  console.log('Recurso (sin identifier):');
  console.log(JSON.stringify(pacienteSinIdentifier, null, 2));
  console.log('\nValidando...\n');

  const resultado2 = await validator.validate(pacienteSinIdentifier);
  imprimirResultado(resultado2);

  // ═══════════════════════════════════════════════════════════════
  // CASO 3: Validar explícitamente contra el perfil
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 3: Validación explícita contra perfil (sin meta.profile)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const pacienteSinMeta = {
    resourceType: 'Patient',
    // Sin meta.profile, pero validamos explícitamente contra el perfil
    identifier: [
      {
        use: 'official',
        system: 'http://registrocivil.cl/run',
        value: '98765432-1',
      },
    ],
    name: [{ family: 'Silva' }],
  };

  console.log('Recurso (sin meta.profile):');
  console.log(JSON.stringify(pacienteSinMeta, null, 2));
  console.log(`\nValidando contra perfil: ${CORE_PACIENTE_CL_PROFILE}\n`);

  const resultado3 = await validator.validate(pacienteSinMeta, {
    profile: CORE_PACIENTE_CL_PROFILE,
  });
  imprimirResultado(resultado3);

  // ═══════════════════════════════════════════════════════════════
  // CASO 4: Paciente FHIR base (sin perfil CL Core)
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 4: Paciente FHIR base (sin perfil CL Core)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const pacienteBase = {
    resourceType: 'Patient',
    // Sin meta.profile - se valida solo contra FHIR R4 base
    name: [{ family: 'Smith', given: ['John'] }],
    gender: 'male',
  };

  console.log('Recurso (FHIR base, sin identifier):');
  console.log(JSON.stringify(pacienteBase, null, 2));
  console.log('\nValidando contra FHIR R4 base (sin perfil CL Core)...\n');

  const resultado4 = await validator.validate(pacienteBase);
  imprimirResultado(resultado4);
  console.log('   → En FHIR R4 base, identifier es opcional (0..*)\n');

  // ═══════════════════════════════════════════════════════════════
  // CASO 5: Paciente con extensiones CL Core
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 5: Paciente con extensiones CL Core');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // URLs de extensiones CL Core
  const IDENTIDAD_GENERO_URL =
    'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/IdentidadDeGenero';
  const SEXO_BIOLOGICO_URL =
    'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SexoBiologico';
  const NACIONALIDAD_URL =
    'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CodigoPaises';

  // CodeSystem URLs
  const IDENTIDAD_GENERO_CS =
    'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSIdentidaddeGenero';

  const pacienteConExtensiones = {
    resourceType: 'Patient',
    meta: {
      profile: [CORE_PACIENTE_CL_PROFILE],
    },
    // Extensiones CL Core
    extension: [
      // IdentidadDeGenero - Identidad de género autodeclarada
      {
        url: IDENTIDAD_GENERO_URL,
        valueCodeableConcept: {
          coding: [
            {
              system: IDENTIDAD_GENERO_CS,
              code: '2',
              display: 'Femenina',
            },
          ],
        },
      },
      // SexoBiologico - Sexo biológico asignado al nacer
      {
        url: SEXO_BIOLOGICO_URL,
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://hl7.org/fhir/administrative-gender',
              code: 'female',
              display: 'Female',
            },
          ],
        },
      },
      // Nacionalidad - País de nacionalidad
      {
        url: NACIONALIDAD_URL,
        valueCodeableConcept: {
          coding: [
            {
              system: 'urn:iso:std:iso:3166',
              code: 'CL',
              display: 'Chile',
            },
          ],
        },
      },
    ],
    identifier: [
      {
        use: 'official',
        type: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSTipoIdentificador',
              code: '01', // Valid code for RUN
              display: 'Run',
            },
          ],
        },
        system: 'http://registrocivil.cl/run',
        value: '12345678-9',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'González Muñoz',
        given: ['María', 'José'],
      },
    ],
    gender: 'female',
    birthDate: '1990-05-15',
  };

  console.log('Recurso con extensiones CL Core:');
  console.log('  - IdentidadDeGenero: Femenina');
  console.log('  - SexoBiologico: Female');
  console.log('  - Nacionalidad: Chile\n');
  console.log(JSON.stringify(pacienteConExtensiones, null, 2));
  console.log('\nValidando...\n');

  const resultado5 = await validator.validate(pacienteConExtensiones);
  imprimirResultado(resultado5);
  // Nota: Los errores de Patient.contact son un problema conocido del validador
  // cuando valida cardinalidad de elementos opcionales no presentes en el recurso.
  // Las extensiones se validan correctamente.

  // ═══════════════════════════════════════════════════════════════
  // CASO 6: Paciente transgénero con extensiones
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 6: Paciente transgénero (identidad de género ≠ sexo biológico)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const pacienteTransgenero = {
    resourceType: 'Patient',
    meta: {
      profile: [CORE_PACIENTE_CL_PROFILE],
    },
    extension: [
      // Identidad de género: Transgénero Masculino
      {
        url: IDENTIDAD_GENERO_URL,
        valueCodeableConcept: {
          coding: [
            {
              system: IDENTIDAD_GENERO_CS,
              code: '4',
              display: 'Transgénero Masculino',
            },
          ],
        },
      },
      // Sexo biológico asignado al nacer: Female
      {
        url: SEXO_BIOLOGICO_URL,
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://hl7.org/fhir/administrative-gender',
              code: 'female',
              display: 'Female',
            },
          ],
        },
      },
    ],
    identifier: [
      {
        use: 'official',
        system: 'http://registrocivil.cl/run',
        value: '98765432-1',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'Martínez',
        given: ['Carlos'],
      },
    ],
    // gender administrativo puede diferir de la identidad de género
    gender: 'male',
  };

  console.log('Recurso - Paciente transgénero:');
  console.log('  - IdentidadDeGenero: Transgénero Masculino (código 4)');
  console.log('  - SexoBiologico: Female (sexo asignado al nacer)');
  console.log('  - gender (administrativo): male\n');
  console.log('  → Esto es válido: la identidad de género puede diferir del sexo biológico\n');
  console.log(JSON.stringify(pacienteTransgenero, null, 2));
  console.log('\nValidando...\n');

  const resultado6 = await validator.validate(pacienteTransgenero);
  imprimirResultado(resultado6);

  // ═══════════════════════════════════════════════════════════════
  // CASO 7: Paciente extranjero con nacionalidad
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 7: Paciente extranjero (nacionalidad diferente a Chile)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const pacienteExtranjero = {
    resourceType: 'Patient',
    meta: {
      profile: [CORE_PACIENTE_CL_PROFILE],
    },
    extension: [
      // Nacionalidad: Venezuela
      {
        url: NACIONALIDAD_URL,
        valueCodeableConcept: {
          coding: [
            {
              system: 'urn:iso:std:iso:3166',
              code: 'VE',
              display: 'Venezuela (Bolivarian Republic of)',
            },
          ],
        },
      },
    ],
    identifier: [
      {
        use: 'official',
        type: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSTipoIdentificador',
              code: '04', // Valid code for Pasaporte (códigos válidos: 01-09)
              display: 'Número de pasaporte',
            },
          ],
        },
        system: 'urn:example:pasaporte',
        value: 'VE123456789',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'Rodríguez',
        given: ['Ana', 'María'],
      },
    ],
    gender: 'female',
    birthDate: '1985-10-20',
  };

  console.log('Recurso - Paciente extranjero:');
  console.log('  - Nacionalidad: Venezuela (VE)');
  console.log('  - Tipo identificador: PASAPORTE\n');
  console.log(JSON.stringify(pacienteExtranjero, null, 2));
  console.log('\nValidando...\n');

  const resultado7 = await validator.validate(pacienteExtranjero);
  imprimirResultado(resultado7);

  // ═══════════════════════════════════════════════════════════════
  // CASO 8: Paciente con dirección CL Core completa
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 8: Paciente con dirección CL Core (formato chileno)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // URLs de extensiones de dirección CL Core
  const COMUNAS_URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ComunasCl';
  const PROVINCIAS_URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ProvinciasCl';
  const REGIONES_URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/RegionesCl';
  const PAISES_URL = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CodigoPaises';

  // CodeSystem URLs
  const CS_COMUNAS = 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSCodComunasCL';
  const CS_PROVINCIAS = 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSCodProvinciasCL';
  const CS_REGIONES = 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSCodRegionCL';

  const pacienteConDireccion = {
    resourceType: 'Patient',
    meta: {
      profile: [CORE_PACIENTE_CL_PROFILE],
    },
    identifier: [
      {
        use: 'official',
        type: {
          coding: [
            {
              system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSTipoIdentificador',
              code: '01', // Valid code for RUN
              display: 'Run',
            },
          ],
        },
        system: 'http://registrocivil.cl/run',
        value: '12345678-9',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'González Muñoz',
        given: ['María', 'José'],
      },
    ],
    gender: 'female',
    birthDate: '1990-05-15',
    // Dirección con formato CL Core
    address: [
      {
        use: 'home',
        line: ['Av. Providencia 1234, Depto 501'],
        // city = Comuna (con extensión de código)
        city: 'Providencia',
        _city: {
          extension: [
            {
              url: COMUNAS_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_COMUNAS,
                    code: '13123',
                    display: 'Providencia',
                  },
                ],
              },
            },
          ],
        },
        // district = Provincia (con extensión de código)
        district: 'Santiago',
        _district: {
          extension: [
            {
              url: PROVINCIAS_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_PROVINCIAS,
                    code: '131',
                    display: 'Santiago',
                  },
                ],
              },
            },
          ],
        },
        // state = Región (con extensión de código)
        state: 'Metropolitana de Santiago',
        _state: {
          extension: [
            {
              url: REGIONES_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_REGIONES,
                    code: '13',
                    display: 'Metropolitana de Santiago',
                  },
                ],
              },
            },
          ],
        },
        // country = País (con extensión de código)
        country: 'Chile',
        _country: {
          extension: [
            {
              url: PAISES_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'urn:iso:std:iso:3166',
                    code: 'CL',
                    display: 'Chile',
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  };

  console.log('Recurso - Paciente con dirección CL Core:');
  console.log('  - line: Av. Providencia 1234, Depto 501');
  console.log('  - city (Comuna): Providencia (código 13123)');
  console.log('  - district (Provincia): Santiago (código 131)');
  console.log('  - state (Región): Metropolitana de Santiago (código 13)');
  console.log('  - country (País): Chile (CL)\n');
  console.log(JSON.stringify(pacienteConDireccion, null, 2));
  console.log('\nValidando...\n');

  const resultado8 = await validator.validate(pacienteConDireccion);
  imprimirResultado(resultado8);

  // ═══════════════════════════════════════════════════════════════
  // CASO 9: Paciente con múltiples direcciones (casa y trabajo)
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 9: Paciente con múltiples direcciones (casa y trabajo)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const pacienteMultiplesDirecciones = {
    resourceType: 'Patient',
    meta: {
      profile: [CORE_PACIENTE_CL_PROFILE],
    },
    identifier: [
      {
        use: 'official',
        system: 'http://registrocivil.cl/run',
        value: '98765432-1',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'Pérez López',
        given: ['Juan', 'Pablo'],
      },
    ],
    gender: 'male',
    address: [
      // Dirección de casa (Las Condes)
      {
        use: 'home',
        line: ['Los Militares 5890, Casa 12'],
        city: 'Las Condes',
        _city: {
          extension: [
            {
              url: COMUNAS_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_COMUNAS,
                    code: '13114',
                    display: 'Las Condes',
                  },
                ],
              },
            },
          ],
        },
        district: 'Santiago',
        _district: {
          extension: [
            {
              url: PROVINCIAS_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_PROVINCIAS,
                    code: '131',
                    display: 'Santiago',
                  },
                ],
              },
            },
          ],
        },
        state: 'Metropolitana de Santiago',
        _state: {
          extension: [
            {
              url: REGIONES_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_REGIONES,
                    code: '13',
                    display: 'Metropolitana de Santiago',
                  },
                ],
              },
            },
          ],
        },
        country: 'Chile',
        _country: {
          extension: [
            {
              url: PAISES_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'urn:iso:std:iso:3166',
                    code: 'CL',
                    display: 'Chile',
                  },
                ],
              },
            },
          ],
        },
      },
      // Dirección de trabajo (Ñuñoa)
      {
        use: 'work',
        line: ['Irarrázaval 2401, Oficina 301'],
        city: 'Ñuñoa',
        _city: {
          extension: [
            {
              url: COMUNAS_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_COMUNAS,
                    code: '13120',
                    display: 'ÑuÑoa',
                  },
                ],
              },
            },
          ],
        },
        district: 'Santiago',
        _district: {
          extension: [
            {
              url: PROVINCIAS_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_PROVINCIAS,
                    code: '131',
                    display: 'Santiago',
                  },
                ],
              },
            },
          ],
        },
        state: 'Metropolitana de Santiago',
        _state: {
          extension: [
            {
              url: REGIONES_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_REGIONES,
                    code: '13',
                    display: 'Metropolitana de Santiago',
                  },
                ],
              },
            },
          ],
        },
        country: 'Chile',
        _country: {
          extension: [
            {
              url: PAISES_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'urn:iso:std:iso:3166',
                    code: 'CL',
                    display: 'Chile',
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  };

  console.log('Recurso - Paciente con múltiples direcciones:');
  console.log('  Dirección 1 (home):');
  console.log('    - Los Militares 5890, Casa 12');
  console.log('    - Las Condes, Santiago, RM');
  console.log('  Dirección 2 (work):');
  console.log('    - Irarrázaval 2401, Oficina 301');
  console.log('    - Ñuñoa, Santiago, RM\n');
  console.log(JSON.stringify(pacienteMultiplesDirecciones, null, 2));
  console.log('\nValidando...\n');

  const resultado9 = await validator.validate(pacienteMultiplesDirecciones);
  imprimirResultado(resultado9);

  // ═══════════════════════════════════════════════════════════════
  // CASO 10: Paciente de otra región (Valparaíso)
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 10: Paciente de región diferente (Valparaíso)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const pacienteValparaiso = {
    resourceType: 'Patient',
    meta: {
      profile: [CORE_PACIENTE_CL_PROFILE],
    },
    identifier: [
      {
        use: 'official',
        system: 'http://registrocivil.cl/run',
        value: '11222333-4',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'Soto Vargas',
        given: ['Carmen', 'Gloria'],
      },
    ],
    gender: 'female',
    address: [
      {
        use: 'home',
        line: ['Av. Brasil 1850, Depto 203'],
        city: 'Valparaíso',
        _city: {
          extension: [
            {
              url: COMUNAS_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_COMUNAS,
                    code: '05101',
                    display: 'Valparaíso',
                  },
                ],
              },
            },
          ],
        },
        district: 'Valparaíso',
        _district: {
          extension: [
            {
              url: PROVINCIAS_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_PROVINCIAS,
                    code: '051',
                    display: 'Valparaíso',
                  },
                ],
              },
            },
          ],
        },
        state: 'Valparaíso',
        _state: {
          extension: [
            {
              url: REGIONES_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: CS_REGIONES,
                    code: '05',
                    display: 'Valparaíso',
                  },
                ],
              },
            },
          ],
        },
        country: 'Chile',
        _country: {
          extension: [
            {
              url: PAISES_URL,
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'urn:iso:std:iso:3166',
                    code: 'CL',
                    display: 'Chile',
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  };

  console.log('Recurso - Paciente de Valparaíso:');
  console.log('  - line: Av. Brasil 1850, Depto 203');
  console.log('  - city (Comuna): Valparaíso (código 05101)');
  console.log('  - district (Provincia): Valparaíso (código 051)');
  console.log('  - state (Región): Valparaíso (código 05)');
  console.log('  - country (País): Chile (CL)\n');
  console.log(JSON.stringify(pacienteValparaiso, null, 2));
  console.log('\nValidando...\n');

  const resultado10 = await validator.validate(pacienteValparaiso);
  imprimirResultado(resultado10);

  // ═══════════════════════════════════════════════════════════════
  // RESUMEN: Estructura de dirección CL Core
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('REFERENCIA: Estructura de Dirección CL Core');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('La dirección CL Core usa el tipo de dato cl-address con la siguiente estructura:\n');
  console.log('  Campo     | Uso                  | Extensión requerida');
  console.log('  ----------|----------------------|----------------------');
  console.log('  use       | home/work/temp/old   | -');
  console.log('  line      | Dirección completa   | -');
  console.log('  city      | Comuna               | ComunasCl (1..1)');
  console.log('  district  | Provincia            | ProvinciasCl (1..1)');
  console.log('  state     | Región               | RegionesCl (1..1)');
  console.log('  country   | País                 | CodigoPaises (1..1)');
  console.log();
  console.log('Los códigos de comunas, provincias y regiones siguen el estándar');
  console.log('del Servicio Electoral de Chile (SERVEL).\n');

  // ═══════════════════════════════════════════════════════════════
  // RESUMEN: Códigos de IdentidadDeGenero disponibles en CL Core
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('REFERENCIA: Códigos de IdentidadDeGenero en CL Core');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('CodeSystem: https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSIdentidaddeGenero\n');
  console.log('  Código | Display');
  console.log('  -------|------------------------');
  console.log('    1    | Masculino');
  console.log('    2    | Femenina');
  console.log('    3    | Transgénero Femenina');
  console.log('    4    | Transgénero Masculino');
  console.log('    5    | No binarie');
  console.log('    6    | Otra');
  console.log('    7    | No Revelado');
  console.log();

  // ═══════════════════════════════════════════════════════════════
  // EJEMPLOS ADICIONALES: Opciones de carga de IG
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('EJEMPLOS ADICIONALES: Formas de cargar IGs');
  console.log('═══════════════════════════════════════════════════════════════\n');

  console.log('El validador soporta múltiples fuentes para cargar IGs:\n');

  console.log('1. Desde directorio local (descomprimido):');
  console.log('   await validator.loadIG("./path/to/package");');
  console.log('   await validator.loadIG("./ig-test/package");\n');

  console.log('2. Desde archivo .tgz (npm package):');
  console.log('   await validator.loadIG("./hl7.fhir.cl.clcore-1.8.5.tgz");\n');

  console.log('3. Desde URL HTTP/HTTPS directa:');
  console.log('   await validator.loadIG("https://packages.fhir.org/hl7.fhir.cl.clcore/1.8.5");\n');

  console.log('4. Desde registro FHIR (packages.fhir.org):');
  console.log('   await validator.loadIG("hl7.fhir.cl.clcore@1.8.5");  // Versión específica');
  console.log('   await validator.loadIG("hl7.fhir.cl.clcore#1.8.5");  // Formato alternativo');
  console.log('   await validator.loadIG("hl7.fhir.cl.clcore");        // Última versión\n');

  console.log('5. Con opciones avanzadas:');
  console.log('   await validator.loadIG("hl7.fhir.cl.clcore@1.8.5", {');
  console.log('     httpTimeout: 60000,       // Timeout de 60 segundos');
  console.log('     cachePackages: true,      // Cachear paquetes descargados');
  console.log('     cacheDir: "~/.fhir/packages", // Directorio de cache');
  console.log('     registryUrl: "https://packages.fhir.org", // URL del registro');
  console.log('   });\n');

  console.log('6. Consultar versiones disponibles:');
  console.log('   const versions = await validator.listPackageVersions("hl7.fhir.cl.clcore");');
  console.log('   const latest = await validator.getLatestPackageVersion("hl7.fhir.cl.clcore");\n');

  // ═══════════════════════════════════════════════════════════════
  // CASO 10: Inmunización CL Core - Vacunación COVID-19
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 10: Inmunización CL Core - Vacunación COVID-19');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Profile URL
  const IMMUNIZATION_CL_PROFILE = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ImmunizationCL';

  // CodeSystem URLs para Immunization
  const CS_NOMBRE_CAMPANA = 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSNombreCampana';
  const CS_CODIGO_VACUNAS = 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSCodigoVacunas';
  const CS_COD_SSALUD = 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSCodSSalud';

  // Extension URLs para Immunization
  const EXT_NOMBRE_CAMPANA = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/NombreCampana';
  const EXT_TIPOS_VACUNA_RNI = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI';
  const EXT_SERVICIO_SALUD = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud';

  const inmunizacionCovid = {
    resourceType: 'Immunization',
    meta: {
      profile: [IMMUNIZATION_CL_PROFILE],
    },
    // Extension obligatoria: Nombre de la campaña
    extension: [
      {
        url: EXT_NOMBRE_CAMPANA,
        valueCoding: {
          system: CS_NOMBRE_CAMPANA,
          code: 'campanSARSCov_2_Pfizer',
          display: 'Campaña SARS-CoV-2 (Pfizer)',
        },
      },
    ],
    // Identificador de la vacunación
    identifier: [
      {
        system: 'http://minsal.cl/rni/vacunacion',
        value: 'VAC-2024-001234',
      },
    ],
    // Estado de la inmunización
    status: 'completed',
    // Código de la vacuna con extensión TiposVacunaRNI
    vaccineCode: {
      extension: [
        {
          url: EXT_TIPOS_VACUNA_RNI,
          valueCoding: {
            system: CS_CODIGO_VACUNAS,
            code: 'pfizer',
            display: 'Pfizer',
          },
        },
      ],
      coding: [
        {
          system: 'http://hl7.org/fhir/sid/cvx',
          code: '208',
          display: 'SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 30 mcg/0.3mL dose',
        },
      ],
      text: 'Vacuna COVID-19 Pfizer-BioNTech',
    },
    // Paciente (referencia a CorePacienteCl)
    patient: {
      reference: 'Patient/ejemplo-paciente-cl',
      display: 'María José González Muñoz',
    },
    // Fecha de ocurrencia
    occurrenceDateTime: '2024-03-15T10:30:00-03:00',
    // Fecha de registro
    recorded: '2024-03-15',
    // Ubicación con extensión ServicioSalud
    location: {
      extension: [
        {
          url: EXT_SERVICIO_SALUD,
          valueCoding: {
            system: CS_COD_SSALUD,
            code: 'SSMSO',
            display: 'Servicio de Salud Metropolitano Sur Oriente',
          },
        },
      ],
      reference: 'Location/cesfam-la-florida',
      display: 'CESFAM La Florida',
    },
    // Número de lote
    lotNumber: 'FK1234',
    // Fecha de expiración
    expirationDate: '2024-12-31',
    // Profesional que administró la vacuna
    performer: [
      {
        actor: {
          reference: 'Practitioner/enfermera-ejemplo',
          display: 'Carmen López Soto',
        },
      },
    ],
    // Protocolo aplicado
    protocolApplied: [
      {
        doseNumberString: '2da dosis',
      },
    ],
  };

  console.log('Recurso - Inmunización COVID-19 CL Core:');
  console.log('  - Campaña: SARS-CoV-2 (Pfizer)');
  console.log('  - Vacuna: COVID-19 Pfizer-BioNTech');
  console.log('  - Estado: completed');
  console.log('  - Fecha: 2024-03-15');
  console.log('  - Lote: FK1234');
  console.log('  - Dosis: 2da dosis');
  console.log('  - Servicio de Salud: Metropolitano Sur Oriente\n');
  console.log(JSON.stringify(inmunizacionCovid, null, 2));
  console.log('\nValidando...\n');

  const resultadoInmunizacion = await validator.validate(inmunizacionCovid, { includeWarnings: true });
  imprimirResultado(resultadoInmunizacion);

  // ═══════════════════════════════════════════════════════════════
  // CASO 11: Inmunización NO realizada (con razón)
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 11: Inmunización NO realizada (con razón)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const EXT_RAZON_NO_INMUNIZAR = 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/RazonNOrealizarseInm';

  const inmunizacionNoRealizada = {
    resourceType: 'Immunization',
    meta: {
      profile: [IMMUNIZATION_CL_PROFILE],
    },
    extension: [
      {
        url: EXT_NOMBRE_CAMPANA,
        valueCoding: {
          system: CS_NOMBRE_CAMPANA,
          code: 'campanSARSCov_2_Pfizer',
          display: 'Campaña SARS-CoV-2 (Pfizer)',
        },
      },
    ],
    status: 'not-done',
    // Razón por la que no se realizó (con extensión)
    statusReason: {
      extension: [
        {
          url: EXT_RAZON_NO_INMUNIZAR,
          valueCode: 'solicitudPaci',
        },
      ],
      text: 'Paciente rechazó la vacunación',
    },
    vaccineCode: {
      extension: [
        {
          url: EXT_TIPOS_VACUNA_RNI,
          valueCoding: {
            system: CS_CODIGO_VACUNAS,
            code: 'pfizer',
            display: 'Pfizer',
          },
        },
      ],
      text: 'Vacuna COVID-19 Pfizer-BioNTech',
    },
    patient: {
      reference: 'Patient/ejemplo-paciente-cl',
    },
    occurrenceDateTime: '2024-03-15T10:30:00-03:00',
    location: {
      extension: [
        {
          url: EXT_SERVICIO_SALUD,
          valueCoding: {
            system: CS_COD_SSALUD,
            code: 'SSA',
            display: 'Servicio de Salud Arica',
          },
        },
      ],
      display: 'Hospital de Arica',
    },
    expirationDate: '2024-12-31',
    performer: [
      {
        actor: {
          display: 'Personal de Vacunatorio',
        },
      },
    ],
    // Protocolo aplicado (requerido en CL Core)
    protocolApplied: [
      {
        doseNumberString: 'No aplicada',
      },
    ],
  };

  console.log('Recurso - Inmunización NO realizada:');
  console.log('  - Estado: not-done');
  console.log('  - Razón: Paciente rechazó la vacunación');
  console.log('  - Servicio de Salud: Arica\n');
  console.log(JSON.stringify(inmunizacionNoRealizada, null, 2));
  console.log('\nValidando...\n');

  const resultado11 = await validator.validate(inmunizacionNoRealizada, { includeWarnings: true });
  imprimirResultado(resultado11);

  // ═══════════════════════════════════════════════════════════════
  // CASO 12: Inmunización - Ejemplo oficial de la guía (Hepatitis A)
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('CASO 12: Inmunización - Ejemplo oficial de la guía (Hepatitis A)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Este es el ejemplo oficial de la guía CL Core
  // Basado en: examples/ig-test/package/example/Immunization-ImmunizationCL.json
  const inmunizacionOficial = {
    resourceType: 'Immunization',
    id: 'ImmunizationCL',
    meta: {
      profile: [IMMUNIZATION_CL_PROFILE],
    },
    // Extension obligatoria: Nombre de la campaña (min: 1)
    extension: [
      {
        url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/NombreCampana',
        valueCoding: {
          system: 'https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSNombreCampana',
          code: 'hepatiA',
          display: 'Hepatitis A',
        },
      },
    ],
    identifier: [
      {
        system: 'http://sgi.gob.cl/identifier/inmunization/rni/',
        value: '136588279',
      },
    ],
    status: 'completed',
    // statusReason con extensión RazonNOrealizarseInm (requerida cuando status es not-done)
    statusReason: {
      extension: [
        {
          url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/RazonNOrealizarseInm',
          valueCode: 'solicitudPaci',
        },
      ],
    },
    // vaccineCode con extensión TiposVacunaRNI (min: 1)
    vaccineCode: {
      extension: [
        {
          url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/TiposVacunaRNI',
          valueCode: 'hep_A',
        },
      ],
    },
    patient: {
      reference: 'Patient/11',
    },
    // occurrence[x] - Usando occurrenceDateTime (slice requerido en el perfil)
    occurrenceDateTime: '2022-04-07T00:00:00-04:00',
    recorded: '2021-06-24T00:00:00-04:00',
    // location con extensión ServicioSalud (min: 1)
    location: {
      extension: [
        {
          url: 'https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/ServicioSalud',
          valueCoding: {
            system: 'https://minsal.cl/fhir/HD/CodeSystem/CSCodSSalud',
            code: 'SSAN',
            display: 'Servicio de Salud Antofagasta',
          },
        },
      ],
      reference: 'Location/3333458',
    },
    lotNumber: 'T3E881V',
    expirationDate: '2022-03-31',
    performer: [
      {
        actor: {
          reference: 'Organization/f003',
        },
      },
    ],
    // protocolApplied con doseNumberString (slice requerido en el perfil)
    protocolApplied: [
      {
        doseNumberString: '1º dosis',
      },
    ],
  };

  console.log('Recurso - Ejemplo oficial Immunization-ImmunizationCL:');
  console.log('  Este ejemplo replica el recurso oficial de la guía CL Core');
  console.log('  - Campaña: Hepatitis A');
  console.log('  - Tipo vacuna: hep_A');
  console.log('  - Servicio de Salud: Antofagasta (SSAN)');
  console.log('  - Lote: T3E881V');
  console.log('  - Dosis: 1º dosis\n');
  console.log('Características importantes validadas:');
  console.log('  ✓ Extension slicing por URL (discriminator type=value, path=url)');
  console.log('  ✓ Extension obligatoria NombreCampana (min: 1)');
  console.log('  ✓ Extensions anidadas en statusReason, vaccineCode, location');
  console.log('  ✓ Choice type slicing: occurrence[x]:occurrenceDateTime');
  console.log('  ✓ Choice type slicing: doseNumber[x]:doseNumberString\n');
  console.log(JSON.stringify(inmunizacionOficial, null, 2));
  console.log('\nValidando...\n');

  const resultado12 = await validator.validate(inmunizacionOficial, { includeWarnings: true });
  imprimirResultado(resultado12);

  // ═══════════════════════════════════════════════════════════════
  // REFERENCIA: Estructura de ImmunizationCL
  // ═══════════════════════════════════════════════════════════════
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('REFERENCIA: Estructura de ImmunizationCL');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('El perfil ImmunizationCL tiene las siguientes extensiones obligatorias:\n');
  console.log('  Extension             | Elemento          | Card  | Descripción');
  console.log('  ----------------------|-------------------|-------|---------------------------');
  console.log('  NombreCampana         | extension         | 1..1  | Campaña de vacunación RNI');
  console.log('  TiposVacunaRNI        | vaccineCode.ext   | 1..1  | Código vacuna del RNI');
  console.log('  ServicioSalud         | location.ext      | 1..1  | Servicio de Salud MINSAL');
  console.log('  RazonNOrealizarseInm  | statusReason.ext  | 1..1  | Razón de no vacunación');
  console.log();
  console.log('Slicing en choice types:');
  console.log('  - occurrence[x]:occurrenceDateTime (type discriminator) - 1..1');
  console.log('  - protocolApplied.doseNumber[x]:doseNumberString (type discriminator) - 1..1\n');

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
    for (const err of errors) {
      console.log(`   - [${err.code}] ${err.diagnostics}`);
      if (err.expression?.length) {
        console.log(`     Path: ${err.expression.join(', ')}`);
      }
    }
  }

  if (warnings.length > 0) {
    console.log('\n   Warnings:');
    for (const warn of warnings.slice(0, 5)) {
      console.log(`   - [${warn.code}] ${warn.diagnostics}`);
      if (warn.expression?.length) {
        console.log(`     Path: ${warn.expression.join(', ')}`);
      }
    }
    if (warnings.length > 5) {
      console.log(`   ... y ${warnings.length - 5} warnings más`);
    }
  }
}

main().catch(console.error);
