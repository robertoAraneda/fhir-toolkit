# @fhir-toolkit/cli

Command-line interface for FHIR toolkit operations.

## Installation

```bash
npm install -g @fhir-toolkit/cli
```

## Usage

```bash
# Validate a FHIR resource
fhir-toolkit validate --version R4 patient.json

# Validate with a specific profile
fhir-toolkit validate --version R4 --profile http://example.org/Profile patient.json

# Validate all JSON files in a directory
fhir-toolkit validate --version R4 ./resources/*.json
```

## Commands

### validate

Validate FHIR resources against the specification or a profile.

```bash
fhir-toolkit validate [options] <files...>

Options:
  --version, -v   FHIR version (R4, R4B, R5)
  --profile, -p   Profile URL to validate against
  --output, -o    Output format (json, text)
```

## Related Packages

- [@fhir-toolkit/yafv](https://www.npmjs.com/package/@fhir-toolkit/yafv) - FHIR validator (used internally)

## License

MIT
