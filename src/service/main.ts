import { invoke, event } from '@tauri-apps/api';

import { Response, ServiceRequestFunction } from '../types/index';

export const test: ServiceRequestFunction = (command: string, params: any) => {
  return invoke('hello_command', { req: { data: 'frontend', action: 'test' } })
}

