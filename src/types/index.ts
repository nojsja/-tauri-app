export interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  routes?: RouteConfig[];
};

export interface ReduxAction {
  type: string,
  value: any
}

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

export const encryptMethods = [
  "aes-128-gcm",
  "aes-192-gcm",
  "aes-256-gcm",
  "rc4-md5",
  "aes-128-cfb",
  "aes-192-cfb",
  "aes-256-cfb",
  "aes-128-ctr",
  "aes-192-ctr",
  "aes-256-ctr",
  "bf-cfb",
  "camellia-128-cfb",
  "camellia-192-cfb",
  "camellia-256-cfb",
  "chacha20-ietf-poly1305",
  "xchacha20-ietf-poly1305",
  "salsa20",
  "chacha20",
  "chacha20-ietf"
] as const;

export type Encryption = typeof encryptMethods[number];

export const plugins = ["v2ray-plugin", "kcptun"] as const;

export type Plugin = typeof plugins[number];

export type ACL = "bypass";

export type closeOptions = 'qrcode' | 'url' | 'manual' | 'share' | '';

export type notificationOptions = {
  title?: string, body: string, subtitle?: string, urgency?: "normal" | "critical" | "low" | undefined
}

export interface Config {
  id: string;
  remark?: string;
  serverHost: string;
  serverPort: number;
  password: string;
  encryptMethod: Encryption;
  timeout?: number;
  acl?: ACL;
  fastOpen?: boolean;
  noDelay?: boolean;
  udp?: boolean;
  maxOpenFile?: number;
  plugin?: Plugin;
  pluginOpts?: string;
  type?: string;
}

export type Mode = "PAC" | "Global" | "Manual";

export interface Settings {
  selectedServer?: string | null;
  mode: Mode;
  verbose: boolean;
  darkMode: boolean;
  localPort: number;
  pacPort: number;
  httpProxy: {
    enable: boolean,
    port: number
  },
  httpsProxy: {
    enable: boolean,
    port: number
  },
  gfwListUrl: string;
  autoLaunch: boolean;
  lang: string;
}

export interface Status {
  connected: boolean;
  loading: boolean;
  delay: number | null | '';
}

export interface RootState {
  count: number,
  config: Config[];
  status: Status;
  settings: Settings;
}
