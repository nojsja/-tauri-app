export interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
};

export type Callback<P, T> = (payload: P) => T;

export interface State {
  data: any[]
  string?: any
};

export interface EffectParams {
  payload: any,
  callback?: (rsp: Response) => {}
};

export interface Response {
  code: number,
  data: unknown,
};

export interface EffectProvider {
  put: Callback<any, any>,
  call: (fn: ServiceRequestFunction) => Promise<Response>,
}

export interface Response {
  code: number,
  data: unknown,
};

export type ServiceRequestFunction = (command: string, params: any) => Promise<Response>;