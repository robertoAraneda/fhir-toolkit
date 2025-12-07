import type { IBackboneElement } from '../../base/index.js';
import type { IImplementationGuideDefinitionGrouping } from './IImplementationGuideDefinitionGrouping.js';
import type { IImplementationGuideDefinitionPage } from './IImplementationGuideDefinitionPage.js';
import type { IImplementationGuideDefinitionParameter } from './IImplementationGuideDefinitionParameter.js';
import type { IImplementationGuideDefinitionResource } from './IImplementationGuideDefinitionResource.js';
import type { IImplementationGuideDefinitionTemplate } from './IImplementationGuideDefinitionTemplate.js';

/**
 * ImplementationGuideDefinition Interface
 * 
 * Information needed to build the IG
 * 
 *
 * @see https://hl7.org/fhir/R4/implementationguidedefinition.html
 */
export interface IImplementationGuideDefinition extends IBackboneElement {
  /**
   * Grouping used to present related resources in the IG
   */
  grouping?: IImplementationGuideDefinitionGrouping[];

  /**
   * Resource in the implementation guide
   */
  resource: IImplementationGuideDefinitionResource[];

  /**
   * Page/Section in the Guide
   */
  page?: IImplementationGuideDefinitionPage;

  /**
   * Defines how IG is built by tools
   */
  parameter?: IImplementationGuideDefinitionParameter[];

  /**
   * A template for building resources
   */
  template?: IImplementationGuideDefinitionTemplate[];

}
