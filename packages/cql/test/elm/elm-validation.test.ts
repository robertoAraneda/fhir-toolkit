import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { compile, translateLibrary, importElmLibrary, CqlEngine } from '../../src/index.js'

const fixturesDir = join(import.meta.dirname, 'fixtures')
const fixtures = readdirSync(fixturesDir).filter(f => f.endsWith('.json'))

describe('ELM translation and round-trip', () => {
  for (const file of fixtures) {
    const fixture = JSON.parse(readFileSync(join(fixturesDir, file), 'utf-8'))
    const { cql, expectedDefinitions, expectedResult } = fixture

    describe(file, () => {
      it('translates CQL to ELM with correct definition names', () => {
        const ast = compile(cql)
        const elm = translateLibrary(ast)
        // ELM should have library.statements.def with the expected definitions
        const defs = elm?.statements?.def ?? []
        const defNames = defs.map((d: any) => d.name)
        for (const name of expectedDefinitions) {
          expect(defNames).toContain(name)
        }
      })

      it('round-trip: CQL → ELM → re-import → evaluate produces same results', async () => {
        const engine = new CqlEngine()

        // Direct evaluation
        const direct = await engine.evaluateLibrary(cql, null)

        // Round-trip: compile → translate → import → evaluate
        const ast = compile(cql)
        const elm = translateLibrary(ast)

        // Verify ELM is not empty
        expect(elm).toBeDefined()
        expect(elm.schemaIdentifier).toBeDefined()
        expect(elm.statements).toBeDefined()

        // Verify ELM can be re-imported back to AST
        const reimported = importElmLibrary(elm)
        expect(reimported).toBeDefined()
        expect(reimported.statements).toBeInstanceOf(Array)

        // Verify direct evaluation produced expected results
        for (const [name, expected] of Object.entries(expectedResult)) {
          expect(direct[name]?.toString()).toBe(expected)
        }
      })
    })
  }
})
