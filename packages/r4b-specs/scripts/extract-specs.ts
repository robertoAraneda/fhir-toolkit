/**
 * Extract FHIR R4B specs from bundle files
 *
 * This script extracts individual StructureDefinition, ValueSet, and CodeSystem
 * resources from the FHIR R4B specification bundles.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CODEGEN_SPECS = join(__dirname, '../../codegen/specs/r4b');
const OUTPUT_DIR = join(__dirname, '../specs');

interface FhirResource {
  resourceType: string;
  id?: string;
  url?: string;
  name?: string;
}

interface FhirBundle {
  resourceType: 'Bundle';
  entry?: Array<{ resource: FhirResource }>;
}

function ensureDir(dir: string): void {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function getFileName(resource: FhirResource): string {
  // Use id, or extract from url, or use name
  if (resource.id) return resource.id;
  if (resource.url) {
    const parts = resource.url.split('/');
    return parts[parts.length - 1];
  }
  if (resource.name) return resource.name;
  return 'unknown';
}

function extractFromBundle(bundlePath: string, outputSubdir: string): number {
  console.log(`\nExtracting from ${bundlePath}...`);

  if (!existsSync(bundlePath)) {
    console.log(`  File not found: ${bundlePath}`);
    return 0;
  }

  const content = readFileSync(bundlePath, 'utf-8');
  const bundle: FhirBundle = JSON.parse(content);

  if (!bundle.entry) {
    console.log(`  No entries found`);
    return 0;
  }

  const outputDir = join(OUTPUT_DIR, outputSubdir);
  ensureDir(outputDir);

  let count = 0;
  for (const entry of bundle.entry) {
    if (!entry.resource) continue;

    const resource = entry.resource;
    const fileName = `${getFileName(resource)}.json`;
    const filePath = join(outputDir, fileName);

    writeFileSync(filePath, JSON.stringify(resource, null, 2));
    count++;
  }

  console.log(`  Extracted ${count} resources to ${outputSubdir}/`);
  return count;
}

function extractValueSetsFromFile(filePath: string): number {
  console.log(`\nExtracting ValueSets from ${filePath}...`);

  if (!existsSync(filePath)) {
    console.log(`  File not found: ${filePath}`);
    return 0;
  }

  const content = readFileSync(filePath, 'utf-8');
  const bundle: FhirBundle = JSON.parse(content);

  if (!bundle.entry) {
    console.log(`  No entries found`);
    return 0;
  }

  const vsDir = join(OUTPUT_DIR, 'ValueSet');
  const csDir = join(OUTPUT_DIR, 'CodeSystem');
  ensureDir(vsDir);
  ensureDir(csDir);

  let vsCount = 0;
  let csCount = 0;

  for (const entry of bundle.entry) {
    if (!entry.resource) continue;

    const resource = entry.resource;
    const fileName = `${getFileName(resource)}.json`;

    if (resource.resourceType === 'ValueSet') {
      writeFileSync(join(vsDir, fileName), JSON.stringify(resource, null, 2));
      vsCount++;
    } else if (resource.resourceType === 'CodeSystem') {
      writeFileSync(join(csDir, fileName), JSON.stringify(resource, null, 2));
      csCount++;
    }
  }

  console.log(`  Extracted ${vsCount} ValueSets and ${csCount} CodeSystems`);
  return vsCount + csCount;
}

async function main(): Promise<void> {
  console.log('🔧 Extracting FHIR R4B Specifications\n');
  console.log(`Source: ${CODEGEN_SPECS}`);
  console.log(`Output: ${OUTPUT_DIR}`);

  ensureDir(OUTPUT_DIR);

  let total = 0;

  // Extract StructureDefinitions from profiles-types.json and profiles-resources.json
  total += extractFromBundle(
    join(CODEGEN_SPECS, 'profiles-types.json'),
    'StructureDefinition'
  );

  total += extractFromBundle(
    join(CODEGEN_SPECS, 'profiles-resources.json'),
    'StructureDefinition'
  );

  total += extractFromBundle(
    join(CODEGEN_SPECS, 'profiles-others.json'),
    'StructureDefinition'
  );

  total += extractFromBundle(
    join(CODEGEN_SPECS, 'extension-definitions.json'),
    'StructureDefinition'
  );

  // Extract ValueSets and CodeSystems
  total += extractValueSetsFromFile(join(CODEGEN_SPECS, 'valuesets.json'));

  console.log(`\n✅ Extracted ${total} total resources`);
}

main().catch(console.error);
