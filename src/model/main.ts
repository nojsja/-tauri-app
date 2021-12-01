import { test } from '../service/main';
import { EffectParams, EffectProvider, State, Response } from '../types/index';

export const MainModel = {
  namespace: 'main',

  /* -------------- state -------------- */
  state: {
    data: []
  },

  /* -------------- effects (actions) -------------- */
  effects: {
    // 更新临时报价单信息
    *test(params: EffectParams, privider: EffectProvider) {
      const rsp: Response = yield privider.call(test);
      params.callback?.(rsp);
    },
  },
    
  /* -------------- reducers -------------- */
  reducers: {
    save(state: State, params: EffectParams) {
      return {
        ...state,
        ...params.payload,
      };
    },
    assign: (state: State, params: EffectParams) => {
      return {
        ...state,
        ...Object.keys(params.payload).reduce((pre: any, key: string) => {
          if (key in state) {
            pre[key] = {
              ...((state as any)[key] || {}),
              ...(params.payload[key] || {}),
            };
          }
          return pre;
        }, {}),
      };
    },
  },
  subscriptions: {},
};
