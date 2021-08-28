import { derived } from "overmind";

export type Note = {
  id: string;
  title: string;
  text: string;
  pinned: boolean;
  selected: boolean;
};

type State = {
  notes: {
    [id: string]: Note;
  };
  allNotes: Note[];
  pinnedNotes: Note[];
  unpinnedNotes: Note[];
  noteBeingEdited: Note["id"] | null;
};

export const state: State = {
  notes: {},
  allNotes: derived((state: State) => {
    return Object.values(state.notes);
  }),
  pinnedNotes: derived((state: State) => {
    return Object.values(state.notes).filter((note) => note.pinned);
  }),
  unpinnedNotes: derived((state: State) => {
    return Object.values(state.notes).filter((note) => !note.pinned);
  }),
  noteBeingEdited: null,
};
