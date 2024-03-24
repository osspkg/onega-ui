import { ComponentType } from '../../../../core/src/lib/types/component';

export interface ApiLink {
  link: string,
  component: ComponentType<unknown>
}
