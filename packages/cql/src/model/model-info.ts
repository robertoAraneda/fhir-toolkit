/**
 * ModelInfo provides type metadata about the FHIR model for CQL evaluation.
 */
export interface ModelInfo {
  typeInfo(typeName: string): TypeInfo | null;
  elementType(path: string): string | null;
  isChoiceType(path: string): boolean;
  contextType(contextName: string): string;
  primaryCodePath(resourceType: string): string;
  version(): string;
}

/** Describes a FHIR/CQL type. */
export interface TypeInfo {
  name: string;
  namespace: string;
  baseName: string;
  elements: ElementInfo[];
  primaryKey: string;
}

/** Describes a single element within a type. */
export interface ElementInfo {
  name: string;
  type: string;
  isList: boolean;
  isChoice: boolean;
  choiceTypes: string[];
}

/**
 * Simple in-memory implementation of ModelInfo populated from
 * StructureDefinitions or hardcoded data.
 */
export class StaticModelInfo implements ModelInfo {
  private readonly _version: string;
  private readonly types: Map<string, TypeInfo>;
  private readonly elementTypes: Map<string, string>;
  private readonly choiceTypes: Set<string>;
  private readonly contextTypes: Map<string, string>;
  private readonly codePaths: Map<string, string>;

  constructor(version: string) {
    this._version = version;
    this.types = new Map();
    this.elementTypes = new Map();
    this.choiceTypes = new Set();
    this.contextTypes = new Map();
    this.codePaths = new Map();
  }

  typeInfo(typeName: string): TypeInfo | null {
    return this.types.get(typeName) ?? null;
  }

  elementType(path: string): string | null {
    return this.elementTypes.get(path) ?? null;
  }

  isChoiceType(path: string): boolean {
    return this.choiceTypes.has(path);
  }

  contextType(contextName: string): string {
    return this.contextTypes.get(contextName) ?? contextName;
  }

  primaryCodePath(resourceType: string): string {
    return this.codePaths.get(resourceType) ?? 'code';
  }

  version(): string {
    return this._version;
  }

  /** Register a type and index its elements. */
  addType(ti: TypeInfo): void {
    this.types.set(ti.name, ti);
    for (const elem of ti.elements) {
      const path = `${ti.name}.${elem.name}`;
      this.elementTypes.set(path, elem.type);
      if (elem.isChoice) {
        this.choiceTypes.add(path);
      }
    }
    if (ti.primaryKey) {
      this.codePaths.set(ti.name, ti.primaryKey);
    }
  }

  /** Register a context mapping. */
  addContext(name: string, resourceType: string): void {
    this.contextTypes.set(name, resourceType);
  }

  /** Set a primary code path for a resource type. */
  setCodePath(resourceType: string, path: string): void {
    this.codePaths.set(resourceType, path);
  }
}
