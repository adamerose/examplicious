import { merge, namespaced } from "overmind/config";
import { createStateHook, createActionsHook } from "overmind-react";
import { IContext } from "overmind";
import notes from "./notes";
import ui from "./ui";
import * as effects from "./effects";

// Empty state and actions for root store. They're all namespaced
const state = {};
const actions = {};

export const config = merge(
  {
    effects,
    state,
    actions,
  },
  namespaced({
    notes: notes,
    ui,
  })
);

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();

export type Context = IContext<{
  state: typeof config.state;
  actions: typeof config.actions;
  effects: typeof config.effects;
}>;
