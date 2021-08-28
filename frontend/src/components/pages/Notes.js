import React from "react";
import MasonryGrid from "../common/MasonryGrid";
import Dummy from "dummyjs";
import styled from "styled-components/macro";
import { useAppState } from "../../store";

const Notes = () => {
  const state = useAppState();

  const items = state.notes.allNotes.map((note, i) => (
    <StyledNote key={i}>
      <h3>{note.title}</h3>
      <div>{note.text}</div>
    </StyledNote>
  ));

  return (
    <StyledNotes>
      <MasonryGrid>{items}</MasonryGrid>
    </StyledNotes>
  );
};

const StyledNotes = styled.div`
  padding: 30px;
`;

const StyledNote = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.background};
  max-width: 250px;
  min-width: 250px;
  overflow-y: hidden;
  padding: 15px;
  margin: 15px;

  &.muuri-item-dragging {
    z-index: 1;
  }
`;

export default Notes;
