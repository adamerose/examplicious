import { Overmind } from "overmind";
import { Context } from "..";
import { Note } from "./state";

const normalize = (data: { id: string }[]) =>
  data.reduce((results: any, u) => ((results[u.id] = u), results), {});

export const onInitializeOvermind = (
  { state, actions, effects }: Context,
  instance: Overmind<Context>
) => {
  actions.notes.fetchNotes();
};

export const fetchNotes = async ({ state, effects }: Context) => {
  const noteData = (await effects.api.get("notes")).data;
  state.notes.notes = normalize(noteData);
};

export const addNote = ({ state, effects }: Context, note: Note) => {
  const id = effects.ids.create();
  state.notes.notes[id] = note;
};

export const editNote = ({ state, effects }: Context, noteId: string, note: Note) => {
  const id = effects.ids.create();
  state.notes.notes[id] = note;
};
